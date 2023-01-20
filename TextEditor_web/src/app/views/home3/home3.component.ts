import { Component } from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {FileService} from "../../shared/services/file.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Filee} from "../../shared/models/File";

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component {

  constructor(private data: DataService, private fileService: FileService,
              private activedRoute: ActivatedRoute,
              private router: Router) {
  }

  content: FormGroup;
  user: string;
  subscription: Subscription;
  cont = "Hello"

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(userMail => this.user = userMail)
    console.log(this.user);

    this.content = new FormGroup({
      contentFile: new FormControl(this.cont),

    });

  }


  saveFile() {
    const logInDate = this.content.value;
    console.log(logInDate.contentFile)

    const newFile: Filee = {
      userEmail: this.user,
      content: logInDate.contentFile,
      fileName: "file"
    }

    this.fileService.saveFile(newFile).subscribe(response => {
      console.log(logInDate.contentFile)
    },error=>{
      console.log("error")
    })
  }

}
