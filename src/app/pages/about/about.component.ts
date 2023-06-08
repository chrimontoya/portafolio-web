import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutPath: string = "/about";
  aboutRef!: AngularFirestoreCollection;
  about: any;
  constructor(private db: AngularFirestore) {
    this.aboutRef = db.collection(this.aboutPath);
  }
  ngOnInit(): void {
    this.about = this.aboutRef.get().subscribe({
      next: (res)=>{
        if(!res.empty){
          this.about = res.docs[0].data();
        }else{
          console.error("No se encontraron datos");
        }
      }
    });
  }


}
