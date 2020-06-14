import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ethbooks-frontend';

  categories: string[] = new Array();

  constructor(private bookService: BookService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.categoryListService();
  }

  categoryListService() {
    this.bookService.getBooksList().subscribe(
      data => {
        data.forEach(book => {
            this.categories = [...this.categories, ...book.categories];
        });
        this.categories = this.categories.map(cat => cat.charAt(0).toUpperCase() + cat.substring(1));
        this.categories = Array.from(new Set(this.categories)).sort();
    });
  }
}
