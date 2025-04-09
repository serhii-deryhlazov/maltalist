// assets/js/app.js
$(document).ready(function() {
    function loadContent(page) {
        $('#content').html('<h1>Loading ' + page + '...</h1>');

        // Load content from the respective HTML page inside /pages folder
        $('#content').load('pages/' + page.toLowerCase().replace(' ', '-') + '.html', function() {
            // Once content is loaded, we can use the corresponding service for that page
            if (page === 'Home') {
                loadHomePageData();
            } else if (page === 'All Listings') {
                loadListingsPageData();
            } else if (page === 'Create Listing') {
                loadCreateListingPage();
            } else if (page === 'My Profile') {
                loadUserProfilePage();
            }
        });
    }

    function loadHomePageData() {
        homeService.getHomeData()
            .then(data => {
                // Process and display the home page data here
                $('#content').html('<h1>Home</h1><p>' + data.homeContent + '</p>');
            })
            .catch(error => {
                $('#content').html('<h1>Error loading home data</h1>');
            });
    }

    function loadListingsPageData() {
        listingsService.getAllListings()
            .then(listings => {
                let listingsHtml = '<h1>All Listings</h1><ul>';
                listings.forEach(listing => {
                    listingsHtml += `<li>${listing.title}</li>`;
                });
                listingsHtml += '</ul>';
                $('#content').html(listingsHtml);
            })
            .catch(error => {
                $('#content').html('<h1>Error loading listings</h1>');
            });
    }

    function loadCreateListingPage() {
        // You can implement similar functionality for the create listing page
        $('#content').html('<h1>Create Listing</h1><p>Form will be here</p>');
    }

    function loadUserProfilePage() {
        userProfileService.getUserProfile(1)  // Assume userId = 1
            .then(profile => {
                $('#content').html('<h1>My Profile</h1><p>' + profile.name + '</p>');
            })
            .catch(error => {
                $('#content').html('<h1>Error loading profile</h1>');
            });
    }

    // Load home page by default
    loadContent('Home');

    // Bind click events to navigation links
    $('#home').click(function() {
        loadContent('Home');
    });

    $('#listings').click(function() {
        loadContent('All Listings');
    });

    $('#create').click(function() {
        loadContent('Create Listing');
    });

    $('#profile').click(function() {
        loadContent('My Profile');
    });
});
