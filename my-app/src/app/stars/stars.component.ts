import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  public rating: number=0;
  public stars = [];
  constructor() {
  }
  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5; i++){
      this.stars.push(i > this.rating)
    }
  }
}

