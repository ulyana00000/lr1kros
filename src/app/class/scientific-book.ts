import { Book } from './book';

export class ScientificBook extends Book {
  constructor(
    title: string,
    author: string,
    pages: number,
    public field: string
  ) {
    super(title, author, pages);
  }

  getGenre(): string {
    return `Наука: ${this.field}`;
  }
}
