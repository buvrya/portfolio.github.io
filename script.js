document.addEventListener('DOMContentLoaded', () => {
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navUl.classList.toggle('active');
            // Prevent scroll when menu is open
            if (navUl.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navUl.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Lightbox Logic
    const body = document.body;

    // Create Modal HTML if not exists
    if (!document.querySelector('.lightbox-modal')) {
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" id="lightbox-img">
        `;
        body.appendChild(modal);
    }

    const modal = document.querySelector('.lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Add click event to all images with class 'zoomable'
    const attachZoomListeners = () => {
        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('click', () => {
                modal.classList.add('active');
                modalImg.src = img.src;
                body.style.overflow = 'hidden'; // Disable scroll
            });
        });
    };

    // Initial attachment
    attachZoomListeners();

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        body.style.overflow = 'auto'; // Re-enable scroll
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });
});
