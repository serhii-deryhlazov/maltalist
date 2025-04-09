// assets/js/services/listingsService.js
function ListingsService(httpService) {
    this.getAllListings = function() {
        // Replace with actual URL or data source for all listings
        return httpService.get('api/listings');
    };

    this.getListingById = function(id) {
        // Replace with actual URL or data source for a single listing
        return httpService.get(`api/listings/${id}`);
    };
}

// Usage: Create instance of ListingsService
const listingsService = new ListingsService(httpService);
