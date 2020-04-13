import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'primeng';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartModule,
    AutoCompleteModule
  ],
  exports: [
    ChartModule,
    AutoCompleteModule
  ]
})
export class PrimeNgModule {
}
