document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe the about section elements
    document.querySelectorAll('#about .owner-info, #about .location-info').forEach((el) => {
        observer.observe(el);
    });

    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            header.classList.remove('nav-hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('nav-hidden')) {
            // Scrolling down
            header.classList.add('nav-hidden');
            header.classList.remove('scrolled');
        } else if (currentScroll < lastScroll && header.classList.contains('nav-hidden')) {
            // Scrolling up
            header.classList.remove('nav-hidden');
            header.classList.add('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Get the navigation links
    const homeLink = document.querySelector('nav a[href="#home"]');
    const contactLink = document.querySelector('nav a[href="#contact"]');
    
    // Home link click handler
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact link click handler
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    });

    // Add logo click handler
    const logoLink = document.querySelector('.logo-link');
    
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});
