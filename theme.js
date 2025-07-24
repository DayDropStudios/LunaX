
// Theme Management System for LunaX
const LunaXTheme = {
    // Theme settings
    currentTheme: 'dark',
    
    // Initialize theme system
    init: function() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('lunax-theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
        
        // Set up theme toggle button
        document.getElementById('themeToggleBtn').addEventListener('click', () => {
            this.toggleTheme();
        });
    },
    
    // Set theme
    setTheme: function(theme) {
        // Update theme attribute
        document.body.dataset.theme = theme;
        this.currentTheme = theme;
        
        // Save preference
        localStorage.setItem('lunax-theme', theme);
        
        // Update toggle button icon
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        const themeIcon = themeToggleBtn.querySelector('i');
        
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon';
            themeToggleBtn.title = 'Switch to Dark Mode';
        } else {
            themeIcon.className = 'fas fa-sun';
            themeToggleBtn.title = 'Switch to Light Mode';
        }
    },
    
    // Toggle between light and dark themes
    toggleTheme: function() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Show notification
        showNotification(`Switched to ${newTheme} mode`);
    }
};

// Initialize theme system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LunaXTheme.init();
});
