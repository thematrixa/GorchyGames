import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../HomePageComponent/home-page.component';
import { NavMenuHomeComponent } from '../menuBarHome/NavMenuHomeComponent/nav-menu-home.component';
import { ProfilePictureComponent } from '../menuBarHome/ProfilePictureComponent/profile-picture.component';
import { MenuBarHomeComponent } from '../menuBarHome/menu-bar-home.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileInfoComponent } from '../profile/ProfileInfoComponent/profile-info.component';
import { ProfileOptionsComponent } from '../profile/ProfileOptionsComponent/profile-options.component';
import {WelcomeFormComponent} from '../../home/WelcomeFormComponent/welcome-form.component';
import {LoginFormComponent} from '../../welcome/LoginFormComponent/login-form.component';
import {RegisterFormComponent} from '../../welcome/RegisterFormComponent/register-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'welcome', component: WelcomeFormComponent },
  { path: 'home', component: HomePageComponent },

];



@NgModule({
    declarations: [
        HomePageComponent,
        NavMenuHomeComponent,
        ProfilePictureComponent,
        MenuBarHomeComponent,
        ProfileComponent,
        ProfileInfoComponent,
        ProfileOptionsComponent
    ],
    imports:[
        RouterModule,
        RouterModule.forRoot(routes),
    ],
    exports: [HomePageComponent]
})
export class HomePageModule { }