let currentEngine = 'bing';

function setSearchEngine(engine) {
    currentEngine = engine;
    document.querySelectorAll('.search-engine-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-engine="${engine}"]`).classList.add('active');
    
    const root = document.documentElement;
    const colors = {
        'bing': '#008373',
        'baidu': '#2932e1',
        'google': '#ea4335',
        'github': '#24292e',
        'bilibili': '#fb7299',
        'youtube': '#ff0000'
    };
    root.style.setProperty('--accent-color', colors[engine]);
}

function performSearch() {
    const query = encodeURIComponent(document.getElementById('searchBox').value);
    const urls = {
        'bing': `https://www.bing.com/search?q=${query}`,
        'baidu': `https://www.baidu.com/s?wd=${query}`,
        'google': `https://www.google.com/search?q=${query}`,
        'github': `https://github.com/search?q=${query}`,
        'bilibili': `https://search.bilibili.com/all?keyword=${query}`,
        'youtube': `https://www.youtube.com/results?search_query=${query}`
    };
    window.open(urls[currentEngine], '_blank');
}

document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('searchIcon').addEventListener('click', performSearch);

document.querySelectorAll('.search-engine-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        setSearchEngine(this.dataset.engine);
    });
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('fa-moon');
    this.querySelector('i').classList.toggle('fa-sun');
});

// 初始化
setSearchEngine('bing');