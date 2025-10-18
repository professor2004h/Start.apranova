# Apranova Deployment Script for Windows PowerShell
# This script helps deploy the Apranova application using Docker

param(
    [Parameter(Position=0)]
    [ValidateSet('build', 'start', 'stop', 'restart', 'logs', 'status', 'health', 'deploy')]
    [string]$Command = 'deploy',
    
    [Parameter()]
    [int]$Port = 8080,
    
    [Parameter()]
    [string]$Version = 'latest'
)

# Configuration
$ImageName = "apranova"
$ContainerName = "apranova-web"

# Functions
function Write-Success {
    param([string]$Message)
    Write-Host "✓ $Message" -ForegroundColor Green
}

function Write-Error {
    param([string]$Message)
    Write-Host "✗ $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ $Message" -ForegroundColor Yellow
}

function Test-Docker {
    try {
        $null = docker --version
        Write-Success "Docker is installed"
        return $true
    }
    catch {
        Write-Error "Docker is not installed. Please install Docker Desktop first."
        Write-Info "Download from: https://www.docker.com/products/docker-desktop"
        return $false
    }
}

function New-DockerImage {
    Write-Info "Building Docker image..."
    docker build -t "${ImageName}:${Version}" .
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Docker image built successfully"
    }
    else {
        Write-Error "Failed to build Docker image"
        exit 1
    }
}

function Stop-DockerContainer {
    $running = docker ps -q -f name=$ContainerName
    if ($running) {
        Write-Info "Stopping existing container..."
        docker stop $ContainerName
        docker rm $ContainerName
        Write-Success "Existing container stopped and removed"
    }
}

function Start-DockerContainer {
    Write-Info "Starting container on port ${Port}..."
    docker run -d `
        -p "${Port}:80" `
        --name $ContainerName `
        --restart unless-stopped `
        "${ImageName}:${Version}"

    if ($LASTEXITCODE -eq 0) {
        Write-Success "Container started successfully"
    }
    else {
        Write-Error "Failed to start container"
        exit 1
    }
}

function Test-ApplicationHealth {
    Write-Info "Checking application health..."
    Start-Sleep -Seconds 5

    try {
        $response = Invoke-WebRequest -Uri "http://localhost:${Port}/health" -UseBasicParsing -TimeoutSec 5
        if ($response.StatusCode -eq 200) {
            Write-Success "Application is healthy"
        }
        else {
            Write-Error "Health check failed with status code: $($response.StatusCode)"
            exit 1
        }
    }
    catch {
        Write-Error "Health check failed: $_"
        exit 1
    }
}

function Show-ContainerLogs {
    Write-Info "Showing container logs..."
    docker logs $ContainerName
}

function Show-ContainerStatus {
    Write-Info "Container status:"
    docker ps -f name=$ContainerName
}

function Invoke-Deployment {
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host "  Apranova Deployment Script" -ForegroundColor Cyan
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host ""

    if (-not (Test-Docker)) {
        exit 1
    }

    New-DockerImage
    Stop-DockerContainer
    Start-DockerContainer
    Test-ApplicationHealth

    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Success "Deployment completed successfully!"
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Info "Application is running at: http://localhost:${Port}"
    Write-Host ""
    Write-Host "Useful commands:" -ForegroundColor Cyan
    Write-Host "  View logs:    docker logs -f $ContainerName"
    Write-Host "  Stop:         docker stop $ContainerName"
    Write-Host "  Restart:      docker restart $ContainerName"
    Write-Host "  Remove:       docker rm -f $ContainerName"
    Write-Host ""
}

# Main execution
switch ($Command) {
    'build' {
        if (Test-Docker) {
            New-DockerImage
        }
    }
    'start' {
        if (Test-Docker) {
            Start-DockerContainer
        }
    }
    'stop' {
        Stop-DockerContainer
    }
    'restart' {
        Stop-DockerContainer
        Start-DockerContainer
    }
    'logs' {
        Show-ContainerLogs
    }
    'status' {
        Show-ContainerStatus
    }
    'health' {
        Test-ApplicationHealth
    }
    'deploy' {
        Invoke-Deployment
    }
}

