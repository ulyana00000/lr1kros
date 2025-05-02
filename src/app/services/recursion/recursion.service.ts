import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({ providedIn: 'root' })
export class RecursionService {
  constructor(private log: LogService) {}

  private atanRecursive(x: number, n: number): number {
    if (n === 0) return x;
    const term = (Math.pow(-1, n) * Math.pow(x, 2 * n + 1)) / (2 * n + 1);
    return term + this.atanRecursive(x, n - 1);
  }

  tabulate(xStart: number, xEnd: number, step: number): { x: number; y: number }[] {
    const results = [];
    for (let x = xStart; x <= xEnd + 0.0001; x += step) {
      const y = this.atanRecursive(x, 10); // 10 термінів
      this.log.log(y, 'Recursion', x);
      results.push({ x, y });
    }
    return results;
  }
}
