import dotenv from 'dotenv';
dotenv.config();

export const APP = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export const JWT = {
  SECRET: process.env.JWT_SECRET as string,
  ISSUER: process.env.JWT_ISSUER as string,
  AUDIENCE: process.env.JWT_ISSUER as string,
  EXPIRES_IN: (process.env.JWT_EXPIRES_IN || '1h') as any,
};

