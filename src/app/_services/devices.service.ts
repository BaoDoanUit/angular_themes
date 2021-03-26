import { Injectable } from '@angular/core'
import { DeviceInfo, DeviceReply, DeviceRequest, ResponseState } from 'src/proto/user.pb'
import { DeviceClient } from 'src/proto/user.pbsc'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'
import { AccountService } from './account.service'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  devices: DeviceInfo[] = []
 
  constructor(
    private deviceClient: DeviceClient,
    private authService: AuthService
  ) {}

  getDevices(request: DeviceRequest) {
    console.log(request)
    if (this.devices!.length > 0) {
      return of(this.devices)
    } else {
      return this.deviceClient.getListInfo(request, this.authService.getHeaders()).pipe(
        map((response: DeviceReply) => {
          if(response.response?.state == ResponseState.SUCCESS){
            this.devices = response.data || []
          }
          return this.devices;

        }),
      )
    }
  }

  getDevice(code: string): DeviceInfo {
    const device: DeviceInfo = this.devices.find(d => d.codeDevice == code)!;
    return device;
  }
}
