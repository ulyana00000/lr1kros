import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({ providedIn: 'root' })
export class SeriesService {
  constructor(private log: LogService) {}

  private atanSeries(x: number, terms: number = 10): number {
    let sum = 0;
    for (let n = 0; n < terms; n++) {
      const term = (Math.pow(-1, n) * Math.pow(x, 2 * n + 1)) / (2 * n + 1);
      sum += term;
    }
    return sum;
  }

  tabulate(xStart: number, xEnd: number, step: number): { x: number; y: number }[] {
    const results = [];
    for (let x = xStart; x <= xEnd + 0.0001; x += step) {
      const y = this.atanSeries(x);
      this.log.log(y, 'Series', x);
      results.push({ x, y });
    }
    return results;
  }
}
