import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmountandinterestComponent } from './../excelstudentbank/amountandinterest/amountandinterest.component';
import { TableandgraphComponent } from './../excelstudentbank/tableandgraph/tableandgraph.component';
import { ExcelbankComponent } from './excelbank/excelbank.component';
// import { TypeofemiComponent } from './typeofemi/typeofemi.component';
import { CalculatedemivalueComponent } from './calculatedemivalue/calculatedemivalue.component';


@NgModule({
  declarations: [
    AmountandinterestComponent,
    TableandgraphComponent,
    ExcelbankComponent,
    
    CalculatedemivalueComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ExcelstudentbankModule { }
