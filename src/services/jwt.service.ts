import { JWT } from '@/config/config.js';
import jwt from 'jsonwebtoken';

export class JwtService {
  static generateToken(payload: object): string {
    return jwt.sign(payload, JWT.SECRET, {
      expiresIn: JWT.EXPIRES_IN,
      issuer: JWT.ISSUER,
      audience: JWT.AUDIENCE,
    });
  }

  static verifyToken(token: string) {
    return jwt.verify(token, JWT.SECRET,
      {
        issuer: JWT.ISSUER,
        audience: JWT.AUDIENCE
      }
    );
  }
}
