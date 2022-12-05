import { Component } from '@angular/core';
import {User} from "../../../shared/models/User";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private userService: UserService, private router: Router) {
  }
    user: User = {
      username: (document.getElementById("inputUsername") as HTMLInputElement)?.value,
      email: (document.getElementById("inputEmail") as HTMLInputElement)?.value,
      password: (document.getElementById("inputPassword") as HTMLInputElement)?.value

  }


  onClick() {
    console.log(this.user);
    console.log((document.getElementsByClassName("input")[0].children[0] )as HTMLElement);
    this.userService.signUp(this.user).pipe().subscribe(response=>{
       this.router.navigate(['/thank-you-page']);
    })
  }
}
