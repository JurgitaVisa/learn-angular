import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //default nustatymas
  // encapsulation: ViewEncapsulation.ShadowDom, //šiuo atveju nesimatys ikonos, nes pritaikomi tik elemento stiliai, t.y. boostrap neveiks nebent jį įsikelti į styles.css
  // encapsulation: ViewEncapsulation.None //stiliai bus pritaikyti globaliai
})
export class StarComponent {
  @Input() isActive: boolean = false;
  @Output() change = new EventEmitter();

  setIsActive() {
    this.isActive = !this.isActive;
    console.log("Start is active: ", this.isActive);
    this.change.emit({ argument: this.isActive });
  }

}

export interface EventArguments {
  argument: boolean
}

