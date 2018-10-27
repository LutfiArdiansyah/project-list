import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule, ClrFormsNextModule  } from "@clr/angular";
import { LoginComponent } from './body/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';

import { LandingComponent } from './body/landing/landing.component';
import { ProjectListComponent } from './body/project-list/project-list.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './body/task-list/task-list.component';
import { ChartComponent } from './body/chart/chart.component';
import { ProjectComponent } from './body/project/project.component';
import { PriorityProjectComponent } from './body/priority-project/priority-project.component';
import { StatusProjectComponent } from './body/status-project/status-project.component';
import { TipeProjectComponent } from './body/tipe-project/tipe-project.component';
import { EditTaskListComponent } from './body/edit-task-list/edit-task-list.component';
import { AddTaskComponent } from './body/add-task/add-task.component';
import { AddProjectComponent } from './body/add-project/add-project.component';
import { EditStatusProjectComponent } from './body/edit-status-project/edit-status-project.component';
import { AddStatusProjectComponent } from './body/add-status-project/add-status-project.component';
import { EditProjectComponent } from './body/edit-project/edit-project.component';
import { AddProjectNameComponent } from './body/add-project-name/add-project-name.component';
import { AddPriorityProjectComponent } from './body/add-priority-project/add-priority-project.component';
import { EditPriorityProjectComponent } from './body/edit-priority-project/edit-priority-project.component';
import { AddTipeProjectComponent } from './body/add-tipe-project/add-tipe-project.component';
import { EditTipeProjectComponent } from './body/edit-tipe-project/edit-tipe-project.component';
import { ListUserComponent } from './body/list-user/list-user.component';
import { AddUserComponent } from './body/add-user/add-user.component';
import { EditUserComponent } from './body/edit-user/edit-user.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    ProjectListComponent,
    TaskListComponent,
    ChartComponent,
    ProjectComponent,
    PriorityProjectComponent,
    StatusProjectComponent,
    TipeProjectComponent,
    EditTaskListComponent,
    AddTaskComponent,
    AddProjectComponent,
    EditStatusProjectComponent,
    AddStatusProjectComponent,
    EditProjectComponent,
    AddProjectNameComponent,
    AddPriorityProjectComponent,
    EditPriorityProjectComponent,
    AddTipeProjectComponent,
    EditTipeProjectComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/project_list_v3/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
