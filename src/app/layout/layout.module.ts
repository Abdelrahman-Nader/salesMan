import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material.module';
import { layoutRoutingModule } from './layout.module.routing';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';
import { ClintComponent } from '../component/clint/clint.component';
import { OrderComponent } from '../component/order/order.component';
import { MyProductsComponent } from '../component/my-products/my-products.component';
import { DashbordComponent } from '../dashbord/dashbord.component';

@NgModule({
  declarations: [LayoutComponent,ClintComponent, OrderComponent,MyProductsComponent, DashbordComponent],
  imports: [
    CommonModule,
    MaterialModule,

    layoutRoutingModule,
    RouterModule,
    RouterOutlet,
    SheardModule,
  ],

  exports: [],
})
export class LayoutModule {}
