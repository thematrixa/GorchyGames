import { NavMenuHomeModule } from './NavMenuHomeComponent/nav-menu-home.module';
import { NavMenuHomeComponent } from './NavMenuHomeComponent/nav-menu-home.component';
import { ProfilePictureModule } from './ProfilePictureComponent/profile-picture.module';
import { MenuBarHomeComponent } from './menu-bar-home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
       MenuBarHomeComponent
    ],
    imports:[
        ProfilePictureModule,
        NavMenuHomeModule,
        FormsModule,
        RouterModule,
        FormsModule
    ],
  exports: [MenuBarHomeComponent]
})
export class MenuBarHomeModule {
}