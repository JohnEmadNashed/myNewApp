import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  isLoading = false;
  constructor (public authservice: AuthService){}

  onSignup(form: NgForm)
  {
    if (form.invalid){
      return;
    }
    this.isLoading = true;
    this.authservice.createUser(form.value.email, form.value.password);
  }
}
