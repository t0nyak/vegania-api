import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): object => {
  return res.json({
    status: 'success',
    message: 'Welcome to Vegania API Rest'
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Route not found');
  next(error);
});

app.use(
  (
    error: { message: string; status: number },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(error.status || 500);
    res.json({
      status: 'error',
      message: error.message
    });
    next();
  }
);

const PORT: any = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Vegania API Rest listening in ${PORT}`));
