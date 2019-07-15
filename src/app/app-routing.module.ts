import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Auth/login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  { path : '', redirectTo : '/cardview', pathMatch : 'full'},
  { path : 'cardview', component : CardviewComponent},
  { path : 'listview', component : ListviewComponent},
  { path : 'mapview', component : MapviewComponent},
  { path : 'new-customer', component : NewCustomerComponent},
  { path : 'about', component : AboutComponent},
  // { path : 'customers/:id', component : CustomersComponent },
  { path : 'customers/:key', component : CustomersComponent },
  { path : 'login', component : LoginComponent},
  { path : 'signup', component : SignupComponent},
  { path : 'edit/:id', component : EditCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
