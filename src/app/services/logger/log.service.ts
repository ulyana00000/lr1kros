import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {
  log(value: number, method: string, x: number): void {
    console.log(`[${method}] x=${x.toFixed(2)} → y=${value.toFixed(6)}`);
  }

  logMessage(message: string): void {
    console.log(message);
  }
}
