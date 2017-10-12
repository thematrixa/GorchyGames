import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from '../../welcome/LoginPageComponent/login-page.component';
import {LoginFormComponent} from '../../welcome/LoginFormComponent/login-form.component';
import {RegisterFormComponent} from '../../welcome/RegisterFormComponent/register-form.component';
import {NavMenuWelcomeComponent} from '../../welcome/menuBarWelcome/NavMenuWelcomeComponent/nav-menu-welcome.component';
import {MenuBarWelcomeComponent} from '../../welcome/menuBarWelcome/menu-bar-welcome.component';
import {WelcomeFormComponent} from '../../home/WelcomeFormComponent/welcome-form.component';
import {HomePageComponent} from '../../home/HomePageComponent/home-page.component';

import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'welcome', component: WelcomeFormComponent },
  { path: 'home', component: HomePageComponent },

];


@NgModule({
    declarations:[
        LoginPageComponent,
        LoginFormComponent,
        RegisterFormComponent,
        NavMenuWelcomeComponent,
        MenuBarWelcomeComponent,
    ],
    imports:[
        RouterModule.forRoot(routes),
        FormsModule
    ],
  exports: [LoginPageComponent]
})
export class LoginPageModule {}