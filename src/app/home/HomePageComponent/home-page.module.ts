import { ProfileModule } from './../profile/profile.module';
import { ProfilePictureModule } from './../menuBarHome/ProfilePictureComponent/profile-picture.module';
import { MenuBarHomeModule } from './../menuBarHome/menu-bar-home.module';
import { NavMenuHomeModule } from './../menuBarHome/NavMenuHomeComponent/nav-menu-home.module';
import { MenuBarHomeComponent } from './../menuBarHome/menu-bar-home.component';
import { CarouselComponent } from './../CarouselComponent/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../HomePageComponent/home-page.component';
import { NavMenuHomeComponent } from '../menuBarHome/NavMenuHomeComponent/nav-menu-home.component';
import { ProfilePictureComponent } from '../menuBarHome/ProfilePictureComponent/profile-picture.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileInfoComponent } from '../profile/ProfileInfoComponent/profile-info.component';
import { ProfileOptionsComponent } from '../profile/ProfileOptionsComponent/profile-options.component';
import {WelcomeFormComponent} from '../../home/WelcomeFormComponent/welcome-form.component';
import {LoginFormComponent} from '../../welcome/LoginFormComponent/login-form.component';
import {RegisterFormComponent} from '../../welcome/RegisterFormComponent/register-form.component';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        HomePageComponent,
        CarouselComponent,
    ],
    imports:[
        ProfileModule,
        ProfilePictureModule,
        MenuBarHomeModule,
        AppRoutingModule,
        FormsModule,
    ],
    exports: [HomePageComponent,MenuBarHomeComponent]
})
export class HomePageModule { }