import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ThemeService} from '../../Services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  language: string;

  constructor(private themeService: ThemeService) {
    this.language = localStorage.getItem('language');
  }


  ngOnInit(): void {
    this.language = localStorage.getItem('language');
    if (this.language === '') {
      this.themeService.enableEnglishMood();
      localStorage.setItem('language', 'en');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.language = localStorage.getItem('language');
  }


  enableLanguage(language?: string) {
    if (language === 'ar') {
      this.themeService.enableArabicMood();
      localStorage.setItem('language', 'ar');
    } else {
      this.themeService.enableEnglishMood();
      localStorage.setItem('language', 'en');
    }
  }

}
