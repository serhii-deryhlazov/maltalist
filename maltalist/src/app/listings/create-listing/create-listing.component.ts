import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css'],
  imports: [FormsModule],
})
export class CreateListingComponent {
  listing = {
    title: '',
    description: '',
    price: null,
    imageUrl: '',
  };

  onSubmit() {
    console.log('New Listing:', this.listing);
    // Here, you would typically send the data to the backend.
  }
}
