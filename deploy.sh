#!/bin/bash

# Apranova Deployment Script
# This script helps deploy the Apranova application using Docker

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
IMAGE_NAME="apranova"
CONTAINER_NAME="apranova-web"
PORT="${PORT:-8080}"
VERSION="${VERSION:-latest}"

# Functions
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    print_success "Docker is installed"
}

build_image() {
    print_info "Building Docker image..."
    docker build -t ${IMAGE_NAME}:${VERSION} .
    print_success "Docker image built successfully"
}

stop_container() {
    if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
        print_info "Stopping existing container..."
        docker stop ${CONTAINER_NAME}
        docker rm ${CONTAINER_NAME}
        print_success "Existing container stopped and removed"
    fi
}

run_container() {
    print_info "Starting container on port ${PORT}..."
    docker run -d \
        -p ${PORT}:80 \
        --name ${CONTAINER_NAME} \
        --restart unless-stopped \
        ${IMAGE_NAME}:${VERSION}
    print_success "Container started successfully"
}

check_health() {
    print_info "Checking application health..."
    sleep 5
    if curl -f http://localhost:${PORT}/health > /dev/null 2>&1; then
        print_success "Application is healthy"
    else
        print_error "Health check failed"
        exit 1
    fi
}

show_logs() {
    print_info "Showing container logs..."
    docker logs ${CONTAINER_NAME}
}

show_status() {
    print_info "Container status:"
    docker ps -f name=${CONTAINER_NAME}
}

# Main deployment flow
deploy() {
    echo "========================================="
    echo "  Apranova Deployment Script"
    echo "========================================="
    echo ""
    
    check_docker
    build_image
    stop_container
    run_container
    check_health
    
    echo ""
    echo "========================================="
    print_success "Deployment completed successfully!"
    echo "========================================="
    echo ""
    print_info "Application is running at: http://localhost:${PORT}"
    echo ""
    echo "Useful commands:"
    echo "  View logs:    docker logs -f ${CONTAINER_NAME}"
    echo "  Stop:         docker stop ${CONTAINER_NAME}"
    echo "  Restart:      docker restart ${CONTAINER_NAME}"
    echo "  Remove:       docker rm -f ${CONTAINER_NAME}"
    echo ""
}

# Parse command line arguments
case "${1}" in
    build)
        check_docker
        build_image
        ;;
    start)
        check_docker
        run_container
        ;;
    stop)
        stop_container
        ;;
    restart)
        stop_container
        run_container
        ;;
    logs)
        show_logs
        ;;
    status)
        show_status
        ;;
    health)
        check_health
        ;;
    deploy)
        deploy
        ;;
    *)
        echo "Usage: $0 {build|start|stop|restart|logs|status|health|deploy}"
        echo ""
        echo "Commands:"
        echo "  build   - Build the Docker image"
        echo "  start   - Start the container"
        echo "  stop    - Stop the container"
        echo "  restart - Restart the container"
        echo "  logs    - Show container logs"
        echo "  status  - Show container status"
        echo "  health  - Check application health"
        echo "  deploy  - Full deployment (build + start)"
        echo ""
        echo "Environment variables:"
        echo "  PORT    - Port to run on (default: 8080)"
        echo "  VERSION - Image version tag (default: latest)"
        echo ""
        echo "Examples:"
        echo "  $0 deploy"
        echo "  PORT=3000 $0 deploy"
        echo "  VERSION=v1.0.0 $0 build"
        exit 1
        ;;
esac

