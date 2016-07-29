import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'my-task-detail',
    templateUrl: 'app/task-detail.component.html',
    styleUrls: ['app/task-detail.component.css']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
    task: Task;
    sub: any;
    navigated = false;

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getTask();
    }

    private getTask(): void {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                this.navigated = true;
                this.taskService
                    .getTask(params['id'])
                    .subscribe((data:Task) => this.task = data,
                        error => console.log(error, params['id']));
            }else{
                console.log("No entro");
                this.navigated = false;
                this.task = new Task();
            }

        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
