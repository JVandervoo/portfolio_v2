import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { BaseComponent } from './components/base/base.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BurgerMenuComponent,
        BaseComponent,
        AboutComponent,
        ProjectsComponent,
        ProjectItemComponent,
        ContactComponent,
        ProjectDetailsComponent,
        ProjectEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
