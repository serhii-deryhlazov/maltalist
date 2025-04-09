import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListingsService {
  getAll() {
    return of([
      { id: '1', title: 'Used iPhone 12', price: 350 },
      { id: '2', title: 'Bike', price: 120 }
    ]);
  }

  getById(id: string) {
    return of({ id, title: 'Used iPhone 12', price: 350, description: 'Works fine' });
  }
}
