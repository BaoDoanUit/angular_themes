import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ResponseState, UserInfo, UserReply } from 'src/proto/user.pb'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../_services/auth.service'
import { AccountService } from '../_services/account.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public model: any = {}
  loggedIn: boolean = false
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}
 
  ngOnInit(): void {
    console.log('nav')
    this.loggedIn = this.authService.getUser() ? true : false
  }
  logIn() {
    let user: UserInfo = new UserInfo()
    user.username = this.model.username
    user.password = this.model.password
    this.accountService.logIn(user).subscribe((reply: UserReply) => {
      if (reply.response?.state == ResponseState.SUCCESS) {
        const user = reply.info
        if (user) {
          this.authService.authenticate(user, () => {
            this.loggedIn = true
            this.router.navigateByUrl('/members')
          })
        }
      } else {
        this.toastr.error(reply.response?.message)
      }
    })
  }
  logOut() {
    this.authService.logOut()
    this.loggedIn = false
    this.router.navigateByUrl('/')
  }
  getCurrentUser() {
    return this.authService.getUser();
  }
}
