
/**
 * LunaX Gaming Portal - Games Page JavaScript
 * This file handles all the interactive functionality for the games.html page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the games page
    initGamesPage();
});

/**
 * Initialize all components and functionality for the games page
 */
function initGamesPage() {
    // Load game data
    loadGames();
    
    // Initialize UI components
    initSearchBar();
    initFilters();
    initViewToggle();
    initSorting();
    initPagination();
    
    // Initialize social features
    loadRecentlyPlayed();
    loadFriendsActivity();
    
    // Initialize modal functionality
    initGameDetailModal();
}

/**
 * Load game data from API or local storage
 */
function loadGames() {
    // In a real application, this would fetch from an API
    // For demonstration, we'll use mock data
    const games = getMockGames();
    
    // Render games to the grid
    renderGames(games);
}

/**
 * Generate mock game data for demonstration
 */
function getMockGames() {
    return [
        {
            id: 1,
            title: "Neon Horizon",
            category: "Action RPG",
            image: "assets/images/games/neon-horizon.jpg",
            rating: 4.8,
            ratingCount: 2453,
            players: 1250,
            isFavorite: true,
            description: "Explore a vast cyberpunk world filled with neon lights, dangerous enemies, and powerful augmentations. Customize your character and fight your way through corporate conspiracies and street gangs.",
            developer: "LunaX Studios",
            releaseDate: "2025-03-15",
            reviews: [
                { user: "CyberNinja", avatar: "assets/images/avatars/user1.jpg", rating: 5, date: "2025-06-10", content: "Absolutely stunning visuals and immersive gameplay. The story kept me engaged for hours!" },
                { user: "QuantumGamer", avatar: "assets/images/avatars/user2.jpg", rating: 4, date: "2025-06-05", content: "Great game overall, but some missions are too repetitive. The combat system is fantastic though." }
            ],
            achievements: [
                { name: "First Blood", icon: "fa-trophy", description: "Defeat your first enemy", progress: 100, isLocked: false },
                { name: "Night Crawler", icon: "fa-moon", description: "Complete 10 night missions", progress: 70, isLocked: false },
                { name: "Augmented Reality", icon: "fa-microchip", description: "Unlock all augmentations", progress: 30, isLocked: false },
                { name: "Corporate Spy", icon: "fa-user-secret", description: "Infiltrate all corporate headquarters", progress: 0, isLocked: true }
            ],
            leaderboard: [
                { rank: 1, name: "NeonSlayer", avatar: "assets/images/avatars/user3.jpg", score: 15420 },
                { rank: 2, name: "CyberWitch", avatar: "assets/images/avatars/user4.jpg", score: 14850 },
                { rank: 3, name: "PixelPunisher", avatar: "assets/images/avatars/user5.jpg", score: 14320 },
                { rank: 4, name: "ByteRunner", avatar: "assets/images/avatars/user6.jpg", score: 13980 },
                { rank: 5, name: "DataDrifter", avatar: "assets/images/avatars/user7.jpg", score: 13540 }
            ]
        },
        {
            id: 2,
            title: "Stellar Odyssey",
            category: "Space Simulation",
            image: "assets/images/games/stellar-odyssey.jpg",
            rating: 4.5,
            ratingCount: 1876,
            players: 980,
            isFavorite: false,
            description: "Embark on an epic journey through the cosmos. Explore uncharted star systems, trade with alien civilizations, and build your own space empire. Features realistic physics and stunning celestial phenomena.",
            developer: "Cosmic Games",
            releaseDate: "2025-02-20",
            reviews: [
                { user: "StarGazer", avatar: "assets/images/avatars/user8.jpg", rating: 5, date: "2025-05-28", content: "The most beautiful space sim I've ever played. The attention to detail is incredible!" },
                { user: "CosmicVoyager", avatar: "assets/images/avatars/user9.jpg", rating: 4, date: "2025-05-15", content: "Love the exploration aspects, but combat could use some work. Overall a fantastic experience." }
            ],
            achievements: [
                { name: "First Contact", icon: "fa-satellite", description: "Encounter an alien civilization", progress: 100, isLocked: false },
                { name: "Fleet Admiral", icon: "fa-rocket", description: "Build a fleet of 20 ships", progress: 45, isLocked: false },
                { name: "Galactic Explorer", icon: "fa-globe", description: "Discover 50 star systems", progress: 0, isLocked: true }
            ],
            leaderboard: [
                { rank: 1, name: "CosmicEmperor", avatar: "assets/images/avatars/user10.jpg", score: 18750 },
                { rank: 2, name: "StarDrifter", avatar: "assets/images/avatars/user11.jpg", score: 17890 },
                { rank: 3, name: "VoidWalker", avatar: "assets/images/avatars/user12.jpg", score: 16540 }
            ]
        },
        {
            id: 3,
            title: "Mystic Legends",
            category: "Fantasy RPG",
            image: "assets/images/games/mystic-legends.jpg",
            rating: 4.9,
            ratingCount: 3254,
            players: 2100,
            isFavorite: true,
            description: "Enter a world of magic and mystery. Choose your class, master powerful spells, and embark on an epic quest to save the realm from ancient evil. Features a vast open world with hundreds of quests.",
            developer: "Arcane Studios",
            releaseDate: "2025-01-10",
            reviews: [
                { user: "SpellCaster", avatar: "assets/images/avatars/user13.jpg", rating: 5, date: "2025-06-12", content: "The magic system is revolutionary! I've spent hundreds of hours and still discovering new spells." },
                { user: "DragonSlayer", avatar: "assets/images/avatars/user14.jpg", rating: 5, date: "2025-06-01", content: "Best RPG I've played in years. The story is captivating and the world feels alive." }
            ],
            achievements: [
                { name: "Apprentice", icon: "fa-hat-wizard", description: "Learn your first spell", progress: 100, isLocked: false },
                { name: "Dragon Tamer", icon: "fa-dragon", description: "Defeat the ancient dragon", progress: 100, isLocked: false },
                { name: "Archmage", icon: "fa-wand-sparkles", description: "Master all schools of magic", progress: 60, isLocked: false }
            ],
            leaderboard: [
                { rank: 1, name: "MysticMaster", avatar: "assets/images/avatars/user15.jpg", score: 21540 },
                { rank: 2, name: "LegendHunter", avatar: "assets/images/avatars/user16.jpg", score: 20780 },
                { rank: 3, name: "SpellWeaver", avatar: "assets/images/avatars/user17.jpg", score: 19650 }
            ]
        },
        {
            id: 4,
            title: "Velocity Drift",
            category: "Racing",
            image: "assets/images/games/velocity-drift.jpg",
            rating: 4.3,
            ratingCount: 1543,
            players: 850,
            isFavorite: false,
            description: "Experience the thrill of high-speed racing with cutting-edge graphics and realistic physics. Customize your vehicles, compete in global tournaments, and become the ultimate racing champion.",
            developer: "Turbo Games",
            releaseDate: "2025-04-05",
            reviews: [
                { user: "SpeedDemon", avatar: "assets/images/avatars/user18.jpg", rating: 4, date: "2025-06-08", content: "The drifting mechanics are perfect! Graphics are stunning but could use more tracks." },
                { user: "RacingKing", avatar: "assets/images/avatars/user19.jpg", rating: 5, date: "2025-05-30", content: "Best racing game I've played in years. The car customization options are incredible!" }
            ],
            achievements: [
                { name: "First Victory", icon: "fa-flag-checkered", description: "Win your first race", progress: 100, isLocked: false },
                { name: "Speed Demon", icon: "fa-gauge-high", description: "Reach top speed in any vehicle", progress: 100, isLocked: false },
                { name: "Collection Complete", icon: "fa-car", description: "Acquire all vehicles", progress: 40, isLocked: false }
            ],
            leaderboard: [
                { rank: 1, name: "DriftKing", avatar: "assets/images/avatars/user20.jpg", score: 12450 },
                { rank: 2, name: "SpeedMaster", avatar: "assets/images/avatars/user21.jpg", score: 12100 },
                { rank: 3, name: "RoadWarrior", avatar: "assets/images/avatars/user22.jpg", score: 11870 }
            ]
        },
        {
            id: 5,
            title: "Tactical Nexus",
            category: "Strategy",
            image: "assets/images/games/tactical-nexus.jpg",
            rating: 4.7,
            ratingCount: 2187,
            players: 1450,
            isFavorite: false,
            description: "Command your forces in intense tactical battles. Develop your base, research new technologies, and outmaneuver your opponents with superior strategy. Features both single-player campaign and competitive multiplayer.",
            developer: "Strategic Minds",
            releaseDate: "2025-03-01",
            reviews: [
                { user: "TacticalGenius", avatar: "assets/images/avatars/user23.jpg", rating: 5, date: "2025-06-15", content: "The depth of strategy is amazing. Every match feels different and challenging." },
                { user: "CommanderElite", avatar: "assets/images/avatars/user24.jpg", rating: 4, date: "2025-06-02", content: "Great game with excellent balance. The AI is surprisingly clever even on normal difficulty." }
            ],
            achievements: [
                { name: "First Command", icon: "fa-chess", description: "Win your first battle", progress: 100, isLocked: false },
                { name: "Master Tactician", icon: "fa-chess-knight", description: "Win 50 multiplayer matches", progress: 64, isLocked: false },
                { name: "Tech Superiority", icon: "fa-microchip", description: "Research all technologies", progress: 0, isLocked: true }
            ],
            leaderboard: [
                { rank: 1, name: "StratMaster", avatar: "assets/images/avatars/user25.jpg", score: 19870 },
                { rank: 2, name: "TacticianPrime", avatar: "assets/images/avatars/user26.jpg", score: 19340 },
                { rank: 3, name: "CommanderSupreme", avatar: "assets/images/avatars/user27.jpg", score: 18950 }
            ]
        },
        {
            id: 6,
            title: "Pixel Survivors",
            category: "Indie",
            image: "assets/images/games/pixel-survivors.jpg",
            rating: 4.6,
            ratingCount: 3421,
            players: 1780,
            isFavorite: true,
            description: "A retro-styled survival game with modern mechanics. Gather resources, craft items, and build defenses to survive increasingly dangerous nights. Features procedurally generated worlds and permadeath.",
            developer: "Indie Pixels",
            releaseDate: "2025-02-15",
            reviews: [
                { user: "RetroGamer", avatar: "assets/images/avatars/user28.jpg", rating: 5, date: "2025-06-10", content: "Addictive gameplay loop! The pixel art style is charming and the survival mechanics are deep." },
                { user: "SurvivalPro", avatar: "assets/images/avatars/user29.jpg", rating: 4, date: "2025-05-25", content: "Incredibly fun but can get repetitive after many hours. Still worth every penny!" }
            ],
            achievements: [
                { name: "Survivor", icon: "fa-person-shelter", description: "Survive your first night", progress: 100, isLocked: false },
                { name: "Master Crafter", icon: "fa-hammer", description: "Craft all items", progress: 75, isLocked: false },
                { name: "Immortal", icon: "fa-skull", description: "Survive 100 days", progress: 23, isLocked: false }
            ],
            leaderboard: [
                { rank: 1, name: "PixelKing", avatar: "assets/images/avatars/user30.jpg", score: 14320 },
                { rank: 2, name: "SurvivalGuru", avatar: "assets/images/avatars/user31.jpg", score: 13980 },
                { rank: 3, name: "CraftMaster", avatar: "assets/images/avatars/user32.jpg", score: 13540 }
            ]
        },
        {
            id: 7,
            title: "Crypto Defenders",
            category: "Tower Defense",
            image: "assets/images/games/crypto-defenders.jpg",
            rating: 4.4,
            ratingCount: 1876,
            players: 920,
            isFavorite: false,
            description: "Protect your blockchain from hackers and viruses in this innovative tower defense game. Build security systems, upgrade your defenses, and stop increasingly sophisticated cyber attacks.",
            developer: "Blockchain Games",
            releaseDate: "2025-04-20",
            reviews: [
                { user: "CryptoKnight", avatar: "assets/images/avatars/user33.jpg", rating: 4, date: "2025-06-05", content: "Unique concept that actually teaches you about cybersecurity while being fun!" },
                { user: "BlockchainBoss", avatar: "assets/images/avatars/user34.jpg", rating: 5, date: "2025-05-28", content: "Addictive gameplay with a perfect difficulty curve. Love the tech-themed towers!" }
            ],
            achievements: [
                { name: "Firewall", icon: "fa-shield", description: "Complete the tutorial", progress: 100, isLocked: false },
                { name: "Security Expert", icon: "fa-lock", description: "Beat all levels on normal difficulty", progress: 80, isLocked: false },
                { name: "Ethical Hacker", icon: "fa-user-secret", description: "Find all security vulnerabilities", progress: 0, isLocked: true }
            ],
            leaderboard: [
                { rank: 1, name: "CryptoDefender", avatar: "assets/images/avatars/user35.jpg", score: 16750 },
                { rank: 2, name: "SecurityGuru", avatar: "assets/images/avatars/user36.jpg", score: 16320 },
                { rank: 3, name: "FirewallMaster", avatar: "assets/images/avatars/user37.jpg", score: 15980 }
            ]
        },
        {
            id: 8,
            title: "Rhythm Rebels",
            category: "Music",
            image: "assets/images/games/rhythm-rebels.jpg",
            rating: 4.8,
            ratingCount: 2543,
            players: 1350,
            isFavorite: false,
            description: "Dance to the beat in this revolutionary rhythm game. Features hundreds of songs, multiple difficulty levels, and integration with your Spotify playlists. Compete globally or play with friends.",
            developer: "Beat Studios",
            releaseDate: "2025-01-25",
            reviews: [
                { user: "DanceKing", avatar: "assets/images/avatars/user38.jpg", rating: 5, date: "2025-06-12", content: "The Spotify integration is game-changing! I can play with all my favorite songs." },
                { user: "RhythmQueen", avatar: "assets/images/avatars/user39.jpg", rating: 5, date: "2025-06-01", content: "Most responsive rhythm game I've ever played. The visuals are also stunning!" }
            ],
            achievements: [
                { name: "First Beat", icon: "fa-music", description: "Complete your first song", progress: 100, isLocked: false },
                { name: "Perfect Rhythm", icon: "fa-compact-disc", description: "Get a perfect score on any song", progress: 0, isLocked: true },
                { name: "Music Library", icon: "fa-headphones", description: "Play 100 different songs", progress: 45, isLocked: false }
            ],
            leaderboard: [
                { rank: 1, name: "BeatMaster", avatar: "assets/images/avatars/user40.jpg", score: 22450 },
                { rank: 2, name: "RhythmKing", avatar: "assets/images/avatars/user41.jpg", score: 21980 },
                { rank: 3, name: "MusicMaestro", avatar: "assets/images/avatars/user42.jpg", score: 21540 }
            ]
        }
    ];
}

