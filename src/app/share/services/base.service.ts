import { Injectable } from '@angular/core';
import {environment} from "../../../environment/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndPoint: string="/resources";
  httpOptions ={
    header: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  private resourcePath(): string{
    return `${this.basePath}${this.resourceEndPoint}`;
  }



  getAll(): Observable<any[]>{
    return this.http.get<any[]>('server/db.json');
  }

}
