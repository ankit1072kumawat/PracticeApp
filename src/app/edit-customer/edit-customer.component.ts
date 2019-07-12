import { Component, OnInit } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';
import { FormGroup, FormControl, Validators, EmailValidator,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editForm : FormGroup;
  constructor(private editHttp : CustomerhttpService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)] ),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'address': new FormControl(null, Validators.required),
      'file': new FormControl('', Validators.required),

    })

  }
  onSubmit(){

  }

}
