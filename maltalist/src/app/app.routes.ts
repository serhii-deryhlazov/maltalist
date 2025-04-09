import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'listings',
    loadComponent: () =>
      import('./listings/all-listings/all-listings.component').then(
        m => m.AllListingsComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./listings/create-listing/create-listing.component').then(
        m => m.CreateListingComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./user-profile/user-profile.component').then(m => m.UserProfileComponent),
  },
  {
    path: 'listings/:id',
    loadComponent: () =>
      import('./listings/listing-details.component').then(m => m.ListingDetailsComponent),
  },
  { path: '**', redirectTo: 'home' },
];
