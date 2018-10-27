import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  list_projects: any;
  loading: boolean = true;
  f_mobile: boolean = false;
  f_modal: boolean = false;
  project:any;

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
    this.services.getData('list_project').subscribe(response => {
      if (response.status) {
        this.loading = false;
        this.list_projects = response.result;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.list_projects = [];
    this.listProject();
  }

  showModal(data:any) {
    this.project = data;
    this.f_modal= true;
  }

  hideModal() {
    this.f_modal= false;
  }
}
