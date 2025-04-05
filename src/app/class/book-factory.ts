import { Book } from './book';
import { Novel } from './novel';
import { ScientificBook } from './scientific-book';
import { BiographyBook } from './biographybook';

export function createBook(data: any): Book {
  if (data.genre) {
    return new Novel(data.title, data.author, data.pages, data.genre);
  } else if (data.field) {
    return new ScientificBook(data.title, data.author, data.pages, data.field);
  } else if (data.person) {
    return new BiographyBook(data.title, data.author, data.pages, data.person);
  } else {
    throw new Error('Невідомий тип книги');
  }
}
