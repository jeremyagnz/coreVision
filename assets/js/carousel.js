/**
 * CORE Vision - Carousel Module
 * Gestion du carousel 3D Instagram
 */

export function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel-control.prev');
    const carouselNext = document.querySelector('.carousel-control.next');
    
    if (!carouselItems || carouselItems.length === 0) return;

    let currentIndex = Math.floor(carouselItems.length / 2); // Start in the middle
    let carouselInterval;

    function updateCarousel() {
        carouselItems.forEach((item, i) => {
            const offset = i - currentIndex;
            const absOffset = Math.abs(offset);
            
            let translateX = offset * 320;
            let translateZ = -absOffset * 150;
            let rotateY = offset * -15;
            let scale = 1 - absOffset * 0.15;
            let opacity = 1 - absOffset * 0.25;
            let blur = absOffset * 2;
            
            if (absOffset > 3) {
                opacity = 0;
                scale = 0.5;
            }
            
            item.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            item.style.opacity = opacity;
            item.style.filter = `blur(${blur}px)`;
            item.style.zIndex = 10 - absOffset;
            
            // Pause all videos
            const video = item.querySelector('video');
            if (video) {
                video.pause();
            }

            // Active state - play video of active item
            if (i === currentIndex) {
                item.classList.add('active');
                if (video) {
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
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function startAutoRotate() {
        carouselInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoRotate() {
        clearInterval(carouselInterval);
    }

    // Event listeners
    if (carouselPrev) {
        carouselPrev.addEventListener('click', () => {
            prevSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000); // Restart after 8s
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener('click', () => {
            nextSlide();
            stopAutoRotate();
            setTimeout(startAutoRotate, 8000); // Restart after 8s
        });
    }

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container, .instagram__carousel-wrapper');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoRotate);
        carouselContainer.addEventListener('mouseleave', startAutoRotate);
    }

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

    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoRotate();
        });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            setTimeout(startAutoRotate, 8000);
        });
    }

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
