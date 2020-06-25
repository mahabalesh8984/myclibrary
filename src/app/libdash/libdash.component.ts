import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { HttpClient } from '@angular/common/http';
import { ChartType } from 'chart.js';
import { MultiDataSet } from 'ng2-charts';
import { ChartDataSets , RadialChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {  ChartOptions } from 'chart.js';
import { Color} from 'ng2-charts';








@Component({
  selector: 'app-libdash',
  templateUrl: './libdash.component.html',
  styleUrls: ['./libdash.component.scss'],
  providers:[LibraryService],

})
export class LibdashComponent implements OnInit {
  public dataset: any;
  public options: any;


////pie

public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
public pieChartData: SingleDataSet = [30, 50, 20];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];


 



///barchart

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];

///linechart 
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  /////bubble
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
        }
      }]
    }
  };
  public bubbleChartColors: Color[] = [
    {backgroundColor:["#9E120E","#FF5800","#FFB414"]},
    {backgroundColor:["#9E120E","#FF5800","#FFB414"]},
    {backgroundColor:["#9E120E","#FF5800","#FFB414"]}
  ];
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 15, y: 15, r: 15 },
        { x: 25, y: 15, r: 25 },
        { x: 36, y: 12, r: 33 },
        { x: 10, y: 18, r: 18 },
      ],
      label: 'Investment Equities',
    },
  ];

 ////radar

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
    'Team Player', 'Coding', 'Technical Knowledge', 'Meeting Deadlines'];

  public radarChartData: ChartDataSets[] = [
    { data: [0, 1, 2, 3, 4, 5, 6], label: 'Employee Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

///doughnut

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
//old line

  dashcounts:any={};
  constructor(private http: HttpClient, private liservice: LibraryService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();


    this.dataset = [{label: 'line1', data: [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370]]}];
    this.options = {
        series: {
          lines: { show: true },
          points: {
            radius: 3,
            show: true
          }
        }
      };

  }

 


  ngOnInit(): void {
    this.Dasheadcounts();

  
   
  }
  Dasheadcounts()
  {
      this.liservice.Getdashboarddata('dashcounts')
    .subscribe(
           resultArray =>{
   // this.liservice.Getdashboarddata('dashcounts')
      console.log('result-dashcounts',resultArray) ;
      this.dashcounts=resultArray[0];


      },
     error => console.log('Error :: ' + error)
  );
  }
}
