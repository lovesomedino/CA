from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilesViewSet
from . import views

router = DefaultRouter()
router.register('files', FilesViewSet, basename='files')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/<int:id>/grid', views.get_data_grid),
]
