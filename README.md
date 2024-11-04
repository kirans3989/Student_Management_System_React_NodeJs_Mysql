# Student Management System

A comprehensive system for managing students, exams, and academic reports built with React, Node.js, and MySQL.

![Dashboard Preview](https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200)

## Features

- 📚 Student Management
- 📝 Exam Scheduling & Results
- 📊 Academic Reports & Analytics
- 📅 Attendance Tracking
- 💰 Financial Management
- 📱 Responsive Design

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express
- Database: MySQL
- Containerization: Docker
- Styling: Tailwind CSS
- Icons: Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Deployment Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/student-management-system.git
   cd student-management-system
   ```

2. **Environment Setup**
   ```bash
   # Copy the example env file
   cp .env.example .env

   # Update the environment variables in .env file
   # Especially the database credentials and JWT secret
   ```

3. **Build and Run with Docker Compose**
   ```bash
   # Build the images
   docker compose build

   # Start the services
   docker compose up -d
   ```

4. **Initialize the Database**
   ```bash
   # The database will be automatically initialized with the schema
   # Wait for a few seconds after starting the services
   ```

5. **Verify Deployment**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3000/api
   - Database: localhost:3306

## Development Setup

1. **Install Dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

2. **Start Development Servers**
   ```bash
   # Start frontend dev server
   npm run dev

   # Start backend dev server (in another terminal)
   cd backend
   npm run dev
   ```

## Docker Commands

### Basic Commands
```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f

# Rebuild services
docker compose build --no-cache
```

### Database Management
```bash
# Access MySQL CLI
docker compose exec db mysql -u root -p school_db

# Backup database
docker compose exec db mysqldump -u root -p school_db > backup.sql

# Restore database
docker compose exec -i db mysql -u root -p school_db < backup.sql
```

### Troubleshooting
```bash
# Check service status
docker compose ps

# Restart specific service
docker compose restart [service_name]

# Remove volumes and recreate
docker compose down -v
docker compose up -d
```

## Production Deployment

For production deployment, additional steps are recommended:

1. **Update Environment Variables**
   - Set `NODE_ENV=production`
   - Use strong passwords
   - Configure proper MySQL credentials

2. **Enable Security Features**
   ```bash
   # Update Docker Compose file
   docker compose -f docker-compose.prod.yml up -d
   ```

3. **Setup Reverse Proxy**
   - Configure Nginx/Apache
   - Enable SSL/TLS
   - Set up proper headers

4. **Monitor Services**
   - Set up logging
   - Configure monitoring tools
   - Enable alerts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Support

For support, email support@example.com or open an issue in the repository.
