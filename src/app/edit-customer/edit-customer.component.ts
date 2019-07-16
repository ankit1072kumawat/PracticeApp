import { Component, OnInit } from '@angular/core';
import { CustomerhttpService } from '../customerhttp.service';
import { FormGroup, FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  id;
  url: string;
  fileChange;
  allData;
  editData
  progressbarValue;
  editForm: FormGroup;
  key;
  sendObject;
  currentObject;

  constructor(private editHttp: CustomerhttpService, private route: ActivatedRoute, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params.key;
        // console.log("key of customer", this.id)
        return;
      })
    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'address': new FormControl(null, Validators.required),
      'file': new FormControl(null, Validators.required),

    })


    // Fetch data from http services
    this.editHttp.getdata()
      .subscribe(
        (Response) => {
          this.allData = Response;
          console.log("edit", this.allData)
          // const keys =  Object.keys(this.edit)
          // // for( const key of keys)
          // console.log("keys",keys)
          // // console.log("objects of edit", Object.keys(this.edit)[0])  

          // this.searchbyKey();
          this.editData = this.allData[this.id];
          console.log(this.editData);
          this.setFormValues();
        }, (error) => console.log(error)
      );
  }

  onSubmit() {
    // console.log(this.newCustomerForm)

    let customers = {

      [this.id]: {
        name: this.editForm.value.name,
        mobile: this.editForm.value.mobile,
        email: this.editForm.value.email,
        address: this.editForm.value.address,
        file: this.url,
        id: this.id
      }
      
    };
    console.log("OnSubmit",customers)
    this.editHttp.editCustomers(customers)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
      );
  }

  chooseFiles(event) {
    this.fileChange = event.target.files;
    if (this.fileChange.item(0))
      console.log("Uplaoded file", this.fileChange)
    this.uploadImage();
  }

  uploadImage() {
    let file = this.fileChange.item(0);
    let uniqkey = 'pic' + Math.floor(Math.random() * 1000)
    const ref = this.storage.ref('/angularfire2store/' + uniqkey);
    const uploadTask = this.storage.upload('/angularfire2store/' + uniqkey, file);
    uploadTask.percentageChanges().subscribe((value) => {
      this.progressbarValue = value.toFixed(0);
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(url => {
            this.url = url;
            console.log(this.url); // <-- do what ever you want with the url..
          });
        }))
        .subscribe();

    })
  }

  setFormValues() {
    this.editForm = new FormGroup({
      'name': new FormControl(this.editData.name, Validators.required),
      'mobile': new FormControl(this.editData.mobile, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(this.editData.email, [Validators.required, Validators.email]),
      'address': new FormControl(this.editData.address, Validators.required),
      'file': new FormControl(this.editData.url, Validators.required),

    })
  }

}
