import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './welcome/RegisterFormComponent/register-form.component';
import { LoginFormComponent } from './welcome/LoginFormComponent/login-form.component';
import { WelcomeFormComponent } from './home/WelcomeFormComponent/welcome-form.component';
import { HomePageComponent } from './home/HomePageComponent/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
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