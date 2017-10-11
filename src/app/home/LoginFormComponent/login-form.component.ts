import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/services/user.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserService],

})
export class LoginFormComponent implements OnInit {

  typedInUser = { "username": "", "password": "" };
  users: User[];
  loggedIn=false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }


  login(): void {
    this.loggedIn = this.userService.login(this.typedInUser);
  }

  logout(): void {
    this.userService.logout();
  }

}