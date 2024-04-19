from django.db import models
from django.conf import settings




class Card(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length = 255)
    name = models.CharField(max_length = 255)
    price = models.TextField(default="")
    rating = models.IntegerField(default = 0)
    


class Book(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length = 255)
    name = models.CharField(max_length = 255)
    price = models.TextField(default="")
    rating = models.IntegerField(default = 0)


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    books = models.ManyToManyField(Card,blank=True)






