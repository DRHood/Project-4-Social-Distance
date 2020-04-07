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
    group_name = models.CharField(max_length=60)
    group_description = models.CharField(max_length=240)
    group_img_url = models.CharField(max_length=240)
    members = models.ManyToManyField(User, related_name='my_groups')

    class Meta:
        ordering = ['group_name']

    def __str__(self):
        return self.group_name

class Event(models.Model):
    event_name = models.CharField(max_length=60)
    event_description = models.CharField(max_length=240)
    event_date = models.DateField()
    event_time = models.TimeField()
    attending = models.ManyToManyField(User, related_name='my_events')
    
    class Meta:
        ordering = ['event_name']

    def __str__(self):
        return self.event_name
