// SOCIAL BUTTONS
const gmail = document.querySelectorAll('.gbtn')
const facebook = document.querySelectorAll('.fbtn')
const linkedin = document.querySelectorAll('.lbtn')
const instagram = document.querySelectorAll('.ibtn')
const x = document.querySelectorAll('.xbtn')


gmail.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://mailto:joepotential@gmail.com"
    })
})

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
