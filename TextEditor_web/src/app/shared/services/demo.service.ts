import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JsonDemo} from "../models/JsonDemo";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  protected basePath = 'http://localhost:8081/testare'

  constructor(protected httpClient: HttpClient) {

  }


  public getTest(): Observable<Array<JsonDemo>> {
    return this.httpClient.get<Array<JsonDemo>>(`${this.basePath}/test`);

  }
}
