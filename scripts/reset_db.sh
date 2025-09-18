#!/usr/bin/env bash
cd backend/django-drf
source venv/bin/activate
python manage.py flush --noinput
python manage.py migrate
echo "Database reset complete."
