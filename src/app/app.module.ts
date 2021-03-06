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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountryPageComponent} from './Pages/country-page/country-page.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SectionComponent } from './Components/section/section.component';
import { TestComponent } from './Pages/test/test.component';
import { GlowingGradientCardComponent } from './Widgets/glowing-gradient-card/glowing-gradient-card.component';
import { ProgressCardComponent } from './Widgets/progress-card/progress-card.component';
import { DiscribtionCardComponent } from './Widgets/discribtion-card/discribtion-card.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    CountryPageComponent,
    SectionComponent,
    TestComponent,
    GlowingGradientCardComponent,
    ProgressCardComponent,
    DiscribtionCardComponent
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
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
