import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common/book';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json';
  constructor(private httpClient: HttpClient) { }
  getBooksList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
    // .pipe(
    //   map(response => response)
    // );
  }
}

interface GetResponse {
  books: Book[];
}
