import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ProjectList, PIC } from '../../entity/project-list';
import { Location } from '@angular/common';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-edit-task-list',
  templateUrl: './edit-task-list.component.html',
  styleUrls: ['./edit-task-list.component.css']
})
export class EditTaskListComponent implements OnInit {
  id_project: string;
  project = new ProjectList;
  projects: any;
  tipe_projects: any;
  status_projects: any;
  pic_dev: PIC[] = [];
  pic_ba: PIC[] = [];
  pic_pmo: PIC[] = [];
  priority_projects: any;
  loading: boolean = true;
  f_update: boolean = false;
  f_error: boolean = false;
  f_project_name: boolean = false;
  f_tipe_project: boolean = false;
  f_status_project: boolean = false;
  f_pic_dev: boolean = false;
  f_btn_disabled: boolean = false;
  key: string = "Pr073ct";

  constructor(private route: ActivatedRoute, private services: ServiceService, private routes: Router, private _location: Location) { }

  ngOnInit() {
    this.id_project = this.route.snapshot.paramMap.get('id_project');
    if (this.id_project) {
      this.getProject();
    } else {
      this._location.back()
    }
  }

  getProject() {
    this.services.postData('list_project', { id_project: this.id_project }).subscribe(response => {
      if (response.status && response.result.length > 0) {
        this.project = response.result[0];
        this.getAllProject();
        this.tipeProject();
        this.statusProject();
        this.getPicDev();
        this.getPicBa();
        this.getPicPmo();
        this.priorityProject();
        this.loading = false;
      } else {
        this._location.back()
      }
    })
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

  getPicDev() {
    this.services.postData('list_user', { job: "DEV" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          let check = false;
          if (this.project.pic_dev.search(element.name) != -1) {
            check = true;
          }
          this.pic_dev.push({ name: element.name, checked: check })
        });
      }
    })
  }

  getPicBa() {
    this.services.postData('list_user', { job: "BA" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          let check = false;
          if (this.project.pic_ba) {
            if (this.project.pic_ba.search(element.name) != -1) {
              check = true;
            }
          }
          this.pic_ba.push({ name: element.name, checked: check })
        });
      }
    })
  }

  getPicPmo() {
    this.services.postData('list_user', { job: "PMO" }).subscribe(response => {
      if (response.status && response.result) {
        response.result.forEach(element => {
          let check = false;
          if (this.project.pic_pmo) {
            if (this.project.pic_pmo.search(element.name) != -1) {
              check = true;
            }
          }
          this.pic_pmo.push({ name: element.name, checked: check })
        });
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

  back() {
    this._location.back()
  }

  editTaskList() {
    let logged = localStorage.getItem('logged');
    let loginAs = CryptoJs.AES.decrypt(logged, this.key).toString(CryptoJs.enc.Utf8);
    this.f_update = false;
    this.f_error = false;
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
    this.project.updated_by = loginAs;
    this.services.postData('update_project', this.project).subscribe(response => {
      if (response.message == 'Project berhasil diupdate') {
        this.f_update = true;
        setTimeout(() => {
          this.f_update = false;
          this.back();
          this.f_btn_disabled = false;
        }, 3000);
      }
    }, error => {
      this.f_error = true;
      setTimeout(() => {
        this.f_error = false;
        this.f_btn_disabled = false;
      }, 3000);
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
}
