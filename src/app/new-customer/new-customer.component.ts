import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor() { }
 newCustomerForm : FormGroup;
  ngOnInit() {
    this.newCustomerForm = new FormGroup({
      'name' : new FormControl('Ankit'),
      'mobile' : new FormControl('9876543210'),
      'email' : new FormControl('ankit@abc.com'),
      'address' : new FormControl('mansarovar plaza'),
      'file' : new FormControl(null),

    })

  }
  onSubmit() {
    console.log(this.newCustomerForm)
  }

}
