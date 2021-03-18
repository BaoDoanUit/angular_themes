import { Component, OnInit } from '@angular/core'
import { ResponseState, UserInfo } from 'src/proto/user.pb'
import { UserClient } from 'src/proto/user.pbsc'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
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
    private userClient: UserClient,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {}
  logIn() {
    console.log('login', this.model)
    this.info.username = this.model.username
    this.info.password = this.model.password
    this.userClient.logIn(this.info).subscribe(
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
        alert(err)
        this.toastr.error(err)
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
