import { ProfilePictureComponent } from './profile-picture.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
       ProfilePictureComponent
    ],
    imports:[
        FormsModule,
        RouterModule,
        FormsModule
    ],
  exports: [ProfilePictureComponent]
})
export class ProfilePictureModule {
}