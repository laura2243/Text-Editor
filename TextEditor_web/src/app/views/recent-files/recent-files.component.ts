import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../shared/services/data.service";
import {Router} from "@angular/router";
import {FileService} from "../../shared/services/file.service";
import {Filee} from "../../shared/models/File";

@Component({
  selector: 'app-recent-files',
  templateUrl: './recent-files.component.html',
  styleUrls: ['./recent-files.component.css']
})
export class RecentFilesComponent implements OnInit, OnDestroy {
  constructor(private data: DataService, private router: Router, private fileService: FileService) {
  }

  user: string;
  subscription: Subscription;
  files: Array<Filee>;

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(userMail => {
      this.user = userMail;
    })
    console.log(this.user);

    this.fileService.getFile(this.user as String).pipe().subscribe(response => {
      this.files = response;
    })
  }

  onClick() {
    this.data.changeMessage(this.user);
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
