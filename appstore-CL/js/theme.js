/**
 * 主题管理模块
 * 负责深色/浅色模式的切换和持久化存储
 */

// 初始化主题
function initTheme() {
    // 从本地存储获取保存的主题设置
    const savedTheme = localStorage.getItem('app-store-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 确定要应用的主题
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    if (theme === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
}

// 切换主题
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (body.getAttribute('data-theme') === 'dark') {
        applyLightTheme();
    } else {
        applyDarkTheme();
    }
}

// 应用深色主题
function applyDarkTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.setAttribute('data-theme', 'dark');
    themeToggle.className = 'fas fa-sun';
    
    // 保存到本地存储
    localStorage.setItem('app-store-theme', 'dark');
    
    console.log('已切换到深色模式');
}

// 应用浅色主题
function applyLightTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.removeAttribute('data-theme');
    themeToggle.className = 'fas fa-moon';
    
    // 保存到本地存储
    localStorage.setItem('app-store-theme', 'light');
    
    console.log('已切换到浅色模式');
}

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // 如果用户没有手动设置过主题，则跟随系统主题
    const savedTheme = localStorage.getItem('app-store-theme');
    if (!savedTheme) {
        if (e.matches) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    }
});

// 页面加载完成后初始化主题
document.addEventListener('DOMContentLoaded', initTheme);