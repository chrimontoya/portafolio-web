import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {ProjectInterface} from "../../models/project.interface";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectPath: string = "/projects";
  projectRef!: AngularFirestoreCollection;
  projects: ProjectInterface[] = [];
  constructor(private db: AngularFirestore) {
    this.projectRef = db.collection(this.projectPath);
  }
  ngOnInit(): void {

    this.projectRef.get().subscribe({
      next: (res)=>{
        if(!res.empty){
          res.forEach( query => this.projects.push(<ProjectInterface>query.data()));
        }
      }
    });

  }

}
