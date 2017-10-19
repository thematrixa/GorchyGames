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
  errorMessage: string;

  constructor(private userService: UserService,
    private redirectService: RedirectService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loading = false;

  }

  login() {
    let token : String;
    this.loading = true;
    this.authenticationService.login(this.typedInUser)
      .subscribe(
        data => {
          this.authenticationService.setToken(data.headers.get('authorization'));
        if (this.authenticationService.getToken() != null) {
            this.authenticationService.storeToken();
            this.redirectService.redirectToHome();
        }
        else {
          this.loading=false;
          this.redirectService.redirectToLogin();
        }

        },
        error => {console.log(error),
            this.loading=false;
            this.errorMessage = "Username or password is incorrect!"
          }
      );
  }
}
