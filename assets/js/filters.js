/**
 * CORE Vision - Filters Module
 * Gestion des filtres de projets
 */

export function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects with GSAP if available
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    // Show card with animation
                    if (typeof gsap !== 'undefined') {
                        gsap.to(card, { 
                            opacity: 1, 
                            scale: 1, 
                            duration: 0.4 
                        });
                    } else {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }
                } else {
                    // Dim card with animation
                    if (typeof gsap !== 'undefined') {
                        gsap.to(card, { 
                            opacity: 0.2, 
                            scale: 0.95, 
                            duration: 0.4 
                        });
                    } else {
                        card.style.opacity = '0.2';
                        card.style.transform = 'scale(0.95)';
                    }
                }
            });
        });
    });

    // Set first button as active by default
    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }
}
