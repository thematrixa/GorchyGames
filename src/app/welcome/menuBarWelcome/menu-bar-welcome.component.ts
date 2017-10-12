import{Component} from '@angular/core'
import{UserService} from '../../shared/services/user.service';

@Component({
    selector: 'menu-bar-welcome',
    templateUrl: './menu-bar-welcome.component.html',
    styleUrls: ['./menu-bar-welcome.component.css'],
    providers: [UserService],
})

export class MenuBarWelcomeComponent {
    
}