import { Injectable } from '@angular/core'
import { DeviceInfo, DeviceReply, DeviceRequest } from 'src/proto/user.pb'
import { DeviceClient } from 'src/proto/user.pbsc'
import { of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  devices: DeviceInfo[] = [];

  constructor(private deviceClient: DeviceClient) {}

  getDevices(request: DeviceRequest) {
    console.log(request);
    if (this.devices!.length > 0) return of(this.devices)
    return this.deviceClient.getListInfo(request).pipe(
      map((response: DeviceReply) => {
        console.log('get devices');
        this.devices = response.data || []
        return this.devices;
      }),
    );
  }

  getDevice(code: string) {
    return this.devices.find(d => d.codeDevice == code);
  }
}
