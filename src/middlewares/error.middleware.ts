import { APP } from '@/config/config.js';
import { AppError } from '@/utils/AppError.js';
import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
  err: Error & { statusCode?: number },
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;

  // 1 ApiError (our custom error class)
  if (err instanceof AppError) {
    return res.status(statusCode).json({
      statusCode: statusCode,
      success: false,
      errors: err.errors || [],
      message: err.message || 'Internal Server Error',
      stack: APP.nodeEnv == 'development' ? err.stack : '',
    });
  }

  // 3 Error (our custom error class)
  return res.status(statusCode).json({
    statusCode: statusCode,
    success: false,
    //   errors: err.errors || [],
    message: err.message || 'Internal Server Error',
    stack: APP.nodeEnv == 'development' ? err.stack : '',
  });
};
