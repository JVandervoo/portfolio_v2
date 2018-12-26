import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/providers/project.service';
import { ProjectItem } from 'src/app/models/project-item.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

    item: ProjectItem;

    constructor(private router: Router, private projectService: ProjectService) { }

    ngOnInit() {
        this.item = new ProjectItem();
    }

    onSubmit() {
        this.projectService.createProject(this.item).subscribe(id => {
            this.router.navigate(['projects/details', id]);
        }, err => {
            console.log(err);
            window.alert(err.error.errorMessage);
        });
    }


}
