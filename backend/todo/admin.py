from django.contrib import admin

# Register your models here.
from .models import ToDo


admin.site.register(ToDo)