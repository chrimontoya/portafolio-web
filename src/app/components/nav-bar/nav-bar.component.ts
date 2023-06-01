import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuActive } from 'src/app/enums/menu-active.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() buttonActive: EventEmitter<number> = new EventEmitter<number>();
  menuActive = MenuActive.SERVICES;
  menuActiveEnum = MenuActive;

  ngOnInit(): void {
    
  }

  changeMenu(menuActive: number){
    this.menuActive = menuActive;
    this.buttonActive.emit(this.menuActive);
  }

}
