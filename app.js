// SOCIAL BUTTONS
const facebook = document.querySelectorAll('.fbtn')
const linkedin = document.querySelectorAll('.lbtn')
const instagram = document.querySelectorAll('.ibtn')
const x = document.querySelectorAll('.xbtn')



facebook.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.facebook.com/"
    })
})

linkedin.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.linkedin.com/in/team-vaxheromoms-07b164302/"
    })
})

instagram.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.instagram.com/vaxheromoms_"
    })
})

x.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.x.com/vaxheromoms?s=11"
    })
})


// THANK YOU PAGE
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Send form data asynchronously
    fetch('https://formspree.io/f/xvoewnzv', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    // Handle successful form submission
    alert('Thank you! Your message has been sent.');
    // Optionally, redirect users to another page
    window.location.href = 'thank-you.html'; // Replace 'thank-you.html' with your thank you page URL
    })
    .catch(error => {
    // Handle errors
    console.error('There was an error!', error);
    alert('Oops! Something went wrong.');
        });
});


// NEWSLETTER
document.getElementById("newsletterForm").addEventListener("submit", function(eventNews) {
    eventNews.preventDefault(); // Prevent default form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Send form data asynchronously
    fetch('https://formspree.io/f/mvoeweqj', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    // Handle successful form submission
    alert('Thank you! Your message has been sent.');
    // Optionally, redirect users to another page
    window.location.href = 'thank-you.html'; // Replace 'thank-you.html' with your thank you page URL
    })
    .catch(error => {
    // Handle errors
    console.error('There was an error!', error);
    alert('Oops! Something went wrong.');
        });
});


// MENU BAR
const menu = document.querySelector('.sections')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})


// SCROLL TO TOP BUTTON
const topBtn = document.querySelector ('.top-btn')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show-btn')
    } 
    else {
        topBtn.classList.remove('show-btn')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


//NAVBAR COLOUR CHANGE
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var navbar = document.querySelector("header");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
}


// SCROLL TO SECTIONS PROPERLY
function scrollToSection(sectionId) {
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect().height; 
    const section = document.querySelector(sectionId);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
    
    const topOffset = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
    });

    menu.classList.toggle('open')
}


//MAP FUNCTION
// Initialize the map
var map = L.map('map').setView([0, 0], 15); // Increased zoom level (15)

// Add a tile layer (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Get user's current location using Geolocation API
navigator.geolocation.getCurrentPosition(function(position) {
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;

    // Set map view to user's current location with increased zoom level
    map.setView([userLat, userLon], 15); // Increased zoom level (15)

    // Mark user's location with a default marker
    L.marker([userLat, userLon]).addTo(map).bindPopup('Your Location');

    // Define a query to fetch hospital data from Overpass API around user's location
    var overpassQuery = '[out:json];node["amenity"="hospital"](around:5000,' + userLat + ',' + userLon + ');out;';

    // Fetch hospital data from Overpass API
    fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: overpassQuery
    })
    .then(response => response.json())
    .then(data => {
    // Process the fetched data and add markers for hospitals
    data.elements.forEach(hospital => {
        var lat = hospital.lat;
        var lon = hospital.lon;
        L.marker([lat, lon]).addTo(map).bindPopup(hospital.tags.name || 'Hospital');
        });
    })
    .catch(error => {
        console.error('Error fetching hospital data:', error);
    });
    }, function(error) {
    console.error('Error getting user location:', error);
    });