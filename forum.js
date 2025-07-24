
// Forum System for LunaX
const LunaXForum = {
    // Forum data
    categories: [
        {
            id: 'general',
            name: 'General Discussion',
            description: 'Talk about anything related to gaming and LunaX',
            icon: 'comments',
            threads: 24,
            posts: 156
        },
        {
            id: 'games',
            name: 'Game Discussion',
            description: 'Discuss specific games, share tips and strategies',
            icon: 'gamepad',
            threads: 42,
            posts: 318
        },
        {
            id: 'suggestions',
            name: 'Suggestions & Feedback',
            description: 'Share your ideas to improve LunaX',
            icon: 'lightbulb',
            threads: 16,
            posts: 87
        },
        {
            id: 'help',
            name: 'Help & Support',
            description: 'Get help with technical issues and gameplay',
            icon: 'question-circle',
            threads: 31,
            posts: 204
        }
    ],
    
    // Sample threads
    threads: {
        'general': [
            {
                id: 'welcome',
                title: 'Welcome to LunaX Forums!',
                author: {
                    name: 'Admin',
                    avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=admin'
                },
                date: '2025-07-15',
                views: 1245,
                replies: 24,
                pinned: true,
                content: 'Welcome to the official LunaX forums! This is a place for our community to discuss games, share tips, and connect with other players.\
\
Please remember to follow our community guidelines:\
\
1. Be respectful to others\
2. No spamming or self-promotion\
3. Keep discussions relevant to the category\
4. Have fun!\
\
If you have any questions, feel free to ask here or contact our support team.',
                comments: [
                    {
                        author: {
                            name: 'GameMaster',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=gamemaster'
                        },
                        date: '2025-07-15',
                        content: 'Great to see the forums up and running! Looking forward to all the discussions.'
                    },
                    {
                        author: {
                            name: 'PixelWarrior',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=pixelwarrior'
                        },
                        date: '2025-07-16',
                        content: 'Hello everyone! Excited to be part of this community!'
                    }
                ]
            },
            {
                id: 'introductions',
                title: 'Introduce Yourself!',
                author: {
                    name: 'CommunityManager',
                    avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=communitymanager'
                },
                date: '2025-07-16',
                views: 876,
                replies: 42,
                pinned: false,
                content: 'Let's get to know each other! Share a bit about yourself, your favorite games, and what brought you to LunaX.\
\
I'll start: I'm the community manager for LunaX, I love retro arcade games, and I'm here to make sure everyone has a great experience on our platform!',
                comments: [
                    {
                        author: {
                            name: 'RetroGamer',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=retrogamer'
                        },
                        date: '2025-07-16',
                        content: 'Hi everyone! I'm a huge fan of classic arcade games. Tetris is my all-time favorite, and I'm currently trying to beat my high score in Space Invaders!'
                    }
                ]
            }
        ],
        'games': [
            {
                id: 'tetris-tips',
                title: 'Advanced Tetris Strategies',
                author: {
                    name: 'TetrisMaster',
                    avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=tetrismaster'
                },
                date: '2025-07-18',
                views: 542,
                replies: 15,
                pinned: false,
                content: 'I wanted to share some advanced Tetris strategies that have helped me reach the top of the leaderboard:\
\
1. **T-Spin Mastery**: Learn to perform T-spins for bonus points\
2. **Perfect Clear Setup**: How to clear the entire board for massive bonuses\
3. **Piece Previewing**: Always look at the next 3-4 pieces to plan ahead\
4. **Wall Building**: Creating efficient walls to set up for Tetrises\
\
What strategies do you use?',
                comments: [
                    {
                        author: {
                            name: 'BlockStacker',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=blockstacker'
                        },
                        date: '2025-07-18',
                        content: 'Great tips! I'd add that learning to play with both rotation systems (SRS and Classic) can make you more versatile.'
                    }
                ]
            }
        ],
        'suggestions': [
            {
                id: 'new-games',
                title: 'Game Suggestions for LunaX',
                author: {
                    name: 'GameEnthusiast',
                    avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=gameenthusiast'
                },
                date: '2025-07-17',
                views: 324,
                replies: 28,
                pinned: false,
                content: 'I have some suggestions for new games that could be added to LunaX:\
\
1. **Pac-Man Remix**: A modern take on the classic with new mazes and power-ups\
2. **Galaga Evolution**: Space shooter with upgraded graphics and new enemy types\
3. **Puzzle Bubble Deluxe**: Bubble shooting game with multiplayer mode\
4. **Racing Neon**: Top-down racing game with customizable vehicles\
\
What games would you like to see added?',
                comments: [
                    {
                        author: {
                            name: 'ArcadeFan',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=arcadefan'
                        },
                        date: '2025-07-17',
                        content: 'I'd love to see a modern version of Frogger with enhanced graphics and new obstacles!'
                    }
                ]
            }
        ],
        'help': [
            {
                id: 'controls-help',
                title: 'How to Customize Game Controls?',
                author: {
                    name: 'NewPlayer',
                    avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=newplayer'
                },
                date: '2025-07-19',
                views: 187,
                replies: 8,
                pinned: false,
                content: 'I'm having trouble with the default controls in some games. Is there a way to customize the key bindings? I'd like to use WASD instead of arrow keys for movement.\
\
Also, is there controller support for any of the games?',
                comments: [
                    {
                        author: {
                            name: 'TechSupport',
                            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=techsupport'
                        },
                        date: '2025-07-19',
                        content: 'Yes, you can customize controls! Go to Settings > Controls and you'll see options for each game. Most games also support controllers - just plug in your controller before starting the game.'
                    }
                ]
            }
        ]
    },
    
    // Current state
    currentCategory: null,
    currentThread: null,
    
    // Initialize forum
    init: function() {
        // Render categories
        this.renderCategories();
        
        // Set up event listeners
        document.getElementById('backToCategories').addEventListener('click', () => {
            this.showCategoriesView();
        });
        
        document.getElementById('backToThreads').addEventListener('click', () => {
            this.showThreadsView(this.currentCategory);
        });
        
        document.getElementById('newThreadBtn').addEventListener('click', () => {
            this.showNewThreadForm();
        });
        
        document.getElementById('newThreadForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.createNewThread();
        });
        
        document.getElementById('newCommentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addComment();
        });
    },
    
    // Render categories
    renderCategories: function() {
        const container = document.getElementById('forumCategories');
        container.innerHTML = '';
        
        this.categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'forum-category';
            categoryElement.dataset.categoryId = category.id;
            categoryElement.innerHTML = `
                <div class="forum-category-icon">
                    <i class="fas fa-${category.icon}"></i>
                </div>
                <div class="forum-category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <div class="forum-category-stats">
                        <span><i class="fas fa-comments"></i> ${category.threads} threads</span>
                        <span><i class="fas fa-reply"></i> ${category.posts} posts</span>
                    </div>
                </div>
            `;
            
            categoryElement.addEventListener('click', () => {
                this.showThreadsView(category.id);
            });
            
            container.appendChild(categoryElement);
        });
    },
    
    // Show threads for a category
    showThreadsView: function(categoryId) {
        // Update current category
        this.currentCategory = categoryId;
        
        // Find category data
        const category = this.categories.find(cat => cat.id === categoryId);
        
        // Update category title
        document.getElementById('categoryTitle').textContent = category.name;
        
        // Hide categories view, show threads view
        document.getElementById('categoriesView').style.display = 'none';
        document.getElementById('threadsView').style.display = 'block';
        document.getElementById('threadView').style.display = 'none';
        
        // Render threads
        this.renderThreads(categoryId);
    },
    
    // Show categories view
    showCategoriesView: function() {
        document.getElementById('categoriesView').style.display = 'block';
        document.getElementById('threadsView').style.display = 'none';
        document.getElementById('threadView').style.display = 'none';
    },
    
    // Render threads for a category
    renderThreads: function(categoryId) {
        const container = document.getElementById('forumThreads');
        container.innerHTML = '';
        
        const threads = this.threads[categoryId] || [];
        
        // Sort threads (pinned first, then by date)
        threads.sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date) - new Date(a.date);
        });
        
        threads.forEach(thread => {
            const threadElement = document.createElement('div');
            threadElement.className = 'forum-thread';
            if (thread.pinned) threadElement.classList.add('pinned');
            threadElement.dataset.threadId = thread.id;
            
            threadElement.innerHTML = `
                ${thread.pinned ? '<div class="pinned-badge"><i class="fas fa-thumbtack"></i> Pinned</div>' : ''}
                <div class="forum-thread-info">
                    <h3>${thread.title}</h3>
                    <div class="forum-thread-meta">
                        <span><i class="fas fa-user"></i> ${thread.author.name}</span>
                        <span><i class="fas fa-calendar"></i> ${thread.date}</span>
                        <span><i class="fas fa-eye"></i> ${thread.views} views</span>
                        <span><i class="fas fa-reply"></i> ${thread.replies} replies</span>
                    </div>
                </div>
            `;
            
            threadElement.addEventListener('click', () => {
                this.showThreadView(categoryId, thread.id);
            });
            
            container.appendChild(threadElement);
        });
    },
    
    // Show thread view
    showThreadView: function(categoryId, threadId) {
        // Update current thread
        this.currentCategory = categoryId;
        this.currentThread = threadId;
        
        // Find thread data
        const thread = this.threads[categoryId].find(t => t.id === threadId);
        
        // Update thread title
        document.getElementById('threadTitle').textContent = thread.title;
        
        // Hide threads view, show thread view
        document.getElementById('categoriesView').style.display = 'none';
        document.getElementById('threadsView').style.display = 'none';
        document.getElementById('threadView').style.display = 'block';
        
        // Render thread content
        this.renderThreadContent(thread);
    },
    
    // Render thread content
    renderThreadContent: function(thread) {
        const container = document.getElementById('threadContent');
        container.innerHTML = '';
        
        // Main post
        const mainPost = document.createElement('div');
        mainPost.className = 'forum-post thread-main-post';
        mainPost.innerHTML = `
            <div class="forum-post-author">
                <div class="forum-avatar">
                    <img src="${thread.author.avatar}" alt="${thread.author.name}">
                </div>
                <div class="forum-author-name">${thread.author.name}</div>
            </div>
            <div class="forum-post-content">
                <div class="forum-post-meta">
                    <span><i class="fas fa-calendar"></i> ${thread.date}</span>
                </div>
                <div class="forum-post-text">${thread.content}</div>
                <div class="forum-post-actions">
                    <button class="forum-action-btn"><i class="fas fa-reply"></i> Reply</button>
                    <button class="forum-action-btn"><i class="fas fa-heart"></i> Like</button>
                    <button class="forum-action-btn"><i class="fas fa-share"></i> Share</button>
                </div>
            </div>
        `;
        container.appendChild(mainPost);
        
        // Comments section
        const commentsSection = document.createElement('div');
        commentsSection.className = 'forum-comments';
        
        if (thread.comments && thread.comments.length > 0) {
            const commentsTitle = document.createElement('h3');
            commentsTitle.className = 'comments-title';
            commentsTitle.textContent = 'Comments';
            commentsSection.appendChild(commentsTitle);
            
            thread.comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'forum-post comment';
                commentElement.innerHTML = `
                    <div class="forum-post-author">
                        <div class="forum-avatar">
                            <img src="${comment.author.avatar}" alt="${comment.author.name}">
                        </div>
                        <div class="forum-author-name">${comment.author.name}</div>
                    </div>
                    <div class="forum-post-content">
                        <div class="forum-post-meta">
                            <span><i class="fas fa-calendar"></i> ${comment.date}</span>
                        </div>
                        <div class="forum-post-text">${comment.content}</div>
                        <div class="forum-post-actions">
                            <button class="forum-action-btn"><i class="fas fa-reply"></i> Reply</button>
                            <button class="forum-action-btn"><i class="fas fa-heart"></i> Like</button>
                        </div>
                    </div>
                `;
                commentsSection.appendChild(commentElement);
            });
        } else {
            const noComments = document.createElement('div');
            noComments.className = 'no-comments';
            noComments.textContent = 'No comments yet. Be the first to comment!';
            commentsSection.appendChild(noComments);
        }
        
        container.appendChild(commentsSection);
        
        // Check if user is logged in
        if (LunaXAuth && LunaXAuth.isLoggedIn) {
            document.getElementById('commentFormContainer').style.display = 'block';
        } else {
            // Show login prompt
            const loginPrompt = document.createElement('div');
            loginPrompt.className = 'login-prompt';
            loginPrompt.innerHTML = `
                <p>You need to be logged in to comment.</p>
                <button class="btn btn-primary" onclick="LunaXAuth.authUIController.showAuthModal('login')">
                    <i class="fas fa-sign-in-alt"></i> Login to Comment
                </button>
            `;
            container.appendChild(loginPrompt);
            document.getElementById('commentFormContainer').style.display = 'none';
        }
    },
    
    // Show new thread form
    showNewThreadForm: function() {
        // Set category in hidden field
        document.getElementById('threadCategory').value = this.currentCategory;
        
        // Show modal
        document.getElementById('modalOverlay').classList.add('active');
        document.getElementById('newThreadModal').classList.add('active');
    },
    
    // Create new thread
    createNewThread: function() {
        // Check if user is logged in
        if (!LunaXAuth || !LunaXAuth.isLoggedIn) {
            LunaXAuth.authUIController.showAuthModal('login');
            return;
        }
        
        const categoryId = document.getElementById('threadCategory').value;
        const title = document.getElementById('threadTitle').value;
        const content = document.getElementById('threadContent').value;
        
        if (!title || !content) {
            alert('Please fill in all fields');
            return;
        }
        
        // Create new thread object
        const newThread = {
            id: 'thread-' + Date.now(),
            title: title,
            author: {
                name: LunaXAuth.currentUser.displayName || 'User',
                avatar: LunaXAuth.currentUser.photoURL || 'https://api.dicebear.com/6.x/pixel-art/svg?seed=' + LunaXAuth.currentUser.uid
            },
            date: new Date().toISOString().split('T')[0],
            views: 0,
            replies: 0,
            pinned: false,
            content: content,
            comments: []
        };
        
        // Add thread to data
        if (!this.threads[categoryId]) {
            this.threads[categoryId] = [];
        }
        this.threads[categoryId].push(newThread);
        
        // Update category thread count
        const category = this.categories.find(cat => cat.id === categoryId);
        if (category) {
            category.threads++;
        }
        
        // Close modal
        document.getElementById('modalOverlay').classList.remove('active');
        document.getElementById('newThreadModal').classList.remove('active');
        
        this.showThreadView(categoryId, newThread.id);
        
        showNotification('Thread created successfully!');
    },
    
    addComment: function() {

        if (!LunaXAuth || !LunaXAuth.isLoggedIn) {
            LunaXAuth.authUIController.showAuthModal('login');
            return;
        }
        
        const content = document.getElementById('commentContent').value;
        
        if (!content) {
            alert('Please enter a comment');
            return;
        }

        const thread = this.threads[this.currentCategory].find(t => t.id === this.currentThread);

        const newComment = {
            author: {
                name: LunaXAuth.currentUser.displayName || 'User',
                avatar: LunaXAuth.currentUser.photoURL || 'https://api.dicebear.com/6.x/pixel-art/svg?seed=' + LunaXAuth.currentUser.uid
            },
            date: new Date().toISOString().split('T')[0],
            content: content
        };

        thread.comments.push(newComment);
        thread.replies++;

        const category = this.categories.find(cat => cat.id === this.currentCategory);
        if (category) {
            category.posts++;
        }

        document.getElementById('commentContent').value = '';

        this.renderThreadContent(thread);
        
        showNotification('Comment added successfully!');
    },
    
    formatText: function(format) {
        const textarea = document.getElementById('threadContent');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        let replacement = '';
        
        switch (format) {
            case 'bold':
                replacement = `**${selectedText}**`;
                break;
            case 'italic':
                replacement = `*${selectedText}*`;
                break;
            case 'underline':
                replacement = `__${selectedText}__`;
                break;
            case 'list':
                replacement = `\
- ${selectedText.split('\
').join('\
- ')}`;
                break;
            case 'heading':
                replacement = `## ${selectedText}`;
                break;
            case 'link':
                const url = prompt('Enter URL:', 'https://');
                if (url) {
                    replacement = `[${selectedText || 'link'}](${url})`;
                } else {
                    return;
                }
                break;
        }
        
        textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
        textarea.focus();
        textarea.selectionStart = start + replacement.length;
        textarea.selectionEnd = start + replacement.length;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    LunaXForum.init();
});
