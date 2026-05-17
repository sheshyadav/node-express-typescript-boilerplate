import { MESSAGES } from '@/constants/messages.js';
import { UserService } from '@/services/user.service.js';
import { ApiResponse } from '@/utils/ApiResponse.js';
import { CreateUserDTO } from '@/validators/user.validator.js';
import { Request, Response } from 'express';

export class UserController {
  constructor(private userService: UserService) { }

  /**
   * Retrieves all users.
   * 
   * @param req - Express request with the user email ID in params.
   * @param res - Express response containing the found Users[] or [].
   * @returns A promise that sends a JSON response with status 201.
   */
  getUsers = async (_req: Request, res: Response): Promise<void> => {
    const users = await this.userService.findAll();
    res.status(200).json(new ApiResponse(200, users, MESSAGES.SUCCESS.DEFAULT));
  };

  /**
   * Retrieves a single user by their unique ID.
   * 
   * @param req - Express request with the user ID in params.
   * @param res - Express response containing the found User or null.
   * @returns A promise that sends a JSON response with status 201.
   */
  getUserById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const user = await this.userService.findById(+req.params.id);
    res.status(200).json(new ApiResponse(200, user, MESSAGES.SUCCESS.DEFAULT));
  };

  /**
   * Retrieves a single user by their email ID.
   * 
   * @param req - Express request with the user email ID in params.
   * @param res - Express response containing the found User or null.
   * @returns A promise that sends a JSON response with status 201.
   */
  getUserByEmail = async (req: Request<{ email: string }>, res: Response): Promise<void> => {
    const user = await this.userService.findByEmail(req.params.email);
    res.status(200).json(new ApiResponse(200, user, MESSAGES.SUCCESS.DEFAULT));
  };

  /**
   * Handles user creation requests.
   * 
   * @param req - Express request with typed body matching CreateUserDTO.
   * @param res - Express response object.
   * @returns A promise that sends a 201 Created status with the new user data.
   */
  createUser = async (req: Request<{}, {}, CreateUserDTO>, res: Response): Promise<void> => {
    const users = await this.userService.createUser(req.body);
    res.status(201).json(new ApiResponse(201, users, MESSAGES.SUCCESS.DEFAULT));
  };
}
