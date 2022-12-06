import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../../shared/helpers/password-validator";
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  forgotPassword: FormGroup;

  constructor(private userService: UserService, private router: Router, private notification: NotificationService) {
  }

  ngOnInit() {
    this.forgotPassword = new FormGroup({
      username: new FormControl('', Validators.required)
    });
  }

  onClick() {
    const forgotPasswordDate = this.forgotPassword.value;
    const user: User = {
      username: forgotPasswordDate.username,
      email: forgotPasswordDate.username,
      password: ""
    }

    this.userService.forgotPassword(user).pipe().subscribe(response => {
      this.router.navigate(['/log-in']);
    }, error => {
      this.notification.showPopupMessage("Invalid username/password", "OK")
    })
  }


}
