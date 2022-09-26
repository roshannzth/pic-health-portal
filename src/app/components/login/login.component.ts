import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  getErrorMessage() {
    console.log(this.email);
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onFormSubmit(formGroup:FormGroup){
    if(formGroup.valid){
      console.log("Valid form");
    }
    else{
      console.log(formGroup);
    }
  }

  onLoginClick() {

  }

  onClearClick() {
    this.email.reset();
    this.password.reset();
  }
}
