import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../../shared/helpers/password-validator";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
  }

  validatePassword() {
    var password = document.getElementById("password") as HTMLInputElement;
    var confirm_password = document.getElementById(
      "repeatPassword"
    ) as HTMLInputElement;

    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity("");
    }
    console.log(password.value);
  }
  ngOnInit() {

    this.signUpForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    }, {validators: passwordValidator});
  }


  onClick() {
    const signUpDate= this.signUpForm.value;
    const user: User = {
      username: signUpDate.username,
      email: signUpDate.email,
      password: signUpDate.password
    }

    console.log(user)

    this.userService.signUp(user).pipe().subscribe(response => {
      this.router.navigate(['/thank-you-page']);
    })
  }
}
