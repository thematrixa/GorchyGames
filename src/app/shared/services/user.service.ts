import { Injectable } from '@angular/core';

import { User } from '../user';
import { USERS } from './mock-users';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {


  url: String = 'http://localhost:8080/gorchygames/users';
  constructor(private http: Http) { };

  getUsers(): Observable<User[]> {
    return this.http.get(this.url + '/getAll').map((response: Response) => response.json());
  }

  login(typedInUser: User): Observable<User>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params = params.append('user', 'typedInUser');

    return this.http.post(this.url + '/login',typedInUser).map(response => response.json());
  }

  registerUser(typedInUser: User): Observable<User>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.url+'/add',typedInUser).map(response => response.json());
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  logout(): boolean {
    localStorage.removeItem('currentUser');
    return false;
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