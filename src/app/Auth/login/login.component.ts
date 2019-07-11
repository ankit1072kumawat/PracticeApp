import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadService } from '../../new-customer/upload.service';
import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
fileChange;
downloadURL: Observable<string>;
  constructor(private upload : UploadService,private storage: AngularFireStorage) {}

  

  title = 'app';
  selectedFiles: FileList;
  file: File;
  imgsrc;
  color: string = 'primary';
  mode: 'determinate';
  progressBarValue;
  public storageRef : Storage;
  public uploadProgress = 0;

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

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
       ref.getDownloadURL().subscribe(url => {
         console.log(url); // <-- do what ever you want with the url..
       });
     }))
     .subscribe(); 
    
  //   const fileRef = this.storage.ref('angularfire2store');
  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => this.downloadURL = fileRef.getDownloadURL() )
      
  //  )
  // .subscribe((Response) => {
  //   return console.log(Response);
    
  // },
  // (error) => console.log(error))
  
  //   // this.imgsrc = uploadTask.downloadURL();
    
  //   // uploadTask.on('state_changed', function(snapshot){
  //   //   self.percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
  //   // })
  //   console.log("111111111111111111111111");
 
  }
  
  ngOnInit() {

  }
}
