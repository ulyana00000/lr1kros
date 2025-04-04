import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, MyHeaderComponent], 
})
export class Tab3Page {
  n: number = 3; // Початкове значення для розміру матриці
  matrix: number[][] = [];
  maxValues: number[] = [];
  highlightedRows: boolean[] = [];

  generateMatrix() {
    this.matrix = [];
    this.maxValues = [];
    this.highlightedRows = [];

    for (let i = 0; i < this.n; i++) {
      let row: number[] = [];
      for (let j = 0; j < this.n; j++) {
        row.push(Math.floor(Math.random() * 20) + 1); 
      }
      this.matrix.push(row);
    }

    this.calculateMaxValues();
  }

  calculateMaxValues() {
    this.maxValues = [];
    this.highlightedRows = [];

    for (let i = 0; i < this.n; i++) {
      if (i % 2 === 0) { // Непарні рядки (0, 2, 4...) через індексацію з 0
        let maxVal = Math.max(...this.matrix[i]);
        let sum = this.matrix[i].reduce((a, b) => a + b, 0);
        this.maxValues.push(maxVal);
        this.highlightedRows.push(sum > 50);
      } else {
        this.maxValues.push(-1); // Для парних рядків
        this.highlightedRows.push(false);
      }
    }
  }

  getFilteredMaxValues(): string {
    return this.maxValues.filter(val => val !== -1).join(', ');
  }
}
