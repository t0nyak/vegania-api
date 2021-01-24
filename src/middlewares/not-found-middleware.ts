import { Request, Response, NextFunction } from 'express';

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error('Route not found');
  next(error);
};

export default notFoundMiddleware;
