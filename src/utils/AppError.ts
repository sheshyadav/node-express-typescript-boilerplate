import { APP } from '@/config/config.js';

export class AppError extends Error {
  public statusCode: number;
  public success: boolean;
  public errors: unknown[] = [];
  public data: unknown;

  // class constructor
  constructor(
    statusCode: number = 500,
    message: string = 'Something went wrong',
    errors: unknown[] = [],
    stack: string = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  // class static methods
  static badRequest(message: string = 'Bad Request', errors: unknown[] = []) {
    return new AppError(400, message, errors);
  }

  static unauthorized(message: string = 'Unauthorized', errors: unknown[] = []) {
    return new AppError(401, message, errors);
  }

  static paymentRequired(message: string = 'Payment Required', errors: unknown[] = []) {
    return new AppError(402, message, errors);
  }

  static forbidden(message: string = 'Forbidden', errors: unknown[] = []) {
    return new AppError(403, message, errors);
  }

  static notFound(message: string = 'Resource not found', errors: unknown[] = []) {
    return new AppError(404, message, errors);
  }

  static conflict(message: string = 'Conflict', errors: unknown[] = []) {
    return new AppError(409, message, errors);
  }

  static unprocessableEntity(message: string = 'Unprocessable Entity', errors: unknown[] = []) {
    return new AppError(422, message, errors);
  }

  static internal(message: string = 'Internal server error', errors: unknown[] = []) {
    return new AppError(500, message, errors);
  }

  // This is the key: Make sure JSON.stringify() includes all fields
  toJSON() {
    return {
      statusCode: this.statusCode,
      success: this.success,
      message: this.message,
      errors: this.errors,
      ...(this.data ? { data: this.data as object } : {}),
      ...(APP.nodeEnv === 'development' && { stack: this.stack }),
    };
  }
}
