import{Component} from '@angular/core';
import{UserService} from '../../shared/services/user.service';
import{NavMenuWelcomeComponent} from '../../welcome/menuBarWelcome/NavMenuWelcomeComponent/nav-menu-welcome.component';


@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}