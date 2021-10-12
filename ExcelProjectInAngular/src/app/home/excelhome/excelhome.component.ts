import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-excelhome',
  templateUrl: './excelhome.component.html',
  styleUrls: ['./excelhome.component.css']
})
export class ExcelhomeComponent implements OnInit {

  constructor(public route:Router) { }
onLogin()
{
this.route.navigate(["/home/login"]);
}
onSignup()
{
  this.route.navigate(["/home/signup"]);
}
  ngOnInit(): void {
  }

}
