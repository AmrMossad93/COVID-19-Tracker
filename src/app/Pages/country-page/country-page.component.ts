import {Component, OnInit} from '@angular/core';
import {CoronaService} from '../../Services/corona.service';
import {ICountry} from '../../Models/country';
import {ICorona} from '../../Models/corona';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  countries: ICountry;
  myCountry;
  countryList: string[] = [''];
  data: ICorona;

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.coronaService.getCountries().subscribe(res => {
      this.countries = res as ICountry;
      this.countryList = this.countries.countries.map((c) => c.name);
    });
  }

  getCoronaDetailsByCountry() {
    console.log(this.myCountry);
    this.coronaService.getCoronaDetailsByName(this.myCountry).subscribe(res => {
      this.data = res as ICorona;
    });
  }
}
