import { Novel } from './novel';

describe('Novel', () => {
  it('створюється з коректними значеннями', () => {
    const book = new Novel('1984', 'Орвелл', 300, 'Антиутопія');
    expect(book.title).toBe('1984');
    expect(book.author).toBe('Орвелл');
    expect(book.pages).toBe(300);
    expect(book.genre).toBe('Антиутопія');
  });

  it('getGenre() повертає genre', () => {
    const book = new Novel('1984', 'Орвелл', 300, 'Антиутопія');
    expect(book.getGenre()).toBe('Антиутопія');
  });

  it('displayInfo() містить назву, автора і сторінки', () => {
    const book = new Novel('Ми', 'Замятін', 250, 'Антиутопія');
    const info = book.displayInfo();
    expect(info).toContain('Ми');
    expect(info).toContain('Замятін');
    expect(info).toContain('250');
  });

  it('викидає помилку при 0 сторінок', () => {
    expect(() => new Novel('Порожня книга', 'Ніхто', 0, 'Фентезі')).toThrowError();
  });

  it('викидає помилку при відʼємних сторінках', () => {
    expect(() => new Novel('Мінус книга', 'Автор', -5, 'Фентезі')).toThrowError();
  });
});
