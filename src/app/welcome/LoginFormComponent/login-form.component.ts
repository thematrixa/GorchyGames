import { Headers } from '@angular/http';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { UserService } from './../../shared/services/user.service';
import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from '../../shared/services/redirect.service';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {
  
  loading: boolean;
  typedInUser = { "userName": "", "passWord": "" };
  headers : Headers;

  constructor(private userService: UserService,
    private redirectService: RedirectService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loading = false;

  }

  login() {
    this.loading = true;
    this.userService.login(this.typedInUser)
      .subscribe(
      data => {this.headers = data.headers;
        console.log(data.headers);
        console.log(this.headers);
        console.log();
          // if(this.token!=null){/
              // localStorage.setItem('currentUser',this.token);
          // }
        this.loading = false;
        this.redirectService.redirectToHome();
      }, error => console.error());
  }
}