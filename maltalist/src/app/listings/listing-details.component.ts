import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-details',
  standalone: true,
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {
  id = '';
  listing: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      // TODO: Fetch real listing by ID
      this.listing = {
        id: this.id,
        title: 'Used iPhone 12',
        price: 350,
        description: 'Good condition. Pick-up in Victoria.'
      };
    });
  }
}
