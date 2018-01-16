import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 
      'This is a simple test', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png',
      [new Ingredient('Meat',1), new Ingredient('French Fries', 20)]),
    new Recipe('A test recipe2',
     'This is a simple test2', 
     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/702px-Recipe-575434.svg.png',
      [new Ingredient('Buns',2), new Ingredient('Meat', 2)])
  
  ];

  
  getRecipes(){
    return this.recipes.slice();  //slice -> get a copy
  }


  constructor(private shoppinglistService: ShoppingListService){ }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients);
  }
 
}
