import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private routerService:Router){}

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
    this.routerService.navigate(['/main-cards']);

  }

  onLoginClick() {

  }

  onClearClick() {
    this.email.reset();
    this.password.reset();
  }
}
