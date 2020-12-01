import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberUpdated = new EventEmitter<number>();
  number = 0;
  timerId = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStart() {
    if (this.timerId) {
      return;
    }
    console.log('GAME STARTED');
    this.timerId = setInterval(() => {
      this.number++;
      this.numberUpdated.emit(this.number);
      console.log(this.number);
    }, 1000);
  }

  onStop() {
    console.log('GAME STOPPED');
    clearInterval(this.timerId);
    this.timerId = undefined;
    this.number = 0;
  }
}
