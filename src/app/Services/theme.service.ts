import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor(@Inject(DOCUMENT) private document: Document, private translateService: TranslateService) {

  }

  enableArabicMood() {
    this.document.body.dir = 'rtl';
    this.translateService.use('ar');
  }

  enableEnglishMood() {
    this.document.body.dir = 'ltr';
    this.translateService.use('en');
  }
}
