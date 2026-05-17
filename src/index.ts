import 'dotenv/config';
import { app } from './app.js';
import { APP } from '@/config/config.js';
import { prisma } from '@/config/database.js';


/**
 * Starts the application and ensures database connectivity.
 */
async function bootstrap() {
  try {
    // Optional: Test database connection before starting the server
    await prisma.$connect();
    console.log('🐘 Database connected successfully');

    const server = app.listen(APP.port, () => {
      console.log(`🚀 Server running on http://localhost:${APP.port}`);
    });

    // Handle Graceful Shutdown
    const shutdown = async (signal: string) => {
      console.log(`\nReceived ${signal}. Shutting down gracefully...`);

      server.close(async () => {
        console.log('HTTP server closed.');
        await prisma.$disconnect();
        console.log('Database connection closed.');
        process.exit(0);
      });

      // If server doesn't close in 10s, force shutdown
      setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

bootstrap();