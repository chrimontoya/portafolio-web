import { Component } from '@angular/core';
import { MenuActive } from 'src/app/enums/menu-active.enum';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  menuActive: number = 1;
  menuActiveEnum = MenuActive;

  getMenuActive(menuActive: number){
    this.menuActive = menuActive;
    console.log(menuActive);
  }




}
