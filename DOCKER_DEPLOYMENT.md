# Docker Deployment Guide - Apranova

This guide explains how to build, run, and deploy the Apranova website using Docker.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Building the Docker Image](#building-the-docker-image)
- [Running the Container](#running-the-container)
- [Docker Compose](#docker-compose)
- [Deployment Options](#deployment-options)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

- **Docker** installed (version 20.10 or higher)
- **Docker Compose** installed (version 2.0 or higher)
- At least 2GB of free disk space
- Internet connection for pulling base images

### Install Docker

**Windows/Mac:**
- Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop)

**Linux:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Verify installation:
```bash
docker --version
docker-compose --version
```

---

## Quick Start

The fastest way to get Apranova running in Docker:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access the application
# Open browser to: http://localhost:8080
```

Stop the application:
```bash
docker-compose down
```

---

## Building the Docker Image

### Build Manually

```bash
# Build the image
docker build -t apranova:latest .

# Build with custom tag
docker build -t apranova:v1.0.0 .

# Build with no cache (clean build)
docker build --no-cache -t apranova:latest .
```

### Build with Docker Compose

```bash
docker-compose build
```

### Verify the Build

```bash
# List images
docker images | grep apranova

# Expected output:
# apranova    latest    <image-id>    <time>    <size>
```

---

## Running the Container

### Run with Docker

```bash
# Run on port 8080
docker run -d -p 8080:80 --name apranova-web apranova:latest

# Run on custom port (e.g., 3000)
docker run -d -p 3000:80 --name apranova-web apranova:latest

# Run with auto-restart
docker run -d -p 8080:80 --restart unless-stopped --name apranova-web apranova:latest
```

### Run with Docker Compose

```bash
# Start in detached mode
docker-compose up -d

# Start with logs visible
docker-compose up

# Start and rebuild if needed
docker-compose up -d --build
```

### Access the Application

Once running, access the application at:
- **Local:** http://localhost:8080
- **Network:** http://<your-ip>:8080

---

## Container Management

### View Running Containers

```bash
docker ps
```

### View Logs

```bash
# Docker
docker logs apranova-web

# Follow logs in real-time
docker logs -f apranova-web

# Docker Compose
docker-compose logs -f
```

### Stop Container

```bash
# Docker
docker stop apranova-web

# Docker Compose
docker-compose stop
```

### Restart Container

```bash
# Docker
docker restart apranova-web

# Docker Compose
docker-compose restart
```

### Remove Container

```bash
# Docker
docker stop apranova-web
docker rm apranova-web

# Docker Compose
docker-compose down
```

### Health Check

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' apranova-web

# Test health endpoint
curl http://localhost:8080/health
```

---

## Deployment Options

### 1. AWS ECS (Elastic Container Service)

#### Push to Amazon ECR

```bash
# Authenticate to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

# Tag image
docker tag apranova:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/apranova:latest

# Push image
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/apranova:latest
```

#### Deploy to ECS

1. Create ECS cluster
2. Create task definition using the ECR image
3. Create service with desired count
4. Configure Application Load Balancer
5. Set up auto-scaling (optional)

**Task Definition Example:**
```json
{
  "family": "apranova-task",
  "containerDefinitions": [
    {
      "name": "apranova-web",
      "image": "<account-id>.dkr.ecr.us-east-1.amazonaws.com/apranova:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "memory": 512,
      "cpu": 256
    }
  ]
}
```

---

### 2. Docker Hub

#### Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag image with your username
docker tag apranova:latest <your-dockerhub-username>/apranova:latest

# Push to Docker Hub
docker push <your-dockerhub-username>/apranova:latest
```

#### Pull and Run from Docker Hub

```bash
docker pull <your-dockerhub-username>/apranova:latest
docker run -d -p 8080:80 <your-dockerhub-username>/apranova:latest
```

---

### 3. Google Cloud Run

```bash
# Tag for Google Container Registry
docker tag apranova:latest gcr.io/<project-id>/apranova:latest

# Push to GCR
docker push gcr.io/<project-id>/apranova:latest

# Deploy to Cloud Run
gcloud run deploy apranova \
  --image gcr.io/<project-id>/apranova:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

### 4. Azure Container Instances

```bash
# Login to Azure
az login

# Create resource group
az group create --name apranova-rg --location eastus

# Create container registry
az acr create --resource-group apranova-rg --name apranovaacr --sku Basic

# Login to ACR
az acr login --name apranovaacr

# Tag and push
docker tag apranova:latest apranovaacr.azurecr.io/apranova:latest
docker push apranovaacr.azurecr.io/apranova:latest

# Deploy to ACI
az container create \
  --resource-group apranova-rg \
  --name apranova-web \
  --image apranovaacr.azurecr.io/apranova:latest \
  --dns-name-label apranova \
  --ports 80
```

---

### 5. DigitalOcean App Platform

1. Push image to Docker Hub or DigitalOcean Container Registry
2. Create new app in DigitalOcean App Platform
3. Select "Docker Hub" or "DigitalOcean Container Registry"
4. Configure container settings:
   - Port: 80
   - Health check: /health
5. Deploy

---

### 6. Kubernetes (K8s)

#### Deployment YAML

Create `k8s-deployment.yml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: apranova-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: apranova
  template:
    metadata:
      labels:
        app: apranova
    spec:
      containers:
      - name: apranova-web
        image: apranova:latest
        ports:
        - containerPort: 80
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: apranova-service
spec:
  type: LoadBalancer
  selector:
    app: apranova
  ports:
  - port: 80
    targetPort: 80
```

Deploy to Kubernetes:
```bash
kubectl apply -f k8s-deployment.yml
kubectl get services
```

---

## Environment Configuration

### Custom Port Mapping

Edit `docker-compose.yml`:

```yaml
ports:
  - "3000:80"  # Change 3000 to your desired port
```

### Resource Limits

Add resource constraints to `docker-compose.yml`:

```yaml
services:
  apranova-web:
    # ... existing config
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

### Environment Variables

If you need to add environment variables:

```yaml
services:
  apranova-web:
    # ... existing config
    environment:
      - NODE_ENV=production
      - API_URL=https://api.apranova.com
```

---

## Production Best Practices

### 1. Use Specific Tags

```bash
# Instead of :latest
docker build -t apranova:v1.0.0 .
```

### 2. Enable HTTPS

Use a reverse proxy like Nginx or Traefik with SSL certificates:

```yaml
services:
  nginx-proxy:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./ssl:/etc/nginx/ssl
      - ./nginx-proxy.conf:/etc/nginx/conf.d/default.conf
```

### 3. Set Up Monitoring

Use tools like:
- **Prometheus** + **Grafana** for metrics
- **ELK Stack** for logs
- **Datadog** or **New Relic** for APM

### 4. Implement CI/CD

Example GitHub Actions workflow (`.github/workflows/docker.yml`):

```yaml
name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t apranova:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push apranova:${{ github.sha }}
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker logs apranova-web

# Check if port is already in use
netstat -an | grep 8080  # Windows
lsof -i :8080            # Mac/Linux
```

### Build Fails

```bash
# Clean build with no cache
docker build --no-cache -t apranova:latest .

# Check Docker disk space
docker system df

# Clean up unused resources
docker system prune -a
```

### Application Not Accessible

```bash
# Verify container is running
docker ps

# Check port mapping
docker port apranova-web

# Test from inside container
docker exec apranova-web wget -O- http://localhost:80
```

### Health Check Failing

```bash
# Check health status
docker inspect apranova-web | grep -A 10 Health

# Test health endpoint manually
curl http://localhost:8080/health
```

---

## Image Optimization

Current image size: ~50-60MB (Alpine-based)

### Further Optimization

1. **Multi-stage builds** (already implemented)
2. **Use Alpine base images** (already implemented)
3. **Minimize layers** in Dockerfile
4. **Remove development dependencies**

---

## Security Considerations

1. **Run as non-root user** (add to Dockerfile):
```dockerfile
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs
```

2. **Scan for vulnerabilities**:
```bash
docker scan apranova:latest
```

3. **Keep base images updated**:
```bash
docker pull node:20-alpine
docker pull nginx:alpine
```

---

## Support

For issues or questions:
- **Email:** contact@apranova.com
- **GitHub Issues:** https://github.com/professor2004h/ApraNova/issues
- **Documentation:** See README.md

---

**Last Updated:** October 18, 2025  
**Docker Version:** 24.0+  
**Image Base:** Node 20 Alpine + Nginx Alpine

