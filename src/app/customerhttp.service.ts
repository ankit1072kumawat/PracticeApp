import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {

  selectedFile: File = null;
  customers ;

  constructor( private http: HttpClient) { }
  onfileUpload(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  uploaded() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    return this.http.post('gs://mypractice-ed296.appspot.com', fd);

  }
  getdata() {
    return this.http.get('https://mypractice-ed296.firebaseio.com/data.json')
  }
  storeCustomers(customers) {
    return this.http.post('https://mypractice-ed296.firebaseio.com/data.json', customers)
  }

  editCustomers(customers){
    return this.http.put('https://mypractice-ed296.firebaseio.com/data.json',customers)
  }
  particularData(customers) {
    this.customers= this.getdata();
    console.log(this.customers)

  }
}
