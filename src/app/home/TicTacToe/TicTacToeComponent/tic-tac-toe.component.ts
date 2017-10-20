import { Headers } from '@angular/http';
import { AuthenticationService } from './../../../shared/services/authentication.service';
import { UserService } from './../../../shared/services/user.service';
import { Component } from '@angular/core';
import { User } from './../../../shared/user';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectService } from './../../../shared/services/redirect.service';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],

})
export class TicTacToeComponent{

    constructor(private userService: UserService,) { }

}
