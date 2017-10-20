import { ProfileComponent } from './profile.component';
import { ProfileOptionsComponent } from './ProfileOptionsComponent/profile-options.component';
import { ProfileInfoComponent } from './ProfileInfoComponent/profile-info.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
       ProfileInfoComponent,
       ProfileOptionsComponent,
       ProfileComponent,
    ],
    imports:[
        FormsModule,
        RouterModule,
        FormsModule
    ],
  exports: [ProfileComponent]
})
export class ProfileModule {
}