import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ← правильний імпорт
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    MyHeaderComponent 
  ],
})
export class Tab2Page {
  a: number = 0;
  b: number = 0;
  numbers: number[] = [];
  count: number = 0;
  message: string = ''; // 

  calculate() {
    this.numbers = [];
    this.count = 0;
    this.message = '';

    //  Визначаємо початок і кінець проміжку незалежно від порядку
    const start = Math.min(this.a, this.b);
    const end = Math.max(this.a, this.b);

    for (let i = start; i <= end; i++) {
      if (i % 2 === 0 && i % 3 === 2) {
        this.numbers.push(i);
      }
    }

    this.count = this.numbers.length;

    if (this.count === 0) {
      this.message = 'На цьому проміжку немає чисел, які діляться на 2 і мають залишок 2 при діленні на 3.';
    }
  }
}
