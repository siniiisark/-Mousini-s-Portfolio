const starsContainer = document.querySelector('.stars');
const numberOfStars = 100;
const gridSize = Math.ceil(Math.sqrt(numberOfStars));
const cellWidth = window.innerWidth / gridSize;
const cellHeight = window.innerHeight / gridSize;
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const gridX = i % gridSize;
            const gridY = Math.floor(i / gridSize);
            const randomX = Math.random() * cellWidth;
            const randomY = Math.random() * cellHeight;
            const x = (gridX * cellWidth + randomX) / window.innerWidth * 100;
            const y = (gridY * cellHeight + randomY) / window.innerHeight * 100;
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.animationDelay = `${Math.random() * 1}s`;
            starsContainer.appendChild(star);
        }
const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        const cards = document.querySelectorAll('.card');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        cards.forEach(card => {
            observer.observe(card);
        });
