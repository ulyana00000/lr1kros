import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 🔹 Додаємо імпорт
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, MyHeaderComponent], 
})
export class Tab1Page {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  result: string = '';

  calculate() {
    if (this.num1 > 5 && this.num2 > 5 && this.num3 > 5) {
      this.result = `Сума чисел: ${this.num1 + this.num2 + this.num3}`;
    } else {
      const product = this.getDigitProduct(this.num1) * this.getDigitProduct(this.num2) * this.getDigitProduct(this.num3);
      const sumDigits = this.getDigitSum(product);
      
      if (sumDigits % 2 !== 0) {
        this.result = `Добуток цифр чисел: ${product}`;
      } else {
        this.result = `Умови не виконано.`;
      }
    }
  }

  getDigitProduct(num: number): number {
    return num.toString().split('').map(Number).reduce((a, b) => a * b, 1);
  }

  getDigitSum(num: number): number {
    return num.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
}
