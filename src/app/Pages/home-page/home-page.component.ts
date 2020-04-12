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

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.getCoronaData();
  }

  getCoronaData() {
    this.coronaService.getData().subscribe(res => {
      this.data = res as ICorona;
    });
  }
}
