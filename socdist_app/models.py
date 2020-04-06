from django.db import models

class User(models.Model):
    username = models.CharField(max_length=60)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    bio = models.CharField(max_length=480)
    photo_url = models.CharField(max_length=240)
    location = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    # password = TODO
    # events = Event relationship: many to many
    # groups = Group relationship: many to many

    class Meta:
        ordering = ['username']

    def __str__(self):
        return self.username

class Group(models.Model):
    # organizer = User relationship: many to one
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_groups')
    group_name = models.CharField(max_length=60)
    group_description = models.CharField(max_length=240)
    public = models.BooleanField(default=True)
    # individual_invites = User relationship: many to many
    individual_invites = models.ManyToManyField(User, related_name='group_invites')
    # members = User relationship: many to many
    members = models.ManyToManyField(User, related_name='member_groups')
    # events = Event relationship: one to many

    class Meta:
        ordering = ['group_name']

    def __str__(self):
        return self.group_name

class Event(models.Model):
    # organizer = User or Group relationship: many to one
    organizer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='my_events')
    event_name = models.CharField(max_length=60)
    event_description = models.CharField(max_length=240)
    event_img_url = models.CharField(max_length=240)
    event_date = models.DateField()
    event_time = models.TimeField()
    # group = Group relationship: many to one
    group_invite = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='event_invites')
    # individual_invites = User relationship: many to many
    individual_invites = models.ManyToManyField(User, related_name='event_invites')
    # members = User relatioship: many to many
    members = models.ManyToManyField(User, related_name='member_events')
    
    class Meta:
        ordering = ['event_name']

    def __str__(self):
        return self.event_name
