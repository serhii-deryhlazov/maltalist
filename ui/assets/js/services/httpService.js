// assets/js/services/httpService.js
function HttpService() {
    // Generic function to make GET requests
    this.get = function(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('HTTP GET request failed:', error);
                throw error;
            });
    };

    // You can add more methods for POST, PUT, DELETE, etc., if needed
    this.post = function(url, data) {
        return fetch(url, {
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
