import { provideRouter, RouterConfig }  from '@angular/router';

import { TasksComponent } from './tasks.component';
import { DashboardComponent } from './dashboard.component';
import { TaskDetailComponent } from './task-detail.component';


const routes: RouterConfig = [
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: TaskDetailComponent
    }

];

export const appRouterProviders = [
    provideRouter(routes)
];
