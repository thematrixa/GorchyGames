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
import {RegisterPageComponent} from '../../../welcome/RegisterPageComponent/register-page.component';
import { FormsModule } from '@angular/forms';
import {WelcomePageModule} from '../../../welcome/welcome.module';

@NgModule({
    declarations:[
        NavMenuWelcomeComponent
    ],
    imports:[
        RouterModule,
    ],
  exports: [NavMenuWelcomeComponent]
})
export class NavMenuModule {}