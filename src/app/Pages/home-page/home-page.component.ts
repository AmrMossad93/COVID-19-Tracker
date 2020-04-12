import {Component, OnInit} from '@angular/core';
import {CoronaService} from '../../Services/corona.service';
import {ICorona} from '../../Models/corona';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: ICorona;
  chartData: any;

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.getCoronaData();
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Infected',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#17a2b8'
        },
        {
          label: 'Death',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#dc3545'
        }
      ]
    };
  }

  getCoronaData() {
    this.coronaService.getData().subscribe(res => {
      this.data = res as ICorona;
    });
  }
}
