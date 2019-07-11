import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator,FormBuilder} from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CustomerhttpService } from '../customerhttp.service';
import { UploadService } from './upload.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { CustomValidators } from 'ng2-validation';



@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {


  constructor(private upload: UploadService, private httpService: CustomerhttpService, private storage: AngularFireStorage) { }
  newCustomerForm: FormGroup;
  id = Math.floor(Math.random()*1000);
  fileChange;
  ariaValuenow;
  progressbarValue;
  url : string;


  ngOnInit() {
    // this.customers = this.forthService.getData();
    this.newCustomerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)] ),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'address': new FormControl(null, Validators.required),
      'file': new FormControl('', Validators.required),

    })
  

  }

  onSubmit() {
    // console.log(this.newCustomerForm)
    let customers = {
      name: this.newCustomerForm.value.name,
      mobile: this.newCustomerForm.value.mobile,
      email: this.newCustomerForm.value.email,
      address: this.newCustomerForm.value.address,
      file: this.url,
      id : this.id
    };
    console.log(customers)
    this.httpService.storeCustomers(customers)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
      );
  }

  chooseFiles(event)
  {
    this.fileChange =event.target.files;
    if(this.fileChange.item(0))
    console.log("jshfgwuey",this.fileChange)
    this.uploadImage();
  }

  uploadImage() {
    let file = this.fileChange.item(0);
    let uniqkey = 'pic'+ Math.floor(Math.random()*1000)
    const ref = this.storage.ref('/angularfire2store/'+uniqkey);
    const uploadTask = this.storage.upload('/angularfire2store/'+ uniqkey,file);
    uploadTask.percentageChanges().subscribe((value)=> {
      this.progressbarValue = value.toFixed(0);
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
         ref.getDownloadURL().subscribe(url => {
           this.url= url;
           console.log(this.url); // <-- do what ever you want with the url..
         });
       }))
       .subscribe(); 

    })
    
    
  }
  getUrl() 
{
  this.uploadImage
}

  // console.log(customers)
}
  // onfileUpload($event){
  //   this.httpService.uploaded()
  //   .subscribe(res =>{console.log("ashdgajdgdgg",res)});
  // }

  // sendData() {
  //   this.httpService.storeCustomers(this.newCustomerForm)
  //   .subscribe(
  //     (response => console.log("Ankithsfhskj",response)))
  // }


