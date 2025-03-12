document.addEventListener('DOMContentLoaded', () => {
    // Force display content
    document.body.style.opacity = 1;

    // Debugging: Ensure social buttons are clickable
    const socialButtons = document.querySelectorAll('.social-buttons a');
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const url = button.href;
            console.log(`Clicked: ${url}`); // Debugging: Log the clicked URL

            // Use FiveM's native API to open the URL
            if (typeof alt !== 'undefined' && alt.emit) {
                alt.emit('openUrl', url); // Emit event to FiveM
            } else {
                console.error('FiveM API not available. Cannot open URL.');
                // Fallback: Open the URL in a new tab (for testing in a browser)
                window.open(url, '_blank');
            }
        });
    });

    // Audio system - Enhanced version
    const audio = document.getElementById('backgroundAudio');
    const audioControls = {
        playPause: document.getElementById('playPause'),
        volume: document.getElementById('volume')
    };

    // Audio configuration
    audio.loop = true;
    audio.volume = 0.5;
    audioControls.volume.value = 0.5;

    // Auto-play handling with user gesture
    let audioInitialized = false;
    const initializeAudio = () => {
        if (!audioInitialized) {
            audio.play().catch(error => {
                console.log('Autoplay blocked, waiting for user interaction');
                audioControls.playPause.textContent = '▶';
            });
            audioInitialized = true;
        }
    };

    // Try to auto-play immediately (works in some environments)
    initializeAudio();

    // Fallback: Initialize on any user interaction
    document.addEventListener('click', initializeAudio, { once: true });
    document.addEventListener('keydown', initializeAudio, { once: true });

    // Play/pause control
    audioControls.playPause.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Volume control
    audioControls.volume.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    // Update button state
    audio.addEventListener('play', () => audioControls.playPause.textContent = '⏸');
    audio.addEventListener('pause', () => audioControls.playPause.textContent = '▶');

    // Typewriter system
    const typewriter = document.getElementById('typewriter');
    const messages = [
        "Hey there!! 👋",
        "Welcome To The CSRP 🚀",
        "You Are Onboarding To The Server 🔒",
        "We Always Prioritize Your Time 💎"
    ];

    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = messages[msgIndex];

        if (!isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
                return;
            }
        } else {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                msgIndex = (msgIndex + 1) % messages.length;
            }
        }

        const speed = isDeleting ? 75 : 150;
        setTimeout(typeWriter, speed);
    }
    typeWriter();

    // Slideshow system
    const slides = [
        './img/img1.webp', './img/img2.webp', './img/img3.webp',
        './img/img4.webp', './img/img5.webp', './img/img6.webp',
        './img/img7.webp', './img/img8.webp', './img/img9.webp',
        './img/img10.webp'
    ];
    const slideshow = document.querySelector('.slideshow');
    let currentSlide = 0;

    function changeSlide() {
        const img = new Image();
        img.onload = () => {
            slideshow.style.backgroundImage = `url(${slides[currentSlide]})`;
            currentSlide = (currentSlide + 1) % slides.length;
        };
        img.onerror = () => console.error('Failed to load slide:', slides[currentSlide]);
        img.src = slides[currentSlide];
    }
    setInterval(changeSlide, 5000);
    changeSlide();

    // Progress system
    const elements = {
        percentage: document.querySelector('.loading-percentage'),
        text: document.querySelector('.loading-text')
    };

    const progressMessages = {
        0: 'Initializing...',
        20: 'Loading core assets...',
        40: 'Loading game world...',
        60: 'Loading textures...',
        80: 'Finalizing...',
        100: 'Ready!'
    };

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress = Math.min(progress + Math.random() * 2.5, 100);
        const percentage = Math.floor(progress);

        elements.percentage.textContent = `${percentage}%`;
        elements.text.textContent = progressMessages[
            Object.keys(progressMessages).reduce((a, b) =>
                Math.abs(b - percentage) < Math.abs(a - percentage) ? b : a
            )
        ];

        if (progress >= 100) {
            clearInterval(progressInterval);
            elements.text.textContent = 'Entering world...';
            if (window.alt) alt.emit('loadingScreenComplete');
        }
    }, 300);
});