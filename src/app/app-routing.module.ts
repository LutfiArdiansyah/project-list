import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './body/login/login.component';
import { LandingComponent } from './body/landing/landing.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from 'src/app/body/project-list/project-list.component';
import { ProjectComponent } from './body/project/project.component';
import { TaskListComponent } from './body/task-list/task-list.component';
import { ChartComponent } from './body/chart/chart.component';
import { PriorityProjectComponent } from './body/priority-project/priority-project.component';
import { StatusProjectComponent } from './body/status-project/status-project.component';
import { TipeProjectComponent } from './body/tipe-project/tipe-project.component';
import { EditTaskListComponent } from './body/edit-task-list/edit-task-list.component';
import { AddProjectComponent } from './body/add-project/add-project.component';
import { AddTaskComponent } from './body/add-task/add-task.component';
import { AuthGuard } from './auth/auth.guard';
import { EditStatusProjectComponent } from './body/edit-status-project/edit-status-project.component';
import { AddStatusProjectComponent } from './body/add-status-project/add-status-project.component';
import { AddProjectNameComponent } from './body/add-project-name/add-project-name.component';
import { EditProjectComponent } from './body/edit-project/edit-project.component';
import { AddPriorityProjectComponent } from './body/add-priority-project/add-priority-project.component';
import { EditPriorityProjectComponent } from './body/edit-priority-project/edit-priority-project.component';
import { AddTipeProjectComponent } from './body/add-tipe-project/add-tipe-project.component';
import { EditTipeProjectComponent } from './body/edit-tipe-project/edit-tipe-project.component';
import { ListUserComponent } from './body/list-user/list-user.component';
import { AddUserComponent } from './body/add-user/add-user.component';
import { EditUserComponent } from './body/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent, canActivate: [AuthGuard],children: [
    {path:'project_list',component:ProjectListComponent},
    {path:'add_project',component:AddProjectComponent},
    {path:'task_list',component:TaskListComponent},
    {path:'add_task',component:AddTaskComponent},
    {path:'edit_task_list/:id_project',component:EditTaskListComponent},
    {path:'chart',component:ChartComponent},
    {path:'mst_project',component:ProjectComponent},
    {path:'add_project_name',component:AddProjectNameComponent},
    {path:'edit_project_name/:id_project',component:EditProjectComponent},
    {path:'mst_priority_project',component:PriorityProjectComponent},
    {path:'add_priority_project',component:AddPriorityProjectComponent},
    {path:'edit_priority_project/:id_project',component:EditPriorityProjectComponent},
    {path:'mst_status_project',component:StatusProjectComponent},
    {path:'add_status_project',component:AddStatusProjectComponent},
    {path:'edit_status_project/:id_project',component:EditStatusProjectComponent},
    {path:'mst_tipe_project',component:TipeProjectComponent},
    {path:'add_tipe_project',component:AddTipeProjectComponent},
    {path:'edit_tipe_project/:id_project',component:EditTipeProjectComponent},
    {path:'user',component:ListUserComponent},
    {path:'add_user',component:AddUserComponent},
    {path:'edit_user/:id_project',component:EditUserComponent},
  ] },
  { path: '**',  redirectTo: 'login', pathMatch: 'full'  },
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
