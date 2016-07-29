import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import './rxjs-extensions';
import { TaskService } from "./task.service";

@Component({
    selector: 'my-app',
    template: `
          <h1>{{title}}</h1>
          <nav>
                <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
                <a [routerLink]="['/tasks']" routerLinkActive="active">Tasks</a>
          </nav>
          <router-outlet></router-outlet>
        `,
    styleUrls:['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        TaskService
    ]
})
export class AppComponent {
    title = 'Project Management App';
}
