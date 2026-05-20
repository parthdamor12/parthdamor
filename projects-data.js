const projectsData = [
    {
        id: "cyberpunk-city",
        category: "video",
        title: "Cyberpunk City - Cinematic Edit",
        shortDesc: "A futuristic aesthetic edit featuring quick transitions, neon-color grading, and customized sound design.",
        badge: "Video Editing",
        badgeIcon: "video",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-40130-large.mp4",
        imageUrl: "", // Handled by video preview
        tech: ["Premiere Pro", "After Effects", "Color Grading"],
        
        // Detailed Page Content
        client: "VibeWave Media",
        date: "January 2026",
        role: "Lead Video Editor & Colorist",
        duration: "0:45 Sec",
        challenge: "The challenge was to compile multiple, disjointed night shots of neon cityscapes into a highly cohesive, high-energy cinematic sequence. The visual pacing needed to synchronize precisely with a complex synthwave soundtrack while maintaining realistic reflections and depth in color grading.",
        process: "The workflow began with precise music beat-mapping in Premiere Pro to establish the pacing. I applied aggressive speed ramping to transition smoothly between fast moving cameras and slow motion neon focal points. For After Effects, I integrated artificial holographic text overlays and custom glowing lens flares to highlight wet city streets. Finally, I used a custom-designed HSL profile to emphasize neon pinks and cyans while deeply crushing the shadows into midnight blue tones. Rich sound design was layered in, including deep ambient drone hums and futuristic street traffic sounds.",
        outcome: "A stunning cinematic showcase that has been viewed over 100k times across social platforms. The edit successfully highlights state-of-the-art neon color grading and seamless audio-visual sync, making it a stellar example of modern cyberpunk art.",
        gallery: []
    },
    {
        id: "creator-bts",
        category: "video",
        title: "Creator Behind The Scenes",
        shortDesc: "YouTube style vlog editing with pacing, zooms, visual hooks, text overlays, and background tracks to keep retention high.",
        badge: "Video Editing",
        badgeIcon: "video",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-video-camera-editing-a-scene-40898-large.mp4",
        imageUrl: "",
        tech: ["Vlog Edit", "Sound Mixing", "Visual Effects"],
        
        // Detailed Page Content
        client: "Alex Stone (Vlogger)",
        date: "February 2026",
        role: "Primary Video Editor",
        duration: "12:15 Min",
        challenge: "Transforming 3 hours of unorganized raw vlog footage into an engaging 12-minute YouTube video. The main goal was to maintain viewer retention above 60% through quick pacing, funny callouts, visual graphics, and well-balanced audio tracks.",
        process: "I implemented a strict three-second rule, ensuring some form of visual or audio shift occurs every few seconds to sustain attention. J-cuts and L-cuts were extensively used to make conversations sound natural and fast-paced. I designed dynamic lower-thirds and custom popup graphics to visually illustrate key verbal points. Audio leveling was carefully executed to ensure the background track dipped cleanly whenever the creator spoke, and sound effects were layered to emphasize comedic or dramatic moments.",
        outcome: "The final vlog achieved a 64% average viewer duration on YouTube—significantly higher than the creator's channel average. The video's polished, professional feel attracted premium sponsors, proving the immense business value of professional editing.",
        gallery: []
    },
    {
        id: "urban-aesthetics",
        category: "video",
        title: "Urban Aesthetics - Instagram Reel",
        shortDesc: "Fast-paced portrait video optimized for Instagram Reels/TikTok. Includes beat synchronization and trendy filters.",
        badge: "Video Editing",
        badgeIcon: "video",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-shot-of-a-woman-walking-in-the-city-43180-large.mp4",
        imageUrl: "",
        tech: ["Portrait Video", "Beat Sync", "Reels Format"],
        
        // Detailed Page Content
        client: "Streetwear Brand 'URBN'",
        date: "March 2026",
        role: "Director of Editing",
        duration: "0:15 Sec",
        challenge: "Creating an ultra-fast vertical commercial that stops users from scrolling on Instagram Reels and TikTok. The challenge was to deliver raw energy and brand presence within the first 2 seconds using rapid transitions.",
        process: "The edit was constructed around a trending high-tempo beat. Every frame cut was synchronized with the drum transients. I introduced custom crop glitched transitions and digital camera shake effects. A warm, retro-inspired aesthetic filter was developed using selective saturation to complement the streetwear clothing line. Sound effects included camera shutters, vinyl scratches, and bass drops to maximize sensory impact.",
        outcome: "A highly viral social asset that garnered over 500,000 views on Instagram within two weeks. The reel generated a 35% increase in website traffic for the streetwear brand, demonstrating the power of highly optimized short-form content.",
        gallery: []
    },
    {
        id: "moody-portraits",
        category: "photo",
        title: "Moody Cinematic Portraits",
        shortDesc: "A series of portrait shots focused on dramatic shadows, soft light, and intense facial expressions.",
        badge: "Photography",
        badgeIcon: "camera",
        videoUrl: "",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
        tech: ["Sony A7III", "85mm Lens", "Lightroom Classic"],
        
        // Detailed Page Content
        client: "Model Portfolio",
        date: "April 2026",
        role: "Portrait Photographer & Editor",
        duration: "N/A",
        challenge: "Capturing deep, raw human emotion in a controlled studio environment while utilizing minimal lighting. The shot needed to maintain exceptional sharpness on the eyes while dropping into smooth, velvety shadows without introducing noise.",
        process: "I used a Sony A7III equipped with an 85mm f/1.4 lens to achieve an ultra-shallow depth of field. The lighting setup consisted of a single large softbox placed at a 45-degree angle to create dramatic Rembrandt lighting, with a black reflector on the opposite side to deepen the shadows. In Lightroom Classic, I softened the skin tones while retaining realistic skin textures. I applied selective dodging and burning on the eyes and hair, and completed the look with a subtle grain structure to give it an authentic, filmic print quality.",
        outcome: "A stunning portrait collection widely praised by creative directors. The photo series successfully demonstrates mastery of low-light cinematography principles applied to static portraiture, emphasizing natural mood and intensity.",
        gallery: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "ethereal-landscapes",
        category: "photo",
        title: "Ethereal Mountains & Valleys",
        shortDesc: "Landscape photography capturing the serenity of mountains at golden hour, utilizing advanced high-dynamic-range (HDR).",
        badge: "Photography",
        badgeIcon: "camera",
        videoUrl: "",
        imageUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80",
        tech: ["Landscape", "Golden Hour", "Color Grading"],
        
        // Detailed Page Content
        client: "Travel Magazine Feature",
        date: "October 2025",
        role: "Outdoor Photographer & Retoucher",
        duration: "N/A",
        challenge: "Managing the extreme dynamic range between a blazing sun setting directly behind a mountain peak and the deep, dark valleys below, without blowing out the highlights or losing the shadow details.",
        process: "Using a professional tripod, I captured five exposure-bracketed RAW shots of the same frame. In post-production, I merged these exposures into a high-dynamic-range (HDR) image to preserve detail in both the sky and the valley. I utilized selective graduated filters in Lightroom to cool down the valleys with subtle blue tones while warming up the mountain peaks in rich orange and gold hues, mimicking the natural golden hour phenomenon. Micro-contrast was enhanced in the rocky ridges to draw out geological textures.",
        outcome: "The leading photograph was published in a major outdoor travel magazine. The image serves as a perfect showcase of advanced exposure stacking and color theory, translating a raw landscape into an ethereal, dreamlike masterpiece.",
        gallery: [
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: "workshop-highlight",
        category: "video",
        title: "Creative Workshop Highlight",
        shortDesc: "A fast-paced recap video summarizing a photography workshop, detailing raw interactions and professional equipment setup.",
        badge: "Video Editing",
        badgeIcon: "video",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-photographing-with-a-retro-camera-40292-large.mp4",
        imageUrl: "",
        tech: ["DaVinci Resolve", "Cinematic Recap", "LUTS"],
        
        // Detailed Page Content
        client: "PixelAcademy Workshops",
        date: "December 2025",
        role: "Event videographer & Editor",
        duration: "1:30 Min",
        challenge: "Compressing an intensive two-day photography workshop into a high-octane 90-second highlights recap. The video had to appeal to prospective students and convey both the educational value and the fun, creative community atmosphere of the event.",
        process: "The edit was crafted in DaVinci Resolve utilizing a non-linear narrative, blending student testimonials with quick montages of hands-on shooting. I utilized customized whip pans and zoom transitions to keep the visuals energetic. For the color grade, I developed a custom creative LUT that saturated the primary colors while keeping skin tones soft and natural, emphasizing the bright outdoor lighting. The sound design combined upbeat background indie rock with raw audio snippets of camera shutters clicking and lecturers speaking.",
        outcome: "An extremely successful marketing asset that the academy used for their next cohort campaign. The recap video helped sell out the next workshop within 48 hours, highlighting the tremendous conversion power of engaging event recap editing.",
        gallery: []
    },
    {
        id: "media-agency-site",
        category: "web",
        title: "Interactive Media Agency Site",
        shortDesc: "A custom-built single page application for a production agency. Highly optimized code with animations and contact forms.",
        badge: "Web Dev",
        badgeIcon: "code",
        videoUrl: "",
        imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        tech: ["HTML5", "CSS3 Grid/Flex", "Vanilla JavaScript"],
        
        // Detailed Page Content
        client: "Vortex Creative Agency",
        date: "May 2026",
        role: "Full-Stack Web Developer",
        duration: "3 Weeks",
        challenge: "Developing a highly interactive, fast-loading portfolio website for a visual agency. The site needed to display heavy high-definition video backgrounds and images without compromising page speed or responsive design on mobile devices.",
        process: "I built the entire single page application using raw, semantic HTML5 and vanilla JavaScript to avoid the unnecessary bundle sizes of heavy frameworks. The layouts were structured with CSS Grid and Flexbox for maximum flexibility. To solve the performance challenge of media files, I implemented dynamic lazy loading and compressed all images into next-gen .webp formats. Custom viewport trigger animations were developed using the Intersection Observer API. The contact form was fully integrated using modern AJAX requests with immediate client-side validation.",
        outcome: "An ultra-fast portfolio site achieving a perfect 98 score on Google PageSpeed Insights. The site boasts rich fluid animations and provides a modern showcase, driving a 40% increase in digital client inquiries for the agency.",
        gallery: []
    },
    {
        id: "meta-ads-scaling",
        category: "marketing",
        title: "E-commerce Sales Scaling - Meta Ads Campaign",
        shortDesc: "Scaling a D2C streetwear brand's sales by 4x using highly targeted Instagram & Facebook video ads, achieving a 4.2x ROAS.",
        badge: "Performance Marketing",
        badgeIcon: "megaphone",
        videoUrl: "",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        tech: ["Meta Ads Manager", "Audience Research", "A/B Testing", "ROAS Optimization"],
        
        // Detailed Page Content
        client: "Aura Apparel (D2C Brand)",
        date: "April 2026",
        role: "Performance Marketer & Media Buyer",
        duration: "30 Days Campaign",
        challenge: "The client had a stagnant average ROAS of 1.5x and was struggling to scale their daily budget beyond $200 without their cost-per-purchase skyrocketing. They needed a structured testing framework to find high-performing creative combinations and scale their operations profitably.",
        process: "I structured the advertising account into a simplified Campaign Budget Optimization (CBO) layout. I launched an Ad Creative Testing phase, using high-energy, vertical video ads crafted specifically for short-form retention. I targeted high-intent Lookalike audiences (Purchasers 1-5%) and set up conversion retargeting funnels (Website Visitors & Instagram Engagers) with exclusive scarcity offers. Through rigorous daily monitoring of click-through rates (CTR) and hook rates, we immediately pruned poor performers and scaled the winning ad groups.",
        outcome: "Achieved an overall 4.2x ROAS (Return on Ad Spend), generating over 12 Lakhs in sales revenue within 30 days. Daily ad spend scaled to 15k INR while maintaining a low Cost Per Acquisition (CPA), establishing a highly repeatable customer acquisition model.",
        gallery: []
    },
    {
        id: "youtube-growth-funnel",
        category: "marketing",
        title: "YouTube Channel Launch & Growth Funnel",
        shortDesc: "A complete organic and paid digital marketing strategy that grew a tech creator's channel to 50k+ subscribers in 90 days.",
        badge: "Digital Marketing",
        badgeIcon: "trending-up",
        videoUrl: "",
        imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80",
        tech: ["YouTube SEO", "Click-Through Rate (CTR)", "Content Funnels", "Google Ads"],
        
        // Detailed Page Content
        client: "TechVerse Hindi (YouTube)",
        date: "March 2026",
        role: "Digital Marketing Strategist",
        duration: "3 Months Growth",
        challenge: "The channel was posting high-quality videos but getting less than 1,000 views per video due to poor search visibility (SEO), low thumbnail click-through rates (CTR), and a lack of cross-platform audience funnels.",
        process: "I conducted intensive YouTube SEO keyword research to target high-intent search queries. I redesigned the creator's thumbnail visual hierarchy to build high contrast and mystery (rising CTR from 3% to 9.5%). I developed a cross-platform content funnel by cutting highly engaging 15-second teaser reels for Instagram and YouTube Shorts directing users back to the primary videos. Finally, I ran low-cost Google Video discovery ads to build initial momentum with core tech-enthusiast audiences.",
        outcome: "Grew the channel from 1,200 to over 52,000 active subscribers within 90 days. Average views per video surged to 45k, with search engines and suggested videos becoming the primary organic drivers, completing a highly efficient acquisition funnel.",
        gallery: []
    }
];

