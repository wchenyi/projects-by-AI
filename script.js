// 状态管理
let currentView = 'home';
let currentCategory = 'office';
let currentAI = null;
let searchQuery = '';
let darkMode = false;

// DOM 元素
const themeBtn = document.getElementById('themeBtn');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const scrollToTop = document.getElementById('scrollToTop');
const navItems = document.querySelectorAll('.nav-item');

// 主题切换
themeBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = darkMode ? '☀️' : '🌙';
    document.querySelector('meta[name="theme-color"]').content = darkMode ? '#111827' : '#f3f4f6';
});

// 侧边栏切换
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// 搜索功能
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    mobileSearchInput.value = searchQuery;
    renderCurrentView();
});

mobileSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchInput.value = searchQuery;
    renderCurrentView();
});

// 导航
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const view = item.dataset.view;
        const category = item.dataset.category;
        const ai = item.dataset.ai;

        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        if (view === 'home') {
            currentView = 'home';
            renderHome();
        } else if (view === 'category') {
            currentView = 'category';
            currentCategory = category;
            currentAI = null;
            renderCategory();
        } else if (view === 'ai') {
            currentView = 'ai';
            currentAI = ai;
            renderAI();
        }

        // 移动端自动关闭侧边栏
        if (window.innerWidth <= 768) {
            sidebar.classList.add('hidden');
        }
    });
});

// 模态框
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// 返回顶部
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 工具函数
function getTagClass(tag) {
    const tagMap = {
        'ChatGPT': 'tag-chatgpt',
        'Gemini': 'tag-gemini',
        'Claude': 'tag-claude',
        'Grok': 'tag-grok',
        'Perplexity': 'tag-perplexity',
        'Google AI Studio': 'tag-googleaistudio',
        'Copilot': 'tag-copilot',
        'myself': 'tag-myself'
    };
    return tagMap[tag] || '';
}

function filterProjects(category = null, ai = null) {
    let filtered = projects;

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (ai) {
        filtered = filtered.filter(p => p.tags.includes(ai));
    }

    if (searchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    return filtered;
}

function renderProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-icon">${project.icon}</div>
        <div class="project-name">${project.name}</div>
        <div class="project-desc">${project.description}</div>
        <div class="tag-list">
            ${project.tags.slice(0, 2).map(tag => 
                `<span class="tag ${getTagClass(tag)}" data-tag="${tag}">${tag}</span>`
            ).join('')}
            ${project.tags.length > 2 ? `<span class="tag" style="background: rgba(0,0,0,0.1);">+${project.tags.length - 2}</span>` : ''}
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tag') || e.target.textContent.startsWith('+')) {
            openModal(project);
        }
    });

    card.querySelectorAll('.tag[data-tag]').forEach(tagEl => {
        tagEl.addEventListener('click', (e) => {
            e.stopPropagation();
            const tag = e.target.dataset.tag;
            currentView = 'ai';
            currentAI = tag;
            navItems.forEach(nav => {
                nav.classList.remove('active');
                if (nav.dataset.ai === tag) {
                    nav.classList.add('active');
                }
            });
            renderAI();
        });
    });

    return card;
}

function openModal(project) {
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const modalVersions = document.getElementById('modalVersions');

    modalIcon.textContent = project.icon;
    modalTitle.textContent = project.name;
    modalDesc.textContent = project.description;

    modalTags.innerHTML = project.tags.map(tag => 
        `<span class="tag-modal ${getTagClass(tag)}" data-tag="${tag}">${tag}</span>`
    ).join('');

    modalVersions.innerHTML = project.versions.map(version => 
        `<a href="${version.url}" target="_blank" rel="noopener noreferrer" class="version-link">
            <span style="flex: 1;">${version.name}</span>
            <span>→</span>
        </a>`
    ).join('');

    modalTags.querySelectorAll('.tag-modal').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            const tag = tagEl.dataset.tag;
            modal.classList.remove('active');
            currentView = 'ai';
            currentAI = tag;
            navItems.forEach(nav => {
                nav.classList.remove('active');
                if (nav.dataset.ai === tag) {
                    nav.classList.add('active');
                }
            });
            renderAI();
        });
    });

    modal.classList.add('active');
}

function renderHome() {
    document.getElementById('homeView').classList.add('active');
    document.getElementById('categoryView').classList.remove('active');
    document.getElementById('aiView').classList.remove('active');

    // 更新统计
    document.getElementById('statProjects').textContent = projects.length;
}

function renderCategory() {
    document.getElementById('homeView').classList.remove('active');
    document.getElementById('categoryView').classList.add('active');
    document.getElementById('aiView').classList.remove('active');

    const banner = document.getElementById('categoryBanner');
    const container = document.getElementById('categoryProjects');
    const info = categoryInfo[currentCategory];

    banner.style.background = info.color;
    banner.innerHTML = `
        <h2><span class="icon">${info.icon}</span> ${info.name}</h2>
        <p>浏览我在${info.name}领域的项目</p>
    `;

    const filtered = filterProjects(currentCategory, null);
    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>未找到相关项目</p></div>';
    } else {
        filtered.forEach(project => {
            container.appendChild(renderProjectCard(project));
        });
    }
}

function renderAI() {
    document.getElementById('homeView').classList.remove('active');
    document.getElementById('categoryView').classList.remove('active');
    document.getElementById('aiView').classList.add('active');

    const banner = document.getElementById('aiBanner');
    const container = document.getElementById('aiProjects');

    banner.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    const filtered = filterProjects(null, currentAI);
    banner.innerHTML = `
        <h2>使用 ${currentAI} 的项目</h2>
        <p>共有 ${filtered.length} 个项目使用了 ${currentAI}</p>
    `;

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>未找到相关项目</p></div>';
    } else {
        filtered.forEach(project => {
            container.appendChild(renderProjectCard(project));
        });
    }
}

function renderCurrentView() {
    if (currentView === 'home') {
        renderHome();
    } else if (currentView === 'category') {
        renderCategory();
    } else if (currentView === 'ai') {
        renderAI();
    }
}

// 初始化
renderHome();