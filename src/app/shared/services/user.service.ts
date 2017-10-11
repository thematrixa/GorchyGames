import { Injectable } from '@angular/core';

import { User } from '../user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  login(typedInUser: User): boolean {
    console.log(typedInUser," Service");
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

  logout(): void {
    localStorage.removeItem('currentUser');
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