from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserS(serializers.ModelSerializer):
    class Meta:
      model = User
      fields = ("email","username","password")



class CardS(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = "__all__"


class BookS(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = "__all__"


