import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ProjectItem } from '../models/project-item.model';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    url: string = `${API_URL}/projects`;

    constructor(private http: HttpClient) { }

    getProject(id: number): Observable<ProjectItem> {
        return this.http.get<ProjectItem>(`${this.url}/${id}`);
    }
    getProjects(): Observable<ProjectItem[]> {
        return this.http.get<ProjectItem[]>(`${this.url}`);
    }
    createProject(item: ProjectItem) {
        return this.http.post<any>(`${this.url}`, item);
    }
}
