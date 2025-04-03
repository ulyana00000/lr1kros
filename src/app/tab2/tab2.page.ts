import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, MyHeaderComponent], 
})
export class Tab2Page {
  a: number = 0;
  b: number = 0;
  numbers: number[] = [];
  count: number = 0;

  calculate() {
    this.numbers = [];
    this.count = 0;

    for (let i = this.a; i <= this.b; i++) {
      if (i % 2 === 0 && i % 3 === 2) {
        this.numbers.push(i);
        this.count++;
      }
    }
  }
}
