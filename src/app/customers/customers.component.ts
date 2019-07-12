import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers 
  newCustomer = [];
  id;
  Object = Object;
  customersView
  abc;
  filteredStatus = '';

  constructor(private fifthService: CustomerhttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fifthService.getdata()
      .subscribe(
        (response) => {
          this.customersView = response;
          this.customers = this.customersView
        }, (error) => console.log(error)
      
        );
  
this.customers=this.fifthService.getdata()
.subscribe(
  (Response)=> {
    console.log("ahg",Response)
    console.log(this.route.params);
      
    })
  }
}

















    // this.id = this.route.snapshot.params.id;
    // for (let i = 0; i < this.customers.length; i++) {
    //   if (this.customers[i].id == parseInt(this.id)) {
    //     this.newCustomer.push(this.customers[i]);
    //   }
    // }

    // this.id = this.route.snapshot.params.id;
    // console.log(this.id);
    // this.customer = this.filterData();
    // console.log(this.customer);


    // this.route.params.subscribe(params => {
    //   this.customers.forEach((p: CustomerhttpService) => {
    //     // if(p.getdata('id': Number))
    //   })
    // })

  // filterData() {
  //   this.customers.forEach(element => {
  //     if(element.id == parseInt(this.id)){
  //       console.log("element id",element.id)
  //       return element.json();
  //     }
  //   });
  // }


