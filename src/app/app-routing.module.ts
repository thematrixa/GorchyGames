import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './welcome/RegisterFormComponent/register-form.component';
import { RegisterPageComponent } from './welcome/RegisterPageComponent/register-page.component';

import { LoginPageComponent } from './welcome/LoginPageComponent/login-page.component';
import { LoginFormComponent } from './welcome/LoginFormComponent/login-form.component';
import { WelcomeFormComponent } from './home/WelcomeFormComponent/welcome-form.component';
import { HomePageComponent } from './home/HomePageComponent/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'welcome', component: WelcomeFormComponent },
  { path: 'home', component: HomePageComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }