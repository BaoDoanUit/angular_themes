import { Component, OnInit } from '@angular/core'
import { ResponseState, UserInfo } from 'src/proto/user.pb'
import { UserClient } from 'src/proto/user.pbsc'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { MembersService } from '../_services/members.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public model: any = {}
  public info = new UserInfo()
  loggedIn: boolean = false
  constructor(
    private memberService: MembersService,
    private router: Router,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.loggedIn = true;
    }
  }
  logIn() {
    console.log('login', this.model)
    this.info.username = this.model.username
    this.info.password = this.model.password
    this.memberService.logIn(this.info).subscribe(
      (res) => {
        console.log(res)
        if (res.response?.state == ResponseState.SUCCESS) {
          localStorage.setItem('user', JSON.stringify(res.info))
          this.loggedIn = true
          this.router.navigateByUrl('/members')
          console.log(res)
        } else {
          this.toastr.warning(res.response?.message)
        }
      },
      (err) => {
        this.toastr.error(err.toString());
      },
    )
  }
  logOut() {
    localStorage.removeItem('user')
    this.loggedIn = false
    this.router.navigateByUrl('/')
  }
  getCurrentUser() {
    return localStorage.getItem('user')
  }
}
