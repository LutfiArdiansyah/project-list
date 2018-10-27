import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-tipe-project',
  templateUrl: './add-tipe-project.component.html',
  styleUrls: ['./add-tipe-project.component.css']
})
export class AddTipeProjectComponent implements OnInit {
  id_status_project: string;
  status_projects:any = {id:"",tipe_project_name:""};
  loading:boolean = false;
  f_btn_disabled:boolean = false;
  f_status_name:boolean = false;
  f_submit:boolean = false;
  f_error:boolean = false;

  constructor(private route: ActivatedRoute, private services: ServiceService, private routes: Router, private _location: Location) { }

  ngOnInit() {
  } 

  submit() {
    this.f_btn_disabled = true;
    this.f_status_name = false;
    if (!this.status_projects.tipe_project_name) {
      this.f_status_name = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.services.postData('add_tipe_project',this.status_projects).subscribe(response => {
      if (response.message == 'Data Berhasil Disimpan.') {
        this.f_submit = true;
        setTimeout(()=>{
          this.f_submit = false;
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
