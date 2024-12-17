function createStars() {
    const container = document.getElementById('space-container');
    const starCount = 500; 
    const colors = ['#ffffff', '#e6e6fa', '#f0f8ff', '#f5f5f5'];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

       
        const size = Math.random() * 3;
         star.style.width = `${size}px`;
        star.style.height = `${size}px`;

       
        const duration = 26 + Math.random() * 26;
        star.style.animationDuration = `${duration}s`;

        container.appendChild(star);
    }
}

createStars();

window.addEventListener('resize', () => {
    const container = document.getElementById('space-container');
    container.innerHTML = '';
    createStars();
});

const texts = [
    'Web Developement',
    'Blockchain Technology',
    'Game Dev using JavaScript', 
    'UI UX Enthusiast',
    'Student',
    'Learner'
];

const typingElement = document.getElementById('typing-text-main');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => { isDeleting = true; }, 2000);
        }
    } else {
        typingElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

type();

