from django.db import models

class User(models.Model):
    username = models.CharField(max_length=60)
    bio = models.CharField(max_length=480)
    photo_url = models.CharField(max_length=240)
    email = models.CharField(max_length=120)
    # password = TODO

    class Meta:
        ordering = ['username']

    def __str__(self):
        return self.username


class Group(models.Model):
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=240)
    img_url = models.CharField(max_length=240)
    members = models.ManyToManyField(User, related_name='groups')

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=60)
    info = models.CharField(max_length=240)
    date = models.DateTimeField(auto_now=False)
    attending = models.ManyToManyField(User, related_name='events')
    
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name
