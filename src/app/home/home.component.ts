import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {userName: 'New'},
      {userName: 'Old'}
    ]
  }

  registerToggle():void{
    this.registerMode = true;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
