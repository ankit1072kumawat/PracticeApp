import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getData() {
    return [
    {
      id : 1,
      name : 'Ankit',
      url: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
      mobile_no : '9874561230',
      address : 'abc Street',
      viewOrders : 2
    },
    {
      id : 2,
      name : 'Amit',
      url: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
      mobile_no : '9874561230',
      address : 'abc Street',
      viewOrders : 2
    },
    {
      id : 3,
      name : 'Anush',
      url: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
      mobile_no : '9874561230',
      address : 'abc Street',
      viewOrders : 2
    },
    {
      id : 4,
      name : 'Robin',
      url: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
      mobile_no : '9874561230',
      address : 'abc Street',
      viewOrders : 2
    },
    {
      id : 5,
      name : 'Dhawal',
      url: 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png',
      mobile_no : '9874561230',
      address : 'abc Street',
      viewOrders : 2
    },
  ];
  }

}
