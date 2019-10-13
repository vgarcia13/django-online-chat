from django.urls import path, re_path

from .views import index

urlpatterns = [
    re_path(r'^(?P<room_name>[^/]+)/$', index, name='room'),
]