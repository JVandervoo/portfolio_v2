import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    url: string = `${API_URL}/projects`;

    constructor(private http: HttpClient) { }

    getProject(id: number) {
        return this.http.get(`${this.url}/${id}`);
    }

    getProjects() {
        return this.http.get(`${this.url}`);
    }
}