/**
 * Render games to the grid
 * @param {Array} games - Array of game objects
 */
function renderGames(games) {
    const gamesGrid = document.getElementById('games-grid');
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

/**
 * Create a game card element
 * @param {Object} game - Game object
 * @returns {HTMLElement} - Game card element
 */
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.gameId = game.id;
    
    // Generate star rating HTML
    const starsHtml = generateStarRating(game.rating);
    
    card.innerHTML = `
        <div class="game-card-image">
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <div class="game-card-overlay">
                <div class="game-card-actions">
                    <button class="game-card-action-btn play" aria-label="Play ${game.title}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="game-card-action-btn favorite ${game.isFavorite ? 'active' : ''}" aria-label="${game.isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="game-card-action-btn info" aria-label="More information">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="game-card-content">
            <h3 class="game-card-title">${game.title}</h3>
            <div class="game-card-category">${game.category}</div>
            <div class="game-card-rating">
                <div class="game-card-stars">${starsHtml}</div>
                <span class="game-card-rating-count">(${game.ratingCount})</span>
            </div>
            <div class="game-card-meta">
                <div class="game-card-players">
                    <i class="fas fa-users"></i> ${game.players} playing
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    card.querySelector('.game-card-action-btn.info').addEventListener('click', () => openGameDetail(game));
    card.querySelector('.game-card-action-btn.favorite').addEventListener('click', (e) => toggleFavorite(e, game.id));
    card.querySelector('.game-card-action-btn.play').addEventListener('click', () => playGame(game.id));
    
    // Make the whole card clickable to open details
    card.addEventListener('click', (e) => {
        // Only open details if the click wasn't on one of the action buttons
        if (!e.target.closest('.game-card-action-btn')) {
            openGameDetail(game);
        }
    });
    
    return card;
}

/**
 * Generate HTML for star rating
 * @param {number} rating - Rating value (0-5)
 * @returns {string} - HTML for star rating
 */
function generateStarRating(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

/**
 * Initialize search bar functionality
 */
function initSearchBar() {
    const searchInput = document.getElementById('game-search');
    const searchBtn = document.getElementById('search-btn');
    
    // Search when button is clicked
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    // Search when Enter key is pressed
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

/**
 * Perform search on games
 * @param {string} query - Search query
 */
function performSearch(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        // If search is empty, reset to show all games
        loadGames();
        return;
    }
    
    // Get all games and filter by query
    const allGames = getMockGames();
    const filteredGames = allGames.filter(game => 
        game.title.toLowerCase().includes(query) || 
        game.category.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
    );
    
    // Render filtered games
    renderGames(filteredGames);
    
    // Update header to show search results
    const gamesHeader = document.querySelector('.games-header h2');
    gamesHeader.textContent = `Search Results for "${query}"`;
}

/**
 * Initialize filter functionality
 */
function initFilters() {
    const categoryFilters = document.querySelectorAll('.categories-filter input');
    const ratingFilters = document.querySelectorAll('.rating-filter input');
    const collectionFilters = document.querySelectorAll('.collections-filter input');
    const resetBtn = document.getElementById('reset-filters');
    
    // Add event listeners to all filter inputs
    [...categoryFilters, ...ratingFilters, ...collectionFilters].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    // Reset filters
    resetBtn.addEventListener('click', () => {
        // Uncheck all checkboxes
        [...categoryFilters, ...collectionFilters].forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Reset radio buttons to "All Ratings"
        ratingFilters.forEach(radio => {
            radio.checked = radio.value === 'all';
        });
        
        // Reload all games
        loadGames();
        
        // Reset header
        const gamesHeader = document.querySelector('.games-header h2');
        gamesHeader.textContent = 'All Games';
    });
}

/**
 * Apply selected filters to games
 */
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.categories-filter input:checked')).map(input => input.value);
    const selectedRating = document.querySelector('.rating-filter input:checked').value;
    const selectedCollections = Array.from(document.querySelectorAll('.collections-filter input:checked')).map(input => input.value);
    
    // Get all games
    const allGames = getMockGames();
    
    // Filter games based on selections
    let filteredGames = allGames;
    
    // Filter by category
    if (selectedCategories.length > 0) {
        filteredGames = filteredGames.filter(game => 
            selectedCategories.some(category => 
                game.category.toLowerCase().includes(category.toLowerCase())
            )
        );
    }
    
    // Filter by rating
    if (selectedRating !== 'all') {
        const minRating = parseInt(selectedRating);
        filteredGames = filteredGames.filter(game => game.rating >= minRating);
    }
    
    // Filter by collection
    if (selectedCollections.length > 0) {
        // This is simplified - in a real app, we'd have proper collection data
        if (selectedCollections.includes('favorites')) {
            filteredGames = filteredGames.filter(game => game.isFavorite);
        }
        
        if (selectedCollections.includes('recently-played')) {
            // For demo purposes, just show a subset of games as "recently played"
            const recentGameIds = [1, 3, 6];
            if (selectedCollections.includes('recently-played') && !selectedCollections.includes('favorites')) {
                filteredGames = filteredGames.filter(game => recentGameIds.includes(game.id));
            }
        }
    }
    
    // Render filtered games
    renderGames(filteredGames);
    
    // Update header to show filter status
    updateFilterHeader(selectedCategories, selectedRating, selectedCollections);
}

/**
 * Update header text based on applied filters
 */
function updateFilterHeader(categories, rating, collections) {
    const gamesHeader = document.querySelector('.games-header h2');
    let headerText = 'Games';
    
    // Add categories to header
    if (categories.length > 0) {
        headerText = categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(', ') + ' Games';
    }
    
    // Add collections to header
    if (collections.length > 0) {
        if (collections.includes('favorites')) {
            headerText = 'Favorite ' + headerText;
        }
        if (collections.includes('recently-played')) {
            headerText = 'Recently Played ' + headerText;
        }
    }
    
    // Add rating to header
    if (rating !== 'all') {
        headerText += ` (${rating}+ Stars)`;
    }
    
    gamesHeader.textContent = headerText;
}

/**
 * Initialize view toggle (grid/list)
 */
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const gamesGrid = document.getElementById('games-grid');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Set view mode
            const viewMode = button.dataset.view;
            if (viewMode === 'grid') {
                gamesGrid.classList.remove('list-view');
            } else {
                gamesGrid.classList.add('list-view');
            }
        });
    });
}

/**
 * Initialize sorting functionality
 */
function initSorting() {
    const sortSelect = document.getElementById('sort-options');
    
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const allGames = getMockGames();
        let sortedGames = [...allGames];
        
        // Sort games based on selected option
        switch (sortValue) {
            case 'popular':
                sortedGames.sort((a, b) => b.players - a.players);
                break;
            case 'newest':
                sortedGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            case 'rating':
                sortedGames.sort((a, b) => b.rating - a.rating);
                break;
            case 'name-asc':
                sortedGames.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                sortedGames.sort((a, b) => b.title.localeCompare(a.title));
                break;
        }
        
        // Render sorted games
        renderGames(sortedGames);
    });
}

/**
 * Initialize pagination
 */
function initPagination() {
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all number buttons
            document.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
                if (!isNaN(parseInt(btn.dataset.page))) {
                    btn.classList.remove('active');
                }
            });
            
            // Handle prev/next buttons
            if (button.dataset.page === 'prev') {
                // Find current active page and go to previous
                const activePage = document.querySelector('.pagination-btn.active');
                const prevPage = activePage.previousElementSibling;
                if (prevPage && !isNaN(parseInt(prevPage.dataset.page))) {
                    prevPage.classList.add('active');
                    loadPageGames(parseInt(prevPage.dataset.page));
                }
            } else if (button.dataset.page === 'next') {
                // Find current active page and go to next
                const activePage = document.querySelector('.pagination-btn.active');
                const nextPage = activePage.nextElementSibling;
                if (nextPage && !isNaN(parseInt(nextPage.dataset.page))) {
                    nextPage.classList.add('active');
                    loadPageGames(parseInt(nextPage.dataset.page));
                }
            } else {
                // Handle number buttons
                button.classList.add('active');
                loadPageGames(parseInt(button.dataset.page));
            }
        });
    });
}

/**
 * Load games for a specific page
 * @param {number} page - Page number
 */
function loadPageGames(page) {
    // In a real app, this would fetch from an API with pagination
    // For demo, we'll just show the same games for any page
    
    // Scroll to top of games grid
    document.querySelector('.games-grid-container').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Load recently played games
 */
function loadRecentlyPlayed() {
    const recentlyPlayedContainer = document.querySelector('.recently-played .games-carousel');
    
    // In a real app, this would fetch from user data
    // For demo, we'll use a subset of mock games
    const allGames = getMockGames();
    const recentGames = [allGames[0], allGames[2], allGames[5]];
    
    recentlyPlayedContainer.innerHTML = '';
    
    recentGames.forEach(game => {
        const gameCard = createGameCard(game);
        recentlyPlayedContainer.appendChild(gameCard);
    });
}

/**
 * Load friends' activity
 */
function loadFriendsActivity() {
    const activityFeed = document.querySelector('.friends-activity .activity-feed');
    
    // Mock activity data
    const activities = [
        {
            user: "CyberNinja",
            avatar: "assets/images/avatars/user1.jpg",
            action: "is playing",
            game: "Neon Horizon",
            time: "10 minutes ago"
        },
        {
            user: "StarGazer",
            avatar: "assets/images/avatars/user8.jpg",
            action: "achieved",
            achievement: "Fleet Admiral",
            game: "Stellar Odyssey",
            time: "25 minutes ago"
        },
        {
            user: "SpellCaster",
            avatar: "assets/images/avatars/user13.jpg",
            action: "invited you to play",
            game: "Mystic Legends",
            time: "1 hour ago"
        }
    ];
    
    activityFeed.innerHTML = '';
    
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        
        if (activity.action === "invited you to play") {
            activityItem.innerHTML = `
                <img src="${activity.avatar}" alt="${activity.user}" class="activity-avatar">
                <div class="activity-content">
                    <span class="activity-user">${activity.user}</span>
                    <span class="activity-text">${activity.action}</span>
                    <span class="activity-game">${activity.game}</span>
                    <div class="activity-time">${activity.time}</div>
                </div>
                <button class="activity-action">Accept</button>
            `;
            
            // Add event listener to accept button
            activityItem.querySelector('.activity-action').addEventListener('click', (e) => {
                e.stopPropagation();
                acceptGameInvite(activity.user, activity.game);
            });
        } else if (activity.action === "achieved") {
            activityItem.innerHTML = `
                <img src="${activity.avatar}" alt="${activity.user}" class="activity-avatar">
                <div class="activity-content">
                    <span class="activity-user">${activity.user}</span>
                    <span class="activity-text">${activity.action} "${activity.achievement}" in</span>
                    <span class="activity-game">${activity.game}</span>
                    <div class="activity-time">${activity.time}</div>
                </div>
            `;
        } else {
            activityItem.innerHTML = `
                <img src="${activity.avatar}" alt="${activity.user}" class="activity-avatar">
                <div class="activity-content">
                    <span class="activity-user">${activity.user}</span>
                    <span class="activity-text">${activity.action}</span>
                    <span class="activity-game">${activity.game}</span>
                    <div class="activity-time">${activity.time}</div>
                </div>
                <button class="activity-action">Join</button>
            `;
            
            // Add event listener to join button
            activityItem.querySelector('.activity-action').addEventListener('click', (e) => {
                e.stopPropagation();
                joinFriendGame(activity.user, activity.game);
            });
        }
        
        activityFeed.appendChild(activityItem);
    });
}

/**
 * Initialize game detail modal
 */
function initGameDetailModal() {
    const modal = document.getElementById('game-detail-modal');
    const closeBtn = modal.querySelector('.close-modal');
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

/**
 * Open game detail modal
 * @param {Object} game - Game object
 */
function openGameDetail(game) {
    const modal = document.getElementById('game-detail-modal');
    const container = modal.querySelector('.game-detail-container');
    
    // Generate star rating HTML
    const starsHtml = generateStarRating(game.rating);
    
    // Generate reviews HTML
    let reviewsHtml = '';
    game.reviews.forEach(review => {
        const reviewStars = generateStarRating(review.rating);
        reviewsHtml += `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-user">
                        <img src="${review.avatar}" alt="${review.user}" class="review-avatar">
                        <span class="review-username">${review.user}</span>
                    </div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">${reviewStars}</div>
                <div class="review-content">${review.content}</div>
            </div>
        `;
    });
    
    // Generate achievements HTML
    let achievementsHtml = '';
    game.achievements.forEach(achievement => {
        achievementsHtml += `
            <div class="achievement-item ${achievement.isLocked ? 'locked' : ''}">
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-progress">
                    <div class="achievement-progress-bar" style="width: ${achievement.progress}%"></div>
                </div>
                <div class="achievement-progress-text">${achievement.progress}% Complete</div>
            </div>
        `;
    });
    
    // Generate leaderboard HTML
    let leaderboardHtml = '';
    game.leaderboard.forEach(entry => {
        const rankClass = entry.rank <= 3 ? `top-${entry.rank}` : '';
        leaderboardHtml += `
            <tr>
                <td class="leaderboard-rank ${rankClass}">${entry.rank}</td>
                <td class="leaderboard-player">
                    <img src="${entry.avatar}" alt="${entry.name}" class="leaderboard-avatar">
                    <span class="leaderboard-name">${entry.name}</span>
                </td>
                <td class="leaderboard-score">${entry.score.toLocaleString()}</td>
            </tr>
        `;
    });
    
    // Set modal content
    container.innerHTML = `
        <div class="game-detail-header">
            <div class="game-detail-image">
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="game-detail-info">
                <h2 class="game-detail-title">${game.title}</h2>
                <div class="game-detail-meta">
                    <div class="game-detail-category">
                        <i class="fas fa-gamepad"></i>
                        <span>${game.category}</span>
                    </div>
                    <div class="game-detail-release">
                        <i class="fas fa-calendar"></i>
                        <span>${game.releaseDate}</span>
                    </div>
                    <div class="game-detail-developer">
                        <i class="fas fa-code"></i>
                        <span>${game.developer}</span>
                    </div>
                </div>
                <div class="game-detail-rating">
                    <div class="game-detail-stars">${starsHtml}</div>
                    <div class="game-detail-rating-count">${game.ratingCount} ratings</div>
                </div>
                <div class="game-detail-actions">
                    <button class="game-detail-btn play">
                        <i class="fas fa-play"></i> Play Now
                    </button>
                    <button class="game-detail-btn favorite ${game.isFavorite ? 'active' : ''}">
                        <i class="fas fa-heart"></i> ${game.isFavorite ? 'Favorited' : 'Add to Favorites'}
                    </button>
                    <button class="game-detail-btn invite">
                        <i class="fas fa-user-plus"></i> Invite Friends
                    </button>
                </div>
            </div>
        </div>
        
        <div class="game-detail-description">
            ${game.description}
        </div>
        
        <div class="game-detail-tabs">
            <div class="game-detail-tab active" data-tab="reviews">Reviews</div>
            <div class="game-detail-tab" data-tab="achievements">Achievements</div>
            <div class="game-detail-tab" data-tab="leaderboard">Leaderboard</div>
        </div>
        
        <div class="game-detail-tab-content active" data-tab="reviews">
            <div class="game-reviews">
                ${reviewsHtml}
            </div>
        </div>
        
        <div class="game-detail-tab-content" data-tab="achievements">
            <div class="game-achievements">
                ${achievementsHtml}
            </div>
        </div>
        
        <div class="game-detail-tab-content" data-tab="leaderboard">
            <div class="game-leaderboard">
                <table class="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${leaderboardHtml}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    // Add event listeners to tabs
    const tabs = container.querySelectorAll('.game-detail-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove('active'));
            container.querySelectorAll('.game-detail-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            container.querySelector(`.game-detail-tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active');
        });
    });
    
    // Add event listeners to buttons
    container.querySelector('.game-detail-btn.play').addEventListener('click', () => playGame(game.id));
    container.querySelector('.game-detail-btn.favorite').addEventListener('click', (e) => {
        toggleFavorite(e, game.id);
        e.target.classList.toggle('active');
        e.target.innerHTML = e.target.classList.contains('active') ? 
            '<i class="fas fa-heart"></i> Favorited' : 
            '<i class="fas fa-heart"></i> Add to Favorites';
    });
    container.querySelector('.game-detail-btn.invite').addEventListener('click', () => inviteFriends(game.id));
    
    // Show modal
    modal.style.display = 'block';
}

