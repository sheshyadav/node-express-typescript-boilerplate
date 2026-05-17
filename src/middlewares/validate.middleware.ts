import { AppError } from '@/utils/AppError.js';
import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const validate = (schema: z.ZodObject) =>
    async (req: Request, _res: Response, next: NextFunction) => {
        try {
            const validatedData = await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            req.body = validatedData.body;
            Object.assign(req.query, validatedData.query);
            Object.assign(req.params, validatedData.params);

            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errors: Record<string, string>[] = [];
                error.issues.forEach((issue) => {
                    const [, ...rest] = issue.path;
                    const field = rest.join(".");
                    errors.push({ [field]: issue.message });
                });
                throw AppError.badRequest(undefined, errors);
            }
            next(error);
        }
    };
