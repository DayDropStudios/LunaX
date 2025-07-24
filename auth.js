
// LunaX Authentication System
const LunaXAuth = {
    // User state
    currentUser: null,
    isLoggedIn: false,
    
    // Auth UI Controller
    authUIController: {
        // Show auth modal
        showAuthModal: function(mode = 'login') {
            document.getElementById('modalOverlay').classList.add('active');
            document.getElementById('authModal').classList.add('active');
            
            if (mode === 'login') {
                document.getElementById('loginTab').classList.add('active');
                document.getElementById('registerTab').classList.remove('active');
                document.getElementById('loginForm').style.display = 'flex';
                document.getElementById('registerForm').style.display = 'none';
            } else {
                document.getElementById('registerTab').classList.add('active');
                document.getElementById('loginTab').classList.remove('active');
                document.getElementById('registerForm').style.display = 'flex';
                document.getElementById('loginForm').style.display = 'none';
            }
        },
        
        // Hide auth modal
        hideAuthModal: function() {
            document.getElementById('modalOverlay').classList.remove('active');
            document.getElementById('authModal').classList.remove('active');
        },
        
        // Show message in auth forms
        showMessage: function(formId, message, type) {
            const messageElement = document.getElementById(formId + 'Message');
            messageElement.textContent = message;
            messageElement.className = 'auth-message ' + type;
            messageElement.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(function() {
                messageElement.style.display = 'none';
            }, 5000);
        },
        
        // Update UI based on auth state
        updateUIForAuthState: function(user) {
            const loggedInElements = document.querySelectorAll('.logged-in-only');
            const loggedOutElements = document.querySelectorAll('.logged-out-only');
            
            if (user) {
                // User is logged in
                loggedInElements.forEach(el => el.style.display = 'block');
                loggedOutElements.forEach(el => el.style.display = 'none');
                
                // Update user info
                document.getElementById('userDisplayName').textContent = user.displayName || 'User';
                document.getElementById('userAvatar').src = user.photoURL || 'https://api.dicebear.com/6.x/pixel-art/svg?seed=' + user.uid;
                
                // Update profile dropdown
                document.querySelector('.profile-name').textContent = user.displayName || 'User';
                document.querySelector('.profile-email').textContent = user.email || '';
                document.querySelector('.logout').innerHTML = '<a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>';
                
                // Add logout event listener
                document.getElementById('logoutBtn').addEventListener('click', function(e) {
                    e.preventDefault();
                    LunaXAuth.signOut();
                });
            } else {
                // User is logged out
                loggedInElements.forEach(el => el.style.display = 'none');
                loggedOutElements.forEach(el => el.style.display = 'flex');
                
                // Reset profile dropdown
                document.querySelector('.profile-name').textContent = 'Guest User';
                document.querySelector('.profile-email').textContent = 'Sign in to save progress';
                document.querySelector('.logout').innerHTML = '<a href="#" id="signInBtn"><i class="fas fa-sign-in-alt"></i> Sign In</a>';
                
                // Add sign in event listener
                document.getElementById('signInBtn').addEventListener('click', function(e) {
                    e.preventDefault();
                    LunaXAuth.authUIController.showAuthModal('login');
                });
            }
        }
    },
    
    // Initialize auth system
    init: function() {
        // Set up form submission handlers
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            LunaXAuth.signIn(
                document.getElementById('loginUsername').value,
                document.getElementById('loginPassword').value
            );
        });
        
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            if (password !== confirmPassword) {
                LunaXAuth.authUIController.showMessage('register', 'Passwords do not match', 'error');
                return;
            }
            
            if (!agreeTerms) {
                LunaXAuth.authUIController.showMessage('register', 'You must agree to the Terms of Service', 'error');
                return;
            }
            
            LunaXAuth.register(username, email, password);
        });
        
        // For demo purposes, simulate auth state
        this.authUIController.updateUIForAuthState(null);
    },
    
    // Sign in function
    signIn: function(username, password) {
        // This is a mock implementation
        // In a real app, this would call your authentication API
        
        if (username && password) {
            // Simulate API call delay
            setTimeout(() => {
                // Mock successful login
                const user = {
                    uid: 'user123',
                    displayName: username,
                    email: username + '@example.com',
                    photoURL: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=' + username
                };
                
                this.currentUser = user;
                this.isLoggedIn = true;
                this.authUIController.updateUIForAuthState(user);
                this.authUIController.hideAuthModal();
                
                // Show success notification
                showNotification('Welcome back, ' + username + '!');
                
            }, 1000);
            
            // Show loading message
            this.authUIController.showMessage('login', 'Signing in...', 'info');
        } else {
            this.authUIController.showMessage('login', 'Please enter username and password', 'error');
        }
    },
    
    // Register function
    register: function(username, email, password) {
        // This is a mock implementation
        // In a real app, this would call your registration API
        
        if (username && email && password) {
            // Simulate API call delay
            setTimeout(() => {
                // Mock successful registration
                const user = {
                    uid: 'user' + Math.floor(Math.random() * 1000),
                    displayName: username,
                    email: email,
                    photoURL: 'https://api.dicebear.com/6.x/pixel-art/svg?seed=' + username
                };
                
                this.currentUser = user;
                this.isLoggedIn = true;
                this.authUIController.updateUIForAuthState(user);
                this.authUIController.hideAuthModal();
                
                // Show success notification
                showNotification('Welcome to LunaX, ' + username + '!');
                
            }, 1000);
            
            // Show loading message
            this.authUIController.showMessage('register', 'Creating your account...', 'info');
        } else {
            this.authUIController.showMessage('register', 'Please fill all fields', 'error');
        }
    },
    
    // Sign out function
    signOut: function() {
        // This is a mock implementation
        // In a real app, this would call your sign out API
        
        // Simulate API call delay
        setTimeout(() => {
            this.currentUser = null;
            this.isLoggedIn = false;
            this.authUIController.updateUIForAuthState(null);
            
            // Show success notification
            showNotification('You have been signed out');
            
        }, 500);
    }
};

// Initialize auth system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LunaXAuth.init();
});
