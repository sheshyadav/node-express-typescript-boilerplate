import { AppError } from '@/utils/AppError.js';
import { Request, Response, NextFunction } from 'express';

export const notFoundMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  next(AppError.notFound(`URL: ${req.originalUrl} route not found`));
};
