import{Component} from '@angular/core';
import{UserService} from '../../../shared/services/user.service';


@Component({
    selector: 'nav-menu-welcome',
    templateUrl: './nav-menu-welcome.component.html',
    styleUrls: ['./nav-menu-welcome.component.css'],
    providers: [UserService],
})

export class NavMenuWelcomeComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}