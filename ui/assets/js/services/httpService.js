// assets/js/services/httpService.js
function HttpService() {
    // Generic function to make GET requests
    this.get = function(url) {
        const apiUrl = Config.API_BASE_URL + url; // Use the base URL from config
        return fetch(apiUrl)
            .then(response => response.json())
            .catch(error => {
                console.error('HTTP GET request failed:', error);
                throw error;
            });
    };

    // POST request example
    this.post = function(url, data) {
        const apiUrl = Config.API_BASE_URL + url; // Use the base URL from config
        return fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error => {
            console.error('HTTP POST request failed:', error);
            throw error;
        });
    };
}

// Usage: Create instance of HttpService
const httpService = new HttpService();
