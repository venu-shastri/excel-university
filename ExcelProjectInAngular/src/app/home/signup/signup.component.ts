import { Component, OnInit } from '@angular/core';
import { StudentInfoControllerService } from 'src/app/services/studentInfoController.service';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Username : string;
  Password : string;
  Email :string;
  Phonenumber:string;
  Image:string;
  errorMessage:any;
 
  constructor(public apiService:StudentInfoControllerService,private route:Router,private httpProxy:HttpClient) { 
      this.Username="";
      this.Password="";
      this.Email="";
      this.Phonenumber="";
      this.Image="";
     }

    onUsernameEdit( usernamevalue:string):void{
    this.Username = usernamevalue;
    }
    onPasswordEdit( passwordvalue:string):void{
    this.Password = passwordvalue;
    }
    onEmailEdit( emailvalue:string):void{
      this.Email = emailvalue;
    }
    onPhonenumberEdit( phonenumbervalue:string):void{
      this.Phonenumber = phonenumbervalue;
    }
    onImageEdit( imagevalue:string):void{
      this.Image = imagevalue;
    } 
   
    onSubmit(data:any){
      console.log(this.Username,this.Password);
    
      this.httpProxy.get( "http://localhost:5000/api/Exceluniversity/"+"Name"+"/"+this.Username).subscribe((datag) =>{
        if(datag==null){
          this.onPost(data);
        this.route.navigate(["/home"]);
        }
        else{
          alert("Username already exists..!!");
          this.detailsform.reset();
          this.route.navigate(["/signup"]);
        }
      });
    
     // console.log(data);
    }
      onPost(data:any){
        this.apiService.createNewStudentData(data).subscribe({
          next: data => {
             console.log("success");
           
          },
          error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', error);
            //  if(this.errorMessage!=null)
            //  {
            //   alert("Username already exist");
            //  }
             
          }
      })
      }
  onClear(){
  
      this.Username="";
      this.Password="";
      this.Email="";
      this.Phonenumber="";
      this.Image="";
  }
  ngOnInit(): void {
  }

  DaTadetails = new FormControl('');

    detailsform =new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)


   
  });
    get username(){return this.detailsform.get('username')}
   get password() {
     return this.detailsform.get('password');
   }
   get email(){
    return this.detailsform.get('email');

   }
   get phonenumber(){
    return this.detailsform.get('phonenumber');

   }
   get image(){
    return this.detailsform.get('image');
   }
  }