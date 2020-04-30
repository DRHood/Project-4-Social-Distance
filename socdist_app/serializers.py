from rest_framework import serializers
from .models import User, Group, Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'info', 'date', 'time', 'attending')

class GroupSerializer(serializers.ModelSerializer):
        class Meta:
            model = Group
            fields = ('id', 'name', 'description','img_url', 'members')

class UserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True, read_only=True)
    events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'bio', 'photo_url', 'email', 'groups', 'events')
