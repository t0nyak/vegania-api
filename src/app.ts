import express, { Application } from 'express';
import morgan from 'morgan';

// Import routes
import recipeRoutes from './routes/recipes';

// Import middlewares
import notFoundMiddleware from './middlewares/not-found-middleware';
import errorMiddleware from './middlewares/error-middleware';

class App {
  public app: Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewaresPreControllers();
    this.initializeControllers(controllers);
    this.initializeMiddlewaresPostControllers();
  }

  private initializeMiddlewaresPreControllers() {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  private initializeMiddlewaresPostControllers() {
    this.app.use(notFoundMiddleware);
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Vegania API Rest listening in ${this.port}`);
    });
  }
}

// const app: Application = express();

//app.use(express.json());

// app.get('/', (req: Request, res: Response): object => {
//   return res.json({
//     status: 'success',
//     message: 'Welcome to Vegania API Rest',
//   });
// });

//app.use('/recipes', recipeRoutes);

// Middlewares
// app.use(loggerMiddleware);
// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

const PORT: any = process.env.PORT || 3000;

//app.listen(PORT, () => console.log(`Vegania API Rest listening in ${PORT}`));

export default App;
