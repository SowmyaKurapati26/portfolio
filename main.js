// Rotating taglines
const taglines = [
    'Web Developer',
    'Creative Coder',
    'AI/ML Enthusiast',
    'Full Stack Developer',
    'Problem Solver'
];

let currentTaglineIndex = 0;
const taglineElement = document.getElementById('tagline');

function rotateTagline() {
    if (taglineElement) {
        taglineElement.style.opacity = '0';
        taglineElement.style.transform = 'translateY(20px)';

        setTimeout(() => {
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            taglineElement.textContent = taglines[currentTaglineIndex];
            taglineElement.style.opacity = '1';
            taglineElement.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Start rotating taglines
setInterval(rotateTagline, 3000);

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section, .project-card, .skill-category, .stat, .education-card, .achievement-card, .profile-card');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        padding: 1rem;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log(`
%cWelcome to Sowmya's Portfolio! 👋
%c
%cBuilt with ❤️ and lots of ☕
%c
%cCheck out the source code and let's connect!
`,
    'color: #6366f1; font-size: 20px; font-weight: bold;',
    'color: #6b7280; font-size: 14px;',
    'color: #f59e0b; font-size: 14px;',
    'color: #6b7280; font-size: 14px;',
    'color: #ec4899; font-size: 14px;'
);