/**
 * Toggle favorite status for a game
 * @param {Event} e - Click event
 * @param {number} gameId - Game ID
 */
function toggleFavorite(e, gameId) {
    e.stopPropagation();
    
    // Toggle active class on button
    const button = e.target.closest('.game-card-action-btn.favorite, .game-detail-btn.favorite');
    button.classList.toggle('active');
    
    // In a real app, this would update user preferences in the database
    console.log(`Toggled favorite status for game ${gameId}`);
    
    // Show animation effect
    if (button.classList.contains('active')) {
        // Play favorite animation
        animateFavorite(button);
    }
}

/**
 * Animate favorite button when activated
 * @param {HTMLElement} button - Favorite button element
 */
function animateFavorite(button) {
    // Create and append heart particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('span');
        particle.className = 'heart-particle';
        particle.innerHTML = '<i class="fas fa-heart"></i>';
        particle.style.color = '#ff00ff';
        particle.style.position = 'absolute';
        particle.style.top = '50%';
        particle.style.left = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.fontSize = '1rem';
        particle.style.opacity = '1';
        particle.style.pointerEvents = 'none';
        
        button.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(-50%, -50%)', opacity: 1 },
            { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

/**
 * Play a game
 * @param {number} gameId - Game ID
 */
function playGame(gameId) {
    // In a real app, this would launch the game
    console.log(`Playing game ${gameId}`);
    
    // Show a toast notification
    showToast(`Launching game...`, 'success');
    
    // Add to recently played (in a real app, this would update user data)
}

/**
 * Invite friends to play a game
 * @param {number} gameId - Game ID
 */
function inviteFriends(gameId) {
    // In a real app, this would open a friend selector
    console.log(`Inviting friends to play game ${gameId}`);
    
    // Show a toast notification
    showToast('Friend invitation dialog would open here', 'info');
}

/**
 * Accept a game invitation
 * @param {string} friend - Friend's username
 * @param {string} game - Game title
 */
function acceptGameInvite(friend, game) {
    // In a real app, this would accept the invitation and launch the game
    console.log(`Accepting invitation from ${friend} to play ${game}`);
    
    // Show a toast notification
    showToast(`Joining ${friend} in ${game}...`, 'success');
}

/**
 * Join a friend's game
 * @param {string} friend - Friend's username
 * @param {string} game - Game title
 */
function joinFriendGame(friend, game) {
    // In a real app, this would join the friend's game session
    console.log(`Joining ${friend} in ${game}`);
    
    // Show a toast notification
    showToast(`Joining ${friend} in ${game}...`, 'success');
}

/**
 * Show a toast notification
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info, warning)
 */
function showToast(message, type = 'info') {
    // Create toast element if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .toast-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .toast {
                padding: 12px 20px;
                border-radius: 5px;
                color: white;
                font-family: 'Rajdhani', sans-serif;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                animation: toast-in 0.3s ease, toast-out 0.3s ease 2.7s forwards;
                max-width: 300px;
            }
            
            .toast.success {
                background: linear-gradient(45deg, #00ffaa, #00ffff);
                color: #003333;
            }
            
            .toast.error {
                background: linear-gradient(45deg, #ff0066, #ff00ff);
                color: #330033;
            }
            
            .toast.info {
                background: linear-gradient(45deg, #00aaff, #00ffff);
                color: #003366;
            }
            
            .toast.warning {
                background: linear-gradient(45deg, #ffaa00, #ff00aa);
                color: #663300;
            }
            
            @keyframes toast-in {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes toast-out {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Set icon based on type
    let icon;
    switch (type) {
        case 'success':
            icon = 'fa-check-circle';
            break;
        case 'error':
            icon = 'fa-exclamation-circle';
            break;
        case 'warning':
            icon = 'fa-exclamation-triangle';
            break;
        default:
            icon = 'fa-info-circle';
    }
    
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    toastContainer.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Connect with previously created modules
document.addEventListener('DOMContentLoaded', function() {
    // Initialize modules from other JS files if they exist
    if (typeof initGameLibrary === 'function') {
        initGameLibrary();
    }
    
    if (typeof initSocialFeatures === 'function') {
        initSocialFeatures();
    }
    
    if (typeof initAnimations === 'function') {
        initAnimations();
    }
    
    if (typeof initPerformanceOptimizations === 'function') {
        initPerformanceOptimizations();
    }
    
    if (typeof initResponsiveFeatures === 'function') {
        initResponsiveFeatures();
    }
    
    if (typeof initAdvancedFeatures === 'function') {
        initAdvancedFeatures();
    }
});
