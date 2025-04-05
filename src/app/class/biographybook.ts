import { Book } from './book';

export class BiographyBook extends Book {
  constructor(
    title: string,
    author: string,
    pages: number,
    public person: string
  ) {
    super(title, author, pages);
    if (!person || person.trim().length === 0) {
      throw new Error('Імʼя особи не може бути порожнім');
    }
  }

  getGenre(): string {
    return `Біографія: ${this.person}`;
  }
}
