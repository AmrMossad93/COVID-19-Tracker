import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-discribtion-card',
  templateUrl: './discribtion-card.component.html',
  styleUrls: ['./discribtion-card.component.css']
})
export class DiscribtionCardComponent implements OnInit, OnChanges {
  @Input() header: string;
  @Input() date: string;
  @Input() number: number;
  @Input() paragraph: string;
  @Input() paragraphAr: string;
  @Input() borderColorClassName: string;
  @Input() textColorClassName: string;
  @Input() iconClassName: string;
  lang;

  constructor() {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language');
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
  }
}
