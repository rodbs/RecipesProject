import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import {  } from '@angular/router/src/router_state';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
