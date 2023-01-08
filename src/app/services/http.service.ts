import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getAuthors() {
    return ["author1", "author2", "author3"];
  }
}
