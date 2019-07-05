import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

 customers =[];
 filteredStatus = '';

  constructor(private firstService : CustomerService) { }

  ngOnInit() {
    this.customers = this.firstService.getData();
  }

}
