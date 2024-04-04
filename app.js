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
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (in this case, OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([51.5, -0.09]).addTo(map);