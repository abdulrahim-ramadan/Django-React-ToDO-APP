from rest_framework import viewsets
from .serializer import ToDoSerializer
from .models import ToDo

# Create your views here.
class ToDoViewSet(viewsets.ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()