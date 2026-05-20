document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons helper
    function refreshIcons() {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    refreshIcons();

    // 2. Parse URL parameters to get Project ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId || typeof projectsData === 'undefined') {
        // Fallback: Redirect to home page if invalid ID or data is missing
        window.location.href = 'index.html';
        return;
    }

    // 3. Find matching project
    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        // Redirect to homepage if project not found
        window.location.href = 'index.html';
        return;
    }

    // 4. Update page title & meta details
    document.title = `${project.title} | Parth Damor Portfolio`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${project.title} case study by Parth Damor. ${project.shortDesc}`);
    }

    // 5. Populate Main Headers & Meta Info
    const badgeEl = document.getElementById('project-detail-badge');
    const titleEl = document.getElementById('project-detail-title');
    const subtitleEl = document.getElementById('project-detail-subtitle');

    if (badgeEl) {
        badgeEl.className = `project-detail-badge ${project.category}-badge`;
        badgeEl.innerHTML = `<i data-lucide="${project.badgeIcon || 'layers'}"></i> ${project.badge}`;
    }
    if (titleEl) titleEl.textContent = project.title;
    if (subtitleEl) subtitleEl.textContent = project.shortDesc;

    // 6. Populate Narrative Sections (Challenge, Process, Outcome)
    const challengeEl = document.getElementById('project-challenge');
    const processEl = document.getElementById('project-process');
    const outcomeEl = document.getElementById('project-outcome');

    if (challengeEl) challengeEl.textContent = project.challenge;
    if (processEl) processEl.textContent = project.process;
    if (outcomeEl) outcomeEl.textContent = project.outcome;

    // 7. Populate Specs Table (Sidebar)
    const clientEl = document.getElementById('spec-client');
    const dateEl = document.getElementById('spec-date');
    const roleEl = document.getElementById('spec-role');
    const durationEl = document.getElementById('spec-duration');

    if (clientEl) clientEl.textContent = project.client;
    if (dateEl) dateEl.textContent = project.date;
    if (roleEl) roleEl.textContent = project.role;
    if (durationEl) durationEl.textContent = project.duration;

    // 8. Populate Specs Tech Tags
    const techContainer = document.getElementById('project-detail-tech');
    if (techContainer) {
        techContainer.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    }

    // 9. Update WhatsApp CTA Link Targeting this Specific Project
    const whatsappBtn = document.getElementById('project-whatsapp-btn');
    if (whatsappBtn) {
        const message = encodeURIComponent(`Hi Parth! I saw your portfolio project "${project.title}" and would love to discuss a similar project!`);
        whatsappBtn.href = `https://wa.me/919428528001?text=${message}`;
    }

    // 10. Load Primary Media Showcase (Video or Image)
    const mediaContainer = document.getElementById('showcase-media-container');
    if (mediaContainer) {
        mediaContainer.innerHTML = ''; // Clear loader spinner
        
        if (project.category === 'video') {
            // Render highly premium styled video player with standard controls, loops
            const videoEl = document.createElement('video');
            videoEl.src = project.videoUrl;
            videoEl.className = 'showcase-video-player';
            videoEl.controls = true;
            videoEl.autoplay = true;
            videoEl.muted = false;
            videoEl.playsInline = true;
            videoEl.poster = project.imageUrl;
            
            // Add a container wrapper for aesthetic shadows
            const playerWrapper = document.createElement('div');
            playerWrapper.className = 'video-player-wrapper-shadow';
            playerWrapper.appendChild(videoEl);
            mediaContainer.appendChild(playerWrapper);
        } else {
            // Render high-res image
            const imgEl = document.createElement('img');
            imgEl.src = project.imageUrl;
            imgEl.alt = project.title;
            imgEl.className = 'showcase-image-display';
            mediaContainer.appendChild(imgEl);
        }
    }

    // 11. Populate Photography Gallery (if applicable)
    const gallerySection = document.getElementById('gallery-section');
    const galleryContainer = document.getElementById('gallery-photos-container');
    
    if (project.category === 'photo' && project.gallery && project.gallery.length > 0) {
        if (gallerySection && galleryContainer) {
            gallerySection.style.display = 'block'; // Make section visible
            galleryContainer.innerHTML = '';
            
            project.gallery.forEach((imgUrl, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-photo-item card-glass';
                galleryItem.innerHTML = `
                    <img src="${imgUrl}" alt="Gallery image ${index + 1}" class="gallery-photo">
                    <div class="gallery-photo-overlay">
                        <button class="gallery-zoom-btn" data-img-url="${imgUrl}" aria-label="Zoom Image">
                            <i data-lucide="maximize-2"></i>
                        </button>
                    </div>
                `;
                
                // Lightbox event on clicking zoom button
                const zoomBtn = galleryItem.querySelector('.gallery-zoom-btn');
                zoomBtn.addEventListener('click', () => {
                    openImageModal(imgUrl);
                });
                
                galleryContainer.appendChild(galleryItem);
            });
        }
    }

    // 12. Dynamic Recommendations / Suggestions logic
    const suggestionsGrid = document.getElementById('suggestions-grid');
    if (suggestionsGrid) {
        suggestionsGrid.innerHTML = '';

        // Filter out current project
        const filteredProjects = projectsData.filter(p => p.id !== project.id);
        
        // Prioritize similar category, then shuffle/slice top 3
        const sortedProjects = filteredProjects.sort((a, b) => {
            if (a.category === project.category && b.category !== project.category) return -1;
            if (a.category !== project.category && b.category === project.category) return 1;
            return 0; // maintain order otherwise
        });

        const selectedSuggestions = sortedProjects.slice(0, 3);

        selectedSuggestions.forEach(s => {
            const card = document.createElement('div');
            card.className = 'portfolio-item card-glass show';
            card.setAttribute('data-category', s.category);
            card.setAttribute('id', `project-${s.id}`);
            
            // Card click navigates to that project's detail page
            card.addEventListener('click', (e) => {
                if (e.target.closest('.play-btn') || e.target.closest('.zoom-btn') || e.target.closest('.link-btn')) {
                    return;
                }
                window.location.href = `project.html?id=${s.id}`;
            });

            let mediaHTML = '';
            if (s.category === 'video') {
                mediaHTML = `
                    <video src="${s.videoUrl}" loop muted playsinline class="project-video-preview"></video>
                    <div class="project-overlay">
                        <button class="play-btn" data-video-url="${s.videoUrl}" aria-label="Play Video" id="btn-play-${s.id}">
                            <i data-lucide="play"></i>
                        </button>
                        <a href="project.html?id=${s.id}" class="link-btn" aria-label="View Details" id="btn-details-${s.id}" style="margin-left: 10px;">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge video-badge"><i data-lucide="video"></i> ${s.badge}</span>
                `;
            } else if (s.category === 'photo') {
                mediaHTML = `
                    <img src="${s.imageUrl}" alt="${s.title}" class="project-image">
                    <div class="project-overlay">
                        <button class="zoom-btn" data-img-url="${s.imageUrl}" aria-label="Zoom Image" id="btn-zoom-${s.id}">
                            <i data-lucide="maximize-2"></i>
                        </button>
                        <a href="project.html?id=${s.id}" class="link-btn" aria-label="View Details" id="btn-details-${s.id}" style="margin-left: 10px;">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge photo-badge"><i data-lucide="camera"></i> ${s.badge}</span>
                `;
            } else if (s.category === 'marketing') {
                mediaHTML = `
                    <img src="${s.imageUrl}" alt="${s.title}" class="project-image">
                    <div class="project-overlay">
                        <a href="project.html?id=${s.id}" class="link-btn" aria-label="View Details" id="btn-details-${s.id}">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge marketing-badge"><i data-lucide="${s.badgeIcon || 'megaphone'}"></i> ${s.badge}</span>
                `;
            } else {
                mediaHTML = `
                    <img src="${s.imageUrl}" alt="${s.title}" class="project-image">
                    <div class="project-overlay">
                        <a href="project.html?id=${s.id}" class="link-btn" aria-label="View Details" id="btn-details-${s.id}">
                            <i data-lucide="arrow-up-right"></i>
                        </a>
                    </div>
                    <span class="project-badge web-badge"><i data-lucide="code"></i> ${s.badge}</span>
                `;
            }

            const techHTML = s.tech.map(t => `<span>${t}</span>`).join('');

            card.innerHTML = `
                <div class="project-media">
                    ${mediaHTML}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${s.title}</h3>
                    <p class="project-desc">${s.shortDesc}</p>
                    <div class="project-tech">
                        ${techHTML}
                    </div>
                </div>
            `;
            suggestionsGrid.appendChild(card);
        });
    }

    // 13. Re-initialize modals and hover previews for newly injected suggestion cards
    initializeInteractionHandlers();
    refreshIcons();

    function initializeInteractionHandlers() {
        // Video hover play previews
        const videoCards = document.querySelectorAll('#suggestions-grid .portfolio-item[data-category="video"]');
        videoCards.forEach(card => {
            const video = card.querySelector('.project-video-preview');
            if (video) {
                card.addEventListener('mouseenter', () => {
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(err => console.log("Hover auto-play prevented:", err));
                    }
                });
                card.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0;
                });
            }
        });

        // Instant play buttons inside suggestions grid (loads custom modal player)
        const playButtons = document.querySelectorAll('#suggestions-grid .play-btn');
        const videoModal = document.getElementById('video-modal');
        const videoModalOverlay = document.getElementById('video-modal-overlay');
        const modalClose = document.getElementById('modal-close');
        const modalVideoPlayer = document.getElementById('modal-video-player');

        function openVideoModal(url) {
            if (videoModal && modalVideoPlayer) {
                modalVideoPlayer.src = url;
                videoModal.classList.add('active');
                modalVideoPlayer.play().catch(err => console.log("Modal play prevented:", err));
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
                if (videoUrl) openVideoModal(videoUrl);
            });
        });

        if (modalClose) modalClose.addEventListener('click', closeVideoModal);
        if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeVideoModal);

        // Instant zoom buttons inside suggestions grid
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
                if (imageUrl) openImageModal(imageUrl);
            });
        });

        if (imageModalClose) imageModalClose.addEventListener('click', closeImageModal);
        if (imageModalOverlay) imageModalOverlay.addEventListener('click', closeImageModal);

        // General Escape key listener
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeVideoModal();
                closeImageModal();
            }
        });
    }

    // Open lightbox function for parent scripts
    function openImageModal(url) {
        const imageModal = document.getElementById('image-modal');
        const modalImagePreview = document.getElementById('modal-image-preview');
        if (imageModal && modalImagePreview) {
            modalImagePreview.src = url;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
});
