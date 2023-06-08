import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TemplateComponent } from './pages/template/template.component';
import { NavBarLogoComponent } from './components/nav-bar-logo/nav-bar-logo.component';
import { ListServiceComponent } from './components/list-service/list-service.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TemplateComponent,
    NavBarLogoComponent,
    ListServiceComponent,
    ProjectsComponent,
    CarrouselComponent,
    SkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp({   apiKey: "AIzaSyAhgXh7QWtGqmoxjrBEDmuw282rU3IO9EA",
    //   authDomain: "portafolio-8c8ff.firebaseapp.com",
    //   projectId: "portafolio-8c8ff",
    //   storageBucket: "portafolio-8c8ff.appspot.com",
    //   messagingSenderId: "915445864356",
    //   appId: "1:915445864356:web:65656ee71599c47e899331",
    //   measurementId: "G-1P5LDNG689" })),
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp({   apiKey: "AIzaSyAhgXh7QWtGqmoxjrBEDmuw282rU3IO9EA",
      authDomain: "portafolio-8c8ff.firebaseapp.com",
      projectId: "portafolio-8c8ff",
      storageBucket: "portafolio-8c8ff.appspot.com",
      messagingSenderId: "915445864356",
      appId: "1:915445864356:web:65656ee71599c47e899331",
      measurementId: "G-1P5LDNG689" }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
