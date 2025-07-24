
// Recommendations System for LunaX
const LunaXRecommendations = {
    // Sample user preferences (would normally come from user data)
    userPreferences: {
        favoriteGenres: ['action', 'arcade'],
        recentlyPlayed: ['snake', 'tetris'],
        playTime: {
            'snake': 120,
            'tetris': 85,
            'pong': 30,
            'breakout': 15
        }
    },
    
    // Game data
    gameData: [
        {
            id: 'snake',
            title: 'Snake 2000',
            description: 'Classic snake game with modern graphics.',
            image: 'https://images.unsplash.com/photo-1628483368890-4f4b8df2cb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['popular', 'arcade'],
            rating: 4.8
        },
        {
            id: 'tetris',
            title: 'Cyber Tetris',
            description: 'Futuristic block-stacking action with smooth animations.',
            image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['classic', 'puzzle'],
            rating: 4.9
        },
        {
            id: 'pong',
            title: 'Neon Pong',
            description: 'Retro-futuristic ping pong with enhanced physics.',
            image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['multiplayer', 'classic'],
            rating: 4.7
        },
        {
            id: 'breakout',
            title: 'Matrix Breakout',
            description: 'Break through digital barriers in this enhanced brick-breaking adventure.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['arcade', 'action'],
            rating: 4.5
        },
        {
            id: 'space',
            title: 'Space Invaders 2K',
            description: 'Defend Earth from alien invasion in this millennium edition space shooter.',
            image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['action', 'arcade'],
            rating: 4.6
        },
        {
            id: 'puzzle',
            title: 'Digital Puzzle',
            description: 'Mind-bending puzzles with progressive difficulty.',
            image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['brain', 'puzzle'],
            rating: 4.4
        },
        {
            id: 'adventure',
            title: 'Cyber Quest',
            description: 'Embark on an epic journey through a digital world.',
            image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['adventure', 'action'],
            rating: 4.7
        },
        {
            id: 'platformer',
            title: 'Neon Jumper',
            description: 'Navigate through challenging platforms in this fast-paced action game.',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tags: ['action', 'adventure'],
            rating: 4.5
        }
    ],
    
    // Generate recommendations based on user preferences
    generateRecommendations: function() {
        const recommendations = [];
        const alreadyPlayed = Object.keys(this.userPreferences.playTime);
        
        // Score each game based on user preferences
        this.gameData.forEach(game => {
            let score = 0;
            
            // Higher score for favorite genres
            game.tags.forEach(tag => {
                if (this.userPreferences.favoriteGenres.includes(tag)) {
                    score += 2;
                }
            });
            
            // Higher score for highly rated games
            score += game.rating;
            
            // Lower score for already played games
            if (alreadyPlayed.includes(game.id)) {
                score -= 1;
            }
            
            recommendations.push({
                game: game,
                score: score
            });
        });
        
        // Sort by score and return top 4
        return recommendations
            .sort((a, b) => b.score - a.score)
            .slice(0, 4)
            .map(item => item.game);
    },
    
    // Render recommendations to the DOM
    renderRecommendations: function() {
        const recommendations = this.generateRecommendations();
        const container = document.getElementById('recommendedGames');
        
        // Clear container
        container.innerHTML = '';
        
        // Add each recommendation
        recommendations.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.className = 'recommended-game';
            gameElement.innerHTML = `
                <div class="recommended-game-image">
                    <img src="${game.image}" alt="${game.title}">
                </div>
                <div class="recommended-game-info">
                    <h4>${game.title}</h4>
                    <p>${game.description}</p>
                    <div class="recommended-game-tags">
                        ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <button class="recommended-play-btn" onclick="playGame('${game.id}')">
                    <i class="fas fa-play"></i>
                </button>
            `;
            container.appendChild(gameElement);
        });
    },
    
    // Initialize recommendations
    init: function() {
        // Render initial recommendations
        this.renderRecommendations();
        
        // Update recommendations when section is shown
        document.querySelector('.sidebar-btn[title="Recommended"]').addEventListener('click', () => {
            this.renderRecommendations();
        });
    }
};

// Initialize recommendations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LunaXRecommendations.init();
});
