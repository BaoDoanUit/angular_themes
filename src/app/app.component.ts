import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  constructor(){
  }

  ngOnInit(): void {
    this.getUsers();
  }

  title = 'demo-app';

  getUsers(){
  }
}
