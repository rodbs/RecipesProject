import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputref:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  //@Output('evtIngredientAdded') ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(name, amount){
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);

    //console.log(amount.value);
    //this.ingredientAdded.emit( newIngredient);
    this.shoppinglistService.addIngredient(newIngredient);
    console.log(this.shoppinglistService.ingredients);
  }

}
