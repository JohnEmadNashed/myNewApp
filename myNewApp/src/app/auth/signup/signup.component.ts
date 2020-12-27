import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from '../auth.service';

@Component({
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy{

  constructor (public authservice: AuthService){}

  isLoading = false;
  private authStatusSub: Subscription;

  ngOnInit() {
    this.authStatusSub = this.authservice.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

  onSignup(form: NgForm)
  {
    if (form.invalid){
      return;
    }
    this.isLoading = true;
    this.authservice.createUser(form.value.email, form.value.password);
  }
}
