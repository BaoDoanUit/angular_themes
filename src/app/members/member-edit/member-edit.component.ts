import { Component, HostListener, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { BusyService } from 'src/app/_services/busy.service'
import { UserInfo, UserRequest } from 'src/proto/user.pb'
import { DeviceClient, UserClient } from 'src/proto/user.pbsc'
import { delay, finalize } from 'rxjs/operators'
@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm!: NgForm
  user!: UserInfo
  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: any,
  ) {
    if (this.editForm.dirty) {
      $event.returnValue = true
    }
  }

  constructor(
    private userClient: UserClient,
    private toastr: ToastrService,
    private busyService: BusyService,
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!)
    console.log(this.user)
  }

  updateUser() {
    const userInfo = new UserInfo()
    userInfo.username = 'stvg'
    userInfo.password = 'stvg'
    this.busyService.busy()
    this.userClient
      .logIn(userInfo)
      .pipe(
        delay(1000),
        finalize(() => {
          this.busyService.idle()
        }),
      )
      .subscribe((res) => {
        console.log('stvg', res)
        this.user = res.info!
        if (res.info?.codeuser == 'stvg') {
          this.toastr.success('Update profile sucess')
        }
      })
    this.editForm.reset(this.user)
  }
}
