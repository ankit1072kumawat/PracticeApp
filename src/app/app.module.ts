import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';
import { MapviewComponent } from './mapview/mapview.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerService } from './customer.service';
import { FilteredPipe } from './filtered.pipe';
import { HighlightDirective } from './highlight.directive'
import { HttpClientModule } from '@angular/common/http';
import { CustomerhttpService } from './customerhttp.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CardviewComponent,
    ListviewComponent,
    MapviewComponent,
    NewCustomerComponent,
    AboutComponent,
    LoginComponent,
    FilteredPipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireStorageModule,  
  ],
  providers: [CustomerService,CustomerhttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
