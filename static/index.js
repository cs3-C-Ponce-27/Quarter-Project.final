document.addEventListener("DOMContentLoaded", function () {
    // Get all video cards
    var videoCards = document.querySelectorAll(".video-card");

    // Loop through each video card
    videoCards.forEach(function (card) {
        // Get the video element within the current card
        var video = card.querySelector("video");

        // Add event listener for mouseenter
        card.addEventListener("mouseenter", function () {
            // Play the video when mouse enters the card
            video.play();
            video.style.display = "block"; // Show the video
        });

        // Add event listener for mouseleave
        card.addEventListener("mouseleave", function () {
            // Pause the video when mouse leaves the card
            video.pause();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.querySelector('body');

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});


// =======================================
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    if(dots.length > 0) {
        dots[slideIndex].className += " active";
    }
}
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    if(dots.length > 0) {
        dots[slideIndex].className += " active";
    }
}
