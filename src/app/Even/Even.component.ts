import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Even',
  templateUrl: './Even.component.html',
  styleUrls: ['./Even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: any;
  constructor() { }

  ngOnInit() {
  }

}
