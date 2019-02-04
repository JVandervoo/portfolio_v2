import { Component, OnInit, Input } from "@angular/core";
import { ProjectItem } from "src/app/models/project-item.model";

@Component({
	selector: "app-project-item",
	templateUrl: "./project-item.component.html",
	styleUrls: ["./project-item.component.scss"],
})
export class ProjectItemComponent implements OnInit {
	@Input()
	item: ProjectItem;

	constructor() {}

	ngOnInit() {
		//console.log(item);
	}
}
