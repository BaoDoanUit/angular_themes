import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { DevicesService } from 'src/app/_services/devices.service'
import { MembersService } from 'src/app/_services/members.service'
import {
  DeviceInfo,
  DeviceRequest,
  PersonReply,
  PersonRequest,
} from 'src/proto/user.pb'

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  public devices$!: Observable<DeviceInfo[]>;
  public deviceRequest = new DeviceRequest()
  
  constructor(
    private deviceService: DevicesService,
  ) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    let request: DeviceRequest = new DeviceRequest();
    request.groupCode = 'stvg';
    this.devices$ = this.deviceService.getDevices(request);
  }

 
}
