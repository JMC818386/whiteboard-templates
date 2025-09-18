#!/usr/bin/env bash
set -e
pushd frontend/react-cra && npm i && popd
pushd frontend/react-vite && npm i && popd
pushd backend/node-express && npm i && popd
python3 -m venv backend/django-drf/venv
source backend/django-drf/venv/bin/activate
pip install -r backend/django-drf/requirements.txt
deactivate
echo "Install complete."
