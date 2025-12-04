// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: ['AI Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Data Analyst'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(2, 6, 23, 0.95)'; // Darker bg on scroll
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)'; // Original bg
        navbar.style.boxShadow = 'none';
    }
});
