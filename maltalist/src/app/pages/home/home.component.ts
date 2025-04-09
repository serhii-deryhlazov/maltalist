import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listings = [
    { title: 'Used iPhone 12', price: 350 },
    { title: 'Mountain Bike', price: 220 },
    { title: 'Gaming Chair', price: 90 },
    { title: 'Old Bookshelf', price: 40 }
  ];
}
