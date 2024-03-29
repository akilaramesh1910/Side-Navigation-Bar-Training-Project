import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { LoadComponent } from './components/load/load.component';
import { MasterListComponent } from './components/master-list/master-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'control-room',component:ControlRoomComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'orders',component:OrdersComponent},
  {path: 'shipments',component:ShipmentsComponent},
  {path: 'load',component:LoadComponent},
  {path: 'master-list',component:MasterListComponent},
  {path: 'reports',component:ReportsComponent},
  {path: 'accounting',component:AccountingComponent},
  {path: 'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
