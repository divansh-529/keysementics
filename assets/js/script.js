const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');

        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach((item) => {
            if (item !== content) {
                item.style.maxHeight = null; // Collapse
                item.previousElementSibling.querySelector('.accordion-icon').classList.remove('rotate-180');
            }
        });

        // Toggle current accordion
        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse
            icon.classList.remove('rotate-180');
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Expand
            icon.classList.add('rotate-180');
        }
    });
});