# MLGG Docker Deployment Guide

## Overview
This guide explains how to deploy the MLGG Next.js frontend application on a VPS using Docker Compose and Nginx.

## Project Analysis

### Environment Variables Required
- **RESEND_API_KEY** *(Required)*: API key from Resend for email functionality
  - Get your key from: https://resend.com
  - The app uses this to send contact form emails

### Application Configuration
- **Base Path**: `/MLGG` (set in next.config.mjs)
- **Build Output**: Static export (output: "export")
- **Node Version**: 20 (recommended)
- **Port**: 3000 (inside container)

## Deployment Steps

### 1. Prepare Your VPS

```bash
# Install Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Nginx (if not already installed)
sudo apt update
sudo apt install nginx

# Install curl for health checks
sudo apt install curl
```

### 2. Clone and Setup Application

```bash
# Clone your repository
cd /opt  # or your preferred directory
git clone <your-repo-url> mlgg
cd mlgg

# Create .env.local with production values
cp .env.example .env.local

# Edit .env.local and add your Resend API key
nano .env.local
# Add: RESEND_API_KEY=your_actual_api_key_here
```

### 3. Configure Nginx on Host

```bash
# Copy the Nginx configuration
sudo cp nginx.conf.example /etc/nginx/sites-available/mlgg

# Edit the configuration if needed (e.g., for your domain)
sudo nano /etc/nginx/sites-available/mlgg

# Enable the site
sudo ln -s /etc/nginx/sites-available/mlgg /etc/nginx/sites-enabled/mlgg

# Verify Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 4. Deploy with Docker Compose

```bash
# Build and start the container
docker-compose up -d

# Check container status
docker-compose ps

# View logs
docker-compose logs -f mlgg
```

### 5. Verify Deployment

```bash
# Check if the container is running
docker ps | grep mlgg

# Test the health check endpoint
curl http://localhost/MLGG/health

# Test the application
curl http://localhost/MLGG/
```

## Managing the Application

### View Logs
```bash
# Real-time logs
docker-compose logs -f mlgg

# Last 100 lines
docker-compose logs --tail 100 mlgg
```

### Restart the Application
```bash
docker-compose restart mlgg
```

### Stop the Application
```bash
docker-compose down
```

### Rebuild After Changes
```bash
docker-compose down
git pull origin main
docker-compose build --no-cache
docker-compose up -d
```

### Update Resend API Key
```bash
# Edit the environment file
nano .env.local

# Restart the container to apply changes
docker-compose restart mlgg
```

## Nginx Configuration Details

### Key Features
- **Reverse Proxy**: Routes traffic to Docker container on port 3000
- **Gzip Compression**: Reduces bandwidth usage
- **Security Headers**: XSS, MIME type, and framing protection
- **Rate Limiting**: Optional protection against abuse (commented out by default)
- **Health Checks**: Monitors container availability

### Customization Options

#### For Your Domain
```nginx
server_name your-domain.com www.your-domain.com;
```

#### For SSL/HTTPS
Uncomment the HTTPS section and:
1. Get SSL certificates (e.g., using Let's Encrypt)
2. Update certificate paths
3. Point domain to your VPS

```bash
# Get free SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --webroot -w /var/www/html -d your-domain.com
```

## Troubleshooting

### Container Won't Start
```bash
# Check logs
docker-compose logs mlgg

# Common issues:
# - Missing .env.local file
# - Invalid RESEND_API_KEY
# - Port conflicts
```

### 502 Bad Gateway Error
```bash
# Check if container is running
docker ps | grep mlgg

# Check Docker network
docker network ls

# Verify Nginx upstream
curl http://localhost:3000/MLGG/
```

### Application Too Slow
```bash
# Check resource usage
docker stats mlgg

# Increase resource limits in docker-compose.yml
# Adjust the 'deploy.resources' section
```

### Email Not Sending
1. Verify RESEND_API_KEY is set correctly
2. Check email recipient configuration in route.ts
3. View container logs: `docker-compose logs mlgg`
4. Test with: `curl -X POST http://localhost/MLGG/api/send-email`

## Monitoring

### Health Check
The docker-compose.yml includes a health check that:
- Runs every 30 seconds
- Tests the /MLGG endpoint
- Marks container unhealthy after 3 failed attempts

Monitor health:
```bash
docker ps --filter "name=mlgg"  # Shows health status
```

### Log Monitoring
Nginx logs are stored at:
- Access logs: `/var/log/nginx/mlgg_access.log`
- Error logs: `/var/log/nginx/mlgg_error.log`

## Multiple Apps on Same VPS

This setup is designed to coexist with other applications:

1. **Each app gets its own Docker container and service name**
2. **Nginx routes based on URL path or domain**
3. **No port conflicts** - all apps listen on internal ports, Nginx handles routing

Example setup for multiple apps:
```nginx
# In separate nginx config files
server {
    location /mlgg { proxy_pass http://mlgg:3000; }
    location /other-app { proxy_pass http://other-app:3000; }
}
```

## Security Considerations

1. **Don't commit .env.local** - Keep secrets out of version control
2. **Use strong API keys** - Regenerate if compromised
3. **Keep Docker images updated** - Rebuild periodically
4. **Use HTTPS in production** - Uncomment SSL section in nginx.conf
5. **Run container as non-root** - Already configured in Dockerfile
6. **Regular backups** - Backup your .env.local and docker-compose files

## Files Created

- `docker-compose.yml` - Docker Compose configuration
- `Dockerfile` - Multi-stage Docker build
- `.env.example` - Example environment variables
- `.env.production` - Production environment template
- `nginx.conf.example` - Nginx reverse proxy configuration
- `DEPLOYMENT.md` - This file

## Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Resend**: https://resend.com/docs
- **Docker**: https://docs.docker.com
- **Nginx**: https://nginx.org/en/docs/
