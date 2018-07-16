import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  books: Observable<any[]>;
  bookForm: FormGroup;

  constructor(private db: AngularFireDatabase, private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.books = this.db.list('books').valueChanges();
  }

  submitBookForm(): void {
    const newBook = this.db.list('books');
    const newTitle = this.bookForm.get('title').value;
    const newAuthor = this.bookForm.get('author').value;

    newBook.push({ title: newTitle, author: newAuthor });
  }
}
