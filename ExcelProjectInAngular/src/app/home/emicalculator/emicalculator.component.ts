import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { NONE_TYPE } from '@angular/compiler';
import { analyze } from 'eslint-scope';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css'],
  
})
export class EmicalculatorComponent implements OnInit {
 
  loanamount:any;
  tenure:any;
  rateofinterest:any;
  EMI:any;
  A:any;
  B:any;
  rate:any;
  Interest:any;
  Amount:any;
  i:number;
  row:Array<number>;
  balanceamtRow:Array<number>;
  RIRow:Array<number>;
  PARow:Array<number>;
  balanceamt:any;
  RI:any;
  PA:any;
  SliderLA:any;
  SliderTenure:any;
  SliderRI:any;
  LoanSlider:any;
  TenureSlider:any;
  RISlider:any;
  isVisible: any;
  isSelected: boolean = true;
  
  constructor(private route:Router) {
    this.loanamount=1500;
    this.tenure=12;
    this.rateofinterest=1;
    this.EMI="";
    this.A="";
    this.B="";
    this.rate="";
    this.Interest="";
    this.Amount="";
    this.i=0;
    this.row=[];
    this.balanceamt="";
    this.RI="";
    this.PA="";
    this.balanceamtRow=[];
    this.RIRow=[];
    this.PARow=[];
    this.SliderLA=1500;
    this.SliderTenure=12;
    this.SliderRI=1;
    this.LoanSlider=1500;
    this.TenureSlider=12;
    this.RISlider=1;
   this.isVisible=1;
   this.isSelected=true;
    this.EmiCalculation();
    this.display();
    for(this.i=0;this.i<this.tenure;this.i++)
    {
    this.row.push(this.i);
   
    }
  
  }
    onLoan(loan:any){
      this.loanamount=loan;
      console.log(this.loanamount);
      this.EmiCalculation();
      this.balanceamtRow=[];
      this.RIRow=[];
      this.PARow=[];
      this.display();
      this.SliderLA=loan;
    }
    onTenure(tenure:any){
      this.tenure=tenure;
      this.row=[];
      this.balanceamtRow=[];
      this.RIRow=[];
      this.PARow=[];
      this.SliderTenure=tenure
      console.log(this.tenure);
      this.EmiCalculation();
      for(this.i=0;this.i<this.tenure;this.i++)
        {
        this.row.push(this.i);
       
        }
        this.display();
        
    }
    onRateofinterest(rateofint:any){
      this.rateofinterest=rateofint;
      console.log(this.rateofinterest);
      this.balanceamtRow=[];
      this.RIRow=[];
      this.PARow=[];
      this.SliderRI=rateofint;
       this.EmiCalculation();
       this.display();
    }
    onValueChange(la:any){
      this.LoanSlider=la;
    }
    onTenValueChange(te:any){
      this.TenureSlider=te;
    }
    onRIValueChange(ri:any){
      this.RISlider=ri;
    }
    EmiCalculation()
    {
      this.rate=this.rateofinterest/(12*100);
      this.A=Math.pow((1+this.rate),this.tenure);
      this.B=Math.pow((1+this.rate),(this.tenure));
      this.EMI=Math.round((this.loanamount*this.rate* this.A)/((this.B)-1))
      this.Amount=(this.EMI*this.tenure);
      this.Interest=(this.Amount-this.loanamount);
      this.RI=Math.round(this.rate*this.loanamount);
      this.balanceamt=(this.loanamount-this.EMI+this.RI);
      this.PA=Math.round( this.EMI-this.RI);
       
       console.log( this.EMI);
    
    }
  ngOnInit(): void {


   
  }
  // public lineChartData: ChartDataSets[] = [
  //   { data: [ 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000 ], label: 'Student Loan Intrest' },
  // ]; 
  // public lineChartLabels: Label[] = [
  //   '0',
  //   '2',
  //   '4',
  //   '6',
  //   '8',
  //   '10',
  //   '12',
  // ];
  // public lineChartOptions: ChartOptions & { annotation: any } = {
  //   responsive: true,
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //   },
  // ];
  // public lineChartLegend = true;
  // public lineChartType = 'line';
  // public lineChartPlugins = [];

  display()
  {

    this.rate=this.rateofinterest/(12*100);
    this.A=Math.pow((1+this.rate),this.tenure);
    this.B=Math.pow((1+this.rate),(this.tenure));
    this.EMI=Math.round((this.loanamount*this.rate* this.A)/((this.B)-1))
    this.Amount=(this.EMI*this.tenure);
    this.Interest=(this.Amount-this.loanamount);
    this.RI=Math.round(this.rate*this.loanamount);
    this.balanceamt=(this.loanamount-this.EMI+this.RI);
    this.PA=Math.round( this.EMI-this.RI);
    this.balanceamtRow.push(this.balanceamt);
      this.RIRow.push(this.RI);
      this.PARow.push(this.PA);

    for(let i=1;i<this.tenure;i++){
    this.RI=Math.round(this.rate*this.balanceamt);
    this.balanceamt=(this.balanceamt-this.EMI+this.RI);
      this.PA=Math.round( this.EMI-this.RI);
      if(i==this.tenure-1){
        this.balanceamt=0;
      }
      this.balanceamtRow.push(this.balanceamt);
      this.RIRow.push(this.RI);
      this.PARow.push(this.PA);
}
console.log(this.balanceamtRow);
console.log(this.RIRow);
console.log(this.PARow);
  }
  onBack(){
    this.route.navigate(["/studentdashboard"])
  .then(() => {
    window.location.reload();
  });
  }
  
}
