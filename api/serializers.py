from rest_framework import serializers
from .models import Task
from django.utils import timezone

class TaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Task
        fields= '__all__'
        
    def validate_dueDate(self, value):
        if value and value < timezone.now().date():
            raise serializers.ValidationError("La fecha de vencimiento no puede ser anterior a hoy.")
        return value