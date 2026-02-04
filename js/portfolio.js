// ========================================
// PORTFOLIO FILTERING
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter cards
            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Expand/collapse card details (all devices)
    portfolioCards.forEach(card => {
        const details = card.querySelector('.portfolio-details');
        if (details) {
            // Initially hide details
            details.style.maxHeight = '0';
            details.style.overflow = 'hidden';
            details.style.transition = 'max-height 0.4s ease, opacity 0.4s ease';
            details.style.opacity = '0';

            // Add expanded state indicator
            card.classList.add('collapsed');

            card.addEventListener('click', () => {
                // Toggle expanded state
                const isCollapsed = card.classList.contains('collapsed');

                if (isCollapsed) {
                    // Expand
                    card.classList.remove('collapsed');
                    card.classList.add('expanded');
                    details.style.maxHeight = details.scrollHeight + 'px';
                    details.style.opacity = '1';
                } else {
                    // Collapse
                    card.classList.add('collapsed');
                    card.classList.remove('expanded');
                    details.style.maxHeight = '0';
                    details.style.opacity = '0';
                }
            });
        }
    });
});

// Log portfolio page load
console.log('📁 Portfolio page loaded');
console.log('🎨 Project filtering active');
