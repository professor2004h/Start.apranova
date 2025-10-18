# Docker Quick Start Guide - Apranova

Get Apranova running in Docker in under 5 minutes!

## Prerequisites

**Install Docker:**
- **Windows/Mac:** [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Linux:** `curl -fsSL https://get.docker.com | sh`

Verify installation:
```bash
docker --version
```

---

## Option 1: Using Docker Compose (Recommended)

**Fastest way to get started:**

```bash
# Start the application
docker-compose up -d

# Access at http://localhost:8080
```

**Stop the application:**
```bash
docker-compose down
```

---

## Option 2: Using Deployment Scripts

### Windows (PowerShell)

```powershell
# Deploy with default settings (port 8080)
.\deploy.ps1 deploy

# Deploy on custom port
.\deploy.ps1 -Command deploy -Port 3000

# Other commands
.\deploy.ps1 build      # Build image only
.\deploy.ps1 start      # Start container
.\deploy.ps1 stop       # Stop container
.\deploy.ps1 logs       # View logs
.\deploy.ps1 status     # Check status
```

### Linux/Mac (Bash)

```bash
# Make script executable
chmod +x deploy.sh

# Deploy with default settings (port 8080)
./deploy.sh deploy

# Deploy on custom port
PORT=3000 ./deploy.sh deploy

# Other commands
./deploy.sh build       # Build image only
./deploy.sh start       # Start container
./deploy.sh stop        # Stop container
./deploy.sh logs        # View logs
./deploy.sh status      # Check status
```

---

## Option 3: Manual Docker Commands

### Build the Image

```bash
docker build -t apranova:latest .
```

### Run the Container

```bash
# Run on port 8080
docker run -d -p 8080:80 --name apranova-web apranova:latest

# Run on custom port (e.g., 3000)
docker run -d -p 3000:80 --name apranova-web apranova:latest
```

### Access the Application

Open your browser to:
- http://localhost:8080 (or your custom port)

---

## Common Commands

### View Logs
```bash
docker logs -f apranova-web
```

### Stop Container
```bash
docker stop apranova-web
```

### Start Container
```bash
docker start apranova-web
```

### Restart Container
```bash
docker restart apranova-web
```

### Remove Container
```bash
docker stop apranova-web
docker rm apranova-web
```

### Check Health
```bash
curl http://localhost:8080/health
```

### View Running Containers
```bash
docker ps
```

---

## Troubleshooting

### Port Already in Use

**Error:** `Bind for 0.0.0.0:8080 failed: port is already allocated`

**Solution:** Use a different port
```bash
docker run -d -p 3000:80 --name apranova-web apranova:latest
```

### Container Won't Start

**Check logs:**
```bash
docker logs apranova-web
```

**Rebuild image:**
```bash
docker build --no-cache -t apranova:latest .
```

### Docker Not Found

**Windows:** Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

**Linux:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

---

## Production Deployment

For production deployment to cloud platforms, see:
- **Full Guide:** [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md)
- **AWS ECS:** Section 1 in DOCKER_DEPLOYMENT.md
- **Google Cloud Run:** Section 3 in DOCKER_DEPLOYMENT.md
- **Azure ACI:** Section 4 in DOCKER_DEPLOYMENT.md
- **Kubernetes:** See [k8s-deployment.yml](k8s-deployment.yml)

---

## Next Steps

1. ✅ Application running locally
2. 📝 Review [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) for production deployment
3. 🚀 Deploy to your preferred cloud platform
4. 🔒 Set up HTTPS with SSL certificates
5. 📊 Configure monitoring and logging

---

## Support

- **Documentation:** [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md)
- **Email:** contact@apranova.com
- **GitHub:** https://github.com/professor2004h/ApraNova

---

**Quick Reference:**

| Command | Description |
|---------|-------------|
| `docker-compose up -d` | Start with Docker Compose |
| `docker-compose down` | Stop Docker Compose |
| `docker build -t apranova:latest .` | Build image |
| `docker run -d -p 8080:80 --name apranova-web apranova:latest` | Run container |
| `docker logs -f apranova-web` | View logs |
| `docker stop apranova-web` | Stop container |
| `docker restart apranova-web` | Restart container |
| `curl http://localhost:8080/health` | Health check |

---

**Last Updated:** October 18, 2025

