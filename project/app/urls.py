from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from django.conf.urls.static import static
from .views import *


urlpatterns = [
     path("auth/" , include('rest_framework.urls')),
     path("auth/register", Signup.as_view()),

     path("cards/undefined", CardUndefinde.as_view()),
     path("cards",CardView.as_view()),
     path("cards/<int:pk>",CardDetail.as_view()),
     
     path("book",BookView.as_view()),
     path("book/<int:pk>",BookDetail.as_view()),
]
