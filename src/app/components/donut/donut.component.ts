import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: ``,
})
export class DonutComponent implements OnInit {
  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.doughnutData },
      ],
    };  
  }

  @Input() titulo: string = 'Sin título';
  @Input() doughnutChartLabels: string[] = ['Label1', 'Label2'];
  @Input('data') doughnutData: number[] = [20, 40];

  // Doughnut  
  public doughnutChartData!: ChartData<'doughnut'>;  
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
