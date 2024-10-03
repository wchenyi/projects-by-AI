let currentCategory = 'home';

document.addEventListener('DOMContentLoaded', function() {
    loadPageContent('home');
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const page = icon.dataset.page;
            loadPageContent(page);
            updateActiveIcon(icon);
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', handleSearch);

    const logo = document.querySelector('.sidebar-logo');
    logo.addEventListener('click', () => loadPageContent('home'));
    
    // 添加移动端导航
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <a href="#" data-page="home"><i class="fas fa-home"></i></a>
        <a href="#" data-page="android"><i class="fab fa-android"></i></a>
        <a href="#" data-page="apple"><i class="fab fa-apple"></i></a>
        <a href="#" data-page="windows"><i class="fab fa-windows"></i></a>
        <a href="#" data-page="linux"><i class="fab fa-linux"></i></a>
        <a href="#" data-page="other"><i class="fas fa-ellipsis-h"></i></a>
    `;
    document.body.appendChild(mobileNav);

    // 为移动端导航添加事件监听
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            loadPageContent(page);
            updateActiveIcon(link);
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

function updateActiveIcon(activeIcon) {
    document.querySelectorAll('.sidebar-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    activeIcon.classList.add('active');
}

function loadPageContent(page) {
    currentCategory = page;
    const appContent = document.getElementById('appContent');
    appContent.innerHTML = '';

    loadBanners();

    switch(page) {
        case 'home':
            loadHomePage();
            break;
        case 'android':
            loadApps(androidApps, 'Android 应用');
            break;
        case 'apple':
            loadApps(appleApps, 'Apple 应用');
            break;
        case 'windows':
            loadApps(windowsApps, 'Windows 应用');
            break;
        case 'linux':
            loadApps(linuxApps, 'Linux 应用');
            break;
        case 'other':
            loadApps(otherApps, '其他应用');
            break;
    }
}

function loadHomePage() {
    const appContent = document.getElementById('appContent');
    appContent.innerHTML = `
        <div class="home-content">
            <h1>必看</h1>
            <ul>
                <li>出于学习与交流目的设立本站，其他不当行为与本站无关‼️</li>
                <li>本站不提供翻墙建议，不提供使用方法，仅仅根据市面上已有的翻墙工具提供技术性探讨；本站更多层面上是个人使用设置的云端存储机能，如被他人知晓并浏览本站，请您自觉遵守我国相关法律规定</li>
                <li>🈲️利用本站提供的信息进行任何危害国家安全、集体安全、他人人身、财产等合法权益的行为；如果您正在实施或者已经实施了相关的行为，请您立即停止并消除损害</li>
                <li>严禁在国内传播并用于非法活动！！！</li>
            </ul>

            <h2>相关法条列举</h2>
            <p>《计算机信息网络国际互联网安全保护管理办法》 第5条规定，任何单位和个人不得利用国际互联网制作、复制、查阅和传播下列信息：</p>
            <ul>
                <li>（一）煽动抗拒、破坏宪法和法律、行政法规实施的；</li>
                <li>（二）煽动颠覆国家政权，推翻社会主义制度的；</li>
                <li>（三）煽动分裂国家、破坏国家统一的；</li>
                <li>（四）煽动民族仇恨、民族歧视，破坏民族团结的；</li>
                <li>（五）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；</li>
                <li>（六）宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；</li>
                <li>（七）公然侮辱他人或者捏造事实诽谤他人的；</li>
                <li>（八）损害国家机关信誉的；</li>
                <li>（九）其他违反宪法和法律、行政法规的。</li>
            </ul>
            <p>第20条规定：违反法律、行政法规，有本办法第五条、第六条所列行为之一的，由公安机关给予警告，有违法所得的，没收违法所得，对个人可以并处5000元以下的罚款，对单位可以并处1.5万元以下的罚款。构成违反治安管理行为的，依照治安管理处罚条例的规定处罚；构成犯罪的，依法追究刑事责任。</p>
            <p>参考文献：<a href="https://gfw.report/publications/usenixsecurity23/zh/" target="_blank">https://gfw.report/publications/usenixsecurity23/zh/</a></p>
            <p>WireGuard：<a href="https://www.wireguard.com/" target="_blank">https://www.wireguard.com/</a></p>

            <h2>⭐️简介</h2>
            <ul>
                <li>尽可能涵盖各操作系统的翻墙软件技术信息交流，探讨网络安全和网络技术等相关知识，包括<strong>Windows、IOS、Android、Mac OS、Linux、浏览器插件</strong>等</li>
                <li><strong>参考资料：</strong>
                    <ul>
                        <li>翻墙原理分析：<a href="https://www.v2ray.com/awesome/tools.html" target="_blank">https://www.v2ray.com/awesome/tools.html</a></li>
                        <li>v2Ray全系客户端：<a href="https://itlanyan.com/v2ray-clients-download/" target="_blank">https://itlanyan.com/v2ray-clients-download/</a></li>
                        <li>Project V 神一样的工具们：<a href="https://www.v2ray.com/awesome/tools.html" target="_blank">https://www.v2ray.com/awesome/tools.html</a></li>
                    </ul>
                </li>
                <li>免流订阅伪装混淆技术探讨，相关工具网站分享、其他作品分享等</li>
                <li>🎃 本站基于Github Pages功能中的Jekyll模板生成，内容上以全平台覆盖为主。</li>
            </ul>
        </div>

        <div class="app-section">
            <h2>热门最畅销应用</h2>
            <div class="app-grid normal">
                ${getAllApps().filter(app => app.size === 'normal').slice(0, 8).map(app => createAppCard(app, 'normal')).join('')}
            </div>
        </div>
        <div class="app-section">
            <h2>Essential apps</h2>
            <div class="app-grid small">
                ${getAllApps().filter(app => app.size === 'small').slice(0, 16).map(app => createAppCard(app, 'small')).join('')}
            </div>
        </div>
        <div class="recent-updates">
            <h2>最近更新</h2>
            <ul>
                ${getRecentUpdates().map(update => `<li>${update}</li>`).join('')}
            </ul>
        </div>
    `;
}

function loadApps(apps, categoryTitle) {
    const appContent = document.getElementById('appContent');
    let normalApps = apps.filter(app => app.size === 'normal');
    let smallApps = apps.filter(app => app.size === 'small');

    appContent.innerHTML = `
        <div class="app-section">
            <h2>热门最畅销应用</h2>
            <div class="app-grid normal">
                ${normalApps.map(app => createAppCard(app, 'normal')).join('')}
            </div>
        </div>
        <div class="app-section">
            <h2>Essential apps</h2>
            <div class="app-grid small">
                ${smallApps.map(app => createAppCard(app, 'small')).join('')}
            </div>
        </div>
    `;
}

function createAppCard(app, size) {
    return `
        <div class="app-card ${size}" onclick="expandCard(this, ${JSON.stringify(app)})">
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <div class="app-info">
                <h3 class="app-name">${app.name}</h3>
                ${size === 'normal' ? `<p class="app-description">${app.description}</p>` : ''}
                <div class="app-links">
                    <a href="${app.website}" class="app-website" target="_blank" onclick="event.stopPropagation()">官网</a>
                    <a href="${app.downloadLink}" class="download-link" target="_blank" onclick="event.stopPropagation()">下载</a>
                </div>
            </div>
            <div class="expanded-content">
                <p>${app.longDescription || app.description}</p>
                <p>版本: ${app.version}</p>
                <p>开发者: ${app.developer}</p>
            </div>
        </div>
    `;
}

function expandCard(card, app) {
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        card.style.transform = '';
        card.style.zIndex = '1';
    } else {
        const rect = card.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        card.style.top = `${rect.top + scrollTop}px`;
        card.style.left = `${rect.left}px`;
        card.classList.add('expanded');
        card.style.transform = 'scale(1.1)';
        card.style.zIndex = '1000';
    }
}

function getAllApps() {
    return [...androidApps, ...appleApps, ...windowsApps, ...linuxApps, ...otherApps];
}

function loadBanners() {
    const banners = [
        { image: 'images/banner1.jpg', title: 'v2ray' },
        { image: 'images/banner2.jpg', title: 'clash' },
        { image: 'images/banner3.jpg', title: 'shadowrocket' },
    ];

    const bannerScroll = document.querySelector('.banner-scroll');
    bannerScroll.innerHTML = '';
    banners.forEach((banner, index) => {
        const bannerItem = document.createElement('div');
        bannerItem.className = `banner-item ${index === 0 ? 'active' : ''}`;
        bannerItem.style.backgroundImage = `url(${banner.image})`;
        bannerItem.innerHTML = `<h2>${banner.title}</h2>`;
        bannerScroll.appendChild(bannerItem);
    });

    // 自动轮播
    let currentBanner = 0;
    setInterval(() => {
        const bannerItems = document.querySelectorAll('.banner-item');
        bannerItems[currentBanner].classList.remove('active');
        currentBanner = (currentBanner + 1) % bannerItems.length;
        bannerItems[currentBanner].classList.add('active');
    }, 6000); // 每6秒切换一次
}

function handleSearch() {
    const searchTerm = this.value.toLowerCase();
    const allApps = getAllApps();
    const filteredApps = allApps.filter(app => 
        app.name.toLowerCase().includes(searchTerm) || 
        app.description.toLowerCase().includes(searchTerm)
    );
    
    const appContent = document.getElementById('appContent');
    appContent.innerHTML = `
        <div class="app-section">
            <h2>搜索结果</h2>
            <div class="app-grid normal">
                ${filteredApps.map(app => createAppCard(app, app.size)).join('')}
            </div>
        </div>
    `;
}

function getRecentUpdates() {
    // 这里可以从服务器获取最近更新的内容，或者手动维护一个更新列表
    return [
        '2023-06-01: 添加了新的Android应用',
        '2023-05-28: 更新了Windows应用列表',
        '2023-05-25: 修复了一些已知问题',
        '2023-05-20: 增加了新的Linux工具',
        '2023-05-15: 优化了网站性能'
    ];
}

// 初始化页面
loadPageContent('home');