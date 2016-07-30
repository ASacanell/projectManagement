import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Task } from './task';
import './rxjs-extensions';

@Injectable()
export class TaskService {
    constructor (private http: Http) {}
    private serverUrl = 'http://localhost:3000';
    private apiUrl = '/api/v1/tasks';
    private url = this.serverUrl + this.apiUrl;

    public getTasks = (): Observable<Task[]> => {
        return this.http.get(this.url)
            .map((response: Response) => <Task[]>response.json());
    };

    public getTask = (id: number): Observable<Task> => {
        console.log(this.url + '/' + id);
        return this.http.get(this.url + '/' + id)
            .map((response: Response) => <Task>response.json());
    };
}
