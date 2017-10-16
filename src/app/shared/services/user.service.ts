import { Injectable } from '@angular/core';

import { User } from '../user';
import { USERS } from './mock-users';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  
  url : String = 'http://localhost:8080';
  constructor(private http: Http){};

  getUsers(): Observable<User[]> {
    return this.http.get(this.url + '/getAll').map((response:Response) => response.json());
  }

  login(typedInUser: User): Observable<User> {
    this.getUsers().then((users: User[]) => {
      // users
      //   .filter((user) => user.username == typedInUser.username &&  user.password == typedInUser.password)
      //   .map(user => localStorage.setItem('currentUser', JSON.stringify(user)));
      for (let user of users) {
        if (typedInUser.username == user.username && typedInUser.password == user.password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }
    }).catch(this.handleError);
      return this.isLoggedIn();
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