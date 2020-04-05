from django.contrib import admin
from .models import User, Group, Event

admin.site.register([User, Group, Event])
