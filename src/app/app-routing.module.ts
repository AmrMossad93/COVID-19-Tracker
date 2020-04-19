import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {CountryPageComponent} from './Pages/country-page/country-page.component';
import {TestComponent} from './Pages/test/test.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
