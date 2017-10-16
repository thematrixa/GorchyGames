import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './welcome/RegisterFormComponent/register-form.component';
import { LoginFormComponent } from './welcome/LoginFormComponent/login-form.component';
import { WelcomeFormComponent } from './home/WelcomeFormComponent/welcome-form.component';
import { ProfileInfoComponent } from './home/profile/ProfileInfoComponent/profile-info.component';
import { ProfileOptionsComponent } from './home/profile/ProfileOptionsComponent/profile-options.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ProfilePictureComponent } from './home/menuBarHome/ProfilePictureComponent/profile-picture.component';
import { NavMenuHomeComponent } from './home/menuBarHome/NavMenuHomeComponent/nav-menu-home.component';
import { MenuBarHomeComponent } from './home/menuBarHome/menu-bar-home.component';
import { NavMenuWelcomeComponent } from './welcome/menuBarWelcome/NavMenuWelcomeComponent/nav-menu-welcome.component';
import { MenuBarWelcomeComponent } from './welcome/menuBarWelcome/menu-bar-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/HomePageComponent/home-page.module';
import { LoginPageModule } from './welcome/LoginPageComponent/login-page.module';
import { UserService } from './shared/services/user.service';
import { RedirectService } from './shared/services/redirect.service';
import { RegisterPageModule } from './welcome/RegisterPageComponent/register-page.module';
import {WelcomePageModule} from './welcome/welcome.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFormComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HomePageModule,
    WelcomePageModule,

  ],
  providers: [
    UserService,
    RedirectService,
  ],
  bootstrap: [
    AppComponent,
  ],

})
export class AppModule { }
