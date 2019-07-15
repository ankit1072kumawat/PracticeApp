import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  Object = Object;
  customersView;
  abc;
  filteredStatus = '';
  searchText = '';

  constructor(private fifthService: CustomerhttpService, private router: Router) { }
  key;
  ngOnInit() {

    this.fifthService.getdata()
      .subscribe(
        (response) => {
          this.customersView = response;
          console.log("Data of customers", this.customersView)
        }, (error) => console.log(error)
      );
  }

  editProfile(customer) {
    this.router.navigate(['edit',customer.key]);
    console.log(customer);
  }

  /*searchById() {
    let key = Object.keys(this.customersView);

    for (let i = 0; i < Object.keys(this.customersView).length; i++) {
      if (this.customersView[key[i]].id) {
         console.log(this.customersView[key[i]]);
      }
    }
    
  }*/
}
