// Function to apply theme settings
function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    // Update button text across all toggle buttons on the page
    const themeBtns = document.querySelectorAll('.theme-toggle');
    themeBtns.forEach(btn => {
        btn.innerHTML = (theme === 'light') ? '☀️ Light' : '🌙 Dark';
    });
}

// Function to switch theme when clicking the button
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// Run immediately when page loads
(function init() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
})();
