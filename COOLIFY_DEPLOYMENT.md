# Coolify Deployment Guide - Apranova

This guide explains how to deploy the Apranova website to Coolify.

## Overview

Coolify is a self-hosted platform-as-a-service (PaaS) that makes deploying applications easy. This guide covers deploying Apranova from GitHub to Coolify.

---

## Prerequisites

- Coolify instance running (self-hosted or cloud)
- GitHub repository: `https://github.com/professor2004h/ApraNova`
- Access to Coolify dashboard

---

## Quick Deployment

### Step 1: Create New Resource

1. Log in to your Coolify dashboard
2. Click **"+ New Resource"**
3. Select **"Public Repository"**
4. Choose **"GitHub"**

### Step 2: Configure Repository

**Repository Settings:**
- **Repository URL:** `https://github.com/professor2004h/ApraNova`
- **Branch:** `main`
- **Build Pack:** `Dockerfile`

### Step 3: Configure Build Settings

**Build Configuration:**
- **Dockerfile Location:** `./Dockerfile` (default)
- **Docker Compose:** Not needed (we're using Dockerfile)
- **Build Arguments:** None needed

### Step 4: Configure Deployment Settings

**Port Configuration:**
- **Port:** `80` (Nginx listens on port 80 inside container)
- **Expose Port:** Yes (Coolify will map this to a public port)

**Health Check:**
- **Health Check Enabled:** Yes
- **Health Check Path:** `/health`
- **Health Check Method:** `GET`
- **Health Check Interval:** `30s`
- **Health Check Timeout:** `3s`
- **Health Check Retries:** `3`
- **Start Period:** `5s`

**Environment Variables:**
- None required (static site)

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~2-5 minutes)
3. Monitor deployment logs
4. Once healthy, access your application via the provided URL

---

## Configuration Details

### Dockerfile Configuration

The application uses a multi-stage Dockerfile:

**Stage 1: Builder**
- Base: `node:20-alpine`
- Installs dependencies
- Builds React application
- Output: `/app/dist`

**Stage 2: Production**
- Base: `nginx:alpine`
- Copies built files to `/usr/share/nginx/html`
- Exposes port 80
- Includes health check at `/health`

### Nginx Configuration

**Key Settings:**
- Listens on port 80 (all interfaces)
- Serves static files from `/usr/share/nginx/html`
- React Router support (SPA routing)
- Gzip compression enabled
- Security headers configured
- Health check endpoint at `/health`

### Health Check

