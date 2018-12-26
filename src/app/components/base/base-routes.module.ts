import { Routes } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectDetailsComponent } from '../projects/project-details/project-details.component';
import { ProjectEditComponent } from '../projects/project-edit/project-edit.component';

export const BaseRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "projects",
        component: ProjectsComponent,
    },
    {
        path: "projects/details/:id",
        component: ProjectDetailsComponent
    },
    {
        path: "projects/create",
        component: ProjectEditComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];
