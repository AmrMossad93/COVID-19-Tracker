import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {CardComponent} from './Widgets/card/card.component';
import {NavbarComponent} from './LayOuts/navbar/navbar.component';
import {FooterComponent} from './LayOuts/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import {PrimeNgModule} from './prime-ng.module';
import {CountUpModule} from 'ngx-countup';
import {HttpClientModule} from '@angular/common/http';
import {MatOptionModule} from '@angular/material/core';
import { GlobalComponent } from './Components/global/global.component';
import { CountryComponent } from './Components/country/country.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    GlobalComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    PrimeNgModule,
    HttpClientModule,
    CountUpModule,
    BrowserAnimationsModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
