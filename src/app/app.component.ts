import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule], // 🔹 Додаємо HttpClientModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 🔹 Додаємо CUSTOM_ELEMENTS_SCHEMA для web-компонентів
})
export class AppComponent {}
