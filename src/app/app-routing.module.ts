import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path : '', redirectTo : '/cardview', pathMatch : 'full'},
  { path : 'cardview', component : CardviewComponent},
  { path : 'listview', component : ListviewComponent},
  { path : 'mapview', component : MapviewComponent},
  { path : 'new-customer', component : NewCustomerComponent},
  { path : 'about', component : AboutComponent},
  { path : 'customer/:name', component : CustomersComponent },
  { path : 'login', component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
