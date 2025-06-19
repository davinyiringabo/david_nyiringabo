# Express.js with NGINX Reverse Proxy

This project demonstrates a simple Express.js application containerized with Docker and served through an NGINX reverse proxy.

## Project Structure

```
.
├── app.js              # Express.js application
├── package.json        # Node.js dependencies and scripts
├── Dockerfile         # Docker configuration for Express.js app
├── docker-compose.yml # Docker Compose configuration
└── nginx.conf         # NGINX reverse proxy configuration
```

## Setup Instructions

1. Make sure you have Docker and Node.js installed on your system.

2. Clone this repository:
```bash
git clone https://github.com/davinyiringabo/david_nyiringabo.git david_nyiringabo_work
cd david_nyiringabo_work
```

3. Install dependencies:
```bash
npm install
```

4. Build and run the containers:
```bash
docker-compose up -d --build
```

## Accessing the Application

- The application is accessible through:
  - NGINX reverse proxy: http://localhost
  - Direct Express.js access: http://localhost:3000

## Evidence of Running Application

Below is a screenshot showing the application running successfully through the NGINX reverse proxy:

![Application Output](/output/output.png)

## Technical Details

- Express.js application runs on port 3000 inside the container
- Docker maps the Express.js container to port 3000 on the host
- NGINX listens on port 80 and forwards requests to the Express.js application
- Docker Compose manages both containers and their networking 