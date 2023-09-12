import { Routes, RouterModule } from '@angular/router';
import { DashbordModule } from './dashbord.module';
import { DashbordComponent } from './dashbord.component';
import { OrderComponent } from '../component/order/order.component';
import { ClintComponent } from '../component/clint/clint.component';

const routes: Routes = [
  {
path: '', component: DashbordComponent,
children :[
  {path: 'dashboard', component:DashbordComponent},
  {path: 'order', component:OrderComponent},
  {path: 'clint', component:ClintComponent},
]

   },
];

export const DashbordRoutes = RouterModule.forChild(routes);
