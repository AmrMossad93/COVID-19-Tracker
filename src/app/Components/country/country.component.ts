import {Component, OnInit} from '@angular/core';
import {CoronaService} from '../../Services/corona.service';
import {ICountry} from '../../Models/country';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ICorona} from '../../Models/corona';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries;
  country: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private coronaService: CoronaService) {
  }

  ngOnInit(): void {
    this.getCountries();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  getCountries() {
    this.coronaService.getCountries().subscribe(res => {
      this.countries = res;
      console.log(this.countries);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
