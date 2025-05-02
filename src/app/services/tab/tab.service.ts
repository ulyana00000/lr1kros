import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({ providedIn: 'root' })
export class TabService {
  constructor(private log: LogService) {}

  tabulate(xStart: number, xEnd: number, step: number): { x: number; y: number }[] {
    const results = [];
    for (let x = xStart; x <= xEnd + 0.0001; x += step) {
      const y = Math.atan(x);
      this.log.log(y, 'Tabulate', x);
      results.push({ x, y });
    }
    return results;
  }
}
