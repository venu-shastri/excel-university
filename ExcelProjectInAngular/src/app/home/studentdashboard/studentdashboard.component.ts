import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  isShown: boolean;
  isdisplay:boolean;
  models:any;
  Username:any;

  constructor(private route:Router) { 
    this.isShown=false;
    this.isdisplay=false;
    var x= sessionStorage.getItem("username");
    this.Username=x;
this.models=sessionStorage.getItem("image");
  }

  ngOnInit(): void {
    this.isShown = true;
  this.isdisplay =true;
  }
  onLoanCalculator()
  {
    this.isShown = false;
    this.isdisplay=false;
    this.route.navigate(["/studentdashboard/emicalculator"]);
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    
  }
  onLogout()
  {
    const result=confirm("Do you want to logout?");
    if(result==true){
      this.route.navigate(["/home"]);
    }
    else{
      this.route.navigate(["/studentdashboard"]);
    }
  }
}
