export abstract class Book {
  constructor(
    public title: string,
    public author: string,
    public pages: number
  ) {
    if (pages <= 0) {
      throw new Error('Кількість сторінок має бути більше 0');
    }
  }

  abstract getGenre(): string;

  displayInfo(): string {
    return `${this.title} (${this.author}) – ${this.pages} стор.`;
  }

  getPages(): number {
    return this.pages;
  }
}
