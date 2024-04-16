
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 // Triggerar när 50% av elementet är synligt
    });

    document.querySelectorAll('.project').forEach(project => {
        observer.observe(project);
    });
});
