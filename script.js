// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click handlers to all nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            const navbarLinks = document.getElementById('navbar-links');
            const mobileToggle = document.getElementById('mobile-menu-toggle');
            if (navbarLinks.classList.contains('active')) {
                navbarLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

mobileMenuToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navbarLinks.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Toast notification function
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Form submission handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        order: document.getElementById('order').value,
        date: document.getElementById('date').value
    };
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Form submitted:', formData);
    
    // Show success toast
    showToast('Thank you! Your inquiry has been received. We\'ll get back to you soon! 🧸');
    
    // Reset form
    contactForm.reset();
});

// Add active state to navbar links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});