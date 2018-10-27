import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/entity/project-list';
import { ServiceService } from 'src/app/services/service.service';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  key: string = "Pr073ct";
  loginUser = new Login();
  f_fail_login: boolean = false;
  f_empty_login: boolean = false;
  logged: any = null;

  constructor(private router: Router, private services: ServiceService) { }

  ngOnInit() {
    this.logged = localStorage.getItem('logged');
    if (this.logged) {
      if (CryptoJs.AES.decrypt(this.logged, this.key).toString(CryptoJs.enc.Utf8)) {
        this.router.navigate(['landing/chart']);
      }
    }
  }

  login() {
    // this.byPassLogin();
    this.f_empty_login = false;
    if (!this.loginUser.username || !this.loginUser.password) {
      this.f_empty_login = true;
      setTimeout(() => {
        this.f_empty_login = false;
      }, 2000);
      return false;
    }
    this.loginUser.username = this.loginUser.username.toString();
    this.services.postData('login', this.loginUser).subscribe(response => {
      if (response.message == 'login berhasil') {
        localStorage.setItem('logged', CryptoJs.AES.encrypt(this.loginUser.username, this.key));
        localStorage.setItem('userAs', CryptoJs.AES.encrypt(response.result.resultUserProfileHeader.fullname, this.key));
        this.router.navigate(['landing/chart']);
      } else {
        this.f_fail_login = true;
        setTimeout(() => {
          this.f_fail_login = false;
        }, 3000)
      }
    }, error => {
      this.f_fail_login = true;
      setTimeout(() => {
        this.f_fail_login = false;
      }, 3000)
    });
  }

  byPassLogin() {
    localStorage.setItem('logged', CryptoJs.AES.encrypt('15000001', this.key));
    this.router.navigate(['landing/chart']);
  }
}
