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
       DYNAMIC PORTFOLIO RENDERING
       ========================================================================== */
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    function renderPortfolio() {
        if (!portfolioGrid || typeof projectsData === 'undefined') return;
        
        portfolioGrid.innerHTML = ''; // Clear fallback/placeholder
        
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'portfolio-item card-glass show';
            card.setAttribute('data-category', project.category);
            card.setAttribute('id', `project-${project.id}`);
            
            // Navigate to detail page on card click (excluding action buttons)
            card.addEventListener('click', (e) => {
                if (e.target.closest('.play-btn') || e.target.closest('.zoom-btn') || e.target.closest('.link-btn')) {
                    return;
                }
                window.location.href = `project.html?id=${project.id}`;
            });
            
            let mediaHTML = '';
            if (project.category === 'video') {
                mediaHTML = `
                    <video src="${project.videoUrl}" ${project.imageUrl ? `poster="${project.imageUrl}"` : ''} loop muted playsinline class="project-video-preview"></video>
                    <div class="project-overlay">
                        <button class="play-btn" data-video-url="${project.videoUrl}" aria-label="Play Cinematic Reel" id="btn-play-${project.id}">
                            <i data-lucide="play"></i>
                        </button>
                        <a href="project.html?id=${project.id}" class="link-btn" aria-label="View Details" id="btn-details-${project.id}" style="margin-left: 10px;">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge video-badge"><i data-lucide="video"></i> ${project.badge}</span>
                `;
            } else if (project.category === 'photo') {
                mediaHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                    <div class="project-overlay">
                        <button class="zoom-btn" data-img-url="${project.imageUrl}" aria-label="View Full Portrait" id="btn-zoom-${project.id}">
                            <i data-lucide="maximize-2"></i>
                        </button>
                        <a href="project.html?id=${project.id}" class="link-btn" aria-label="View Details" id="btn-details-${project.id}" style="margin-left: 10px;">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge photo-badge"><i data-lucide="camera"></i> ${project.badge}</span>
                `;
            } else if (project.category === 'marketing') {
                mediaHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                    <div class="project-overlay">
                        <a href="project.html?id=${project.id}" class="link-btn" aria-label="View Details" id="btn-details-${project.id}">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge marketing-badge"><i data-lucide="${project.badgeIcon || 'megaphone'}"></i> ${project.badge}</span>
                `;
            } else {
                mediaHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                    <div class="project-overlay">
                        <a href="project.html?id=${project.id}" class="link-btn" aria-label="View Details" id="btn-details-${project.id}">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge web-badge"><i data-lucide="code"></i> ${project.badge}</span>
                `;
            }
            
            const techHTML = project.tech.map(t => `<span>${t}</span>`).join('');
            
            card.innerHTML = `
                <div class="project-media">
                    ${mediaHTML}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.shortDesc}</p>
                    <div class="project-tech">
                        ${techHTML}
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(card);
        });
        
        // Re-create Lucide icons for injected elements
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    
    // Render dynamic portfolio first
    renderPortfolio();

    /* ==========================================================================
       VIDEO CARD HOVER PREVIEW
       ========================================================================== */
    const videoItems = document.querySelectorAll('.portfolio-item[data-category="video"]');
    
    videoItems.forEach(item => {
        const video = item.querySelector('.project-video-preview');
        
        if (video) {
            item.addEventListener('mouseenter', () => {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Hover auto-play prevented:", error);
                    });
                }
            });

            item.addEventListener('mouseleave', () => {
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
            filterButtons.forEach(button => button.classList.remove('active'));
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
            document.body.style.overflow = 'hidden';
        }
    }

    function closeVideoModal() {
        if (videoModal && modalVideoPlayer) {
            videoModal.classList.remove('active');
            modalVideoPlayer.pause();
            modalVideoPlayer.src = '';
            document.body.style.overflow = '';
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
            document.body.style.overflow = 'hidden';
        }
    }

    function closeImageModal() {
        if (imageModal && modalImagePreview) {
            imageModal.classList.remove('active');
            modalImagePreview.src = '';
            document.body.style.overflow = '';
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

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
            closeImageModal();
        }
    });

    /* ==========================================================================
       CONTACT FORM SUBMIT HANDLER
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const actionUrl = contactForm.getAttribute('action');
            if (actionUrl.includes('your-form-id')) {
                e.preventDefault();
                alert("Dhanyawaad Parth! Form UI is ready. Please configure your Formspree ID in index.html to receive actual messages on email, or use WhatsApp button for direct messaging!");
            }
        });
    }
});
