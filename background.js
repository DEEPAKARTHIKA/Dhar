// Array of background images
const images = [
    'url("images/images1.jpg")',
    'url("images/images2.jpg")',
    'url("images/images3.jpg")',
    'url("images/images4.jpg")'
];

let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last
}

// Change background every 1 second (1000 ms)
setInterval(changeBackground, 1000);
