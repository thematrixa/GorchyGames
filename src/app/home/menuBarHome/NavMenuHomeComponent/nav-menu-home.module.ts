import { NavMenuHomeComponent } from './nav-menu-home.component';

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
       NavMenuHomeComponent,
    ],
    imports:[
        FormsModule,
        RouterModule,
        FormsModule
    ],
  exports: [NavMenuHomeComponent]
})
export class NavMenuHomeModule {
}