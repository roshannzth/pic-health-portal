import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts.services';

/** @title Form field with error messages */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  constructor(private routerService:Router, private accService:AccountsService){}

  getErrorMessage() {
    console.log(this.email);
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onFormSubmit(formGroup:FormGroup){
    // if(formGroup.valid){
    //   console.log("Valid form");
    // }
    // else{
    //   console.log(formGroup);
    // }
    console.log("Form submitted");

    this.accService.validateCredentials("tom", "tom@123").subscribe(
      (result)=>{
        console.log(result);  //success callback
      },
       (error)=>{
        console.log(error);   //error callback
       },
        ()=>{
          console.log("request completed"); //completion callback
        });

    this.routerService.navigate(['/main-cards']);

  }

  onLoginClick() {

  }

  onClearClick() {
    this.email.reset();
    this.password.reset();
  }
}
