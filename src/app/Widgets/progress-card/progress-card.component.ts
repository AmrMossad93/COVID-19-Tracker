import {Component, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.css']
})
export class ProgressCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.querySelector('body').style.cssText = '--width: 20%';
  }

}
