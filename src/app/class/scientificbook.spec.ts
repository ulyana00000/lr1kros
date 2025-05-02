import { ScientificBook } from './scientific-book';

describe('ScientificBook', () => {
  it('створюється з правильним полем field', () => {
    const book = new ScientificBook('Квантова фізика', 'Гокінг', 400, 'Фізика');
    expect(book.field).toBe('Фізика');
    expect(book.getGenre()).toBe('Наука');
  });

  it('displayInfo() повертає опис з автором і сторінками', () => {
    const book = new ScientificBook('Алгоритми', 'Кормен', 540, 'ІТ');
    const info = book.displayInfo();
    expect(info).toContain('Кормен');
    expect(info).toContain('540');
  });

  it('викидає помилку при 0 сторінок', () => {
    expect(() => new ScientificBook('Null', 'Anon', 0, 'Математика')).toThrowError();
  });

  it('викидає помилку при відʼємних сторінках', () => {
    expect(() => new ScientificBook('Негативна книга', 'Автор', -100, 'Фізика')).toThrowError();
  });
});
