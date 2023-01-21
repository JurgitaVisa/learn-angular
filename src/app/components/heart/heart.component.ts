import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {
  @Input() isActive: boolean = false;
  @Input() likesCount: number = 0;
  @Output() onLikeChange = new EventEmitter();

  setIsActive() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive? 1 : -1;
    this.onLikeChange.emit({ isLiked: this.isActive, likesCount: this.likesCount });
  }

}

export interface HeartComponentOutput {
  isLiked: boolean,
  likesCount: number
}
