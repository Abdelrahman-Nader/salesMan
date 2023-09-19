import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordComponent } from './../dashbord/dashbord.component';
import { OrderComponent } from '../component/order/order.component';
import { ClintComponent } from '../component/clint/clint.component';
import { LayoutComponent } from './layout.component';
import { MyProductsComponent } from '../component/my-products/my-products.component';

const routes: Routes = [
  {
path: '', component: LayoutComponent,
children :[


  {path: 'product', component:MyProductsComponent},
  {path: 'dashbord', component:DashbordComponent},
  {path: 'order', component:OrderComponent},
  {path: 'clint', component:ClintComponent},
]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class layoutRoutingModule {}
