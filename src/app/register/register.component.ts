import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userModel:UserModel;
  constructor() { 
    this.userModel =<UserModel>{};
  }

  ngOnInit() {
  }

  registerUser(){
  //ONEWAY
   /* this.userModel.name=f.userName;
    this.userModel.age=f.userAge;
    this.userModel.gender=f.userGender;
    this.userModel.cellphone=f.userCellphone;*/

    console.log(this.userModel);
  }

}
