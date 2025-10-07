/**
 * script.js
 * JavaScript for smooth scrolling and minimal interactivity.
 * Note: For web development, JavaScript (.js) is used, not Java.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling Implementation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();
            
            // Get the target element's ID from the href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed/sticky navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Arjun Shah's portfolio scripts loaded successfully.");
});