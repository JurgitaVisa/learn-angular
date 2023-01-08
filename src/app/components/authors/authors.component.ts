import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(httpService: HttpService) {
    this.authors = httpService.getAuthors();
  }

  ngOnInit(): void {
  }

}
