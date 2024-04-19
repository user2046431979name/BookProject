from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserS(serializers.ModelSerializer):
    class Meta:
      model = User
      fields = ("email","username","password")

class ProfileS(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

class CardS(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = "__all__"


class BookS(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = "__all__"


