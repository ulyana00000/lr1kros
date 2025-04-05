import { createBook } from './book-factory';
import { Novel } from './novel';
import { ScientificBook } from './scientific-book';
import { BiographyBook } from './biographybook';
import { Book } from './book';

describe('Book Factory', () => {
  it('створює Novel, якщо є поле genre', () => {
    const data = {
      title: '1984',
      author: 'Джордж Орвелл',
      pages: 300,
      genre: 'Антиутопія'
    };

    const book: Book = createBook(data);
    expect(book instanceof Novel).toBeTrue();
    expect(book.getGenre()).toBe('Антиутопія');
  });

  it('створює ScientificBook, якщо є поле field', () => {
    const data = {
      title: 'Коротка історія часу',
      author: 'Стівен Гокінг',
      pages: 400,
      field: 'Фізика'
    };

    const book: Book = createBook(data);
    expect(book instanceof ScientificBook).toBeTrue();
    expect(book.getGenre()).toBe('Наука: Фізика');
  });

  it('створює BiographyBook, якщо є поле person', () => {
    const data = {
      title: 'Ілон Маск',
      author: 'Ешлі Венс',
      pages: 380,
      person: 'Ілон Маск'
    };

    const book: Book = createBook(data);
    expect(book instanceof BiographyBook).toBeTrue();
    expect(book.getGenre()).toBe('Біографія: Ілон Маск');
  });

  it('викидає помилку, якщо тип книги не визначений', () => {
    const data = {
      title: 'Невідоме',
      author: 'Ніхто',
      pages: 100
      // без genre, field або person
    };

    expect(() => createBook(data)).toThrowError('Невідомий тип книги');
  });
});
