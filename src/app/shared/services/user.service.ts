import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

import { User } from '../user';
import { USERS } from './mock-users';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {


  url: String = 'http://localhost:8080/gorchygames/users';
  constructor(private http: Http,
    private authenticationService: AuthenticationService) { };

  getUsers(): Observable<User[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + '/getAll', options).map((response: Response) => response.json());
  }

  login(typedInUser: User): Observable<any> {
    return this.authenticationService.login(typedInUser);
  }

  registerUser(typedInUser: User): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.url + '/add', typedInUser, options)
    
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem("currentUser") === null) {
      return false;
    }
    else {
      return true;
    }
  }

}