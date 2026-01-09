/**
 * CORE Vision - Carousel Module
 * Gestion du carousel 3D Instagram
 */

export function initCarousel() {
    const carousel = document.querySelector('.instagram__carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    if (!carousel || items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;
    const radius = 450; // Radius of the 3D circle
    const angleStep = (2 * Math.PI) / totalItems;
    let autoRotateInterval;

    function updateCarousel() {
        items.forEach((item, index) => {
            const angle = angleStep * (index - currentIndex);
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius - radius;
            const scale = 0.7 + (Math.cos(angle) * 0.3);
            const opacity = 0.4 + (Math.cos(angle) * 0.6);
            
            item.style.transform = `
                translateX(${x}px) 
                translateZ(${z}px) 
                scale(${scale})
            `;
            item.style.opacity = opacity;
            item.style.zIndex = Math.round(scale * 100);

            // Pause all videos
            const video = item.querySelector('video');
            if (video) {
                video.pause();
            }

            // Play video of active item
            if (index === currentIndex) {
                item.classList.add('active');
                if (video && video.paused) {
                    video.play().catch(() => {
                        // Autoplay might be blocked
                    });
                }
            } else {
                item.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function startAutoRotate() {
        autoRotateInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000); // Restart after 8s
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000); // Restart after 8s
        });
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoRotate);
    carousel.addEventListener('mouseleave', startAutoRotate);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000);
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000);
        }
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoRotate();
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(startAutoRotate, 8000);
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide();
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide();
        }
    }

    // Initialize
    updateCarousel();
    startAutoRotate();
}
