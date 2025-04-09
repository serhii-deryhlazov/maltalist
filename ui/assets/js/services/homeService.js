// assets/js/services/homeService.js
function HomeService(httpService) {
    this.getHomeData = function() {
        const url = 'home-data'; // Append this to the base URL
        return httpService.get(url);
    };
}

// Usage: Create instance of HomeService
const homeService = new HomeService(httpService);
