import { MenuBarHomeModule } from './../../menuBarHome/menu-bar-home.module';
import { TicTacToeComponent } from './../TicTacToeComponent/tic-tac-toe.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from '../../../welcome/LoginPageComponent/login-page.component';
import {LoginFormComponent} from '../../../welcome/LoginFormComponent/login-form.component';
import {RegisterFormComponent} from '../../../welcome/RegisterFormComponent/register-form.component';
import {NavMenuWelcomeComponent} from '../../../welcome/menuBarWelcome/NavMenuWelcomeComponent/nav-menu-welcome.component';
import {MenuBarWelcomeComponent} from '../../../welcome/menuBarWelcome/menu-bar-welcome.component';
import {WelcomeFormComponent} from '../../../home/WelcomeFormComponent/welcome-form.component';
import {HomePageComponent} from '../../../home/HomePageComponent/home-page.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {WelcomePageModule} from '../../../welcome/welcome.module';
import { FormsModule } from '@angular/forms';
import {MenuBarModule} from '../../../welcome/menuBarWelcome/menu-bar.module';
import { TicTacToePageComponent } from './../../../home/TicTacToe/TicTacToePageComponent/tic-tac-toe-page.component';

@NgModule({
    declarations:[
        TicTacToePageComponent,
        TicTacToeComponent,
    ],
    imports:[
        MenuBarHomeModule,
        MenuBarModule,
        RouterModule,
        FormsModule
    ],
  exports: [TicTacToePageComponent]
})
export class TicTacToePageModule {
}