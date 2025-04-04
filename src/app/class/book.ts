export abstract class Book {
    constructor(
      public title: string,
      public author: string,
      public pages: number
    ) {}
  
    abstract getGenre(): string;
  
    displayInfo(): string {
      return `${this.title} (${this.author}) – ${this.pages} стор.`;
    }
  
    getPages(): number {
      return this.pages;
    }
  }
  