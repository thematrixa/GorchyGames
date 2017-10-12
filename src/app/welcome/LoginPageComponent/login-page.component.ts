import{Component} from '@angular/core';
import{UserService} from '../../shared/services/user.service';


@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    providers: [UserService],
})

export class LoginPageComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}