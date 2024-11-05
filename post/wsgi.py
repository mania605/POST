"""
WSGI config for post project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import sys

# 프로젝트 루트 경로를 sys.path에 추가
sys.path.append(r'C:\Users\mania\Desktop\POST')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'post.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()