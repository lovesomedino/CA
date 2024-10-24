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
def get_data_grid(request, id):
    selected_file = Files.objects.get(pk=id)

    media_root = settings.MEDIA_ROOT
    file_path = media_root + '/' + str(selected_file.file)

    df = pd.read_csv(file_path)

    # columns
    columns = []
    for column in df.columns:
        columns.append({"field": column})

    # rows
    rows = df.to_dict(orient = 'records')

    return Response([columns, rows])

@api_view(['GET'])
def get_data_dropdown(request, id):
    selected_file = Files.objects.get(pk=id)

    media_root = settings.MEDIA_ROOT
    file_path = media_root + '/' + str(selected_file.file)

    file = open(file_path, 'r')
    reader = csv.reader(file)
    df = pd.DataFrame(reader)

    # column list for dropdown
    column_list = []
    column_list = df.iloc[0].tolist()

    return Response(column_list) 

@api_view(['GET'])
def get_data_chart(request, id, column):
    selected_file = Files.objects.get(pk=id)

    media_root = settings.MEDIA_ROOT
    file_path = media_root + '/' + str(selected_file.file)

    df = pd.read_csv(file_path)

    # list of selected column
    selected_column = df[str(column)].to_list()

    # labels for chart.js
    labels = list(set(selected_column))

    # counts for chart.js
    counts = []
    for label in labels:
        counts.append(selected_column.count(label))

    return Response([labels, counts])       
