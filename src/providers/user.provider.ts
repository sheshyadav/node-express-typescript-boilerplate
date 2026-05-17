import { UserController } from '@/controllers/user.controller.js';
import { UserRepository } from '@/repositories/user.repository.js';
import { UserService } from '@/services/user.service.js';

// Dependencies initialization
let instance: UserController | null = null;

export const getUserController = (): UserController => {
  if (!instance) {
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    instance = new UserController(userService);
  }
  return instance;
};

// Singleton instance
export const userController: UserController = getUserController();
