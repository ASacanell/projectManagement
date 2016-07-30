import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'my-tasks',
    templateUrl: 'app/tasks.component.html',
    styleUrls:  ['app/tasks.component.css']
})
export class TasksComponent implements OnInit {
    tasks: Task[] = [];
    selectedTask: Task;
    error: any;

    constructor(
        private router: Router,
        private taskService: TaskService) { }

    ngOnInit() {
        this.getTasks();
    }

    private getTasks(): void {
        this.taskService
            .getTasks()
            .subscribe((data:Task[]) => this.tasks = data,
                error => console.log(error),
                () => console.log('Get all tasks complete'));
    }


    onSelect(task: Task) { this.selectedTask = task; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedTask._id]);
    }
}
