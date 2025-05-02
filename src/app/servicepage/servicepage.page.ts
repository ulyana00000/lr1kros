import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TabService } from '../services/tab/tab.service';
import { SeriesService } from '../services/series/series.service';
import { RecursionService } from '../services/recursion/recursion.service';
import { LogService } from '../services/logger/log.service';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MyHeaderComponent]
})
export class ServicepagePage implements OnInit {
  tabData: any[] = [];
  seriesData: any[] = [];
  recData: any[] = [];

  @ViewChild('chartCanvas') chartRef!: ElementRef;
  chart: any;

  constructor(
    private tab: TabService,
    private series: SeriesService,
    private recursion: RecursionService,
    private log: LogService
  ) {}

  ngOnInit() {
    console.log('✅ Сторінка сервісів завантажена');
  }

  calculate() {
    this.tabData = this.tab.tabulate(-0.9, 0.9, 0.1);
    this.seriesData = this.series.tabulate(-0.9, 0.9, 0.1);
    this.recData = this.recursion.tabulate(-0.9, 0.9, 0.1);

    this.log.logMessage('=== Math.atan(x) ===');
    this.tabData.forEach(e => this.log.log(e.y, 'Tabulate', e.x));

    this.log.logMessage('=== Ряд Тейлора ===');
    this.seriesData.forEach(e => this.log.log(e.y, 'Series', e.x));

    this.log.logMessage('=== Рекурсія ===');
    this.recData.forEach(e => this.log.log(e.y, 'Recursion', e.x));

    setTimeout(() => this.createChart(), 0); // побудова графіка
  }

  formatResults(): string[] {
    return this.tabData.map((_, i) =>
      `x=${this.tabData[i].x.toFixed(1)} | atan=${this.tabData[i].y.toFixed(4)} | ` +
      `ряд=${this.seriesData[i]?.y.toFixed(4)} | рекурсія=${this.recData[i]?.y.toFixed(4)}`
    );
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.tabData.map(p => p.x.toFixed(1));
    const tab = this.tabData.map(p => p.y);
    const series = this.seriesData.map(p => p.y);
    const rec = this.recData.map(p => p.y);

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Math.atan(x)',
            data: tab,
            borderWidth: 2,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false
          },
          {
            label: 'Ряд Тейлора',
            data: series,
            borderWidth: 2,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false
          },
          {
            label: 'Рекурсія',
            data: rec,
            borderWidth: 2,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
