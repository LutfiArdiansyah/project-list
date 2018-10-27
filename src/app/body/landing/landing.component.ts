import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  key: string = "Pr073ct";
  logged:any;
  loginAs:any;
  f_mobile: boolean = false;

  constructor(private router: Router) {
    this.logged = localStorage.getItem('userAs');
    if (!this.logged) {
      this.logged = localStorage.getItem('logged');
      this.loginAs = CryptoJs.AES.decrypt(this.logged, this.key).toString(CryptoJs.enc.Utf8);
    } else {
      this.loginAs = CryptoJs.AES.decrypt(this.logged, this.key).toString(CryptoJs.enc.Utf8);
    }
    this.f_mobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.f_mobile = true;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['../login']);
  }
}
