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


  public getTest(): Observable<JsonDemo> {
    return this.httpClient.get<JsonDemo>(`${this.basePath}/test`);

  }
}
