from django.contrib.auth import login, logout
from django.shortcuts import render
from django.http import response
from .serializers import *
import json
from .permissions import *
from rest_framework import viewsets,generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticatedOrReadOnly



class Signup(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserS
    def post(self , request):
        email = request.data.get("email")
        username = request.data.get("username")
        password = request.data.get("password")
        user = User.objects.create_user(username=username,password=password,email=email)
        date = {"username":user.username,"email":user.email,"password":password}
        return Response(json.dumps(date))


class CardView(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardS
    permission_classes = (IsAdminOrReadOnly,)
   


class BookView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookS 
    permission_classes = (IsAdminOrReadOnly, )   
    
   

class CardDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardS
    permission_classes = (IsAdminOrReadOnly, )



class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookS
    permission_classes = (IsAdminOrReadOnly, )
