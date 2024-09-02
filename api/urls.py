from django.urls import path
from .import views

urlpatterns= [
    path('create_task/', views.create_task, name='create_task'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('index/', views.index, name='index'),
    path('task_detail/', views.task_detail, name='task_detail'),
]