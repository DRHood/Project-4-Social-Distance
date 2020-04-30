from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('groups', views.GroupView)
router.register('events', views.EventView)

urlpatterns = [
    path('', include(router.urls))
]