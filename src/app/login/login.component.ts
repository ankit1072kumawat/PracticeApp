import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadService } from '../new-customer/upload.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
fileChange;
  constructor(private upload : UploadService,private storage: AngularFireStorage) {}

  

  title = 'app';
  selectedFiles: FileList;
  file: File;
  imgsrc;
  color: string = 'primary';
  mode: 'determinate';
  progressBarValue;

  // constructor(private storage: AngularFireStorage) {

  // }

  // chooseFiles(event) {
  //   this.selectedFiles = event.target.files;
  //   if (this.selectedFiles.item(0))
  //     this.uploadpic();  
  // }

  // uploadpic() {
  //   let file = this.selectedFiles.item(0);
  //   let uniqkey = 'pic' + Math.floor(Math.random() * 1000000);
  //   const uploadTask = this.storage.upload('/angfire2store/' + uniqkey, file);

  //   // this.imgsrc = uploadTask.downloadURL();

  //   uploadTask.percentageChanges().subscribe((value) => {
  //     this.progressBarValue = value.toFixed(2);
  //   })
  // }
  // uploadImage() {
  //   this.upload.chooseFiles(Event) 
  //   let files ={
  //     file : this.fileChange
  //   };
  

  // }
  // chooseFiles(event){
  //   console.log(event.target.files[0]);
  // this.fileChange = event.target.files[0];
  // this.uploadImage();
  
  // }

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
    const uploadTask = this.storage.upload('angularfire2store'+ uniqkey,file);
    
    // this.imgsrc = uploadTask.downloadURL();
  }
  ngOnInit() {

  }
}
