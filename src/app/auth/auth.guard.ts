import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  login: any = null;
  key: string = "Pr073ct";

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.login = localStorage.getItem('logged');
    if (this.login) {
      if (CryptoJs.AES.decrypt(this.login, this.key).toString(CryptoJs.enc.Utf8)) {
        return true;
      } else {
        localStorage.removeItem('logged');
        this.router.navigate(['login']);
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
