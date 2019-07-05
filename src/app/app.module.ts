import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerPopupComponent } from './customer-popup/customer-popup.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerPopupComponent,
    CardviewComponent,
    ListviewComponent,
    MapviewComponent,
    NewCustomerComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
