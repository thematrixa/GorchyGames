import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { USERS } from './mock-users';


@Injectable()
export class RedirectService {


    constructor(private router: Router) { }

    redirectToHome(): void {
        this.router.navigate(['/home']);
    }

    redirectToLogin(): void {
        this.router.navigate(['/login']);
    }
    
    redirectToRegister(): void {
        this.router.navigate(['/register']);
    }
    redirectToTicTacToe(): void {
        this.router.navigate(['/tictactoe']);
    }
}