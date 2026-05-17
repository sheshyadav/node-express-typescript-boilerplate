import { LoginDTO, RegisterDTO, SafeUser } from '@/validators/user.validator.js';
import { comparePassword, hashPassword } from '@/utils/password.util.js';
import { IUserRepository } from '@/interfaces/user.interface.js';
import { JwtService } from './jwt.service.js';
import { AppError } from '@/utils/AppError.js';
import { MESSAGES } from '@/constants/messages.js';

export class AuthService {
  // Dependency Injection via Constructor
  constructor(private userRepository: IUserRepository) { }


  /**
   * Authenticates a user and generates an access token.
   * 
   * @param credentials - The login data (email and password).
   * @returns An object containing the authenticated User and a JWT access token.
   * @throws {AppError} If credentials are invalid or user doesn't exist.
   */
  async login(credentials: LoginDTO): Promise<{ user: SafeUser; token: string }> {
    const { email, password } = credentials;
    const user = await this.userRepository.findByEmailWithPassword(email);
    if (!user) throw AppError.badRequest(undefined, [{ email: MESSAGES.ERROR.USER_NOT_FOUND }]);

    const isMatch = await comparePassword(password, user.password ?? "");
    if (!isMatch) throw AppError.badRequest(undefined, [{ password: MESSAGES.ERROR.INVALID_CREDENTIALS }]);

    const token = JwtService.generateToken({ id: user.id, email: user.email });
    return { user, token };
  }


  /**
   * Register a new user and generates an access token.
   * 
   * @param userDto - The login data (name, email, and password).
   * @returns An object containing the created User and a JWT access token.
   * @throws {AppError} If credentials are invalid or user doesn't exist.
   */
  async register(userDto: RegisterDTO): Promise<{ user: SafeUser; token: string }> {
    const olduser = await this.userRepository.findByEmail(userDto.email);
    if (olduser) throw AppError.badRequest(undefined, [{ email: MESSAGES.ERROR.EMAIL_ALREADY_EXISTS }]);
    userDto.password = await hashPassword(userDto.password);
    const user = await this.userRepository.createUser(userDto);
    const token = JwtService.generateToken({ id: user.id, email: user.email });
    return { user, token };
  }
}
