// Particle System for Background
let particles = [];
let particleCount = 50;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particle-container');
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear();
    
    // Update and display particles
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(2, 6);
        this.speedX = random(-0.5, 0.5);
        this.speedY = random(-0.5, 0.5);
        this.opacity = random(0.3, 0.8);
        this.color = color(212, 175, 55, this.opacity * 255); // Gold color
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
        
        // Twinkle effect
        this.opacity += random(-0.02, 0.02);
        this.opacity = constrain(this.opacity, 0.1, 0.8);
        this.color = color(212, 175, 55, this.opacity * 255);
    }
    
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}

// Initialize Typed.js for hero text
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: [
            'Welcome to Your Journey',
            'Discover Ancient Wisdom',
            'Find Your Path Forward',
            'Unlock Your Potential'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '✨'
    });
    
    // Initialize testimonial slider
    new Splide('#testimonial-slider', {
        type: 'loop',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
        gap: '2rem',
        breakpoints: {
            768: {
                gap: '1rem'
            }
        }
    }).mount();
    
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Card hover animations
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 10,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});

// Reading information data
const readingData = {
    general: {
        title: "General Tarot Reading",
        description: "A comprehensive reading that provides insight into your current life situation, challenges, and opportunities. Perfect for gaining clarity on your overall life path and understanding the energies surrounding you."
    },
    love: {
        title: "Love & Relationships",
        description: "Focus on matters of the heart, romantic connections, and relationship dynamics. Discover insights about current relationships, potential partnerships, and your journey in love."
    },
    career: {
        title: "Career & Finances",
        description: "Gain clarity on your professional path, financial decisions, and career opportunities. Understand the energies affecting your work life and discover pathways to abundance."
    },
    spiritual: {
        title: "Spiritual Growth",
        description: "Connect with your higher self and explore your spiritual journey. This reading focuses on personal development, inner wisdom, and your soul's purpose."
    },
    yesno: {
        title: "Yes or No Reading",
        description: "Get clear, direct answers to your specific questions. This focused reading provides straightforward guidance for decision-making and clarity."
    },
    indepth: {
        title: "In-Depth Reading",
        description: "A comprehensive, multi-card spread that explores all aspects of your question or situation in detail. Perfect for complex issues requiring thorough insight."
    }
};

// Show reading information
function showReadingInfo(type) {
    const infoDiv = document.getElementById('reading-info');
    const titleDiv = document.getElementById('reading-title');
    const descriptionDiv = document.getElementById('reading-description');
    
    const data = readingData[type];
    
    titleDiv.textContent = data.title;
    descriptionDiv.textContent = data.description;
    
    infoDiv.classList.remove('hidden');
    
    // Smooth scroll to info
    infoDiv.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
    
    // Animate the reveal
    anime({
        targets: infoDiv,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuad'
    });
}

// Smooth scroll to readings section
function scrollToReadings() {
    const readingsSection = document.querySelector('#reading-info').parentElement;
    readingsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// Navigation functionality
function navigateToPage(page) {
    window.location.href = page;
}

// Add mystical button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-mystical');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn-mystical {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);