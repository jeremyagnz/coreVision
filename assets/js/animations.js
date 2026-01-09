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

    // Hero animations
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        gsap.from('.hero__logo', {
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('.hero__tagline', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.8,
            ease: 'power3.out'
        });

        gsap.from('.hero__scroll', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 1.2,
            ease: 'power3.out'
        });
    }

    // Hero parallax effect
    const heroVideo = document.querySelector('.hero__video');
    if (heroVideo && typeof ScrollTrigger !== 'undefined') {
        gsap.to('.hero__video', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.hero__content', {
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
        gsap.from('.about__image', {
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.about__content', {
            opacity: 0,
            x: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animate value items with stagger
        gsap.from('.value-item', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.about__values',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Projects animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.projects__header', {
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
                trigger: '.projects__grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // Instagram section animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.instagram__header', {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: '.instagram',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from('.instagram__carousel-wrapper', {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: '.instagram__carousel-wrapper',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }

    // CTA section animations
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.cta__content', {
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
