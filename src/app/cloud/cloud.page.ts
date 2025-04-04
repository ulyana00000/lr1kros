import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Product } from '../class/Product';
import { ProductList } from '../class/ProductList';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
})
export class CloudPage implements OnInit {
  productList = new ProductList();
  groupedProducts: Record<string, Product[]> = {};
  loading = true;
  errorMessage = '';
  chart: any;

  @ViewChild('productChart') chartRef!: ElementRef;

  jsonUrl = 'https://api.jsonbin.io/v3/b/67ef83ed8561e97a50f8753b';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any>(this.jsonUrl).subscribe({
      next: (response) => {
        const jsonData = response.record;

        jsonData.forEach((p: any) => {
          this.productList.addProduct(
            new Product(p.name, p.unit, p.category, p.stock, p.price)
          );
        });
        

        this.productList.sortProducts();
        this.groupProductsByCategory();
        setTimeout(() => this.createChart(), 0); // чекаємо DOM
        this.loading = false;
      },
      error: (err) => {
        console.error('Помилка завантаження даних:', err);
        this.errorMessage = 'Помилка завантаження даних. Спробуйте ще раз.';
        this.loading = false;
      }
    });
  }

  groupProductsByCategory() {
    this.groupedProducts = {};
    for (let product of this.productList.products) {
      if (!this.groupedProducts[product.category]) {
        this.groupedProducts[product.category] = [];
      }
      this.groupedProducts[product.category].push(product);
    }
  }

  createChart() {
    const categoryCounts = this.productList.getCategoryCounts();
    const labels = Object.keys(categoryCounts);
    const data = Object.values(categoryCounts);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Кількість товарів у категоріях',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  getTotalQuantity(): number {
    return this.productList.products.reduce((sum, p) => sum + p.quantity, 0);
  }

  getTotalValue(): number {
    return this.productList.products.reduce((sum, p) => sum + (p.quantity * p.price), 0);
  }

  refreshData() {
    this.loading = true;
    this.errorMessage = '';
    this.productList.clear();
    this.loadProducts();
  }
}
