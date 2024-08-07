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
    //图片加载：{ id: 1, title: "赞助页面", category: "Claude", image: "/api/placeholder/300/200", description: "一个全响应式的现代网站设计。" },
    { id: 1, title: "赞助页面", category: "Claude", description: "一个全响应式+动态渐变背景的多平台复合赞助页面。", link: "https://wangcy.cam" },
    { id: 2, title: "二维码生成页面", category: "Claude", description: "美观简洁的二维码生成页面。" },
    { id: 3, title: "二维码生成页面-改进版", category: "Claude", description: "增加了深色模式和二维码类型选择." },
    { id: 4, title: "产品展示页面", category: "Claude", description: "你现在看到的页面，还要另外3️⃣种风格。" },
    { id: 5, title: "起始页生成", category: "GPT", description: "超级简约的起始页，绝对没有多余元素。" },
    { id: 6, title: "道家小六壬起卦", category: "Claude", description: "一个我出运算逻辑，Ai写代码的网站。" }
];

// 渲染项目,在“ projectElement.innerHTML = `”字段下添加“<img src="${project.image}" alt="${project.title}">”可显示图片
function renderProjects(category = 'all') {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';

    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-card', 'glass-effect');
        projectElement.innerHTML = `            
            <div class="content">
                <h3>${project.title}</h3>
                <span class="category">${project.category}</span>
                <p>${project.description}</p>
                <p>${project.link}</p>
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

// 导航栏动效
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有链接的 active 类
        document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
        
        // 为当前点击的链接添加 active 类
        this.classList.add('active');
        
        // 平滑滚动到目标位置
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 滚动时更新活动链接
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
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