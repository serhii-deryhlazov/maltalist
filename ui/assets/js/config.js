// assets/js/config.js

// Base URL for API requests
const API_BASE_URL = 'https://api.maltalist.com/';  // Replace with your actual API URL

// Configuration for page size, number of listings per page, etc.
const PAGE_SIZE = 10;

// Possible Error Messages
const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please try again later.',
    NOT_FOUND: 'The requested resource could not be found.',
    GENERIC_ERROR: 'Something went wrong. Please try again.'
};

// Exporting configuration for use in other files
const Config = {
    API_BASE_URL,
    PAGE_SIZE,
    ERROR_MESSAGES
};

// Optional: if you're using modules, you can export Config this way
// export default Config;
