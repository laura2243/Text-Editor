import {Component, OnInit} from '@angular/core';
import {DemoService} from "./services/demo.service";
import {ObservableInput, Subject, takeUntil} from "rxjs";
import {JsonDemo} from "./models/JsonDemo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demoFront';
  testOnClick: JsonDemo | undefined;
  stringdemo: string = "Ceva";
  private httpCancelSubject: Subject<any> = new Subject<any>();

  constructor(private demoService: DemoService) {
  }

  ngOnInit() {

  }

  onClick() {
    this.demoService.getTest()
      .pipe(takeUntil(this.httpCancelSubject))
      .subscribe(resp => {
          this.testOnClick = resp;
          this.stringdemo = this.testOnClick.field;
        }
      )
  }
}
