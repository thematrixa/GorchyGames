import { Response, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/services/user.service';
import { RedirectService } from '../../shared/services/redirect.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  user = { "userName": "", "passWord": "" };
  public notRegistered: boolean;
  public errorMessage: string;
  private responseStatus;
  active: boolean;


  constructor(private userService: UserService,
    private redirectService: RedirectService) { }

  ngOnInit(): void {
    this.notRegistered = true;
    this.active = false;
  }

  registerUser() {
    console.log(this.user);
    this.responseStatus = this.userService.registerUser(this.user)
      .subscribe(response => {
        this.notRegistered = false;
        this.toggleProceedButton();
      }, error => {
        this.notRegistered = true;
        this.errorMessage = error.text();

      });
  }

  redirectToLogin(): void {
    this.redirectService.redirectToLogin();
  }

  
  toggleProceedButton():void{
    if(this.active==false){
        this.active = true;
    }
    else{
        this.active=false;
    }
}


}