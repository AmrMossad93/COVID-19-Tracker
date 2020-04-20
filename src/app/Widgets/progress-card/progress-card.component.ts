import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgressCardComponent implements OnInit {
  @Input() progressBar: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.document.querySelector('body').style.cssText = `--width: ${this.progressBar}`;
    console.log(`--width: ${this.progressBar}`);
  }

}
