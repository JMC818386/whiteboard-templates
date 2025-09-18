from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer

@api_view(["GET"])
def ping(request):
    return Response({"ok": True, "service": "django-drf"})

@api_view(["GET","POST"])
def notes(request):
    if request.method == "GET":
        qs = Note.objects.order_by("-created_at")[:50]
        return Response(NoteSerializer(qs, many=True).data)
    if request.method == "POST":
        ser = NoteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data, status=status.HTTP_201_CREATED)
