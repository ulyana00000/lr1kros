import { Book } from './book';

export class Novel extends Book {
  constructor(
    title: string,
    author: string,
    pages: number,
    public genre: string
  ) {
    super(title, author, pages);
  }

  getGenre(): string {
    return this.genre;
  }
}
