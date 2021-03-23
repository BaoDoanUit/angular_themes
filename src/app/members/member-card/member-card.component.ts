import { Component, OnInit, Input } from '@angular/core';
import { DeviceInfo } from 'src/proto/user.pb';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {

  @Input() member: DeviceInfo = new DeviceInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
