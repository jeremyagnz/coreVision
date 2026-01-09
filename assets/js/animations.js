/**
 * CORE Vision - Animations Module
 * Gestion des animations GSAP et ScrollTrigger
 */

export function initAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded');
        return;
    }

    // Register ScrollTrigger plugin
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero animations - Updated class names to match HTML
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from('.hero-logo', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('.hero-vision', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.7,
            ease: 'power3.out'
        });

        gsap.from('.hero-tagline', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.9,
            ease: 'power3.out'
        });

        gsap.from('.hero-scroll', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 1.2,
            ease: 'power3.out'
        });
    }

    // Hero parallax effect
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo && typeof ScrollTrigger !== 'undefined') {
        gsap.to('.hero-video', {
            scale: 1.2,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.hero-content', {
            yPercent: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // About section animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.about-image', {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.about-content', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate value tags with stagger
        gsap.from('.value-tag', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.about-values',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Projects animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.projects__header, .projects .section-header', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.projects',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate project cards with stagger
        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.projects__grid, .projects-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Instagram section animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.instagram__header, .instagram .section-header', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.instagram',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.instagram__carousel-wrapper, .carousel-container', {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: '.instagram__carousel-wrapper, .carousel-container',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // CTA section animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.cta__content, .cta-content', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Footer animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.footer__section', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    }
}
