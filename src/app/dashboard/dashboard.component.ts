import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataset: any;
  public options: any;

  constructor() {

    this.dataset = [{label: "line1", data: [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370]]}];
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
  }

}
