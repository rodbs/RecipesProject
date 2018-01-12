import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav_selected;
  isRecipesSelect= true;
  isShoppingListSelected = false;

  onNavigate(nav_selected: string){
    this.nav_selected = nav_selected;
  }
   

}

