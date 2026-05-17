import { validate } from '@/middlewares/validate.middleware.js';
import { authController } from '@/providers/auth.provider.js';
import { asyncHandler } from '@/utils/catchAsync.js';
import { loginSchema, registerSchema } from '@/validators/user.validator.js';
import { Router } from 'express';

const authRoutes: Router = Router();
authRoutes.route('/login').post(validate(loginSchema), asyncHandler(authController.login));
authRoutes.route('/register').post(validate(registerSchema), asyncHandler(authController.register));

export { authRoutes };
