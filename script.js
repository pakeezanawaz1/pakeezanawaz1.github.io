document.addEventListener('DOMContentLoaded', () => {
    
    // Page Load Animation (Fade In Body)
    document.body.classList.add('loaded');

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        const body = document.body;

        // Check local storage or system preference
        const currentTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        const enableDarkMode = () => {
            body.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        };

        const enableLightMode = () => {
            body.removeAttribute('data-theme');
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        };

        if (currentTheme === 'dark') {
            enableDarkMode();
        } else if (currentTheme === 'light') {
            enableLightMode();
        } else if (prefersDarkScheme.matches) {
            enableDarkMode();
        }

        themeToggleBtn.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Toggle icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                if (hamburger.querySelector('i')) {
                    hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            });
        });
    }

    // Scroll Reveal Animation
    function reveal() {
        var reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    
    // Initial reveal check with a slight delay to allow fade-in to start
    setTimeout(reveal, 100);
});
