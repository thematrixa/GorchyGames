import{Component} from '@angular/core';
import{UserService} from '../../shared/services/user.service';


@Component({
    selector: 'nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css'],
    providers: [UserService],
})

export class NavMenuComponent {

 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }

}