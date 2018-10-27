import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  list_projects: any;
  loading: boolean = true;
  f_mobile: boolean = false;
  f_modal: boolean = false;
  project: any;

  constructor(private services: ServiceService) {
    this.f_mobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.f_mobile = true;
    }
  }

  ngOnInit() {
    this.listProject();
  }

  listProject() {
    this.services.getData('task_list').subscribe(response => {
      if (response.status) {
        this.list_projects = response.result;
        this.loading = false;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.list_projects = [];
    this.listProject();
  }

  showModal(data: any) {
    this.project = data;
    this.f_modal = true;
  }

  hideModal() {
    this.f_modal = false;
  }
}
