import { RedirectService } from './redirect.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../user';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class AuthenticationService {

    constructor(
        private router: Router,
        private http: Http,
        private redirect: RedirectService
    ) { }

    url: String = 'http://localhost:8080/gorchygames/users';
    private token: string;

    login(typedInUser: User): Observable<any> {
       return this.http.post(this.url + '/login', typedInUser);
    }

    logout(): boolean {
        localStorage.removeItem('currentUser');
        return false;
    }

    storeToken(): void {
        localStorage.setItem('currentUser', this.token);
    }

    setToken(token: string): void {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }


}