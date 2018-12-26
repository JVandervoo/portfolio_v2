import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectItem } from 'src/app/models/project-item.model';
import { ProjectService } from 'src/app/providers/project.service';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

    id: number;
    item: ProjectItem;

    constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.projectService.getProject(this.id).subscribe(project => {
                this.item = project[0];
                console.log(this.item);
            });

        });

    }



}
