import { Component } from '@angular/core';
import { EventArguments } from './components/star/star.component';
import { HeartComponentOutput } from './components/heart/heart.component';

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
  heart = {
    isLiked: false,
    likesCount: 10
  }

  courses: any = [];
  canEdit = true;

  task = {
    title: 'some task',
    assignee: {
      name: 'John Smith'
    }
  }

  selectedTab = 'six';

  onFavoriteChange(eventArguments: EventArguments) {
    console.log("Favorite changed", eventArguments);
  }

  setLikes(heartOutput: HeartComponentOutput) {
    console.log("Heart clicked", heartOutput);
    this.heart.isLiked = heartOutput.isLiked;
    this.heart.likesCount = heartOutput.likesCount;
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "first" },
      { id: 2, name: "second" },
      { id: 3, name: "third" }
    ];
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined;
  }

  onAddCourse() {
    this.courses.push({ id: 4, name: 'forth' });
  }

  deleteCourse(courseId: number) {
    this.courses.splice(courseId, 1);
  }
}
