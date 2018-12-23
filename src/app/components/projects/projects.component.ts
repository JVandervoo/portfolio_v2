import { Component, OnInit } from '@angular/core';
import { ProjectItem } from "../../models/project-item.model";


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projectItems: ProjectItem[] = [
        {
            title: 'Project 1',
            img: '../../../assets/imgs/projects/project1.jpg',
            git: '#',
        },
        {
            title: 'Project 2',
            img: '../../../assets/imgs/projects/project2.jpg',
            git: '#',
        },
        {
            title: 'Project 3',
            img: '../../../assets/imgs/projects/project3.jpg',
            git: '#',
        },
        {
            title: 'Project 4',
            img: '../../../assets/imgs/projects/project4.jpg',
            git: '#',
        },
        {
            title: 'Project 5',
            img: '../../../assets/imgs/projects/project5.jpg',
            git: '#',
        },

    ];

    constructor() { }

    ngOnInit() {

    }

}
