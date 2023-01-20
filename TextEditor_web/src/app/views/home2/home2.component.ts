import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as Editor from 'angular-froala-wysiwyg'
import {FroalaEditorModule} from "angular-froala-wysiwyg";
import {User} from "../../shared/models/User";
import {DataService} from "../../shared/services/data.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileService} from "../../shared/services/file.service";
import {Filee} from "../../shared/models/File";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app2-home',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private data: DataService, private fileService: FileService,
              private activedRoute: ActivatedRoute,
              private router: Router) {
  }

  content: FormGroup;
  user: string;
  subscription: Subscription;
  cont = "<p><strong><span style=\"color:#8e44ad\">Hello, this text is colored</span></strong></p>"

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
