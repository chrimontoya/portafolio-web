import {Component, inject} from '@angular/core';
import {addDoc, collection, collectionData, Firestore, doc, where} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  servicesPath: string = "/services";
  servicesRef!: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.servicesRef = db.collection(this.servicesPath);

    const service = {
      name: 'Portafolio web',
      description: 'Alguna descripción del proyecto',
      date: '07-06-2023'
    }
    // this.servicesRef.doc('2').set(service).then(res => console.log(res));
    //AGREGAR UN DOCUMENTO
    //this.servicesRef.add(service).then(res => console.log(res));
    //TRAER UN DOCUMENTO POR ID
    //this.servicesRef.doc('2').get().subscribe(res =>console.log(res.data()))
    // ACTUALIZAR NOMBRE DE UN DOCUMENTO POR ID
    //this.servicesRef.doc('2').update({name: 'PERRO'}).then(res => console.log(res));
    // ACTUALIZAR UN DOCUMENTO POR ID CON UN DOCUMENTO NUEVO
    //this.servicesRef.doc('2').set({name: 'PERRO'}).then(res => console.log(res));
    // ELIMINAR UN DOCUMENTO POR ID
    //this.servicesRef.doc('2').delete().then(res => console.log(res));

  }
}
