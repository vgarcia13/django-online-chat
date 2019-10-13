from django.shortcuts import render
from django.utils.safestring import mark_safe

import json

__author__ = 'vgarcia13'


def index(request):
    """
    Verifica una sesión ya este activa y permite el acceso o la deniega.

    :param request: Solicitud
    :return: Redirige a la vista pertinente
    """
    return render(request, 'chat/index.html', {
        'room_name_json': mark_safe(json.dumps("main"))
    })
