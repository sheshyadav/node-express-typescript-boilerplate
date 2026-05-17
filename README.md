<<<<<<< HEAD
# node-express-typescript-boilerplate
A scalable and production-ready backend boilerplate built using TypeScript, Express.js, Prisma ORM, and MySQL. This project follows a clean architecture pattern with controllers, services, repositories, providers, middlewares, validators, and utilities separated properly for better scalability and maintainability.
=======
# Node Express TypeScript Boilerplate

A scalable and production-ready backend boilerplate built using TypeScript, Express.js, Prisma ORM, and MySQL/MariaDB.

This project follows a clean architecture pattern with controllers, services, repositories, providers, middlewares, validators, and utilities separated properly for better scalability and maintainability.

---

# Features

- Express.js with TypeScript
- Prisma ORM Integration
- MySQL / MariaDB Database Support
- JWT Authentication
- User Registration & Login APIs
- Zod Validation
- Error Handling Middleware
- Modular Folder Structure
- Async Error Wrapper
- Environment Variable Support
- ESLint + Prettier Configuration
- Scalable Service/Repository Architecture

---

# Tech Stack

| Technology | Usage            |
| ---------- | ---------------- |
| TypeScript | Backend Language |
| Express.js | API Framework    |
| Prisma ORM | Database ORM     |
| MySQL      | Database         |
| JWT        | Authentication   |
| Zod        | Validation       |
| bcryptjs   | Password Hashing |
| ESLint     | Linting          |
| Prettier   | Code Formatting  |

---

# Project Structure

```bash
src/
│
├── config/            # App & database configuration
├── constants/         # Constant messages and configs
├── controllers/       # Route controllers
├── interfaces/        # TypeScript interfaces
├── middlewares/       # Express middlewares
├── providers/         # Dependency injection providers
├── repositories/      # Database layer
├── routes/            # API routes
├── services/          # Business logic
├── utils/             # Utility functions
├── validators/        # Zod validators
│
├── app.ts             # Express app configuration
└── index.ts           # Application entry point
```

---

# Available APIs

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## User APIs

### Get All Users

```http
GET /api/users
```

### Get User By ID

```http
GET /api/users/id/:id
```

### Get User By Email

```http
GET /api/users/email/:email
```

---

# Installation

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

## 2. Move Into Project

```bash
cd node-express-typescript
```

## 3. Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

---

# Prisma Setup

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Migration

```bash
npx prisma migrate dev
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

## Production Mode

```bash
npm start
```

---

# Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| npm run dev      | Start development server   |
| npm run build    | Compile TypeScript         |
| npm start        | Run production build       |
| npm run lint     | Run ESLint                 |
| npm run lint:fix | Fix lint issues            |
| npm run format   | Format code using Prettier |

---

# Authentication Flow

1. User registers using `/auth/register`
2. Password gets hashed using bcrypt
3. JWT token gets generated
4. User logs in using `/auth/login`
5. API returns authenticated user data with token

---

# Validation

This project uses Zod validation schemas.

Validation middleware automatically validates request body before controller execution.

Example:

```ts
validate(registerSchema);
```

---

# Error Handling

Centralized error handling middleware is implemented.

Features:

- Async error handling
- Custom AppError utility
- Proper API response structure
- Not Found middleware

---

# API Response Structure

Successful Response:

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Success"
}
```

Error Response:

```json
{
  "statusCode": 400,
  "message": "Validation Error"
}
```

---

# Architecture Overview

This project follows layered architecture:

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
Database
```

Benefits:

- Easy to scale
- Clean separation of concerns
- Better maintainability
- Easier testing
- Reusable business logic

---

# Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Helmet security middleware
- CORS support
- Environment variable protection

---

# Future Improvements

You can extend this boilerplate with:

- Role Based Authentication
- Refresh Tokens
- Email Verification
- Swagger Documentation
- Unit Testing
- Docker Support
- Rate Limiting
- Redis Caching
- File Upload Support
- CI/CD Pipeline

---

# Author

Developed by Shesh Yadav

---

# License

This project is licensed under the ISC License.
>>>>>>> 0aeb1c3 (setup the project)
