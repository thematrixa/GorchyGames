import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { RedirectService } from '../../shared/services/redirect.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {

  typedInUser = { "username": "", "password": "" };
  users: User[];
  loggedIn = false;
  user : User;

  constructor(private userService: UserService,
    private redirectService: RedirectService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

  login(): void {
    this.userService.login(this.typedInUser).subscribe(data =>{this.user = data},error => console.error());
    //console.log(this.loggedIn);
    if(this.user!=null){
      this.loggedIn = true;
    }
    if (this.loggedIn) {
      this.redirectService.redirectToHome();
    }
  }

  logout(): void {
    this.loggedIn = this.userService.logout();
  }

}