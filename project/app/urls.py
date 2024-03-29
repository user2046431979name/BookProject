from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
     # path('auth/', include('djoser.urls')),
     # re_path(r'auth/', include('djoser.urls.authtoken')),
     
     path("auth/" , include('rest_framework.urls')),
     path("auth/signup", Signup.as_view()),

     path("card",CardView.as_view()),
     path("cardDetail/<int:pk>",CardDetail.as_view()),
     path("book",BookView.as_view()),
     path("bookDetail/<int:pk>",BookDetail.as_view()),

     

]