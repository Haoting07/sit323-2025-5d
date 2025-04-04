this project is a web-based calculator that supports basic and advanced arithmetic operations via a simple web UI and RESTful API.

It is designed to be deployed as a Docker container to Google Cloud Artifact Registry under project:sit323-25t1-ju-ba78587, repository: calculator, location: australia-southeast2.
# Features

Supports: +, -, ×, ÷, modulo, exponentiation, square root

Input validation & user-friendly error handling

Single-file Express.js server

Responsive frontend UI (pure HTML + JS)

Cloud deployable with Docker & GCP Artifact Registry

# Project Structure

calculator/
├── Dockerfile
├── index.js
├── package.json
├── public/
│   ├── index.html
│   └── script.js
├── docker-compose.yml
└── README.md

# How to Run This Project Locally

Make sure Node.js and Docker are installed.

Go to project folder (on desktop):

cd ~/Desktop/calculator

Start the server (Node.js):

node index.js

Open your browser:

http://localhost:3000

# How to Deploy to Google Artifact Registry (Cloud Deployment)

# One-time setup:

gcloud auth login
gcloud config set project sit323-25t1-ju-ba78587
gcloud services enable artifactregistry.googleapis.com
gcloud auth configure-docker australia-southeast2-docker.pkg.dev

# Build and Push Docker Image

cd ~/Desktop/calculator

docker build -t australia-southeast2-docker.pkg.dev/sit323-25t1-ju-ba78587/calculator/calculator:latest .

docker push australia-southeast2-docker.pkg.dev/sit323-25t1-ju-ba78587/calculator/calculator:latest
#  Run Service from Artifact Registry Image

docker run -d -p 3000:3000 australia-southeast2-docker.pkg.dev/sit323-25t1-ju-ba78587/calculator/calculator:latest

Now open:http://localhost:3000
