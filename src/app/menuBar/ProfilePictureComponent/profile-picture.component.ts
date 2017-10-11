import{Component} from '@angular/core'
import{UserService} from '../../shared/services/user.service';

@Component({
    selector: 'profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.css'],
    providers: [UserService],
})

export class ProfilePictureComponent {

 
 loggedIn:boolean;
 constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedIn = this.userService.isLoggedIn();
  }


}