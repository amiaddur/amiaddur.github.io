const socialIcons = document.querySelectorAll('.social-media-icons a');

socialIcons.forEach((icon) => {
    icon.addEventListener('mouseenter', (e) => {
        icon.style.animation = 'bounce 0.5s ease-in-out';
    });
    icon.addEventListener('mouseleave', (e) => {
        icon.style.animation = '';
    });
});