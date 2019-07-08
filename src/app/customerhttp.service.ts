import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  constructor(private htt : HttpClient) { }
storeCustomers(customers: any[]) {
  // this.httpclient.post('https://mypractice-ed296.firebaseio.com/', customers)

}
}
