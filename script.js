// Array of background images
const images = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
    'url("image4.jpg")'
];

let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last
}

// Change background every 1 second (1000 ms)
setInterval(changeBackground, 1000);

// Envelope animation
const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});
