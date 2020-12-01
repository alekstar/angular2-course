import { Component } from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evens: number[] = [];
  odds: number[] = []

  numberUpdated(number: number) {
    number % 2 === 0 ? this.evens.push(number) : this.odds.push(number);
    console.log(`evens: ${this.evens}`);
    console.log(`odds: ${this.odds}`);
  }
}
