import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';

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

  constructor(private fifthService: CustomerhttpService) { }

  ngOnInit() {

    this.fifthService.getdata()
      .subscribe(
        (response) => {
          this.customersView = response;
        }, (error) => console.log(error)
      );




  }
}
