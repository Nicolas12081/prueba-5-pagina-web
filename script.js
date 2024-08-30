document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado.');
    });

    // Animación de aparición de productos al hacer scroll
    const products = document.querySelectorAll('.product-card');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
