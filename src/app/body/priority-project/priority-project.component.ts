import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-priority-project',
  templateUrl: './priority-project.component.html',
  styleUrls: ['./priority-project.component.css']
})
export class PriorityProjectComponent implements OnInit {
  priority_projects:any;
  loading:boolean = true;

  constructor(private services:ServiceService) { }

  ngOnInit() {
    this.priorityProject();
  }

  priorityProject() {
    this.services.getData('get_mst_priority_project').subscribe(response => {
      if (response.status) {
        this.priority_projects = response.result;
        this.loading = false;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.priority_projects = [];
    this.priorityProject();
  }
}
