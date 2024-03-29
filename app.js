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
        window.location = "https://www.linkedin.com/"
    })
})

instagram.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.instagram.com/"
    })
})

x.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.x.com/"
    })
})


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Send form data asynchronously
    fetch('https://formspree.io/f/xgegnkzl', {
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