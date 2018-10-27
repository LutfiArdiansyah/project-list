import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-status-project',
  templateUrl: './status-project.component.html',
  styleUrls: ['./status-project.component.css']
})
export class StatusProjectComponent implements OnInit {
  status_projects:any;
  loading:boolean = true;
  
  constructor(private services:ServiceService) { }

  ngOnInit() {
    this.priorityProject();
  }

  priorityProject() {
    this.services.getData('get_mst_status_project').subscribe(response => {
      if (response.status) {
        this.status_projects = response.result;
        this.loading = false;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.status_projects = [];
    this.priorityProject();
  }
}
