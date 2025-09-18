#!/usr/bin/env bash
# Terminal 1 (Vite)
( cd frontend/react-vite && npm run dev )
# Terminal 2 (Node API)
( cd backend/node-express && npm run dev )
# Terminal 3 (Django API)
( cd backend/django-drf && source venv/bin/activate && python manage.py runserver 8000 )
