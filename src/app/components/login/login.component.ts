import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string=""
  constructor() { }

  changePropValue(){
    this.userName = (Math.random() * 100).toString();
  }

  onFormSubmit(formGroup:FormGroup){
    if(formGroup.valid){
      console.log("Valid form");
    }
    else{
      console.log(formGroup);
    }
  }

}
