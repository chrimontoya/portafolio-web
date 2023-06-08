import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {ServiceInterface} from "../../models/service.interface";
import {captureError} from "rxjs/internal/util/errorContext";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  servicesPath: string = "/services";
  servicesRef!: AngularFirestoreCollection;
  services: ServiceInterface[] = [];

  constructor(private db: AngularFirestore) {
    this.servicesRef = db.collection(this.servicesPath);
  }

  ngOnInit(): void {

    this.servicesRef.get().subscribe({
      next: (res)=>{

        if(!res.empty){
           res.forEach(query =>{
            this.services.push(<ServiceInterface>query.data());
          });
        }else{
          console.error("No existen servicios");
        }

      }
    });

  }



}
