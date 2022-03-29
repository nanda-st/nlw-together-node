/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;
  console.log(req.headers);

  const userRepository = getCustomRepository(UserRepository);

  const { admin } = await userRepository.findOne(user_id);
  console.log(admin);

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: 'Unauthorized',
  });
}
