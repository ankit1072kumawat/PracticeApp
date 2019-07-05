import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from "@angular/router";
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers= [];
  
  constructor(private thirdService : CustomerService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.customers = this.thirdService.getData();
    console.log(this.customers);
    // this.route.params.subscribe(params => {
    //   this.customers.forEach((p: CustomerService) => {
    //     if(p.getData('name' : String))
    //   })
    // })
  }

}
