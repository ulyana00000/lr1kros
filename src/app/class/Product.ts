export class Product {
    name: string;
    unit: string;
    category: string;
    quantity: number;
    price: number;
  
    constructor(n: string, u: string, c: string, q: number, p: number) {
      this.name = n;
      this.unit = u;
      this.category = c;
      this.quantity = q;
      this.price = p;
    }
  }
  