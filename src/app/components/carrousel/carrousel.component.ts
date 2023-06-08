import {Component, Input} from '@angular/core';
import {ProjectInterface} from "../../models/project.interface";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  @Input() projects!: ProjectInterface[];
}
