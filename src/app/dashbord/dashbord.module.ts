import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { ClintComponent } from '../component/clint/clint.component';
import { OrderComponent } from '../component/order/order.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    DashbordComponent,
    ClintComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MaterialModule
  ]
})
export class DashbordModule { }
