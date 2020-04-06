from rest_framework import serializers
from .models import User, Group, Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'organizer','event_name','event_description', 'event_img_url', 'event_date', 'event_time', 'group_invite', 'individual_invites', 'members']

class GroupSerializer(serializers.ModelSerializer):
    event_invites = EventSerializer(many=True, read_only=True)
    class Meta:
        model = Group
        fields = ['id', 'organizer','group_name','group_description', 'public', 'members', 'event_invites']

class UserSerializer(serializers.ModelSerializer):
    my_groups = GroupSerializer(many=True, read_only=True)
    group_invites = GroupSerializer(many=True, read_only=True)
    member_groups = GroupSerializer(many=True, read_only=True)
    my_events = EventSerializer(many=True, read_only=True)
    event_invites = EventSerializer(many=True, read_only=True)
    member_events = EventSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'bio', 'photo_url', 'location', 'email', 'my_events', 'event_invites', 'member_events', 'my_groups', 'group_invites', 'member_groups']

