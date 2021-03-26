import { Injectable } from '@angular/core'
import { FileOutput, ReportRequest } from 'src/proto/user.pb'
import { ReportClient } from 'src/proto/user.pbsc'
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'
import { Metadata } from 'grpc-web'
import { MembersService } from './members.service'
import { AccountService } from './account.service'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(
    private reportCLient: ReportClient,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  GetFileTemplate(request: ReportRequest) {
    return this.reportCLient.exportFileAttendance(request, this.authService.getHeaders()).pipe(
      map((reply: FileOutput) => {
        const file = reply.content
        if (!file) {
          this.DownloadFileBytes(file!)
          this.toastr.show('Download Successfull')
        } else {
          this.toastr.error('No data')
        }
      }),
   )
  }

  DownloadFileBytes(data: Uint8Array) {
    var bytes = new Uint8Array(data) // pass your byte response to this constructor
    var blob = new Blob([bytes], { type: 'application/pdf' }) // change resultByte to bytes
    var link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'myFileName.pdf'
    link.click()
  }
}
