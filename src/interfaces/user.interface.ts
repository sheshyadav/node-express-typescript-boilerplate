import { CreateUserDTO, SafeUser, User } from "@/validators/user.validator.js";


/**
 * Interface representing the contract for user data access operations.
 */
export interface IUserRepository {
  /**
   * Retrieves all users from the data source.
   * @returns A promise that resolves to an array of User objects.
   */
  findAll(): Promise<SafeUser[]>;

  /**
   * Finds a specific user by their unique ID.
   * @param id - The unique identifier of the user.
   * @returns A promise that resolves to the User object if found, or null otherwise.
   */
  findById(id: number): Promise<SafeUser | null>;

  /**
  * Finds a user by their email address.
  * @param email - The email to search for.
  * @returns A promise that resolves to the User object if found, or null otherwise.
  */
  findByEmail(email: string): Promise<SafeUser | null>;

  /**
  * Finds a user by their email address inculde password in response.
  * @param email - The email to search for.
  * @returns A promise that resolves to the User object if found, or null otherwise.
  */
  findByEmailWithPassword(email: string): Promise<User | null>;

  /**
  * Persists a new user record.
  * @param userData - The data required to create a new user.
  * @returns A promise that resolves to the newly created User object.
  */
  createUser(userData: CreateUserDTO): Promise<SafeUser>;
}
