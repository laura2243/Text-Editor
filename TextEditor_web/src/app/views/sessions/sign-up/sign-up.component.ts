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

  ngOnInit() {

    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [Validators.required])
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
