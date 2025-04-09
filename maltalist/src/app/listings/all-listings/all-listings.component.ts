import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-listings',
  imports: [CommonModule, FormsModule],
  templateUrl: './all-listings.component.html',
  styleUrl: './all-listings.component.css'
})
export class AllListingsComponent {
  listings = [
    { title: 'Used iPhone 12', price: 350 },
    { title: 'Mountain Bike', price: 220 },
    { title: 'Gaming Chair', price: 90 },
    { title: 'Bookshelf', price: 40 },
    { title: 'Second-hand Sofa', price: 150 },
    { title: 'Fridge - working!', price: 80 }
  ];

  searchTerm = '';

  get filteredListings() {
    const term = this.searchTerm.toLowerCase();
    return this.listings.filter(item => item.title.toLowerCase().includes(term));
  }
}
