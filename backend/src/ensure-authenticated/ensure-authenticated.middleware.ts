import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class SessionValidatorMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await this.authService.validateToken(token);

    
    next();
  }
}
