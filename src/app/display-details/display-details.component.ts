import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  constructor() { }

  isParagraphShown = true;
  buttonClicks: string[] = [];

  ngOnInit(): void {
  }


  buttonClicked() {
    this.isParagraphShown = !this.isParagraphShown;
    console.log(new Date().toString());
    this.buttonClicks.push(new Date().toString());
  }
}
