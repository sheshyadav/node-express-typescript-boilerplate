import { CreateUserDTO, SafeUser, User } from '@/validators/user.validator.js';
import { IUserRepository } from '@/interfaces/user.interface.js';
import { prisma } from '@/config/database.js';

export class UserRepository implements IUserRepository {
  /**
   * Retrieves all users from the data source.
   * @returns {Promise<SafeUser[]>} Always returns an array.
   */
  async findAll(): Promise<SafeUser[]> {
    const users = await prisma.user.findMany({
      omit: { password: true }
    });
    return users;
  }

  /**
   * Finds a specific user by their unique ID.
   * @param id - The unique identifier of the user.
   * @returns {Promise<SafeUser|null>} A promise that resolves to the User object if found, or null otherwise.
   */
  async findById(id: number): Promise<SafeUser | null> {
    const user = await prisma.user.findUnique({ 
      where: { id }, 
      omit: { password: true } 
    });
    return user;
  }

  /**
  * Finds a user by their email address.
  * @param email - The email to search for.
  * @returns {Promise<SafeUser|null>} A promise that resolves to the User object if found, or null otherwise.
  */
  async findByEmail(email: string): Promise<SafeUser | null> {
    const user = await prisma.user.findUnique({ 
      where: { email },
      omit: { password: true } 
    });
    return user;
  }

  /**
  * Finds a user by their email address.
  * @param email - The email to search for.
  * @returns {Promise<SafeUser|null>} A promise that resolves to the User object if found, or null otherwise.
  */
  async findByEmailWithPassword(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ 
      where: { email } 
    });
    return user;
  }


  /**
   * Persists a new user record.
   * @param userData - The data required to create a new user.
   * @returns {Promise<SafeUser>} A promise that resolves to the newly created User object.
   */
  async createUser(userData: CreateUserDTO): Promise<SafeUser> {
    const user = await prisma.user.create({ 
      data: { ...userData }, 
      omit: { password: true } 
    });
    return user;
  }
}
