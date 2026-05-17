import { notFoundMiddleware } from './middlewares/notfound.middleware.js';
import { globalErrorHandler } from '@/middlewares/error.middleware.js';
import { mainRouter } from '@/routes/index.route.js';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

// Security and Parsing Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.disable('x-powered-by');
app.use('/api/v1', express.static('public'));

// Routes config
app.use('/api/v1', mainRouter);
// 404 Middleware
app.use(notFoundMiddleware);
// Global Error Handler
app.use(globalErrorHandler);

export { app };
