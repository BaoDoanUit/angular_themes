import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
// import { Metadata } from 'grpc';
import { Metadata } from 'grpc-web'
import { UserInfo } from 'src/proto/user.pb'
import {LocalStorageService} from 'ngx-localstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  header!: Metadata
  getHeaders() {
    this.header = {
      Authorization: 'Bearer ' + this.getUser().token,
    }
    return this.header
  }
  constructor(private router: Router, private localStorage: LocalStorageService ) {}
  authenticate(user: UserInfo, next: Function) {
    this.localStorage.set('user', user);
    next();
  }
  
  logOut() {
    console.log('clear data');
    this.localStorage.remove('user');
    this.router.navigateByUrl('/home');
  }

  getUser(): UserInfo{
    return this.localStorage.get('user');
  }
}
