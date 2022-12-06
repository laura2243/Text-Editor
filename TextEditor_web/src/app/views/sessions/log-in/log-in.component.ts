import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../../shared/helpers/password-validator";

import {NotificationService} from "../../../shared/services/notification.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private notification: NotificationService) {
  }

  ngOnInit() {

    this.logInForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  onClick() {
    const logInDate = this.logInForm.value;
    const user: User = {
      username: logInDate.username,
      email: logInDate.username,
      password: logInDate.password
    }


    this.userService.logIn(user).pipe().subscribe(response => {
      this.router.navigate(['/home']);
    },error=>{
        this.notification.showPopupMessage("ddd","OK")
    })
  }
}
