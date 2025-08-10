/**
 * 应用数据加载器模块
 * 负责从各个分类文件夹加载应用数据
 */

// 应用数据缓存
const AppDataCache = {
    win: null,
    and: null,
    apple: null,
    linux: null,
    other: null
};

// 当前显示的分类
let currentCategory = 'win';

/**
 * 加载指定分类的应用数据
 * @param {string} category 分类名称 (win/and/apple/linux/other)
 */
async function loadCategoryApps(category) {
    showLoadingState();
    
    try {
        // 如果缓存中有数据，直接使用
        if (AppDataCache[category]) {
            displayApps(AppDataCache[category], category);
            return;
        }
        
        // 从对应分类文件夹加载数据
        const response = await fetch(`${category}/apps.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const appsData = await response.json();
        
        // 缓存数据
        AppDataCache[category] = appsData;
        
        // 显示应用
        displayApps(appsData, category);
        
        console.log(`成功加载 ${category} 分类的 ${appsData.length} 个应用`);
        
    } catch (error) {
        console.error(`加载 ${category} 分类应用失败:`, error);
        showErrorState(category);
    }
}

/**
 * 显示应用列表
 * @param {Array} apps 应用数据数组
 * @param {string} category 分类名称
 */
function displayApps(apps, category) {
    const appGrid = document.getElementById('app-grid');
    const loadingIndicator = document.getElementById('loading-indicator');
    const emptyState = document.getElementById('empty-state');
    
    // 隐藏加载状态
    loadingIndicator.style.display = 'none';
    
    if (!apps || apps.length === 0) {
        // 显示空状态
        appGrid.innerHTML = '';
        emptyState.style.display = 'flex';
        return;
    }
    
    // 隐藏空状态
    emptyState.style.display = 'none';
    
    // 生成应用卡片HTML
    const appsHTML = apps.map((app, index) => createAppCardHTML(app, index)).join('');
    
    // 更新网格内容
    appGrid.innerHTML = appsHTML;
    
    // 为应用卡片添加点击事件
    addAppCardClickEvents(apps);
}

/**
 * 创建应用卡片HTML
 * @param {Object} app 应用数据
 * @param {number} index 索引
 */
function createAppCardHTML(app, index) {
    // 根据索引确定卡片大小（第一个应用使用大卡片）
    const cardSize = index === 0 ? 'large' : 'medium';
    
    // 处理应用图标
    const iconHTML = app.icon_url 
        ? `<img src="${app.icon_url}" alt="${app.name}图标" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <i class="fas fa-cube" style="display: none; font-size: ${cardSize === 'large' ? '48px' : '32px'}; color: white;"></i>`
        : `<i class="fas fa-cube" style="font-size: ${cardSize === 'large' ? '48px' : '32px'}; color: white;"></i>`;
    
    // 生成星级评分
    const starsHTML = generateStarsHTML(app.rating);
    
    return `
        <div class="app-card ${cardSize}" data-app-index="${index}">
            <div class="app-icon">
                ${iconHTML}
            </div>
            <div class="app-name">${app.name}</div>
            <div class="app-category">${app.category}</div>
            <div class="app-description">${app.description}</div>
            <div class="app-rating">
                <div class="stars">${starsHTML}</div>
                <span>${app.rating}</span>
            </div>
            <button class="download-btn">立即下载</button>
        </div>
    `;
}

/**
 * 生成星级评分HTML
 * @param {number} rating 评分
 */
function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // 添加空星星到5星
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

/**
 * 为应用卡片添加点击事件
 * @param {Array} apps 应用数据数组
 */
function addAppCardClickEvents(apps) {
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
        card.addEventListener('click', function() {
            const appIndex = parseInt(this.getAttribute('data-app-index'));
            const appData = apps[appIndex];
            
            if (appData) {
                openModal(appData);
            }
        });
    });
}

/**
 * 显示加载状态
 */
function showLoadingState() {
    const appGrid = document.getElementById('app-grid');
    const loadingIndicator = document.getElementById('loading-indicator');
    const emptyState = document.getElementById('empty-state');
    
    appGrid.innerHTML = '';
    loadingIndicator.style.display = 'flex';
    emptyState.style.display = 'none';
}

/**
 * 显示错误状态
 * @param {string} category 分类名称
 */
function showErrorState(category) {
    const appGrid = document.getElementById('app-grid');
    const loadingIndicator = document.getElementById('loading-indicator');
    const emptyState = document.getElementById('empty-state');
    
    loadingIndicator.style.display = 'none';
    emptyState.style.display = 'flex';
    
    // 自定义错误状态内容
    emptyState.innerHTML = `
        <i class="fas fa-exclamation-triangle"></i>
        <h3>加载失败</h3>
        <p>无法加载 ${getCategoryDisplayName(category)} 分类的应用数据</p>
        <button onclick="loadCategoryApps('${category}')" style="
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            margin-top: 15px;
        ">重新加载</button>
    `;
}

/**
 * 获取分类显示名称
 * @param {string} category 分类代码
 */
function getCategoryDisplayName(category) {
    const categoryNames = {
        'win': 'PC端 (Windows)',
        'and': '安卓端',
        'apple': '苹果端',
        'linux': 'Linux',
        'other': '其他'
    };
    
    return categoryNames[category] || category;
}

/**
 * 切换分类
 * @param {string} category 新的分类
 */
function switchCategory(category) {
    if (currentCategory === category) {
        return; // 相同分类不需要切换
    }
    
    currentCategory = category;
    
    // 更新标题
    const titleElement = document.getElementById('current-category-title');
    if (titleElement) {
        titleElement.textContent = getCategoryDisplayName(category);
    }
    
    // 更新侧边栏active状态
    updateSidebarActiveState(category);
    
    // 加载新分类的应用
    loadCategoryApps(category);
    
    console.log(`切换到分类: ${category}`);
}

/**
 * 更新侧边栏激活状态
 * @param {string} category 当前分类
 */
function updateSidebarActiveState(category) {
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 初始化分类切换事件
 */
function initCategorySwitch() {
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            switchCategory(category);
            
            // 移动端关闭菜单
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
}

/**
 * 预加载所有分类数据（可选优化）
 */
async function preloadAllCategories() {
    const categories = ['win', 'and', 'apple', 'linux', 'other'];
    
    for (const category of categories) {
        if (category !== currentCategory) {
            try {
                const response = await fetch(`${category}/apps.json`);
                if (response.ok) {
                    const appsData = await response.json();
                    AppDataCache[category] = appsData;
                    console.log(`预加载 ${category} 分类完成`);
                }
            } catch (error) {
                console.log(`预加载 ${category} 分类失败:`, error);
            }
        }
    }
}

/**
 * 搜索应用功能
 * @param {string} keyword 搜索关键词
 */
function searchApps(keyword) {
    if (!keyword.trim()) {
        // 空搜索，显示当前分类所有应用
        if (AppDataCache[currentCategory]) {
            displayApps(AppDataCache[currentCategory], currentCategory);
        }
        return;
    }
    
    const currentApps = AppDataCache[currentCategory] || [];
    const filteredApps = currentApps.filter(app => 
        app.name.toLowerCase().includes(keyword.toLowerCase()) ||
        app.category.toLowerCase().includes(keyword.toLowerCase()) ||
        app.description.toLowerCase().includes(keyword.toLowerCase())
    );
    
    displayApps(filteredApps, currentCategory);
    console.log(`搜索 "${keyword}" 找到 ${filteredApps.length} 个结果`);
}

// 导出主要函数供其他模块使用
window.AppLoader = {
    loadCategoryApps,
    switchCategory,
    searchApps,
    preloadAllCategories,
    initCategorySwitch
};