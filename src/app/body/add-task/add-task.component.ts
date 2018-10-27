import { Component, OnInit } from '@angular/core';
import { ProjectList, PIC } from 'src/app/entity/project-list';
import { ServiceService } from 'src/app/services/service.service';
import { Location } from '@angular/common';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  project = new ProjectList;
  projects: any;
  tipe_projects: any;
  status_projects: any;
  pic_dev: PIC[] = [];
  pic_ba: PIC[] = [];
  pic_pmo: PIC[] = [];
  priority_projects: any;
  loading: boolean = true;
  f_submit: boolean = false;
  f_error: boolean = false;
  f_project_name: boolean = false;
  f_tipe_project: boolean = false;
  f_status_project: boolean = false;
  f_pic_dev: boolean = false;
  f_btn_disabled: boolean = false;
  key: string = "Pr073ct";

  constructor(private services: ServiceService, private _location: Location) { }

  ngOnInit() {
    this.getPicDev();
    this.getPicBa();
    this.getPicPmo();
    this.getAllProject();
    this.tipeProject();
    this.statusProject();
    this.priorityProject();
  }

  getAllProject() {
    this.services.getData('list_aplikasi').subscribe(response => {
      if (response.status) {
        this.projects = response.result;
      }
    })
  }

  tipeProject() {
    this.services.getData('get_mst_tipe_project').subscribe(response => {
      if (response.status) {
        this.tipe_projects = response.result;
      }
    })
  }

  statusProject() {
    this.services.getData('get_mst_status_project').subscribe(response => {
      if (response.status) {
        this.status_projects = response.result;
      }
    })
  }

  priorityProject() {
    this.services.getData('get_mst_priority_project').subscribe(response => {
      if (response.status) {
        this.priority_projects = response.result;
      }
    })
  }

  getPicDev() {
    this.services.postData('list_user', { job: "DEV" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          this.pic_dev.push({ name: element.name, checked: false })
        });
      }
    })
  }

  getPicBa() {
    this.services.postData('list_user', { job: "BA" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          this.pic_ba.push({ name: element.name, checked: false })
        });
      }
    })
  }

  getPicPmo() {
    this.services.postData('list_user', { job: "PMO" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          this.pic_pmo.push({ name: element.name, checked: false })
        });
      }
    })
  }

  setPicDev() {
    let pic_dev = '';
    this.pic_dev.forEach(element => {
      if (element.checked) {
        pic_dev = pic_dev + element.name + ',';
      }
    });
    this.project.pic_dev = pic_dev;
  }

  setPicBa() {
    let pic_ba = '';
    this.pic_ba.forEach(element => {
      if (element.checked) {
        pic_ba = pic_ba + element.name + ',';
      }
    });
    this.project.pic_ba = pic_ba;
  }

  setPicPmo() {
    let pic_pmo = '';
    this.pic_pmo.forEach(element => {
      if (element.checked) {
        pic_pmo = pic_pmo + element.name + ',';
      }
    });
    this.project.pic_pmo = pic_pmo;
  }

  addProject() {
    let logged = localStorage.getItem('logged');
    let loginAs = CryptoJs.AES.decrypt(logged, this.key).toString(CryptoJs.enc.Utf8);
    this.f_btn_disabled = true;

    this.f_project_name = false;
    if (!this.project.project_name) {
      this.f_project_name = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.f_tipe_project = false;
    if (!this.project.tipe_project) {
      this.f_tipe_project = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.f_status_project = false;
    if (!this.project.status) {
      this.f_status_project = true;
      this.f_btn_disabled = false;
      return false;
    }

    this.setPicDev();
    this.f_pic_dev = false;
    if (!this.project.pic_dev) {
      this.f_pic_dev = true;
      this.f_btn_disabled = false;
      return false;
    }
    this.setPicBa();
    this.setPicPmo();
    this.project.created_by = loginAs;
    this.project.created_date = new Date().toString();
    this.services.postData('add_project', this.project).subscribe(response => {
      if (response.message == 'Project berhasil ditambahkan') {
        this.f_submit = true;
        setTimeout(() => {
          this.f_submit = false;
          this.f_btn_disabled = false;
          this.back();
        }, 3000);
      } else {
        this.f_error = true;
        setTimeout(() => {
          this.f_error = false;
          this.f_btn_disabled = false;
        }, 3000);
      }
    }, error => {
      this.f_error = true;
      setTimeout(() => {
        this.f_error = false;
        this.f_btn_disabled = false;
      }, 3000);
    });
  }

  toUpperDesc() {
    this.project.descriptions = this.project.descriptions.toUpperCase();
  }

  back() {
    this._location.back()
  }
}
