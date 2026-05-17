import { IUserRepository } from '@/interfaces/user.interface.js';
import { CreateUserDTO, SafeUser, User } from '@/validators/user.validator.js';

export class UserService {
  // Dependency Injection via Constructor
  constructor(private userRepository: IUserRepository) { }

  /**
   * Retrieves all users from the system.
   * 
   * @returns A promise that resolves to an array of all User objects.
   * If no users are found, it returns an empty array.
   */
  async findAll(): Promise<SafeUser[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  /**
   * Finds a user by their ID.
   * @param id - The numeric ID of the user.
   * @returns A promise that resolves to the User or null if not found.
   */
  async findById(id: number): Promise<SafeUser | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  /**
   * Finds a user by their email ID.
   * @param email - The string email ID of the user.
   * @returns A promise that resolves to the User or null if not found.
   */
  async findByEmail(email: string): Promise<SafeUser | null> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }


  /**
   * Finds a user by their email ID.
   * @param email - The string email ID of the user.
   * @returns A promise that resolves to the User or null if not found.
   */
  async findByEmailWithPassword(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmailWithPassword(email);
    return user;
  }


  /**
   * Orchestrates the creation of a new user.
   * 
   * @param userData - The validated user data transfer object.
   * @returns A promise that resolves to the created User entity.
   */
  async createUser(userData: CreateUserDTO): Promise<SafeUser> {
    const user = await this.userRepository.createUser(userData);
    return user;
  }
}
