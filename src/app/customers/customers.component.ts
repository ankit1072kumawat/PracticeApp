import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from "@angular/router";
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = [];
  newCustomer = [];
  id;
  constructor(private thirdService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customers = this.thirdService.getData();
    this.id = this.route.snapshot.params.id;

    // this.route.params.subscribe(params => {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == parseInt(this.id)) {
        this.newCustomer.push(this.customers[i]);
      }
    }
    // })
    console.log(this.newCustomer);
    // this.id = this.route.snapshot.params.id;
    // console.log(this.id);
    // this.customer = this.filterData();
    // console.log(this.customer);
  }

  // filterData() {
  //   this.customers.forEach(element => {
  //     if(element.id == parseInt(this.id)){
  //       console.log("element id",element.id)
  //       return element.json();
  //     }
  //   });
  // }

}
