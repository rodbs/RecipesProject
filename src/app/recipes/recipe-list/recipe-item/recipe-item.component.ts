import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe} from '../../recipe.model';
 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe:Recipe;
   
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeService.recipeSelected.emit(recipe);
  }
}
