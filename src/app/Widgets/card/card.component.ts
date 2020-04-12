import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() header: string;
  @Input() date: string;
  @Input() number: number;
  @Input() paragraph: string;
  @Input() borderColorClassName: string;
  @Input() textColorClassName: string;

  constructor() {
  }

  ngOnInit(): void {

  }

}
