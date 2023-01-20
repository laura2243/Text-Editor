import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../../shared/helpers/password-validator";

import {NotificationService} from "../../../shared/services/notification.service";
import {RecentFilesComponent} from "../../recent-files/recent-files.component";
import {DataService} from "../../../shared/services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;
  constructor(private userService: UserService, private router: Router, private notification: NotificationService,
              private data: DataService) {
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
    this.data.changeMessage(user.email);
    console.log(user)

    this.userService.logIn(user).pipe().subscribe(response => {
      this.router.navigate(['/recent-files']);
    }, error => {
      this.notification.showPopupMessage("Username or password incorrect", "OK")
    })
  }
}
