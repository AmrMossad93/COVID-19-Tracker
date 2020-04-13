import {Component, OnInit} from '@angular/core';
import {ICorona} from '../../Models/corona';
import {IGlobal} from '../../Models/global';
import {CoronaService} from '../../Services/corona.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  data: ICorona;
  globalChartData = {} as IGlobal[];
  chartData: any;

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.getCoronaData();
    this.getGlobalCoronaData();
  }

  getCoronaData() {
    this.coronaService.getData().subscribe(res => {
      this.data = res as ICorona;
    });
  }

  getGlobalCoronaData() {
    this.coronaService.getGlobalData().subscribe(res => {
      this.globalChartData = res as IGlobal[];
    }, error => {
    }, () => {
      this.callChart();
    });
  }

  callChart() {
    this.chartData = {
      labels: this.globalChartData.map(c => c.reportDate),
      datasets: [
        {
          label: 'Infected',
          data: this.globalChartData.map((c) => c.confirmed.total),
          fill: true,
          borderColor: '#17a2b8',
          backgroundColor: 'rgba(23, 162, 184, .5)',
        },
        {
          label: 'Death',
          data: this.globalChartData.map((c) => c.deaths.total),
          fill: true,
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220, 53, 69, .5)',
        }
      ]
    };
    return this.chartData;
  }
}
