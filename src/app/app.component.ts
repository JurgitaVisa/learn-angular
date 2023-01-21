import { Component } from '@angular/core';
import { EventArguments } from './components/star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  author = {
    name: "Albert Kamus",
    isFavorite: true
  }

  onFavoriteChange(eventArguments: EventArguments) {
    console.log("Favorite changed", eventArguments);
  }
}
