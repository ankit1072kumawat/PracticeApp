import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  customers = [];
  // @Injectable
  constructor(private SecondServices : CustomerService ) { }

  ngOnInit() {
    this.customers = this.SecondServices.getData();
  }

}
