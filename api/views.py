from django.shortcuts import render
from .serializers import TaskSerializer
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import login, authenticate, get_user_model
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render,redirect


# Create your views here.

User = get_user_model()

#@api_view(["POST"])
def create_task(request):
    if request.method == 'GET':
        return render(request, 'create_task.html')
    
    else:
    
        #data= request.data
    
        task_data = {
            "name": request.POST.get("name"),
            "description": request.POST.get("description"),
            "dueDate": request.POST.get("dueDate"),
            #"favorite": data.get("favorite")  
        }
    
        serializer_task = TaskSerializer(data=task_data)
        if serializer_task.is_valid():
            task = serializer_task.save()
            return render(request, "index.html")
        else:
            return Response(
            serializer_task.errors, status=status.HTTP_400_BAD_REQUEST
                )
        
@api_view(["POST"])
def register(request):
    data= request.data
    
    username= data.get("username")
    password1= data.get("password1")
    password2= data.get("password2")
    email= data.get("email")
    
    if password1 != password2:
        raise ("Las contraseñas no coinciden")
    
    if User.objects.filter(username= username).exists():
        raise ("Este nombre de usuario ya existe")
    if User.objects.filter(email= email).exists():
        raise ("Este correo electronico ya esta registrado")
    else:
        user= User.objects.create(
            username= username,
            email= email,
            password= password1
        )
        login(request,user)
        return Response(
            status=status.HTTP_201_CREATED
            )


@ensure_csrf_cookie
@api_view(["POST"])
def register(request):
    data= request.data
    
    username= data.get("username")
    password= data.get("password")
    
    user= authenticate(username= username, password= password)
    
    if user is not None:
        login(request,user)
    else:
        raise ("Credenciales invalidas")
    
def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')