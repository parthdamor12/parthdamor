document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = document.getElementById('toggle-icon');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle menu icon between burger and close x
            const isMenuOpen = navMenu.classList.contains('active');
            if (toggleIcon) {
                toggleIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
                window.lucide.createIcons();
            }
        });

        // Close menu when link is clicked (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (toggleIcon) {
                    toggleIcon.setAttribute('data-lucide', 'menu');
                    window.lucide.createIcons();
                }
            });
        });
    }

    /* ==========================================================================
       HEADER STICKY & SCROLL EFFECT
       ========================================================================== */
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       ACTIVE NAV LINK ON SCROLL (INTERSECTION OBSERVER)
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    /* ==========================================================================
       DYNAMIC TITLE ROTATOR (HERO)
       ========================================================================== */
    const dynamicTitles = document.querySelectorAll('.dynamic-title');
    let currentIndex = 0;

    function rotateTitles() {
        if (dynamicTitles.length === 0) return;
        
        dynamicTitles[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % dynamicTitles.length;
        dynamicTitles[currentIndex].classList.add('active');
    }

    // Rotate titles every 3 seconds
    setInterval(rotateTitles, 3000);

    /* ==========================================================================
       VIDEO CARD HOVER PREVIEW
       ========================================================================== */
    const videoItems = document.querySelectorAll('.portfolio-item[data-category="video"]');
    
    videoItems.forEach(item => {
        const video = item.querySelector('.project-video-preview');
        
        if (video) {
            item.addEventListener('mouseenter', () => {
                // Play video preview
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Auto-play was prevented (browser restriction)
                        console.log("Hover auto-play prevented:", error);
                    });
                }
            });

            item.addEventListener('mouseleave', () => {
                // Pause and reset video preview
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    /* ==========================================================================
       PORTFOLIO FILTERS
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });

    /* ==========================================================================
       VIDEO MODAL PLAYER
       ========================================================================== */
    const playButtons = document.querySelectorAll('.play-btn');
    const videoModal = document.getElementById('video-modal');
    const videoModalOverlay = document.getElementById('video-modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalVideoPlayer = document.getElementById('modal-video-player');

    function openVideoModal(url) {
        if (videoModal && modalVideoPlayer) {
            modalVideoPlayer.src = url;
            videoModal.classList.add('active');
            modalVideoPlayer.play().catch(error => {
                console.log("Modal play prevented:", error);
            });
            document.body.style.overflow = 'hidden'; // Stop page scroll
        }
    }

    function closeVideoModal() {
        if (videoModal && modalVideoPlayer) {
            videoModal.classList.remove('active');
            modalVideoPlayer.pause();
            modalVideoPlayer.src = '';
            document.body.style.overflow = ''; // Restore page scroll
        }
    }

    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const videoUrl = btn.getAttribute('data-video-url');
            if (videoUrl) {
                openVideoModal(videoUrl);
            }
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeVideoModal);
    if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeVideoModal);

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
            closeImageModal();
        }
    });

    /* ==========================================================================
       IMAGE LIGHTBOX
       ========================================================================== */
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    const imageModal = document.getElementById('image-modal');
    const imageModalOverlay = document.getElementById('image-modal-overlay');
    const imageModalClose = document.getElementById('image-modal-close');
    const modalImagePreview = document.getElementById('modal-image-preview');

    function openImageModal(url) {
        if (imageModal && modalImagePreview) {
            modalImagePreview.src = url;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop page scroll
        }
    }

    function closeImageModal() {
        if (imageModal && modalImagePreview) {
            imageModal.classList.remove('active');
            modalImagePreview.src = '';
            document.body.style.overflow = ''; // Restore page scroll
        }
    }

    zoomButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const imageUrl = btn.getAttribute('data-img-url');
            if (imageUrl) {
                openImageModal(imageUrl);
            }
        });
    });

    if (imageModalClose) imageModalClose.addEventListener('click', closeImageModal);
    if (imageModalOverlay) imageModalOverlay.addEventListener('click', closeImageModal);

    /* ==========================================================================
       CONTACT FORM SUBMIT HANDLER
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Note: If they host on GitHub Pages and use a Formspree ID,
            // they just replace action="https://formspree.io/f/your-form-id" with their ID.
            // We can prevent default behavior to show a nice custom popup, or let it submit.
            // Let's print a warning if they haven't set up their Formspree ID.
            const actionUrl = contactForm.getAttribute('action');
            if (actionUrl.includes('your-form-id')) {
                e.preventDefault();
                alert("Dhanyawaad Parth! Form UI is ready. Please configure your Formspree ID in index.html to receive actual messages on email, or use WhatsApp button for direct messaging!");
            }
        });
    }
});
