import { Injectable } from '@angular/core'
import {
  CanActivate
} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { UserClient } from 'src/proto/user.pbsc'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userClient: UserClient, private toastr: ToastrService) {}
  canActivate(): any {
    console.log('user', localStorage.getItem('user'));
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) return true
    else {
      this.toastr.error("You shall not pass");
      return false;
    }
  }
}