from .serializers import *
from rest_framework.pagination import PageNumberPagination
import json
from .permissions import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User


class CardUndefinde(APIView):
    def get(self, request, *args, **kwargs):
        return Response({"Error":"Card undefined"})

class Signup(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserS
    def post(self , request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = User.objects.create_user(username=username,password=password)
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
