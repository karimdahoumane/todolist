import jwt from 'jsonwebtoken';

export const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_KEY as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}