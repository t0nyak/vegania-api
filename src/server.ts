import App from './app';
import RecipesController from './controllers/recipes-controller';

const app = new App([new RecipesController()], 3000);

app.listen();
