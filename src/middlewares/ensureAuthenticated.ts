import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  const [,token] = authToken.split(' ');

  if (!token) {
    return res.status(401).end();
  }

  try {
    const { sub } = verify(token, process.env.JWT_TOKEN) as IPayload;
        
    req.user_id = sub;
        
    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
