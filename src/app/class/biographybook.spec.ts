import { BiographyBook } from './biographybook';

describe('BiographyBook', () => {
  it('створюється правильно', () => {
    const book = new BiographyBook('Ілон Маск', 'Ешлі Венс', 400, 'Ілон Маск');
    expect(book.title).toBe('Ілон Маск');
    expect(book.author).toBe('Ешлі Венс');
    expect(book.pages).toBe(400);
    expect(book.person).toBe('Ілон Маск');
    expect(book.getGenre()).toBe('Біографія');
  });

  it('displayInfo повертає правильний рядок', () => {
    const book = new BiographyBook('Шлях до успіху', 'Автор', 123, 'Наталя Могилевська');
    const info = book.displayInfo();
    expect(info).toContain('Шлях до успіху');
    expect(info).toContain('Автор');
    expect(info).toContain('123');
  });

  it('викидає помилку при порожньому імені особи', () => {
    expect(() => new BiographyBook('Назва', 'Автор', 100, '')).toThrowError();
  });

  it('викидає помилку при 0 сторінок', () => {
    expect(() => new BiographyBook('Біо', 'Автор', 0, 'Хтось')).toThrowError();
  });
});
