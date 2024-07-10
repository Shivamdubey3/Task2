document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code can be added here if needed
});

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('nav-list--active');
    });
});