The Docker health check uses:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/health || exit 1
```

**What it does:**
- Checks every 30 seconds
- Waits 5 seconds after container start before first check
- Allows 3 seconds per check
- Retries 3 times before marking unhealthy
- Uses the `/health` endpoint which returns `200 OK`

---

## Troubleshooting

### Issue: Health Check Failing

**Symptoms:**
```
Healthcheck logs: wget: can't connect to remote host: Connection refused
```

**Solutions:**

1. **Check if Nginx is running:**
   - View container logs in Coolify
   - Look for "nginx/1.x.x" startup messages
   - Should see "start worker processes"

2. **Verify health endpoint:**
   - The `/health` endpoint should return `200 OK`
   - Check nginx.conf has the health location block

3. **Check port binding:**
   - Nginx should listen on port 80
   - Container should expose port 80

4. **Increase start period:**
   - If build is slow, increase start period to 10s or 15s
   - Edit Dockerfile: `--start-period=15s`

### Issue: Build Failing

**Symptoms:**
```
npm ERR! code ELIFECYCLE
```

**Solutions:**

1. **Check Node version:**
   - Dockerfile uses Node 20
   - Ensure package.json is compatible

2. **Check dependencies:**
   - Run `npm install` locally to verify
   - Check for missing dependencies

3. **Clear build cache:**
   - In Coolify, enable "Force rebuild"
   - This clears Docker build cache

### Issue: Application Not Loading

**Symptoms:**
- Container is healthy but site doesn't load
- 404 errors on routes

**Solutions:**

1. **Check build output:**
   - Verify `dist` folder is created
   - Check build logs for errors

2. **Check nginx configuration:**
   - Verify `try_files $uri $uri/ /index.html;`
   - This enables React Router support

3. **Check file permissions:**
   - Files should be readable by nginx user
   - Alpine nginx runs as user `nginx`

### Issue: Slow Build Times

**Solutions:**

1. **Enable build cache:**
   - Coolify caches Docker layers
   - Subsequent builds should be faster

2. **Optimize Dockerfile:**
   - Already optimized with multi-stage build
   - Dependencies are cached in separate layer

3. **Use smaller base images:**
   - Already using Alpine (smallest option)

---

## Advanced Configuration

### Custom Domain

1. Go to your application in Coolify
2. Click **"Domains"**
3. Add your custom domain
4. Update DNS records as instructed
5. Enable SSL (Let's Encrypt automatic)

### Environment Variables

If you need to add environment variables:

1. Go to **"Environment Variables"**
2. Add variables (e.g., `API_URL`, `NODE_ENV`)
3. Redeploy application

**Note:** For static sites, environment variables must be set at build time.

### Resource Limits

Configure resource limits in Coolify:

**Recommended Settings:**
- **Memory Limit:** 256MB
- **Memory Reservation:** 128MB
- **CPU Limit:** 0.5 (50% of one core)

### Persistent Storage

Not needed for this static site, but if required:

1. Go to **"Storages"**
2. Add persistent volume
3. Mount to container path

---

## Deployment Checklist

### Pre-Deployment

- [ ] Repository is public or Coolify has access
- [ ] Dockerfile is in repository root
- [ ] nginx.conf is in repository root
- [ ] Application builds successfully locally
- [ ] Health check endpoint works

### During Deployment

- [ ] Repository URL is correct
- [ ] Branch is set to `main`
- [ ] Build pack is set to `Dockerfile`
- [ ] Port is set to `80`
- [ ] Health check is enabled
- [ ] Health check path is `/health`

### Post-Deployment

- [ ] Build completed successfully
- [ ] Health check is passing
- [ ] Application is accessible
- [ ] All routes work (React Router)
- [ ] Static assets load correctly
- [ ] SSL is enabled (if using custom domain)

---

## Monitoring

### View Logs

**Container Logs:**
1. Go to your application in Coolify
2. Click **"Logs"**
3. Select **"Container Logs"**

**Build Logs:**
1. Click **"Deployments"**
2. Select a deployment
3. View build logs

### Health Status

**Check Health:**
1. Go to application dashboard
2. View **"Health Status"** indicator
3. Should show green/healthy

**Manual Health Check:**
```bash
curl https://your-domain.com/health
# Should return: healthy
```

### Metrics

Coolify provides basic metrics:
- CPU usage
- Memory usage
- Network traffic
- Request count

---

## Updating the Application

### Automatic Deployments

**Enable Auto-Deploy:**
1. Go to **"Settings"**
2. Enable **"Auto Deploy"**
3. Choose trigger: `Push to main branch`

Now every push to `main` will trigger automatic deployment.

### Manual Deployment

1. Go to application dashboard
2. Click **"Deploy"**
3. Select branch (default: `main`)
4. Click **"Deploy Now"**

### Rollback

If deployment fails:
1. Go to **"Deployments"**
2. Find previous successful deployment
3. Click **"Redeploy"**

---

## Performance Optimization

### Enable Caching

Already configured in nginx.conf:
- Static assets cached for 1 year
- Gzip compression enabled

### CDN Integration

For better performance:
1. Use Cloudflare (free tier available)
2. Point domain to Cloudflare
3. Enable caching and optimization
4. Point Cloudflare to Coolify URL

### Image Optimization

Already optimized:
- Multi-stage build
- Alpine base images
- Minimal dependencies
- Small image size (~50-60MB)

---

## Security

### SSL/TLS

**Enable HTTPS:**
1. Add custom domain
2. Coolify automatically provisions Let's Encrypt SSL
3. Force HTTPS redirect (enabled by default)

### Security Headers

Already configured in nginx.conf:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: no-referrer-when-downgrade`

### Updates

**Keep Updated:**
- Coolify auto-updates base images
- Rebuild periodically for security patches
- Monitor for npm dependency updates

---

## Cost Estimation

### Coolify Hosting

**Self-Hosted:**
- VPS: $5-20/month (DigitalOcean, Hetzner, Linode)
- Coolify: Free (open source)
- Total: $5-20/month

**Managed Coolify:**
- Various providers offer managed Coolify
- Cost: $10-50/month

### Resource Usage

**Apranova Application:**
- Memory: ~50-100MB
- CPU: Minimal (static site)
- Storage: ~100MB
- Bandwidth: Depends on traffic

**Recommendation:**
- 1GB RAM VPS is sufficient
- Can host multiple applications

---

## Support

### Coolify Documentation

- **Official Docs:** https://coolify.io/docs
- **Discord:** https://discord.gg/coolify
- **GitHub:** https://github.com/coollabsio/coolify

### Apranova Support

- **Email:** contact@apranova.com
- **GitHub:** https://github.com/professor2004h/ApraNova
- **Issues:** https://github.com/professor2004h/ApraNova/issues

---

## Summary

**Deployment Steps:**
1. ✅ Create new resource in Coolify
2. ✅ Connect GitHub repository
3. ✅ Configure build settings (Dockerfile)
4. ✅ Set port to 80
5. ✅ Enable health check at `/health`
6. ✅ Deploy and monitor

**Key Points:**
- Uses Dockerfile for deployment
- Nginx serves on port 80
- Health check at `/health` endpoint
- Automatic SSL with custom domain
- Auto-deploy on git push (optional)

**Status:** Ready for Coolify deployment! 🚀

---

**Last Updated:** October 18, 2025  
**Coolify Version:** 4.x  
**Application Version:** 1.2.0

