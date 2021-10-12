import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExcelhomeComponent } from './home/excelhome/excelhome.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms"
import {CommonModule} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { StudentInfoControllerService } from './services/studentInfoController.service';
import { AppRoutingModule} from './/app.routing.module';
import { EmicalculatorComponent } from './home/emicalculator/emicalculator.component';
import {StudentdashboardComponent} from './home/studentdashboard/studentdashboard.component';
import { ExcelstudentbankModule } from './home/excelstudentbank/excelstudentbank.module';

@NgModule({
  declarations: [
    AppComponent,
    ExcelhomeComponent,
    LoginComponent,
    SignupComponent,
    EmicalculatorComponent,
    StudentdashboardComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ExcelstudentbankModule
    
  ],
  providers:[
    {provide:StudentInfoControllerService,useClass:StudentInfoControllerService},
    {provide:"StudentInfoAPIUrl",useValue:"http://localhost:5000/api/ExcelUniversity"}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
