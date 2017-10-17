import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { RedirectService } from '../../shared/services/redirect.service';
import {Observable} from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {
  loading:boolean;
  typedInUser = { "userName": "", "passWord": "" };
  users: User[];
  loggedIn = false;
  user : User;

  constructor(private userService: UserService,
    private redirectService: RedirectService) { }

  ngOnInit(): void {
    this.loading = false;
  }

  login() {
    this.loading=true;
    this.userService.login(this.typedInUser).subscribe(
        data =>{this.user = data;
                this.loading=false;
                this.redirectService.redirectToHome();
        },error => console.error());
  }

  logout(): void {
    this.loggedIn = this.userService.logout();
  }

}