import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIsActive() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

}
