import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-discribtion-card',
  templateUrl: './discribtion-card.component.html',
  styleUrls: ['./discribtion-card.component.css']
})
export class DiscribtionCardComponent implements OnInit {
  @Input() header: string;
  @Input() date: string;
  @Input() number: number;
  @Input() paragraph: string;
  @Input() borderColorClassName: string;
  @Input() textColorClassName: string;
  @Input() iconClassName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
