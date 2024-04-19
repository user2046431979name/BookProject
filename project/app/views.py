from .serializers import *
from rest_framework.pagination import PageNumberPagination
import json
from .permissions import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout

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
        userProfile = Profile.objects.create(user=user)
        date = {"username":user.username,"email":user.email,"password":password}
        return Response(json.dumps(date))


class Busket(APIView):
    def get(self,request):
        if request.user.is_authenticated:
            profile = Profile.objects.get(user = request.user)
            cards = profile.books.all()
            date = CardS(cards,many=True)
            return Response(date.data)
    def post(self,request):
        if request.user.is_authenticated:
            profile = Profile.objects.get(user = request.user)
            card_id = request.data.get('id')
            if card_id:
                try:
                    card = Card.objects.get(id=card_id)
                    profile.books.add(card)
                    profile.save()
                    return Response({'success':1})
                except:
                    return Response({'success':-1})
            else:
                return Response({'success':False})
 


@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

@api_view(['POST'])
def user_logout(request):
    if request.method == 'POST':
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

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



