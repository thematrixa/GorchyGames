import{Component} from '@angular/core';
import{UserService} from '../../../shared/services/user.service';


@Component({
    selector: 'nav-menu-home',
    templateUrl: './nav-menu-home.component.html',
    styleUrls: ['./nav-menu-home.component.css'],
    providers: [UserService],
})

export class NavMenuHomeComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}