import{Component} from '@angular/core'
import{UserService} from '../../shared/services/user.service';

@Component({
    selector: 'menu-bar-home',
    templateUrl: './menu-bar-home.component.html',
    styleUrls: ['./menu-bar-home.component.css'],
    providers: [UserService],
})

export class MenuBarHomeComponent {
    
}