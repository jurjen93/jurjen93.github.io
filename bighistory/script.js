function toggleCard(element) {
    element.classList.toggle('active');
}

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCard(card);
        }
    });
});

