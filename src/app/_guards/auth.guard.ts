import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate, Router, RouterStateSnapshot
} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { UserClient } from 'src/proto/user.pbsc'
import { AuthService } from '../_services/auth.service'
import { MembersService } from '../_services/members.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const user = this.authService.getUser();
    console.log('check can active',user);
    if (user) return true;
    else {
      console.log('check');
      this.toastr.error("You must login to contiune!");
      this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
