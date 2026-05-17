import { AuthController } from '@/controllers/auth.controller.js';
import { UserRepository } from '@/repositories/user.repository.js';
import { AuthService } from '@/services/auth.service.js';

// Dependencies initialization
let instance: AuthController | null = null;

export const getAuthController = (): AuthController => {
  if (!instance) {
    const userRepository = new UserRepository();
    const authService = new AuthService(userRepository);
    instance = new AuthController(authService);
  }
  return instance;
};

// Singleton instance
export const authController: AuthController = getAuthController();
