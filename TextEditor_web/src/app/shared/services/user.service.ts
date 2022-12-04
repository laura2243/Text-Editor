import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected basePath = 'http://localhost:8081/user'

  constructor(protected httpClient: HttpClient) {

  }


  public signUp(newUser: User): Observable<any> {
    return this.httpClient.post<User>(`${this.basePath}/signUp`,{ title: 'Sign up' });

  }
}
