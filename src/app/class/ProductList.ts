import { Product } from './Product';
export class ProductList {
  public products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return this.products;
  }

  sortProducts() {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  getCategoryCounts(): Record<string, number> {
    return this.products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  getCategoryList(): string[] {
    return Array.from(new Set(this.products.map(p => p.category)));
  }
  
  // 🔹 Додаємо метод для очищення списку
  clear() {
    this.products = [];
  }
}

