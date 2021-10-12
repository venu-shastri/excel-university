import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { StudentInfoControllerService } from 'src/app/services/studentInfoController.service';
import { HttpClient } from '@angular/common/http'
import {UserModel} from '../models/userModel.model'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  Username : string;
  Password : string;
Models:any;
  constructor(public apiService:StudentInfoControllerService,public httpProxy:HttpClient,public route:Router) { 
      this.Username="";
      this.Password="";
     this.Models=[];
     }
    onUsernameEdit( usernamevalue:string):void{
      this.Username = usernamevalue;
      sessionStorage.setItem("username",this.Username);
     

  }
  onPasswordEdit( passwordvalue:string):void{
    this.Password = passwordvalue;
  }
onSubmit(data:any){
      console.log(this.Username,this.Password);
      this.httpProxy.get( "http://localhost:5000/api/Exceluniversity/"+"UserName"+"/"+this.Username+"/"+this.Password).subscribe((data) =>{
      
      if(data==null){
      alert("Please Enter Valid Credentials");
      this.detailsform.reset();
      }
  else{
    this.Models=data;
    sessionStorage.setItem("image",this.Models.image);
     this.route.navigate(["/studentdashboard"]);
      }
    });
  }

  onClear(){
      this.Username="";
      this.Password="";
  }
  ngOnInit(): void {
  }
    DaTadetails = new FormControl('');
    detailsform =new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });
    get username(){return this.detailsform.get('username')}
   get password() {
     return this.detailsform.get('password');
   }
      clear()
      {
        this.Username="";
        this.Password="";
      }
  }