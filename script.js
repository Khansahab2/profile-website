// Smooth scroll to sections
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Check if the button links to an in-page section (like "#contact")
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            // Only scroll if the target element exists
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
