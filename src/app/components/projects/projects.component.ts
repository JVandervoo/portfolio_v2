import { Component, OnInit } from '@angular/core';

import { ProjectItem } from "../../models/project-item.model";
import { ProjectService } from 'src/app/providers/project.service';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projectItems: ProjectItem[] = [];

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getProjects().subscribe((projects: ProjectItem[]) => {
            this.projectItems = projects;
        }, (err) => {
            window.alert(err.message);
        });
    }

}
