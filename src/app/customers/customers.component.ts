import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers =[]
  newCustomer = [];
  id;
  Object = Object;
  customersView = {}
  abc;
  filteredStatus = '';

  constructor(private fifthService: CustomerhttpService, private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.route.params
    .subscribe((params: Params) => {
      this.id = params.key;
      console.log("key of customer", this.id.value)
      return;
    })
  this.fetchData();
  // console.log("array",this.customersView);
  //   this.route.params
  //   .subscribe((params:Params)=>{
  //     this.id = params['id'];
  //     console.log(">>>>>>>>>", this.id);
  //   })

  }
  fetchData() {
    this.fifthService.getdata()
    .subscribe(
      (response) => {
        console.log(typeof(response))
        console.log(response)
        this.customersView= response;
      }, (error) => console.log(error)
    
      );
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


