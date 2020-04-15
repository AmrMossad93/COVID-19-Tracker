import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule, FieldsetModule} from 'primeng';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartModule,
    AutoCompleteModule,
    FieldsetModule
  ],
  exports: [
    ChartModule,
    AutoCompleteModule,
    FieldsetModule
  ]
})
export class PrimeNgModule {
}
