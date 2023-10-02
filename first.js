// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
