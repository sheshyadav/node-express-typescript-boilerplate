import { userController } from '@/providers/user.provider.js';
import { asyncHandler } from '@/utils/catchAsync.js';
import { Router } from 'express';

const userRoutes: Router = Router();
userRoutes.route('/').get(asyncHandler(userController.getUsers));
userRoutes.route('/id/:id').get(asyncHandler(userController.getUserById));
userRoutes.route('/email/:email').get(asyncHandler(userController.getUserByEmail));

export { userRoutes };
