import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public chrtLabels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public chrtData1: number[] = [350, 450, 100];

  chrtLabels2 = [
    'Pan',
    'Tomates',
    'Patatas',
  ];

  chrtData2 = [2, 10, 34];

  // public barChartType: ChartType = 'bar'
  // public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  // public barChartData: ChartData<'bar'> = {
  //   labels: this.barChartLabels,
  //   datasets: [
  //     {
  //       label: "Title label",
  //       data: [5, 3, 1],
  //       backgroundColor: ["red", "green", "blue"],
  //       hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],
  //     }
  //   ]
  // };

  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
}