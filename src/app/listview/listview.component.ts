import { Component, OnInit, Injectable } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

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
