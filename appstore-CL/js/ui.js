/**
 * UI交互管理模块
 * 负责界面交互、动画效果、模态窗口等
 */

// 全局UI状态
const UIState = {
    currentModal: null,
    isMobileMenuOpen: false
};

/**
 * 移动端菜单切换
 */
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.classList.contains('mobile-show');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('mobile-show');
    UIState.isMobileMenuOpen = true;
    
    // 添加遮罩层点击关闭
    document.addEventListener('click', handleMobileMenuOutsideClick);
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('mobile-show');
    UIState.isMobileMenuOpen = false;
    
    // 移除遮罩层点击事件
    document.removeEventListener('click', handleMobileMenuOutsideClick);
}

function handleMobileMenuOutsideClick(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    // 如果点击不在侧边栏和菜单按钮上，则关闭菜单
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMobileMenu();
    }
}

/**
 * 模态窗口管理
 */
function openModal(appData) {
    const modal = document.getElementById('modalOverlay');
    
    // 填充模态窗口内容
    populateModalContent(appData);
    
    // 显示模态窗口
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    UIState.currentModal = appData;
    
    console.log('打开应用详情:', appData.name);
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    UIState.currentModal = null;
    
    console.log('关闭应用详情窗口');
}

function populateModalContent(app) {
    // 获取模态窗口元素
    const modalIconImg = document.getElementById('modalIconImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalStars = document.getElementById('modalStars');
    const modalRating = document.getElementById('modalRating');
    const modalDownloads = document.getElementById('modalDownloads');
    const modalPlatforms = document.getElementById('modalPlatforms');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const officialDownload = document.getElementById('officialDownload');
    const alternateDownload = document.getElementById('alternateDownload');

    // 设置应用图标
    if (app.icon_url) {
        modalIconImg.src = app.icon_url;
        modalIconImg.alt = app.name + '图标';
        modalIconImg.onerror = function() {
            // 图标加载失败时的备用处理
            this.style.display = 'none';
            this.parentElement.innerHTML = `<i class="fas fa-cube" style="font-size: 48px; color: white;"></i>`;
        };
    } else {
        modalIconImg.style.display = 'none';
        modalIconImg.parentElement.innerHTML = `<i class="fas fa-cube" style="font-size: 48px; color: white;"></i>`;
    }

    // 设置基本信息
    modalTitle.textContent = app.name;
    modalCategory.textContent = app.category;
    modalRating.textContent = app.rating;
    modalDownloads.textContent = `${app.downloads} 下载`;

    // 生成星级评分
    const fullStars = Math.floor(app.rating);
    const hasHalfStar = app.rating % 1 !== 0;
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    modalStars.innerHTML = starsHTML;

    // 设置平台标签
    modalPlatforms.innerHTML = app.platforms.map(platform => 
        `<span class="platform-tag">${platform}</span>`
    ).join('');

    // 设置应用描述
    modalDescription.innerHTML = `<p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px; color: var(--text-secondary);">${app.description}</p>`;

    // 设置特色功能
    if (app.features && app.features.length > 0) {
        modalFeatures.innerHTML = app.features.map(feature => 
            `<div class="feature-item">
                <i class="${feature.icon}"></i>
                <h4 style="margin-bottom: 10px; color: var(--text-primary);">${feature.title}</h4>
                <p style="color: var(--text-secondary); font-size: 14px;">${feature.description}</p>
            </div>`
        ).join('');
    }

    // 设置下载链接
    if (app.download_url) {
        officialDownload.onclick = () => handleDownload(app.download_url, app.name);
    }
    
    if (app.alternate_url) {
        alternateDownload.style.display = 'block';
        alternateDownload.onclick = () => handleDownload(app.alternate_url, app.name);
    } else {
        alternateDownload.style.display = 'none';
    }
}

/**
 * 处理下载按钮点击
 */
function handleDownload(url, appName) {
    console.log(`开始下载: ${appName}`);
    
    // 这里可以添加下载统计、用户行为分析等
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        showNotification('下载链接暂未配置', 'warning');
    }
}

/**
 * 显示通知消息
 */
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // 添加通知样式
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: getNotificationColor(type),
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: '3000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        'info': 'info-circle',
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        'info': '#0078d4',
        'success': '#28a745',
        'warning': '#ffc107',
        'error': '#dc3545'
    };
    return colors[type] || '#0078d4';
}

/**
 * 下载按钮加载动画
 */
function addDownloadAnimation() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('download-btn') || 
            e.target.classList.contains('download-btn-primary') || 
            e.target.classList.contains('download-btn-secondary')) {
            
            const btn = e.target;
            const originalText = btn.innerHTML;
            
            // 禁用按钮并显示加载状态
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 下载中...';
            btn.disabled = true;
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> 下载完成';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }, 1000);
            }, 2000);
        }
    });
}

/**
 * 键盘事件处理
 */
function initKeyboardEvents() {
    document.addEventListener('keydown', function(e) {
        // ESC键关闭模态窗口
        if (e.key === 'Escape' && UIState.currentModal) {
            closeModal();
        }
        
        // ESC键关闭移动端菜单
        if (e.key === 'Escape' && UIState.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
}

/**
 * 窗口大小变化处理
 */
function initResizeHandler() {
    window.addEventListener('resize', function() {
        // 桌面端自动关闭移动菜单
        if (window.innerWidth > 768 && UIState.isMobileMenuOpen) {
            closeMobileMenu();
        }
    });
}

/**
 * 平滑滚动
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 初始化所有UI交互
 */
function initUI() {
    addDownloadAnimation();
    initKeyboardEvents();
    initResizeHandler();
    initSmoothScroll();
    
    console.log('UI交互模块初始化完成');
}

// 页面加载完成后初始化UI
document.addEventListener('DOMContentLoaded', initUI);