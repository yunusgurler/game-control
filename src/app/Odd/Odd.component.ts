import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Odd',
  templateUrl: './Odd.component.html',
  styleUrls: ['./Odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() number: any;
  constructor() { }

  ngOnInit() {
  }

  showOddNumber() {
    
  }

}
