
// Loading screen functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading progress
    let progress = 0;
    const loadingBar = document.getElementById('loadingBar');
    const loadingStatus = document.getElementById('loadingStatus');
    const loadingScreen = document.getElementById('loadingScreen');
    
    const statuses = [
        'Connecting to server...',
        'Loading game assets...',
        'Initializing game engine...',
        'Preparing user interface...',
        'Almost ready...'
    ];
    
    const interval = setInterval(function() {
        progress += 5;
        loadingBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingStatus.textContent = 'Ready!';
            
            // Hide loading screen after a short delay
            setTimeout(function() {
                loadingScreen.style.opacity = '0';
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        } else {
            // Update status message at certain progress points
            if (progress === 20) loadingStatus.textContent = statuses[1];
            if (progress === 40) loadingStatus.textContent = statuses[2];
            if (progress === 60) loadingStatus.textContent = statuses[3];
            if (progress === 80) loadingStatus.textContent = statuses[4];
        }
    }, 50);
});

// Theme switching functionality
document.getElementById('themeSwitch').addEventListener('click', function() {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    const icon = this.querySelector('i');
    if (document.body.dataset.theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Profile dropdown toggle
document.getElementById('profileBtn').addEventListener('click', function() {
    document.getElementById('profileDropdown').classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('.profile-btn') && !event.target.closest('.profile-btn')) {
        const dropdown = document.getElementById('profileDropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// Section switching
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('gamesSection').style.display = 'none';
    document.getElementById('newsSection').style.display = 'none';
    document.getElementById('recommendationsSection').style.display = 'none';
    document.getElementById('forumSection').style.display = 'none';
    document.getElementById('achievementsSection').style.display = 'none';
    
    // Show selected section
    if (sectionId === 'games') {
        document.getElementById('gamesSection').style.display = 'grid';
    } else {
        document.getElementById(sectionId + 'Section').style.display = 'block';
    }
    
    // Update active button
    const buttons = document.querySelectorAll('.sidebar-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Game filtering by tags
document.querySelectorAll('.tag-btn').forEach(button => {
    button.addEventListener('click', function() {
        const tag = this.dataset.tag;
        
        // Update active tag button
        document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter game cards
        document.querySelectorAll('.game-card').forEach(card => {
            if (tag === 'all' || card.dataset.tags.includes(tag)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Search functionality
function searchGames() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    
    document.querySelectorAll('.game-card').forEach(card => {
        const title = card.querySelector('.game-title').textContent.toLowerCase();
        const description = card.querySelector('.game-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Favorite toggle
function toggleFavorite(button) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showNotification('Game added to favorites!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        showNotification('Game removed from favorites.');
    }
}

// Play game function
function playGame(gameId) {
    showNotification('Loading ' + gameId + '...');
    // Here you would normally redirect to the game page or load the game in a modal
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    document.getElementById('notificationMessage').textContent = message;
    notification.classList.add('show');
    
    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById(modalId).querySelector('.modal-container').style.opacity = '0';
    setTimeout(function() {
        document.getElementById(modalId).querySelector('.modal-container').style.opacity = '1';
    }, 10);
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Game details modal
let currentGame = '';

function openGameDetails(gameId) {
    currentGame = gameId;
    
    // Set game details based on gameId
    const gameCard = document.querySelector(`.game-card[data-game="${gameId}"]`);
    const gameTitle = gameCard.querySelector('.game-title').textContent;
    const gameDescription = gameCard.querySelector('.game-description').textContent;
    const gameImage = gameCard.querySelector('.game-image').src;
    const gameRating = gameCard.querySelector('.game-rating').textContent.trim();
    const gamePlays = gameCard.querySelector('.game-plays').textContent;
    const gameBadge = gameCard.querySelector('.game-badge').textContent;
    
    // Update modal content
    document.getElementById('gameDetailsTitle').textContent = gameTitle;
    document.getElementById('gameDetailsDescription').textContent = gameDescription;
    document.getElementById('gameDetailsImage').src = gameImage;
    document.getElementById('gameDetailsRating').innerHTML = `<i class="fas fa-star"></i> ${gameRating}`;
    document.getElementById('gameDetailsPlays').textContent = gamePlays;
    document.getElementById('gameDetailsCategory').textContent = gameBadge;
    document.getElementById('gameDetailsDate').textContent = 'Added July 2025';
    
    // Set game controls based on gameId
    const controlsList = document.getElementById('gameDetailsControls');
    controlsList.innerHTML = '';
    
    // Add game-specific controls
    const controls = getGameControls(gameId);
    controls.forEach(control => {
        const controlItem = document.createElement('div');
        controlItem.className = 'control-item';
        controlItem.innerHTML = `
            <div class="control-key">${control.key}</div>
            <div class="control-action">${control.action}</div>
        `;
        controlsList.appendChild(controlItem);
    });
    
    // Set game screenshots
    const screenshotsGrid = document.getElementById('gameDetailsScreenshots');
    screenshotsGrid.innerHTML = '';
    
    // Add game-specific screenshots
    const screenshots = getGameScreenshots(gameId);
    screenshots.forEach(screenshot => {
        const img = document.createElement('img');
        img.className = 'screenshot';
        img.src = screenshot;
        img.alt = `${gameTitle} Screenshot`;
        screenshotsGrid.appendChild(img);
    });
    
    openModal('gameDetailsModal');
}

// Helper function to get game controls
function getGameControls(gameId) {
    const controlsMap = {
        'snake': [
            { key: '\u2191', action: 'Move Up' },
            { key: '\u2193', action: 'Move Down' },
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: 'P', action: 'Pause Game' }
        ],
        'tetris': [
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: '\u2193', action: 'Soft Drop' },
            { key: '\u2191', action: 'Rotate' },
            { key: 'Space', action: 'Hard Drop' },
            { key: 'P', action: 'Pause Game' }
        ],
        'pong': [
            { key: 'W', action: 'Player 1 Up' },
            { key: 'S', action: 'Player 1 Down' },
            { key: '\u2191', action: 'Player 2 Up' },
            { key: '\u2193', action: 'Player 2 Down' },
            { key: 'Space', action: 'Start/Pause' }
        ],
        'breakout': [
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: 'Space', action: 'Launch Ball' },
            { key: 'P', action: 'Pause Game' }
        ],
        'space': [
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: 'Space', action: 'Fire' },
            { key: 'P', action: 'Pause Game' }
        ],
        'puzzle': [
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: '\u2191', action: 'Move Up' },
            { key: '\u2193', action: 'Move Down' },
            { key: 'Space', action: 'Select Piece' },
            { key: 'R', action: 'Reset Level' }
        ],
        'adventure': [
            { key: 'W', action: 'Move Up' },
            { key: 'A', action: 'Move Left' },
            { key: 'S', action: 'Move Down' },
            { key: 'D', action: 'Move Right' },
            { key: 'E', action: 'Interact' },
            { key: 'Space', action: 'Jump' },
            { key: 'Shift', action: 'Run' }
        ],
        'platformer': [
            { key: '\u2190', action: 'Move Left' },
            { key: '\u2192', action: 'Move Right' },
            { key: 'Space', action: 'Jump' },
            { key: 'Z', action: 'Attack' },
            { key: 'X', action: 'Special Move' }
        ]
    };
    
    return controlsMap[gameId] || [];
}

// Helper function to get game screenshots
function getGameScreenshots(gameId) {
    // In a real app, these would be actual screenshot URLs for each game
    return [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1628483368890-4f4b8df2cb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];
}

// Featured slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.featured-slide');
const indicators = document.querySelectorAll('.featured-indicator');

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    document.getElementById('featuredSlider').style.transform = `translateX(-${index * 100}%)`;
    
    // Update indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

// Next and previous slide buttons
document.getElementById('nextSlide').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

document.getElementById('prevSlide').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        showSlide(index);
    });
});

// Auto-advance slides
setInterval(function() {
    showSlide(currentSlide + 1);
}, 5000);

// Login/Register functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('authModal').classList.add('active');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('authModal').classList.add('active');
});

document.getElementById('switchToRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('switchToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('loginTab').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('registerTab').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
});

// Matrix background effect
function initMatrix() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = '\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f2\u30f30123456789';
    const columns = Math.floor(canvas.width / 20);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

// Initialize matrix effect
window.addEventListener('load', initMatrix);
window.addEventListener('resize', function() {
    const canvas = document.getElementById('matrix');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize loading matrix effect
function initLoadingMatrix() {
    const canvas = document.getElementById('loadingMatrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = '\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f2\u30f30123456789';
    const columns = Math.floor(canvas.width / 20);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    const interval = setInterval(draw, 33);
    
    // Clear interval when loading screen is hidden
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.style.display === 'none') {
                clearInterval(interval);
                observer.disconnect();
            }
        });
    });
    
    observer.observe(document.getElementById('loadingScreen'), { attributes: true, attributeFilter: ['style'] });
}

// Initialize loading matrix effect
window.addEventListener('load', initLoadingMatrix);
