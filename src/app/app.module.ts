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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
