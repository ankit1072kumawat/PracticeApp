import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  
  constructor(private http : HttpClient) { }

  getdata(){
    return this.http.get('https://mypractice-ed296.firebaseio.com/data.json')
  }
storeCustomers(customers) {
  return this.http.post('https://mypractice-ed296.firebaseio.com/data.json',customers)
}

}
