
/**
 * LunaX Gaming Portal - Social Script
 * Handles friends system, direct messaging, game invitations, activity feed, and achievements
 */

// Social controller
const LunaXSocial = {
    // User's friends
    friends: [],
    
    // Friend requests
    friendRequests: {
        sent: [],
        received: []
    },
    
    // Direct messages
    messages: {},
    
    // Game invitations
    invitations: {
        sent: [],
        received: []
    },
    
    // Activity feed
    activityFeed: [],
    
    // User achievements
    achievements: {},
    
    // Initialize social features
    initialize: function() {
        if (!LunaXAuth || !LunaXAuth.isLoggedIn) {
            // Only initialize if user is logged in
            return;
        }
        
        this.loadFriends();
        this.loadFriendRequests();
        this.loadMessages();
        this.loadInvitations();
        this.loadActivityFeed();
        this.loadAchievements();
        this.setupEventListeners();
        this.setupNotifications();
        this.renderFriendsList();
        this.renderFriendRequests();
        this.renderActivityFeed();
    },
    
    // Load friends from localStorage or server
    loadFriends: function() {
        // In a real app, this would be loaded from a server
        const savedFriends = localStorage.getItem('lunaX_friends_' + LunaXAuth.currentUser.id);
        if (savedFriends) {
            this.friends = JSON.parse(savedFriends);
        } else {
            // Mock data for demonstration
            this.friends = [
                {
                    id: 'user1',
                    username: 'CyberNinja',
                    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    status: 'online',
                    lastSeen: new Date().toISOString()
                },
                {
                    id: 'user2',
                    username: 'QuantumGamer',
                    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    status: 'offline',
                    lastSeen: new Date(Date.now() - 3600000).toISOString() // 1 hour ago
                },
                {
                    id: 'user3',
                    username: 'NeonHacker',
                    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    status: 'idle',
                    lastSeen: new Date(Date.now() - 300000).toISOString() // 5 minutes ago
                }
            ];
            this.saveFriends();
        }
    },
    
    // Save friends to localStorage or server
    saveFriends: function() {
        localStorage.setItem('lunaX_friends_' + LunaXAuth.currentUser.id, JSON.stringify(this.friends));
    },
    
    // Load friend requests from localStorage or server
    loadFriendRequests: function() {
        // In a real app, this would be loaded from a server
        const savedRequests = localStorage.getItem('lunaX_friend_requests_' + LunaXAuth.currentUser.id);
        if (savedRequests) {
            this.friendRequests = JSON.parse(savedRequests);
        } else {
            // Mock data for demonstration
            this.friendRequests = {
                sent: [],
                received: [
                    {
                        id: 'request1',
                        userId: 'user4',
                        username: 'PixelWarrior',
                        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                        date: new Date(Date.now() - 86400000).toISOString() // 1 day ago
                    }
                ]
            };
            this.saveFriendRequests();
        }
    },
    
    // Save friend requests to localStorage or server
    saveFriendRequests: function() {
        localStorage.setItem('lunaX_friend_requests_' + LunaXAuth.currentUser.id, JSON.stringify(this.friendRequests));
    },
    
    // Load messages from localStorage or server
    loadMessages: function() {
        // In a real app, this would be loaded from a server
        const savedMessages = localStorage.getItem('lunaX_messages_' + LunaXAuth.currentUser.id);
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
        } else {
            // Mock data for demonstration
            this.messages = {
                'user1': [
                    {
                        id: 'msg1',
                        senderId: 'user1',
                        receiverId: LunaXAuth.currentUser.id,
                        text: 'Hey, want to play some Cyber Assault?',
                        date: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
                        read: true
                    },
                    {
                        id: 'msg2',
                        senderId: LunaXAuth.currentUser.id,
                        receiverId: 'user1',
                        text: 'Sure, I'll be online in 10 minutes!',
                        date: new Date(Date.now() - 3540000).toISOString(), // 59 minutes ago
                        read: true
                    },
                    {
                        id: 'msg3',
                        senderId: 'user1',
                        receiverId: LunaXAuth.currentUser.id,
                        text: 'Great! I'll send you an invite.',
                        date: new Date(Date.now() - 3480000).toISOString(), // 58 minutes ago
                        read: false
                    }
                ]
            };
            this.saveMessages();
        }
    },
    
    // Save messages to localStorage or server
    saveMessages: function() {
        localStorage.setItem('lunaX_messages_' + LunaXAuth.currentUser.id, JSON.stringify(this.messages));
    },
    
    // Load invitations from localStorage or server
    loadInvitations: function() {
        // In a real app, this would be loaded from a server
        const savedInvitations = localStorage.getItem('lunaX_invitations_' + LunaXAuth.currentUser.id);
        if (savedInvitations) {
            this.invitations = JSON.parse(savedInvitations);
        } else {
            // Mock data for demonstration
            this.invitations = {
                sent: [],
                received: [
                    {
                        id: 'inv1',
                        senderId: 'user1',
                        senderName: 'CyberNinja',
                        gameId: 'game1',
                        gameName: 'Cyber Assault',
                        date: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
                        status: 'pending'
                    }
                ]
            };
            this.saveInvitations();
        }
    },
    
    // Save invitations to localStorage or server
    saveInvitations: function() {
        localStorage.setItem('lunaX_invitations_' + LunaXAuth.currentUser.id, JSON.stringify(this.invitations));
    },
    
    // Load activity feed from localStorage or server
    loadActivityFeed: function() {
        // In a real app, this would be loaded from a server
        const savedFeed = localStorage.getItem('lunaX_activity_feed_' + LunaXAuth.currentUser.id);
        if (savedFeed) {
            this.activityFeed = JSON.parse(savedFeed);
        } else {
            // Mock data for demonstration
            this.activityFeed = [
                {
                    id: 'activity1',
                    userId: 'user1',
                    username: 'CyberNinja',
                    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    type: 'achievement',
                    content: 'unlocked the "Master Hacker" achievement in Cyber Assault',
                    date: new Date(Date.now() - 7200000).toISOString() // 2 hours ago
                },
                {
                    id: 'activity2',
                    userId: 'user3',
                    username: 'NeonHacker',
                    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    type: 'highscore',
                    content: 'set a new high score of 15,420 in Neon Fighters',
                    date: new Date(Date.now() - 10800000).toISOString() // 3 hours ago
                },
                {
                    id: 'activity3',
                    userId: 'user2',
                    username: 'QuantumGamer',
                    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                    type: 'game',
                    content: 'started playing Digital Odyssey',
                    date: new Date(Date.now() - 18000000).toISOString() // 5 hours ago
                }
            ];
            this.saveActivityFeed();
        }
    },
    
    // Save activity feed to localStorage or server
    saveActivityFeed: function() {
        localStorage.setItem('lunaX_activity_feed_' + LunaXAuth.currentUser.id, JSON.stringify(this.activityFeed));
    },
    
    // Load achievements from localStorage or server
    loadAchievements: function() {
        // In a real app, this would be loaded from a server
        const savedAchievements = localStorage.getItem('lunaX_achievements_' + LunaXAuth.currentUser.id);
        if (savedAchievements) {
            this.achievements = JSON.parse(savedAchievements);
        } else {
            // Mock data for demonstration
            this.achievements = {
                'game1': [
                    {
                        id: 'ach1',
                        name: 'First Blood',
                        description: 'Win your first match',
                        icon: 'trophy',
                        unlocked: true,
                        date: new Date(Date.now() - 604800000).toISOString() // 1 week ago
                    },
                    {
                        id: 'ach2',
                        name: 'Sharpshooter',
                        description: 'Achieve 90% accuracy in a match',
                        icon: 'bullseye',
                        unlocked: false
                    }
                ],
                'game3': [
                    {
                        id: 'ach3',
                        name: 'Speed Demon',
                        description: 'Complete a level in under 30 seconds',
                        icon: 'bolt',
                        unlocked: true,
                        date: new Date(Date.now() - 259200000).toISOString() // 3 days ago
                    }
                ]
            };
            this.saveAchievements();
        }
    },
    
    // Save achievements to localStorage or server
    saveAchievements: function() {
        localStorage.setItem('lunaX_achievements_' + LunaXAuth.currentUser.id, JSON.stringify(this.achievements));
    },
    
    // Send friend request
    sendFriendRequest: function(username) {
        // In a real app, this would send a request to the server
        // For now, we'll simulate it with mock data
        
        // Check if the user exists (mock check)
        if (username === LunaXAuth.currentUser.username) {
            LunaXNotifications.show('You cannot send a friend request to yourself', 'error');
            return false;
        }
        
        // Check if already friends
        const alreadyFriend = this.friends.some(friend => friend.username.toLowerCase() === username.toLowerCase());
        if (alreadyFriend) {
            LunaXNotifications.show('You are already friends with ' + username, 'error');
            return false;
        }
        
        // Check if request already sent
        const alreadySent = this.friendRequests.sent.some(request => request.username.toLowerCase() === username.toLowerCase());
        if (alreadySent) {
            LunaXNotifications.show('Friend request already sent to ' + username, 'error');
            return false;
        }
        
        // Create mock user for demonstration
        const mockUserId = 'user' + Math.floor(Math.random() * 1000);
        const request = {
            id: 'request' + Date.now(),
            userId: mockUserId,
            username: username,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            date: new Date().toISOString()
        };
        
        this.friendRequests.sent.push(request);
        this.saveFriendRequests();
        
        // Show notification
        LunaXNotifications.show('Friend request sent to ' + username, 'success');
        
        return true;
    },
    
    // Accept friend request
    acceptFriendRequest: function(requestId) {
        const requestIndex = this.friendRequests.received.findIndex(request => request.id === requestId);
        if (requestIndex === -1) return false;
        
        const request = this.friendRequests.received[requestIndex];
        
        // Add to friends
        const newFriend = {
            id: request.userId,
            username: request.username,
            avatar: request.avatar,
            status: 'online',
            lastSeen: new Date().toISOString()
        };
        
        this.friends.push(newFriend);
        this.saveFriends();
        
        // Remove from requests
        this.friendRequests.received.splice(requestIndex, 1);
        this.saveFriendRequests();
        
        // Add to activity feed
        this.addActivity({
            type: 'friend',
            content: 'became friends with ' + request.username,
            date: new Date().toISOString()
        });
        
        // Show notification
        LunaXNotifications.show('You are now friends with ' + request.username, 'success');
        
        // Update UI
        this.renderFriendsList();
        this.renderFriendRequests();
        
        return true;
    },
    
    // Decline friend request
    declineFriendRequest: function(requestId) {
        const requestIndex = this.friendRequests.received.findIndex(request => request.id === requestId);
        if (requestIndex === -1) return false;
        
        const request = this.friendRequests.received[requestIndex];
        
        // Remove from requests
        this.friendRequests.received.splice(requestIndex, 1);
        this.saveFriendRequests();
        
        // Show notification
        LunaXNotifications.show('Friend request declined', 'info');
        
        // Update UI
        this.renderFriendRequests();
        
        return true;
    },
    
    // Remove friend
    removeFriend: function(friendId) {
        const friendIndex = this.friends.findIndex(friend => friend.id === friendId);
        if (friendIndex === -1) return false;
        
        const friend = this.friends[friendIndex];
        
        // Remove from friends
        this.friends.splice(friendIndex, 1);
        this.saveFriends();
        
        // Show notification
        LunaXNotifications.show(friend.username + ' removed from friends', 'info');
        
        // Update UI
        this.renderFriendsList();
        
        return true;
    },
    
    // Send message
    sendMessage: function(receiverId, text) {
        if (!text.trim()) return false;
        
        // Find receiver
        const receiver = this.friends.find(friend => friend.id === receiverId);
        if (!receiver) return false;
        
        // Create message
        const message = {
            id: 'msg' + Date.now(),
            senderId: LunaXAuth.currentUser.id,
            receiverId: receiverId,
            text: text,
            date: new Date().toISOString(),
            read: false
        };
        
        // Add to messages
        if (!this.messages[receiverId]) {
            this.messages[receiverId] = [];
        }
        
        this.messages[receiverId].push(message);
        this.saveMessages();
        
        // Update UI
        this.renderMessages(receiverId);
        
        return true;
    },
    
    // Mark message as read
    markMessageAsRead: function(messageId, senderId) {
        if (!this.messages[senderId]) return false;
        
        const messageIndex = this.messages[senderId].findIndex(message => message.id === messageId);
        if (messageIndex === -1) return false;
        
        this.messages[senderId][messageIndex].read = true;
        this.saveMessages();
        
        return true;
    },
    
    // Get unread message count
    getUnreadMessageCount: function() {
        let count = 0;
        
        for (const userId in this.messages) {
            count += this.messages[userId].filter(message => 
                message.senderId !== LunaXAuth.currentUser.id && !message.read
            ).length;
        }
        
        return count;
    },
    
    // Send game invitation
    sendGameInvitation: function(friendId, gameId, gameName) {
        // Find friend
        const friend = this.friends.find(friend => friend.id === friendId);
        if (!friend) return false;
        
        // Create invitation
        const invitation = {
            id: 'inv' + Date.now(),
            senderId: LunaXAuth.currentUser.id,
            senderName: LunaXAuth.currentUser.username,
            receiverId: friendId,
            receiverName: friend.username,
            gameId: gameId,
            gameName: gameName,
            date: new Date().toISOString(),
            status: 'pending'
        };
        
        // Add to invitations
        this.invitations.sent.push(invitation);
        this.saveInvitations();
        
        // Show notification
        LunaXNotifications.show('Game invitation sent to ' + friend.username, 'success');
        
        return true;
    },
    
    // Accept game invitation
    acceptGameInvitation: function(invitationId) {
        const invitationIndex = this.invitations.received.findIndex(inv => inv.id === invitationId);
        if (invitationIndex === -1) return false;
        
        const invitation = this.invitations.received[invitationIndex];
        
        // Update invitation status
        invitation.status = 'accepted';
        this.saveInvitations();
        
        // Show notification
        LunaXNotifications.show('You accepted the invitation to play ' + invitation.gameName, 'success');
        
        // In a real app, this would launch the game
        // For now, we'll just simulate it
        if (LunaXGameLibrary) {
            LunaXGameLibrary.playGame(invitation.gameId);
        }
        
        // Remove from invitations
        this.invitations.received.splice(invitationIndex, 1);
        this.saveInvitations();
        
        return true;
    },
    
    // Decline game invitation
    declineGameInvitation: function(invitationId) {
        const invitationIndex = this.invitations.received.findIndex(inv => inv.id === invitationId);
        if (invitationIndex === -1) return false;
        
        const invitation = this.invitations.received[invitationIndex];
        
        // Update invitation status
        invitation.status = 'declined';
        
        // Remove from invitations
        this.invitations.received.splice(invitationIndex, 1);
        this.saveInvitations();
        
        // Show notification
        LunaXNotifications.show('Invitation declined', 'info');
        
        return true;
    },
    
    // Add activity to feed
    addActivity: function(activity) {
        // Add user info
        activity.userId = LunaXAuth.currentUser.id;
        activity.username = LunaXAuth.currentUser.username;
        activity.avatar = LunaXAuth.currentUser.avatar;
        activity.id = 'activity' + Date.now();
        
        // Add to feed
        this.activityFeed.unshift(activity);
        
        // Keep only the last 50 activities
        if (this.activityFeed.length > 50) {
            this.activityFeed = this.activityFeed.slice(0, 50);
        }
        
        this.saveActivityFeed();
        
        // Update UI
        this.renderActivityFeed();
        
        return true;
    },
    
    // Unlock achievement
    unlockAchievement: function(gameId, achievementId) {
        if (!this.achievements[gameId]) return false;
        
        const achievementIndex = this.achievements[gameId].findIndex(ach => ach.id === achievementId);
        if (achievementIndex === -1) return false;
        
        const achievement = this.achievements[gameId][achievementIndex];
        
        // Check if already unlocked
        if (achievement.unlocked) return false;
        
        // Unlock achievement
        achievement.unlocked = true;
        achievement.date = new Date().toISOString();
        this.saveAchievements();
        
        // Add to activity feed
        this.addActivity({
            type: 'achievement',
            content: 'unlocked the "' + achievement.name + '" achievement',
            date: new Date().toISOString(),
            gameId: gameId
        });
        
        // Show notification with confetti effect
        LunaXNotifications.show('Achievement Unlocked: ' + achievement.name, 'success');
        this.showConfetti();
        
        return true;
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
        
        // Remove confetti container after all animations
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    },
    
    // Render friends list
    renderFriendsList: function() {
        const friendsListContainer = document.getElementById('friendsList');
        if (!friendsListContainer) return;
        
        if (this.friends.length === 0) {
            friendsListContainer.innerHTML = '<p class="empty-state">No friends yet. Send friend requests to connect with other players!</p>';
            return;
        }
        
        let html = '';
        this.friends.forEach(friend => {
            const statusClass = friend.status === 'online' ? 'online' : (friend.status === 'idle' ? 'idle' : 'offline');
            const statusText = friend.status === 'online' ? 'Online' : (friend.status === 'idle' ? 'Idle' : 'Offline');
            
            html += `
            <div class="friend-card" data-friend-id="${friend.id}">
                <div class="friend-avatar">
                    <img src="${friend.avatar}" alt="${friend.username}">
                    <span class="friend-status ${statusClass}" title="${statusText}"></span>
                </div>
                <div class="friend-info">
                    <h3>${friend.username}</h3>
                    <p class="friend-status-text">${statusText}</p>
                </div>
                <div class="friend-actions">
                    <button class="message-btn" data-friend-id="${friend.id}" title="Send Message">
                        <i class="fas fa-comment"></i>
                    </button>
                    <button class="invite-btn" data-friend-id="${friend.id}" title="Invite to Game">
                        <i class="fas fa-gamepad"></i>
                    </button>
                    <button class="remove-friend-btn" data-friend-id="${friend.id}" title="Remove Friend">
                        <i class="fas fa-user-minus"></i>
                    </button>
                </div>
            </div>
            `;
        });
        
        friendsListContainer.innerHTML = html;
        this.attachFriendsEventListeners();
    },
    
    // Render friend requests
    renderFriendRequests: function() {
        const requestsContainer = document.getElementById('friendRequests');
        if (!requestsContainer) return;
        
        if (this.friendRequests.received.length === 0) {
            requestsContainer.innerHTML = '<p class="empty-state">No pending friend requests</p>';
            return;
        }
        
        let html = '';
        this.friendRequests.received.forEach(request => {
            const date = new Date(request.date);
            const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
            
            html += `
            <div class="friend-request-card" data-request-id="${request.id}">
                <div class="friend-request-avatar">
                    <img src="${request.avatar}" alt="${request.username}">
                </div>
                <div class="friend-request-info">
                    <h3>${request.username}</h3>
                    <p class="friend-request-date">Sent ${formattedDate}</p>
                </div>
                <div class="friend-request-actions">
                    <button class="accept-request-btn" data-request-id="${request.id}">
                        <i class="fas fa-check"></i> Accept
                    </button>
                    <button class="decline-request-btn" data-request-id="${request.id}">
                        <i class="fas fa-times"></i> Decline
                    </button>
                </div>
            </div>
            `;
        });
        
        requestsContainer.innerHTML = html;
        this.attachFriendRequestsEventListeners();
        
        // Update friend requests badge
        const requestsBadge = document.getElementById('friendRequestsBadge');
        if (requestsBadge) {
            if (this.friendRequests.received.length > 0) {
                requestsBadge.textContent = this.friendRequests.received.length;
                requestsBadge.style.display = 'flex';
            } else {
                requestsBadge.style.display = 'none';
            }
        }
    },
    
    // Render messages
    renderMessages: function(friendId) {
        const messagesContainer = document.getElementById('messagesList');
        if (!messagesContainer) return;
        
        // Find friend
        const friend = this.friends.find(friend => friend.id === friendId);
        if (!friend) {
            messagesContainer.innerHTML = '<p class="empty-state">Select a friend to start chatting</p>';
            return;
        }
        
        // Set active friend
        document.querySelectorAll('.friend-card').forEach(card => {
            if (card.getAttribute('data-friend-id') === friendId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        
        // Set chat header
        const chatHeader = document.getElementById('chatHeader');
        if (chatHeader) {
            const statusClass = friend.status === 'online' ? 'online' : (friend.status === 'idle' ? 'idle' : 'offline');
            const statusText = friend.status === 'online' ? 'Online' : (friend.status === 'idle' ? 'Idle' : 'Offline');
            
            chatHeader.innerHTML = `
            <div class="chat-header-avatar">
                <img src="${friend.avatar}" alt="${friend.username}">
                <span class="friend-status ${statusClass}" title="${statusText}"></span>
            </div>
            <div class="chat-header-info">
                <h3>${friend.username}</h3>
                <p class="friend-status-text">${statusText}</p>
            </div>
            `;
        }
        
        // Get messages
        const messages = this.messages[friendId] || [];
        
        if (messages.length === 0) {
            messagesContainer.innerHTML = '<p class="empty-state">No messages yet. Start the conversation!</p>';
            return;
        }
        
        let html = '';
        let lastDate = null;
        
        messages.forEach(message => {
            const date = new Date(message.date);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            let dateHeader = '';
            const messageDate = date.toLocaleDateString();
            const todayDate = today.toLocaleDateString();
            const yesterdayDate = yesterday.toLocaleDateString();
            
            if (lastDate !== messageDate) {
                if (messageDate === todayDate) {
                    dateHeader = '<div class="message-date-header">Today</div>';
                } else if (messageDate === yesterdayDate) {
                    dateHeader = '<div class="message-date-header">Yesterday</div>';
                } else {
                    dateHeader = `<div class="message-date-header">${messageDate}</div>`;
                }
                lastDate = messageDate;
            }
            
            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isCurrentUser = message.senderId === LunaXAuth.currentUser.id;
            const messageClass = isCurrentUser ? 'message-outgoing' : 'message-incoming';
            
            html += dateHeader + `
            <div class="message ${messageClass}" data-message-id="${message.id}">
                <div class="message-content">
                    <p>${message.text}</p>
                    <span class="message-time">${formattedTime}</span>
                </div>
            </div>
            `;
            
            // Mark message as read if it's from friend
            if (!isCurrentUser && !message.read) {
                this.markMessageAsRead(message.id, friendId);
            }
        });
        
        messagesContainer.innerHTML = html;
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Update unread message count
        this.updateUnreadMessageCount();
    },
    
    // Render activity feed
    renderActivityFeed: function() {
        const activityFeedContainer = document.getElementById('activityFeed');
        if (!activityFeedContainer) return;
        
        if (this.activityFeed.length === 0) {
            activityFeedContainer.innerHTML = '<p class="empty-state">No activity yet</p>';
            return;
        }
        
        let html = '';
        let lastDate = null;
        
        this.activityFeed.forEach(activity => {
            const date = new Date(activity.date);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            let dateHeader = '';
            const activityDate = date.toLocaleDateString();
            const todayDate = today.toLocaleDateString();
            const yesterdayDate = yesterday.toLocaleDateString();
            
            if (lastDate !== activityDate) {
                if (activityDate === todayDate) {
                    dateHeader = '<div class="activity-date-header">Today</div>';
                } else if (activityDate === yesterdayDate) {
                    dateHeader = '<div class="activity-date-header">Yesterday</div>';
                } else {
                    dateHeader = `<div class="activity-date-header">${activityDate}</div>`;
                }
                lastDate = activityDate;
            }
            
            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            let activityIcon = '';
            
            switch (activity.type) {
                case 'achievement':
                    activityIcon = '<i class="fas fa-trophy"></i>';
                    break;
                case 'highscore':
                    activityIcon = '<i class="fas fa-medal"></i>';
                    break;
                case 'game':
                    activityIcon = '<i class="fas fa-gamepad"></i>';
                    break;
                case 'friend':
                    activityIcon = '<i class="fas fa-user-friends"></i>';
                    break;
                default:
                    activityIcon = '<i class="fas fa-star"></i>';
            }
            
            html += dateHeader + `
            <div class="activity-card" data-activity-id="${activity.id}">
                <div class="activity-avatar">
                    <img src="${activity.avatar}" alt="${activity.username}">
                </div>
                <div class="activity-content">
                    <div class="activity-header">
                        <span class="activity-username">${activity.username}</span>
                        <span class="activity-icon">${activityIcon}</span>
                    </div>
                    <p class="activity-text">${activity.content}</p>
                    <span class="activity-time">${formattedTime}</span>
                </div>
            </div>
            `;
        });
        
        activityFeedContainer.innerHTML = html;
    },
    
    // Update unread message count
    updateUnreadMessageCount: function() {
        const unreadCount = this.getUnreadMessageCount();
        const messagesBadge = document.getElementById('messagesBadge');
        
        if (messagesBadge) {
            if (unreadCount > 0) {
                messagesBadge.textContent = unreadCount;
                messagesBadge.style.display = 'flex';
            } else {
                messagesBadge.style.display = 'none';
            }
        }
    },
    
    // Setup notifications
    setupNotifications: function() {
        // Check for new friend requests
        if (this.friendRequests.received.length > 0) {
            LunaXNotifications.show(`You have ${this.friendRequests.received.length} pending friend request${this.friendRequests.received.length > 1 ? 's' : ''}`, 'info');
        }
        
        // Check for unread messages
        const unreadCount = this.getUnreadMessageCount();
        if (unreadCount > 0) {
            LunaXNotifications.show(`You have ${unreadCount} unread message${unreadCount > 1 ? 's' : ''}`, 'info');
        }
        
        // Check for game invitations
        if (this.invitations.received.length > 0) {
            LunaXNotifications.show(`You have ${this.invitations.received.length} game invitation${this.invitations.received.length > 1 ? 's' : ''}`, 'info');
        }
    },
    
    // Attach event listeners to friends list
    attachFriendsEventListeners: function() {
        // Message buttons
        const messageButtons = document.querySelectorAll('.message-btn');
        messageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const friendId = button.getAttribute('data-friend-id');
                this.openChatWithFriend(friendId);
            });
        });
        
        // Invite buttons
        const inviteButtons = document.querySelectorAll('.invite-btn');
        inviteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const friendId = button.getAttribute('data-friend-id');
                this.showGameInviteModal(friendId);
            });
        });
        
        // Remove friend buttons
        const removeButtons = document.querySelectorAll('.remove-friend-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const friendId = button.getAttribute('data-friend-id');
                
                // Confirm before removing
                if (confirm('Are you sure you want to remove this friend?')) {
                    this.removeFriend(friendId);
                }
            });
        });
        
        // Friend cards (for opening chat)
        const friendCards = document.querySelectorAll('.friend-card');
        friendCards.forEach(card => {
            card.addEventListener('click', () => {
                const friendId = card.getAttribute('data-friend-id');
                this.openChatWithFriend(friendId);
            });
        });
    },
    
    // Attach event listeners to friend requests
    attachFriendRequestsEventListeners: function() {
        // Accept buttons
        const acceptButtons = document.querySelectorAll('.accept-request-btn');
        acceptButtons.forEach(button => {
            button.addEventListener('click', () => {
                const requestId = button.getAttribute('data-request-id');
                this.acceptFriendRequest(requestId);
            });
        });
        
        // Decline buttons
        const declineButtons = document.querySelectorAll('.decline-request-btn');
        declineButtons.forEach(button => {
            button.addEventListener('click', () => {
                const requestId = button.getAttribute('data-request-id');
                this.declineFriendRequest(requestId);
            });
        });
    },
    
    // Open chat with friend
    openChatWithFriend: function(friendId) {
        // Show chat section
        const chatSection = document.getElementById('chatSection');
        if (chatSection) {
            chatSection.classList.add('active');
        }
        
        // Render messages
        this.renderMessages(friendId);
        
        // Focus message input
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.focus();
            
            // Store active friend ID in data attribute
            messageInput.setAttribute('data-friend-id', friendId);
        }
    },
    
    // Show game invite modal
    showGameInviteModal: function(friendId) {
        // Find friend
        const friend = this.friends.find(friend => friend.id === friendId);
        if (!friend) return;
        
        // Create modal if it doesn't exist
        let inviteModal = document.getElementById('gameInviteModal');
        if (!inviteModal) {
            inviteModal = document.createElement('div');
            inviteModal.id = 'gameInviteModal';
            inviteModal.className = 'modal-overlay';
            document.body.appendChild(inviteModal);
        }
        
        // Populate modal
        inviteModal.innerHTML = `
        <div class="modal game-invite-modal">
            <div class="modal-header">
                <h2>Invite ${friend.username} to Play</h2>
                <button class="close-modal-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-content">
                <p>Select a game to invite ${friend.username} to play:</p>
                <div class="game-invite-list">
                    <div class="game-invite-item" data-game-id="game1" data-game-name="Cyber Assault">
                        <div class="game-invite-thumbnail" style="background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')"></div>
                        <div class="game-invite-info">
                            <h3>Cyber Assault</h3>
                            <p>Fast-paced cyberpunk shooter with neon aesthetics</p>
                        </div>
                    </div>
                    <div class="game-invite-item" data-game-id="game3" data-game-name="Matrix Runner">
                        <div class="game-invite-thumbnail" style="background-image: url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')"></div>
                        <div class="game-invite-info">
                            <h3>Matrix Runner</h3>
                            <p>Run, jump, and slide through procedurally generated digital landscapes</p>
                        </div>
                    </div>
                    <div class="game-invite-item" data-game-id="game7" data-game-name="Neon Fighters">
                        <div class="game-invite-thumbnail" style="background-image: url('https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80')"></div>
                        <div class="game-invite-info">
                            <h3>Neon Fighters</h3>
                            <p>Battle against other players in this fast-paced fighting game</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        // Show modal
        inviteModal.classList.add('active');
        
        // Close button
        const closeBtn = inviteModal.querySelector('.close-modal-btn');
        closeBtn.addEventListener('click', () => {
            inviteModal.classList.remove('active');
        });
        
        // Game items
        const gameItems = inviteModal.querySelectorAll('.game-invite-item');
        gameItems.forEach(item => {
            item.addEventListener('click', () => {
                const gameId = item.getAttribute('data-game-id');
                const gameName = item.getAttribute('data-game-name');
                
                this.sendGameInvitation(friendId, gameId, gameName);
                inviteModal.classList.remove('active');
            });
        });
    },
    
    // Setup event listeners
    setupEventListeners: function() {
        // Send friend request form
        const friendRequestForm = document.getElementById('friendRequestForm');
        if (friendRequestForm) {
            friendRequestForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const usernameInput = document.getElementById('friendUsername');
                if (usernameInput) {
                    const username = usernameInput.value.trim();
                    if (username) {
                        const success = this.sendFriendRequest(username);
                        if (success) {
                            usernameInput.value = '';
                        }
                    }
                }
            });
        }
        
        // Send message form
        const messageForm = document.getElementById('messageForm');
        if (messageForm) {
            messageForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const messageInput = document.getElementById('messageInput');
                if (messageInput) {
                    const text = messageInput.value.trim();
                    const friendId = messageInput.getAttribute('data-friend-id');
                    
                    if (text && friendId) {
                        const success = this.sendMessage(friendId, text);
                        if (success) {
                            messageInput.value = '';
                        }
                    }
                }
            });
        }
        
        // Close chat button
        const closeChatBtn = document.getElementById('closeChatBtn');
        if (closeChatBtn) {
            closeChatBtn.addEventListener('click', () => {
                const chatSection = document.getElementById('chatSection');
                if (chatSection) {
                    chatSection.classList.remove('active');
                }
            });
        }
        
        // Friend requests tab
        const friendRequestsTab = document.getElementById('friendRequestsTab');
        if (friendRequestsTab) {
            friendRequestsTab.addEventListener('click', () => {
                // Show friend requests section
                document.getElementById('friendRequestsSection').classList.add('active');
                document.getElementById('friendsSection').classList.remove('active');
                document.getElementById('activitySection').classList.remove('active');
                
                // Update active tab
                friendRequestsTab.classList.add('active');
                document.getElementById('friendsTab').classList.remove('active');
                document.getElementById('activityTab').classList.remove('active');
            });
        }
        
        // Friends tab
        const friendsTab = document.getElementById('friendsTab');
        if (friendsTab) {
            friendsTab.addEventListener('click', () => {
                // Show friends section
                document.getElementById('friendsSection').classList.add('active');
                document.getElementById('friendRequestsSection').classList.remove('active');
                document.getElementById('activitySection').classList.remove('active');
                
                // Update active tab
                friendsTab.classList.add('active');
                document.getElementById('friendRequestsTab').classList.remove('active');
                document.getElementById('activityTab').classList.remove('active');
            });
        }
        
        // Activity tab
        const activityTab = document.getElementById('activityTab');
        if (activityTab) {
            activityTab.addEventListener('click', () => {
                // Show activity section
                document.getElementById('activitySection').classList.add('active');
                document.getElementById('friendsSection').classList.remove('active');
                document.getElementById('friendRequestsSection').classList.remove('active');
                
                // Update active tab
                activityTab.classList.add('active');
                document.getElementById('friendsTab').classList.remove('active');
                document.getElementById('friendRequestsTab').classList.remove('active');
            });
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize social features if user is logged in
    if (LunaXAuth && LunaXAuth.isLoggedIn) {
        LunaXSocial.initialize();
    }
    
    // Listen for login/logout events
    document.addEventListener('lunaX:login', function() {
        LunaXSocial.initialize();
    });
    
    document.addEventListener('lunaX:logout', function() {
        // Hide social sections when logged out
        const chatSection = document.getElementById('chatSection');
        if (chatSection) {
            chatSection.classList.remove('active');
        }
    });
});
