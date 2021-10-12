import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LoginComponent, StudentdashboardComponent, EmicalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[LoginComponent]
})
export class HomeModule { }
