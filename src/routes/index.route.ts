import { Router } from 'express';
import { authRoutes } from './auth.route.js';
import { userRoutes } from './user.route.js';

const mainRouter: Router = Router();
mainRouter.use('/auth', authRoutes);
mainRouter.use('/users', userRoutes);

export { mainRouter };
