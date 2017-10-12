import {Component} from '@angular/core';
import {User} from '../../shared/user';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  user = {"username":"","password":""};
  
  

}