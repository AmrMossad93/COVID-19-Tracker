import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  enableArabicMood() {
    this.document.body.dir = 'rtl';

  }

  enableEnglishMood() {
    this.document.body.dir = 'ltr';
  }
}
