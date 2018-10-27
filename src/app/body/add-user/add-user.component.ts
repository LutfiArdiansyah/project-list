import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  id_status_project: string;
  status_projects: any = { nik: "", name: "", job: "" };
  loading: boolean = false;
  f_btn_disabled: boolean = false;
  f_status_name: boolean = false;
  f_job: boolean = false;
  f_submit: boolean = false;
  f_error: boolean = false;
  f_error_nik: boolean = false;
  f_nik: boolean = false;
  items: any = [{ name: 'BA' }, { name: 'DEV' }, { name: 'PMO' }]
  constructor(private route: ActivatedRoute, private services: ServiceService, private routes: Router, private _location: Location) { }

  ngOnInit() {
  }

  submit() {
    this.f_btn_disabled = true;

    this.f_nik = false;
    if (!this.status_projects.nik) {
      this.f_nik = true;
      this.f_btn_disabled = false;
      return false;
    }

    if (this.status_projects.nik.toString().length > 8) {
      this.status_projects.nik = this.status_projects.nik.toString().substring(0, 8);
    }

    this.f_status_name = false;
    if (!this.status_projects.name) {
      this.f_status_name = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.f_job = false;
    if (!this.status_projects.job) {
      this.f_job = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.services.postData('add_user', this.status_projects).subscribe(response => {
      if (response.message == 'Data Berhasil Disimpan.') {
        this.f_submit = true;
        setTimeout(() => {
          this.f_submit = false;
          this.f_btn_disabled = false;
          this._location.back();
        }, 3000);
      } else if (response.message == 'Duplicate NIK.') {
        this.f_error_nik = true;
        setTimeout(() => {
          this.f_btn_disabled = false;
          this.f_error_nik = false;
        }, 3000);
      } else {
        this.f_error = true;
        setTimeout(() => {
          this.f_btn_disabled = false;
          this.f_error = false;
        }, 3000);
      }
    }, error => {
      this.f_error = true;
      setTimeout(() => {
        this.f_btn_disabled = false;
        this.f_error = false;
      }, 3000);
    });
  }

  back() {
    this._location.back();
  }
}
