// 主题切换
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// 检查并设置初始主题
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.dataset.theme = 'dark';
    themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    document.body.dataset.theme = 'light';
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (document.body.dataset.theme === 'dark') {
        document.body.dataset.theme = 'light';
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.dataset.theme = 'dark';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 项目数据
const projects = [
    { id: 1, title: "响应式网站", category: "web", image: "/api/placeholder/300/200", description: "一个全响应式的现代网站设计。" },
    { id: 2, title: "移动应用UI", category: "mobile", image: "/api/placeholder/300/200", description: "直观易用的移动应用用户界面。" },
    { id: 3, title: "品牌标识设计", category: "design", image: "/api/placeholder/300/200", description: "为科技初创公司设计的现代logo。" },
    { id: 4, title: "电子商务平台", category: "web", image: "/api/placeholder/300/200", description: "功能齐全的在线购物网站。" },
    { id: 5, title: "健康追踪App", category: "mobile", image: "/api/placeholder/300/200", description: "帮助用户监控日常健康指标的应用。" },
    { id: 6, title: "产品包装设计", category: "design", image: "/api/placeholder/300/200", description: "环保主题的创新产品包装设计。" }
];

// 渲染项目
function renderProjects(category = 'all') {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';

    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-card', 'glass-effect');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="content">
                <h3>${project.title}</h3>
                <span class="category">${project.category}</span>
                <p>${project.description}</p>
            </div>
        `;
        projectContainer.appendChild(projectElement);
    });
}

// 分类过滤
const categoryButtons = document.querySelectorAll('.category-filter button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(button.dataset.category);
    });
});

// 初始化项目展示
renderProjects();

// 公告系统
const announcements = [
    "欢迎来到我的项目展示网站！",
    "新项目即将发布，敬请期待！",
    "正在寻找新的合作机会，欢迎联系。"
];

const announcementModal = document.getElementById('announcement-modal');
const announcementContent = document.getElementById('announcement-content');
const closeAnnouncementBtn = document.getElementById('close-announcement');

function showAnnouncement() {
    const randomIndex = Math.floor(Math.random() * announcements.length);
    announcementContent.textContent = announcements[randomIndex];
    announcementModal.style.display = 'block';
}

closeAnnouncementBtn.addEventListener('click', () => {
    announcementModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === announcementModal) {
        announcementModal.style.display = 'none';
    }
});

// 页面加载时显示公告
window.addEventListener('load', showAnnouncement);

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});