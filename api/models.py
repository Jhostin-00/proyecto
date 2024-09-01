from django.db import models
from django.utils import timezone

# Create your models here.

class Task(models.Model):
    name= models.CharField(max_length=15)
    description= models.CharField(max_length=30)
    dueDate= models.DateField(null= True)
    favorite= models.BooleanField(default= False, null=True)