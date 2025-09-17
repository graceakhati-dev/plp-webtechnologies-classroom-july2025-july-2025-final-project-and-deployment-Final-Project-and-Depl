// GALLERY LIGHTBOX FUNCTIONALITY

function openLightbox(element) {
    // Get the lightbox and the image inside it
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Set the source of the lightbox image to the clicked image
    lightboxImg.src = element.src;
    
    // Show the lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    // Get the lightbox and hide it
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// CONTACT FORM VALIDATION
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

    // Validate Name
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Please enter your name';
        isValid = false;
    }

    // Validate Email
    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate Message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Please enter your message';
        isValid = false;
    }

    // If form is valid, show success message (for now)
    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset(); // Clear the form
    }
});