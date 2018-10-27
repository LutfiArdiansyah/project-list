import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  status_projects:any;
  loading:boolean = true;
  
  constructor(private services:ServiceService) { }

  ngOnInit() {
    this.priorityProject();
  }

  priorityProject() {
    this.services.getData('list_user').subscribe(response => {
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
