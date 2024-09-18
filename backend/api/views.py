from .models import Files
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FilesSerializer
from django.conf import settings
import csv, pandas as pd

class FilesViewSet(viewsets.ModelViewSet):
    queryset = Files.objects.all()
    serializer_class = FilesSerializer

@api_view(['GET'])
def get_data(request, id):
    selected_file = Files.objects.get(pk=id)

    media_root = settings.MEDIA_ROOT
    file_path = media_root + '/' + str(selected_file.file)

    file = open(file_path, 'r')
    reader = csv.reader(file)
    df = pd.DataFrame(reader)

    data_aoo = df.to_dict('records')

    # columns
    columns = []
    for key, name in data_aoo[0].items():
        columns.append(dict(key=key, name=name))

    # rows
    data_aoo.pop(0)
    rows = data_aoo

    return Response([columns, rows])
