// Add event listener to the button in the hero section
document.querySelector('.hero button').addEventListener('click', function() {
    // Scroll to the about section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to the contact form
document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted');
});
