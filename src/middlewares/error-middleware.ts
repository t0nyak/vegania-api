import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  error: { message: string; status: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.status || 500);
  res.json({
    status: 'error',
    message: error.message,
  });
  next();
};

export default errorMiddleware;
