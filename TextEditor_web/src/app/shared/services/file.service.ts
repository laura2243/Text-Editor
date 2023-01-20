import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {Filee} from "../models/File";

@Injectable({
  providedIn: 'root'
})
export class FileService {
  protected basePath = 'http://localhost:8081/file'

  constructor(protected httpClient: HttpClient) {

  }

  public saveFile(newFile: Filee): Observable<any> {
    return this.httpClient.post<File>(`${this.basePath}/save`,newFile);
  }

  public getFile(userEmail: String): Observable<any> {
    console.log("Sis " + userEmail);
    return this.httpClient.get<Array<Filee>>(`${this.basePath}/files`);
  }
}
