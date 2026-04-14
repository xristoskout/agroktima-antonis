document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation for the icon
        const icon = menuToggle.querySelector('span');
        icon.textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('span').textContent = 'menu';
        });
    });

    // Simple scroll animation (reveal on scroll)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to sections
    document.querySelectorAll('section, .product-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // Custom CSS for JS animations
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @media (max-width: 1024px) {
            .nav-links.active {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: white;
                padding: 2rem;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                gap: 1.5rem;
                animation: fadeInDown 0.3s ease;
            }
        }
    `;
    document.head.appendChild(style);

    // Form submission handling (simulation)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Αποστολή...';
            
            // Simulate API call
            setTimeout(() => {
                btn.style.background = '#25D366';
                btn.textContent = 'Το μήνυμα εστάλη!';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }
});
