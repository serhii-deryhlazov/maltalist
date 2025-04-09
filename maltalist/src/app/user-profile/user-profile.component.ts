import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [FormsModule, RouterModule, CommonModule],
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    location: 'Malta',
    listings: [
      { id: 1, title: 'Vintage Guitar', description: 'An old guitar', price: 300 },
      { id: 2, title: 'Vintage Watch', description: 'Rare limited edition watch', price: 1500 },
      // Add more listings as needed
    ],
  };
}
