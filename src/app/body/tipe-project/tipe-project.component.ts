import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-tipe-project',
  templateUrl: './tipe-project.component.html',
  styleUrls: ['./tipe-project.component.css']
})
export class TipeProjectComponent implements OnInit {
  tipe_projects:any;
  loading:boolean = true;

  constructor(private services:ServiceService) { }

  ngOnInit() {
    this.tipeProject();
  }

  tipeProject() {
    this.services.getData('get_mst_tipe_project').subscribe(response => {
      if (response.status) {
        this.tipe_projects = response.result;
        this.loading = false;
      }
    })
  }

  refresh() {
    this.loading = true;
    this.tipe_projects = [];
    this.tipeProject();
  }
}
