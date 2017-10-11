import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterFormComponent} from './home/RegisterFormComponent/register-form.component';
import {LoginFormComponent} from './home/LoginFormComponent/login-form.component';
import {WelcomeFormComponent} from './home/WelcomeFormComponent/welcome-form.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'register',  component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'welcome',     component: WelcomeFormComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}