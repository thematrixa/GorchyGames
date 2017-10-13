import{Component} from '@angular/core';
import{UserService} from '../../shared/services/user.service';


@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css'],
})

export class RegisterPageComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}