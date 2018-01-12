import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../../recipe.model';
 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe:Recipe;
  
  @Output('evtRecipeSelected') recipeSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit()
  }
}
