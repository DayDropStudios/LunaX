
/**
 * LunaX Gaming Portal - Animations Script
 * Handles animations, transitions, and visual effects
 */

// Animations controller
const LunaXAnimations = {
    // Initialize animations
    initialize: function() {
        this.setupDarkModeToggleAnimation();
        this.setupCustomCursor();
        this.setupLoadingAnimations();
        this.setupSoundEffects();
        this.setupEventListeners();
    },
    
    // Setup dark mode toggle animation
    setupDarkModeToggleAnimation: function() {
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        if (!themeToggleBtn) return;
        
        // Add animation class to theme toggle button
        themeToggleBtn.classList.add('animated-toggle');
        
        // Create animation elements
        const animationContainer = document.createElement('div');
        animationContainer.className = 'theme-toggle-animation';
        
        // Sun rays
        for (let i = 0; i < 8; i++) {
            const ray = document.createElement('div');
            ray.className = 'sun-ray';
            ray.style.transform = `rotate(${i * 45}deg)`;
            animationContainer.appendChild(ray);
        }
        
        // Moon crater
        for (let i = 0; i < 3; i++) {
            const crater = document.createElement('div');
            crater.className = 'moon-crater';
            crater.style.top = `${20 + Math.random() * 60}%`;
            crater.style.left = `${20 + Math.random() * 60}%`;
            crater.style.width = `${5 + Math.random() * 10}px`;
            crater.style.height = crater.style.width;
            animationContainer.appendChild(crater);
        }
        
        // Insert animation container
        themeToggleBtn.appendChild(animationContainer);
        
        // Add event listener for theme toggle
        themeToggleBtn.addEventListener('click', () => {
            // Add animation class
            themeToggleBtn.classList.add('animating');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                themeToggleBtn.classList.remove('animating');
            }, 700);
        });
    },
    
    // Setup custom cursor
    setupCustomCursor: function() {
        // Create cursor elements
        const cursorOuter = document.createElement('div');
        cursorOuter.className = 'custom-cursor-outer';
        document.body.appendChild(cursorOuter);
        
        const cursorInner = document.createElement('div');
        cursorInner.className = 'custom-cursor-inner';
        document.body.appendChild(cursorInner);
        
        // Track cursor position
        document.addEventListener('mousemove', (e) => {
            cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
        
        // Add hover effect for clickable elements
        const clickableElements = 'a, button, .game-card, .category-card, .play-btn, .favorite-btn, .tag-btn, .social-tab, .friend-card';
        document.querySelectorAll(clickableElements).forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorOuter.classList.add('hover');
                cursorInner.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursorOuter.classList.remove('hover');
                cursorInner.classList.remove('hover');
            });
        });
        
        // Add active effect for mouse down
        document.addEventListener('mousedown', () => {
            cursorOuter.classList.add('active');
            cursorInner.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            cursorOuter.classList.remove('active');
            cursorInner.classList.remove('active');
        });
        
        // Hide default cursor
        document.body.classList.add('custom-cursor-enabled');
        
        // Store cursor state in local storage
        const customCursorEnabled = localStorage.getItem('customCursorEnabled');
        if (customCursorEnabled === 'false') {
            this.disableCustomCursor();
        }
        
        // Add cursor toggle to settings
        this.addCursorToggleToSettings();
    },
    
    // Enable custom cursor
    enableCustomCursor: function() {
        document.body.classList.add('custom-cursor-enabled');
        localStorage.setItem('customCursorEnabled', 'true');
        
        // Update toggle if it exists
        const cursorToggle = document.getElementById('cursorToggle');
        if (cursorToggle) {
            cursorToggle.checked = true;
        }
    },
    
    // Disable custom cursor
    disableCustomCursor: function() {
        document.body.classList.remove('custom-cursor-enabled');
        localStorage.setItem('customCursorEnabled', 'false');
        
        // Update toggle if it exists
        const cursorToggle = document.getElementById('cursorToggle');
        if (cursorToggle) {
            cursorToggle.checked = false;
        }
    },
    
    // Add cursor toggle to settings
    addCursorToggleToSettings: function() {
        // Find settings container
        const settingsContainer = document.querySelector('.settings-container');
        if (!settingsContainer) return;
        
        // Create cursor toggle option
        const cursorToggleOption = document.createElement('div');
        cursorToggleOption.className = 'settings-option';
        cursorToggleOption.innerHTML = `
            <span class="settings-label">Custom Cursor</span>
            <label class="toggle-switch">
                <input type="checkbox" id="cursorToggle" ${localStorage.getItem('customCursorEnabled') !== 'false' ? 'checked' : ''}>
                <span class="toggle-slider"></span>
            </label>
        `;
        
        // Add to settings container
        settingsContainer.appendChild(cursorToggleOption);
        
        // Add event listener
        const cursorToggle = document.getElementById('cursorToggle');
        if (cursorToggle) {
            cursorToggle.addEventListener('change', () => {
                if (cursorToggle.checked) {
                    this.enableCustomCursor();
                } else {
                    this.disableCustomCursor();
                }
            });
        }
    },
    
    // Setup loading animations
    setupLoadingAnimations: function() {
        // Create loading animation styles if they don't exist
        if (!document.getElementById('loadingAnimationStyles')) {
            const style = document.createElement('style');
            style.id = 'loadingAnimationStyles';
            style.innerHTML = `
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                    100% { transform: scale(1); opacity: 1; }
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-5px, 5px); }
                    40% { transform: translate(-5px, -5px); }
                    60% { transform: translate(5px, 5px); }
                    80% { transform: translate(5px, -5px); }
                    100% { transform: translate(0); }
                }
                
                .loading-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
                
                .loading-logo {
                    width: 150px;
                    height: 150px;
                    margin-bottom: 2rem;
                    animation: pulse 2s infinite;
                }
                
                .loading-spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid rgba(0, 198, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: var(--accent-primary);
                    animation: spin 1s linear infinite;
                }
                
                .loading-text {
                    font-family: 'Inter', Arial, sans-serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: var(--accent-primary);
                    margin-top: 1rem;
                    position: relative;
                    animation: glitch 1s infinite;
                }
                
                .loading-progress {
                    width: 200px;
                    height: 5px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 5px;
                    margin-top: 1rem;
                    overflow: hidden;
                }
                
                .loading-progress-bar {
                    height: 100%;
                    background-color: var(--accent-primary);
                    width: 0%;
                    transition: width 0.3s ease;
                }
                
                .loading-tip {
                    font-family: 'Inter', Arial, sans-serif;
                    font-size: 0.9rem;
                    color: #888;
                    margin-top: 2rem;
                    max-width: 300px;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    // Show loading screen
    showLoadingScreen: function(options = {}) {
        // Default options
        const defaults = {
            logo: true,
            spinner: true,
            text: 'Loading...',
            progress: true,
            tip: true,
            duration: 2000
        };
        
        // Merge options
        const settings = { ...defaults, ...options };
        
        // Create loading container
        const loadingContainer = document.createElement('div');
        loadingContainer.className = 'loading-container';
        
        // Add logo if enabled
        if (settings.logo) {
            const logo = document.createElement('div');
            logo.className = 'loading-logo';
            logo.innerHTML = `<img src="https://via.placeholder.com/150x150?text=LunaX" alt="LunaX Logo">`;
            loadingContainer.appendChild(logo);
        }
        
        // Add spinner if enabled
        if (settings.spinner) {
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner';
            loadingContainer.appendChild(spinner);
        }
        
        // Add text if provided
        if (settings.text) {
            const text = document.createElement('div');
            text.className = 'loading-text';
            text.textContent = settings.text;
            loadingContainer.appendChild(text);
        }
        
        // Add progress bar if enabled
        let progressBar;
        if (settings.progress) {
            const progress = document.createElement('div');
            progress.className = 'loading-progress';
            
            progressBar = document.createElement('div');
            progressBar.className = 'loading-progress-bar';
            
            progress.appendChild(progressBar);
            loadingContainer.appendChild(progress);
        }
        
        // Add tip if enabled
        if (settings.tip) {
            const tips = [
                'Press F11 for fullscreen gaming experience',
                'Join our Discord community for exclusive rewards',
                'Use WASD or arrow keys for movement in most games',
                'Create an account to save your game progress',
                'Check out our weekly tournaments for prizes',
                'Enable notifications to get updates on new games',
                'Connect with friends to play multiplayer games',
                'Customize your profile to stand out in the community'
            ];
            
            const tip = document.createElement('div');
            tip.className = 'loading-tip';
            tip.textContent = 'TIP: ' + tips[Math.floor(Math.random() * tips.length)];
            loadingContainer.appendChild(tip);
        }
        
        // Add to body
        document.body.appendChild(loadingContainer);
        
        // Animate progress bar
        if (settings.progress && progressBar) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 1;
                progressBar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                }
            }, settings.duration / 100);
        }
        
        // Remove loading screen after duration
        setTimeout(() => {
            loadingContainer.style.opacity = '0';
            loadingContainer.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                loadingContainer.remove();
            }, 500);
        }, settings.duration);
        
        return loadingContainer;
    },
    
    // Setup sound effects
    setupSoundEffects: function() {
        // Create audio elements
        this.sounds = {
            click: this.createAudio('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3'),
            hover: this.createAudio('https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3'),
            success: this.createAudio('https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3'),
            error: this.createAudio('https://assets.mixkit.co/sfx/preview/mixkit-negative-tone-interface-tap-2301.mp3'),
            notification: this.createAudio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3')
        };
        
        // Set volume
        for (const sound in this.sounds) {
            this.sounds[sound].volume = 0.3;
        }
        
        // Store sound state in local storage
        const soundEnabled = localStorage.getItem('soundEnabled');
        if (soundEnabled === 'false') {
            this.disableSounds();
        } else {
            this.enableSounds();
        }
        
        // Add sound toggle to settings
        this.addSoundToggleToSettings();
    },
    
    // Create audio element
    createAudio: function(src) {
        const audio = new Audio();
        audio.src = src;
        audio.preload = 'auto';
        return audio;
    },
    
    // Play sound
    playSound: function(sound) {
        if (this.soundsEnabled && this.sounds[sound]) {
            // Create a clone to allow overlapping sounds
            const soundClone = this.sounds[sound].cloneNode();
            soundClone.volume = this.sounds[sound].volume;
            soundClone.play();
            
            // Remove after playing
            soundClone.onended = function() {
                soundClone.remove();
            };
        }
    },
    
    // Enable sounds
    enableSounds: function() {
        this.soundsEnabled = true;
        localStorage.setItem('soundEnabled', 'true');
        
        // Update toggle if it exists
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle) {
            soundToggle.checked = true;
        }
    },
    
    // Disable sounds
    disableSounds: function() {
        this.soundsEnabled = false;
        localStorage.setItem('soundEnabled', 'false');
        
        // Update toggle if it exists
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle) {
            soundToggle.checked = false;
        }
    },
    
    // Add sound toggle to settings
    addSoundToggleToSettings: function() {
        // Find settings container
        const settingsContainer = document.querySelector('.settings-container');
        if (!settingsContainer) return;
        
        // Create sound toggle option
        const soundToggleOption = document.createElement('div');
        soundToggleOption.className = 'settings-option';
        soundToggleOption.innerHTML = `
            <span class="settings-label">UI Sound Effects</span>
            <label class="toggle-switch">
                <input type="checkbox" id="soundToggle" ${localStorage.getItem('soundEnabled') !== 'false' ? 'checked' : ''}>
                <span class="toggle-slider"></span>
            </label>
        `;
        
        // Add to settings container
        settingsContainer.appendChild(soundToggleOption);
        
        // Add event listener
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle) {
            soundToggle.addEventListener('change', () => {
                if (soundToggle.checked) {
                    this.enableSounds();
                    this.playSound('click');
                } else {
                    this.disableSounds();
                }
            });
        }
    },
    
    // Show confetti effect
    showConfetti: function() {
        // Create confetti container if it doesn't exist
        let confettiContainer = document.getElementById('confettiContainer');
        if (!confettiContainer) {
            confettiContainer = document.createElement('div');
            confettiContainer.id = 'confettiContainer';
            confettiContainer.style.position = 'fixed';
            confettiContainer.style.top = '0';
            confettiContainer.style.left = '0';
            confettiContainer.style.width = '100%';
            confettiContainer.style.height = '100%';
            confettiContainer.style.pointerEvents = 'none';
            confettiContainer.style.zIndex = '9999';
            document.body.appendChild(confettiContainer);
        }
        
        // Create confetti pieces
        const colors = ['#00c6ff', '#ff4d4d', '#ffcc00', '#4caf50', '#9c27b0'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = -20 + 'px';
            confetti.style.opacity = Math.random() + 0.5;
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            confettiContainer.appendChild(confetti);
            
            // Animate confetti
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;
            
            confetti.style.animation = `confettiFall ${duration}s ease-in ${delay}s forwards`;
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }
        
        // Add animation keyframes if they don't exist
        if (!document.getElementById('confettiAnimation')) {
            const style = document.createElement('style');
            style.id = 'confettiAnimation';
            style.innerHTML = `
                @keyframes confettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Play sound
        this.playSound('success');
        
        // Remove confetti container after all animations
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    },
    
    // Setup event listeners
    setupEventListeners: function() {
        // Add sound effects to UI elements
        document.addEventListener('click', (e) => {
            // Check if the clicked element is a button or link
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || 
                e.target.closest('button') || e.target.closest('a') ||
                e.target.classList.contains('game-card') || e.target.closest('.game-card')) {
                this.playSound('click');
            }
        });
        
        // Hover sound effects
        document.addEventListener('mouseover', (e) => {
            // Check if the hovered element is a button or link
            if ((e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || 
                e.target.closest('button') || e.target.closest('a')) &&
                !e.target.classList.contains('sound-hover-disabled') &&
                !e.target.closest('.sound-hover-disabled')) {
                this.playSound('hover');
            }
        });
        
        // Listen for notification events
        document.addEventListener('lunaX:notification', (e) => {
            const type = e.detail.type || 'info';
            
            if (type === 'success') {
                this.playSound('success');
            } else if (type === 'error') {
                this.playSound('error');
            } else {
                this.playSound('notification');
            }
        });
        
        // Listen for achievement unlock events
        document.addEventListener('lunaX:achievementUnlocked', () => {
            this.showConfetti();
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    LunaXAnimations.initialize();
});
