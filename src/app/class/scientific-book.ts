import { Book } from './book';
export class ScientificBook extends Book {
  constructor(
    title: string,
    author: string,
    pages: number,
    public field: string
  ) {
    super(title, author, pages);
    if (pages <= 0) {
      throw new Error('Кількість сторінок повинна бути більшою за 0');
    }
    if (!field || field.trim() === '') {
      throw new Error('Поле науки не може бути порожнім');
    }
  }

  getGenre(): string {
    return `Наука`;
  }
}

