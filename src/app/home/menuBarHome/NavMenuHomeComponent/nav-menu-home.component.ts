import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { RedirectService } from '../../../shared/services/redirect.service';


@Component({
  selector: 'nav-menu-home',
  templateUrl: './nav-menu-home.component.html',
  styleUrls: ['./nav-menu-home.component.css'],
  providers: [UserService],
})

export class NavMenuHomeComponent {

  loggedIn: boolean;
  constructor(
    private userService: UserService,
    private redirectService: RedirectService
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

  logout(): void {
    this.loggedIn = this.userService.logout();
    console.log(this.loggedIn);
    this.redirectService.redirectToLogin();
  }

}