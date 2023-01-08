import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './components/authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './components/star/star.component';
import { TitlecaseComponent } from './components/titlecase/titlecase.component';
import { TitleCasePipe } from './title-case.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    StarComponent,
    TitlecaseComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
