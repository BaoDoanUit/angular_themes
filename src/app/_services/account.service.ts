import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { map } from 'rxjs/operators'
import { ResponseState, UserInfo, UserReply } from 'src/proto/user.pb'
import { AccountClient } from 'src/proto/user.pbsc'

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private accountClient: AccountClient,
    private toastr: ToastrService,
  ) {}

  logIn(request: UserInfo) {
    return this.accountClient.signIn(request);
  }
}
