import { LoginDTO, RegisterDTO } from '@/validators/user.validator.js';
import { AuthService } from '@/services/auth.service.js';
import { ApiResponse } from '@/utils/ApiResponse.js';
import { MESSAGES } from '@/constants/messages.js';
import { Request, Response } from 'express';

export class AuthController {
  constructor(private authService: AuthService) { }

  /**
   * Handles user authentication.
   * 
   * @param req - Express request with LoginDTO in the body.
   * @param res - Express response containing the user data and access token.
   * @returns A promise that resolves to a JSON response with status 201.
   */
  login = async (req: Request<{}, {}, LoginDTO>, res: Response): Promise<void> => {
    const data = await this.authService.login(req.body);
    res.status(200).json(new ApiResponse(200, data, MESSAGES.SUCCESS.LOGIN));
  };


  /**
   * Handles new user registration.
   * 
   * @param req - Express request with RegisterDTO in the body.
   * @param res - Express response containing the newly created user and token.
   * @returns A promise that resolves to a JSON response with status 201.
   */
  register = async (req: Request<{}, {}, RegisterDTO>, res: Response): Promise<void> => {
    const data = await this.authService.register(req.body);
    res.status(201).json(new ApiResponse(201, data, MESSAGES.SUCCESS.REGISTER));
  };
}
