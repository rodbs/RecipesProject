import { Component, OnInit, Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output('evtNavClicked') navClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(nav_item:string){      
    this.navClicked.emit(nav_item);
    console.log(nav_item);
  }


}
