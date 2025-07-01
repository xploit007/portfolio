# Replit.md

## Overview

This is a modern portfolio website for Mallikarjun Gudumagatte Nagaraja, built as a full-stack web application showcasing business analyst and data science projects. The application features an interactive React frontend with smooth animations, professional project showcases, and a Node.js/Express backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth, professional animations
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Structure**: RESTful API with `/api` prefix
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation (updated to match new section order)
- **Hero Section**: Professional introduction with animated profile image
- **Skills**: Animated skill bars and certification displays with icons
- **Experience**: Timeline-based professional experience display
- **Education**: Academic background and certifications
- **About**: Personal story and current focus areas
- **Projects**: Interactive project showcases with live demos and GitHub links
- **Process**: Visual workflow representation of business analysis methodology
- **Contact**: Interactive contact form with validation
- **ChatBot**: AI-powered assistance for portfolio navigation with bot icon

### Backend Components
- **Router Registration**: Centralized route management in `registerRoutes`
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema and CRUD operations
- **Error Handling**: Centralized error middleware
- **Request Logging**: Comprehensive API request/response logging

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express server handles requests through registered routes
3. **Data Layer**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **framer-motion**: Animation library for React
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and developer experience
- **eslint**: Code linting and quality
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reload
- **Database**: Neon Database with environment-based connection
- **Asset Serving**: Vite handles static asset optimization
- **Error Overlay**: Runtime error modal for development

### Production Build
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database Migrations**: Drizzle Kit handles schema migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Build Scripts**: Separate build processes for frontend and backend

## Changelog
```
Changelog:
- July 01, 2025. Initial setup
- July 01, 2025. Updated section flow: Home → Skills → Experience → Education → About → Projects → Process
- July 01, 2025. Added bot icon to chatbot interface
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```