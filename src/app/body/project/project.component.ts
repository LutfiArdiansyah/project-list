import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:any;
  loading:boolean = true;

  constructor(private services:ServiceService) { }

  ngOnInit() {
    this.project();
  }

  project() {
    this.services.getData('list_aplikasi').subscribe(response => {
      if (response.status) {
        this.projects = response.result;
        this.loading = false;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.projects = [];
    this.project();
  }
}
