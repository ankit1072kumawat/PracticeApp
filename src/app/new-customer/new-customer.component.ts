import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CustomerhttpService } from '../customerhttp.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { empty } from 'rxjs';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  

  constructor(private forthService : CustomerService, private httpService : CustomerhttpService) { }
 newCustomerForm : FormGroup;

  ngOnInit() {
    // this.customers = this.forthService.getData();
    this.newCustomerForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'mobile' : new FormControl(null, [Validators.required , Validators.email]),
      'email' : new FormControl(null, Validators.required),
      'address' : new FormControl(null),
      'file' : new FormControl(null, Validators.required),

    })

  }
  onSubmit() {
    // console.log(this.newCustomerForm)
    let customers ={
      name : this.newCustomerForm.value.name,
    mobile : this.newCustomerForm.value.mobile,
    email : this.newCustomerForm.value.email,
    address : this.newCustomerForm.value.address,
    file : this.newCustomerForm.value.file
    };
    console.log(customers)
    this.httpService.storeCustomers(customers)
    .subscribe(
      (Response) => console.log(Response),
      (error) => console.log(error)
      );
    
    // console.log(customers)
  }

}
