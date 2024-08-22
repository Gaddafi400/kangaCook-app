# KangaCook KPI Management System

The kangaCook KPI Management System is a tool designed exclusively for kangaCook to track, manage, and improve Key Performance Indicators (KPIs) and associated controls. This system provides real-time tracking, user-friendly management, and integration with control mechanisms to ensure operational standards are met.


## Prerequisites

- Docker and Docker Compose installed on your machine.
- Python 3.10 and Node.js (if running services independently).

## Getting Started

### Running the Application with Docker

To start both the backend and frontend using Docker:

1. Clone the repository:

   ```bash
   git clone https://github.com/Gaddafi400/kangaCook-app.git
   cd kangaCook-app-main

2. Build and start the Docker containers:

    ```bash
    docker compose up --build

3. Access the application:
    - Backend: `http://localhost:8000`
    - Frontend: `http://localhost:5173`

## Running the Backend Independently

1. Navigate to the backend directory:

    ```bash
    cd backend
    python3 -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    python manage.py runserver

- Access the backend at `http://localhost:8000`

## Running the Frontend Independently

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    npm install
    npm run dev

- Access the backend at `http://localhost:5173/`
