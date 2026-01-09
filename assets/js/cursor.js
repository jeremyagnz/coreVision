/**
 * CORE Vision - Cursor Module
 * Gestion du curseur personnalisé
 */

export function initCursor() {
    // Check if device supports hover (not touch device)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    
    if (!hasHover) {
        return; // Don't init cursor on touch devices
    }

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor movement
    function animateCursor() {
        const speed = 0.2;
        
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .filter-btn, .carousel-control');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (element.classList.contains('project-card')) {
                cursor.classList.add('hover-video');
            } else {
                cursor.classList.add('hover');
            }
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover', 'hover-video');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}
