import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RegisterFormComponent} from './home/RegisterFormComponent/register-form.component';
import {LoginFormComponent} from './home/LoginFormComponent/login-form.component';
import {WelcomeFormComponent} from './home/WelcomeFormComponent/welcome-form.component';
import {ProfileInfoComponent} from './profile/ProfileInfoComponent/profile-info.component';
import {ProfileOptionsComponent} from './profile/ProfileOptionsComponent/profile-options.component';
import{ProfileComponent} from './profile/profile.component';
import{ProfilePictureComponent} from './menuBar/ProfilePictureComponent/profile-picture.component';
import{NavMenuComponent} from './menuBar/NavMenuComponent/nav-menu.component';
import{MenuBarComponent} from './menuBar/menu-bar.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginFormComponent,
    WelcomeFormComponent,
    ProfileOptionsComponent,
    ProfileInfoComponent,
    ProfileComponent,
    ProfilePictureComponent,
    NavMenuComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
