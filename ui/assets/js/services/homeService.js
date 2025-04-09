// assets/js/services/homeService.js
function HomeService(httpService) {
    this.getHomeData = function() {
        // Replace with actual URL or data source for home content
        return httpService.get('api/home-data'); 
    };
}

// Usage: Create instance of HomeService
const homeService = new HomeService(httpService);
