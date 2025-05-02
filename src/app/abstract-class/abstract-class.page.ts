import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Book } from '../class/book';
import { createBook } from '../class/book-factory';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [ IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonContent, CommonModule, FormsModule, MyHeaderComponent]
})
export class AbstractClassPage implements OnInit {
  books: Book[] = [];
  minByGenre: Record<string, Book> = {};
  loading = true;
  error = '';

  jsonUrl = 'https://api.jsonbin.io/v3/b/67efb9458561e97a50f88d91';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.http.get<any>(this.jsonUrl).subscribe({
      next: (response) => {
        const data = response.record;
  
        try {
          this.books = data.map(createBook); 
          this.findMinPagesByGenre();
        } catch (e) {
          this.error = ' Помилка при створенні книги: ' + (e as Error).message;
          console.error(e);
        }
  
        this.loading = false;
      },
      error: () => {
        this.error = ' Помилка завантаження даних';
        this.loading = false;
      }
    });
  }
  
  

  findMinPagesByGenre() {
    const genreMap: Record<string, Book> = {};

    for (let book of this.books) {
      const genre = book.getGenre();
      if (!genreMap[genre] || book.getPages() < genreMap[genre].getPages()) {
        genreMap[genre] = book;
      }
    }

    this.minByGenre = genreMap;
  }
}
