import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { Task }        from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tasks: Task[] = [];
    error: any;

    constructor(
        private router: Router,
        private taskService: TaskService) {
    }

    private getTasks(): void {
        this.taskService
            .getTasks()
            .subscribe((data:Task[]) => this.tasks = data,
                error => console.log(error),
                () => this.tasks = this.tasks.slice(1,5));
    }

    ngOnInit() {
        this.getTasks();
    }

    gotoDetail(task: Task) {
        let link = ['/detail', task._id];
        this.router.navigate(link);
    }
}