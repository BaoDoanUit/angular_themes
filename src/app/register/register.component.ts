import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit(): void {
    
  }

  register():void {
    console.log(this.model);
    if(this.usersFromHomeComponent){
    }
  }
  
  cancel():void {
    this.cancelRegister.emit(false);  
  }

}
