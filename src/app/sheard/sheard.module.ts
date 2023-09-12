import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    SidnavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],

  exports: [
    NavbarComponent,
    SidnavComponent
  ]
})
export class SheardModule { }