import { Router, Request, Response } from 'express';
import { Recipe } from '../models/recipe';
import IRecipe from '../interfaces/recipe-interface';

class RecipesController {
  public path = '/recipes';
  public router = Router();

  private recipes: IRecipe[] = [
    {
      id: '4bc33129-bc2e-4a75-a32d-ded2263fdc98',
      name: 'Coffee',
      level: 'easy',
      duration: '5 minutes',
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllRecipes);
    this.router.post(this.path, this.createRecipe);
  }

  getAllRecipes = (request: Request, response: Response) => {
    response.send(this.recipes);
  };

  createRecipe = (request: Request, response: Response) => {
    const recipe: IRecipe = request.body;
    this.recipes.push(recipe);
    response.send(recipe);
  };
}

export default RecipesController;
