import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ethbooks-frontend';

  categories: string[];

  constructor(private bookService: BookService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.categoryListService();
  }

  categoryListService() {
    this.bookService.getBooksList().subscribe(
      data => {
        data.forEach(book => {
          this.categories = {...this.categories, ...book.categories};
        });
    });
  }
}
