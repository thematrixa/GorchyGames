import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { RedirectService } from '../../../shared/services/redirect.service';


@Component({
  selector: 'nav-menu-home',
  templateUrl: './nav-menu-home.component.html',
  styleUrls: ['./nav-menu-home.component.css'],
})

export class NavMenuHomeComponent {

  loggedIn: boolean;
  constructor(
    private userService: UserService,
    private redirectService: RedirectService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

  logout(): void {
    this.loggedIn = this.authenticationService.logout();
    this.redirectService.redirectToLogin();
  }

}