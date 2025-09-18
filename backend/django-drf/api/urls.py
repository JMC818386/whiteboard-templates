from django.urls import path
from .views import ping, notes

urlpatterns = [
    path("ping/", ping),
    path("notes/", notes),
]
