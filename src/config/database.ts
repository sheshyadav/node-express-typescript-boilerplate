import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { APP } from './config.js';

/**
 * Singleton class to manage the Prisma database connection.
 */
class PrismaService {
  private static instance: PrismaClient;
  private constructor() { }

  /**
   * Returns a single instance of PrismaClient.
   * Configured with logging for development environments.
   */
  public static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      // 1. Setup the MySQL Connection Pool
      const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string);
      // 2. Initialize PrismaClient
      PrismaService.instance = new PrismaClient({
        adapter,
        log: APP.nodeEnv === 'development' ? ['query', 'error', 'warn'] : ['error'],
        errorFormat: 'pretty',
      });
    }
    return PrismaService.instance;
  }
}

// Export a single instance to be used throughout the app
const prisma = PrismaService.getInstance();
export { prisma };
