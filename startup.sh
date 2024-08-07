#!/bin/bash

# Navigate to frontend and build the React app
cd frontend
npm install
npm run build

# Navigate back to the root and then to backend to start the FastAPI server
cd ../backend

# Install Python dependencies
source ../venv/bin/activate
pip install -r requirements.txt

# Start FastAPI with Uvicorn
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind=0.0.0.0:8000

nginx -g 'daemon off;'
