// Function to apply the saved theme on load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeBtns = document.querySelectorAll('.theme-toggle');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeBtns.forEach(btn => btn.innerHTML = '☀️ Light');
    } else {
        document.body.classList.remove('light-mode');
        themeBtns.forEach(btn => btn.innerHTML = '🌙 Dark');
    }
}

// Function triggered when clicking the theme button
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const themeBtns = document.querySelectorAll('.theme-toggle');

    if (isLight) {
        localStorage.setItem('theme', 'light');
        themeBtns.forEach(btn => btn.innerHTML = '☀️ Light');
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtns.forEach(btn => btn.innerHTML = '🌙 Dark');
    }
}

// Run immediately when page loads
document.addEventListener('DOMContentLoaded', initTheme);
