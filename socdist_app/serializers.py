from rest_framework import serializers
from .models import User, Group, Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'event_name', 'event_description', 'event_img_url', 'event_date', 'event_time', 'attending')

class GroupSerializer(serializers.ModelSerializer):
        class Meta:
            model = Group
            fields = ('id', 'group_name', 'group_description', 'members')

class UserSerializer(serializers.ModelSerializer):
    my_groups = GroupSerializer(many=True, read_only=True)
    my_events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'bio', 'photo_url', 'location', 'email', 'my_groups', 'my_events')

