import { Request, Response, NextFunction, RequestHandler } from 'express';

export const asyncHandler = <T>(
  fn: (req: Request<T>, res: Response, next: NextFunction) => Promise<void>,
): RequestHandler<T> => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
