import {Component} from '@angular/core';
import {User} from '../../shared/user';
import{UserService} from '../../shared/services/user.service';
import{RedirectService} from '../../shared/services/redirect.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private userService:UserService,
              private redirectService: RedirectService){}

  user = {"userName":"","passWord":""};
  
  registerUser(){
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(response =>{this.user = response;this.redirectService.redirectToLogin()},error => console.error());

  }
  

}