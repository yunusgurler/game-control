import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-GameControl',
  templateUrl: './GameControl.component.html',
  styleUrls: ['./GameControl.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;


  constructor() { }

  ngOnInit() {

  }

  onStartGame() {
    this.interval = setInterval(() =>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    console.log(this.lastNumber)
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
