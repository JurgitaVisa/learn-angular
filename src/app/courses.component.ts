import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>  
    <p>{{course.title | uppercase}}</p>
    <p>{{course.students | number}}</p>
    <p>{{course.rating | number:'1.2-2'}}</p>
    <p>{{course.rating | number:'2.1-1'}}</p>
    <p>{{course.price | currency:'EUR':true:'2.2-2'}}</p>
    <p>{{course.releaseDate | date:'yyyy-MM-dd'}}</p>
    <br>
    <p>{{text | summary:10 }}</p>

    <input type="text" class="form-control w-50 my-2" (keyup.enter)="onKeyUp($event)">  
    <input type="text" class="form-control w-50 my-2" #name (keyup.enter)="onEnter(name.value) ">  
    <input type="text" class="form-control w-50 my-2" [(ngModel)]="surname" (keyup.enter)="onEnterField()">  
    <div (click)="onDivClick($event)">
        <button class="btn btn-outline-primary" 
         [class.active-test]="isActive"
         [style.width]="isActive? '250px':'150px'"
         (click)="onSave($event)"
        >
         Save
        </button>  
    </div> 
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = true;
    surname: string = '';
    course = {
        title: "Angular for beginers",
        rating: 4.92158,
        students: 30123,
        price: 12.5,
        releaseDate: new Date(2022, 9, 24) //prideda 1 men; formatai https://angular.io/api/common/DatePipe

    }
    text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos rerum deserunt quod ducimus. Velit, assumenda corporis veniam, officiis maxime ipsam iusto, quam esse rerum accusantium architecto unde ea porro quis.`

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event: any) {
        // $event.stopPropagation(); //to stop event bubble up
        console.log("button clicked: ", $event);
    }

    onDivClick($event: any) {
        console.log("Div clicked: ", $event);
    }

    onKeyUp($event: any) {
        console.log("Enter pressed: ", $event.target.value);
        $event.target.value = '';
    }

    onEnter(name: string) {
        console.log("Name input: ", name);
    }

    onEnterField() {
        console.log("Enter surname: ", this.surname);
        this.surname = '';
    }

}