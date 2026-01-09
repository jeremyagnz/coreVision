/**
 * CORE Vision - Main JavaScript
 * Point d'entrée principal et orchestration des modules
 */

import { initCursor } from './cursor.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initCarousel } from './carousel.js';
import { initFilters } from './filters.js';

/**
 * Preloader management
 */
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const preloaderBar = document.querySelector('.preloader__bar');
    
    if (!preloader || !preloaderBar) return;

    let progress = 0;
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const progressInterval = setInterval(() => {
        progress += increment;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Hide preloader after completion
            setTimeout(() => {
                preloader.classList.add('hidden');
                
                // Remove from DOM after transition
                setTimeout(() => {
                    preloader.remove();
                }, 600);
                
                // Initialize animations after preloader
                initAnimations();
            }, 500);
        }
        
        preloaderBar.style.transform = `scaleX(${progress / 100})`;
    }, interval);
}

/**
 * Video lazy loading and autoplay
 */
function initVideos() {
    const videos = document.querySelectorAll('video[data-src]');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const src = video.getAttribute('data-src');
                
                if (src) {
                    video.src = src;
                    video.load();
                    video.play().catch(() => {
                        // Autoplay might be blocked
                    });
                }
                
                videoObserver.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    videos.forEach(video => videoObserver.observe(video));

    // Handle video hover for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const video = card.querySelector('video');
        
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(() => {});
            });
            
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
}

/**
 * Image lazy loading
 */
function initImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Smooth scroll initialization
 */
function initSmoothScroll() {
    // Already handled in navigation.js
    // This is a placeholder for future enhancements
}

/**
 * Analytics and performance monitoring (placeholder)
 */
function initAnalytics() {
    // Log page load performance
    window.addEventListener('load', () => {
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }
    });
}

/**
 * Initialize all modules
 */
function init() {
    // Start preloader
    initPreloader();
    
    // Initialize core modules
    initCursor();
    initNavigation();
    initFilters();
    initCarousel();
    
    // Initialize media
    initVideos();
    initImages();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize analytics
    initAnalytics();
    
    console.log('🎬 CORE Vision initialized');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility for video management
document.addEventListener('visibilitychange', () => {
    const videos = document.querySelectorAll('video');
    
    if (document.hidden) {
        videos.forEach(video => video.pause());
    } else {
        // Resume hero video
        const heroVideo = document.querySelector('.hero__video');
        if (heroVideo) {
            heroVideo.play().catch(() => {});
        }
    }
});

// Export init for manual initialization if needed
export { init };
