import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MyHeaderComponent implements OnInit {
  @Input() name: string = 'Labs'; // Оголошуємо змінну name як вхідний параметр

  constructor() {}

  ngOnInit() {}
}
