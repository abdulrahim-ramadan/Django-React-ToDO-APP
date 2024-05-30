from django.db import models
from django.utils import timezone

# Create your models here.

class ToDo(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=20,choices=[('DONE','DONE'),('INPROGRERSS','INPROGRERSS')])
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

