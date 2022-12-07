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
    return this.httpClient.post<User>(`${this.basePath}/signUp`,newUser);

  }

  public logIn(newUser: User): Observable<any> {
    return this.httpClient.post<User>(`${this.basePath}/logIn`,newUser);
  }

  public forgotPassword(newUser: User): Observable<any> {
    return this.httpClient.post<User>(`${this.basePath}/forgotPassword`,newUser);
  }

  public getAllMails(): Observable<any> {
    return this.httpClient.get<Array<string>>(`${this.basePath}/allMails`);
  }

  public getAllUsername(): Observable<any> {
    return this.httpClient.get<Array<string>>(`${this.basePath}/allUsernames`);
  }
}
