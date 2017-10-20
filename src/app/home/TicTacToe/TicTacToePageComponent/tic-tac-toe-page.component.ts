import{Component} from '@angular/core';
import{UserService} from '../../../shared/services/user.service';
import{NavMenuWelcomeComponent} from '../../../welcome/menuBarWelcome/NavMenuWelcomeComponent/nav-menu-welcome.component';


@Component({
    selector: 'tic-tac-toe-page',
    templateUrl: './tic-tac-toe-page.component.html',
    styleUrls: ['./tic-tac-toe-page.component.css'],
})

export class TicTacToePageComponent {

 constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}