// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
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
        projectElement.classList.add('project-card');
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

// 初始化
renderProjects();

// 公告系统
const announcements = [
    "欢迎来到我的项目展示网站！",
    "新项目即将发布，敬请期待！",
    "正在寻找新的合作机会，欢迎联系。"
];

function updateAnnouncement() {
    const announcementElement = document.getElementById('announcement-content');
    const randomIndex = Math.floor(Math.random() * announcements.length);
    announcementElement.textContent = announcements[randomIndex];
}

updateAnnouncement();
setInterval(updateAnnouncement, 10000); // 每10秒更新一次公告

// 联系表单处理
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑，比如发送到后端API
    alert('感谢您的留言！我会尽快回复。');
    contactForm.reset();
});