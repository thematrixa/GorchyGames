import{Component} from '@angular/core'
import{UserService} from '../shared/services/user.service';

@Component({
    selector: 'menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrls: ['./menu-bar.component.css'],
    providers: [UserService],
})

export class MenuBarComponent {
    
}