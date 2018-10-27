import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  id_status_project: string;
  status_projects:any = null;
  loading:boolean = false;
  f_btn_disabled:boolean = false;
  f_status_name:boolean = false;
  f_update:boolean = false;
  f_error:boolean = false;

  constructor(private route: ActivatedRoute, private services: ServiceService, private routes: Router, private _location: Location) { }

  ngOnInit() {
    this.id_status_project = this.route.snapshot.paramMap.get('id_project');
    if (this.id_status_project) {
      this.loading = true;
      this.services.postData('list_aplikasi',{id_aplikasi:parseInt(this.id_status_project)}).subscribe(response => {
        if (response.result.length > 0) {
          this.status_projects = response.result[0];
          this.loading = false;
        } else {
          this._location.back();
        }
      });
    } else {
      this._location.back();
    }
  } 

  edit() {
    this.f_btn_disabled = true;
    this.f_status_name = false;
    if (!this.status_projects.nama_aplikasi) {
      this.f_status_name = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.services.postData('update_project_name',this.status_projects).subscribe(response => {
      if (response.message == 'Update sukses.') {
        this.f_update = true;
        setTimeout(()=>{
          this.f_update = false;
          this.f_btn_disabled = false;
          this._location.back();
        },3000);
      } else {
        this.f_error = true;
        setTimeout(()=>{
          this.f_btn_disabled = false;
          this.f_error = false;
        },3000);
      }
    },error => {
      this.f_error = true;
        setTimeout(()=>{
          this.f_btn_disabled = false;
          this.f_error = false;
        },3000);
    });
  }

  back() {
    this._location.back();
  }
}
