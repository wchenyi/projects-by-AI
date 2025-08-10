/**
 * 应用商店主程序入口
 * 负责初始化所有模块和功能
 */

/**
 * 应用程序初始化
 */
function initApp() {
    console.log('=== 应用商店初始化开始 ===');
    
    try {
        // 初始化分类切换功能
        AppLoader.initCategorySwitch();
        
        // 加载默认分类（Windows）
        AppLoader.loadCategoryApps('win');
        
        // 可选：预加载其他分类（提升用户体验）
        // setTimeout(() => {
        //     AppLoader.preloadAllCategories();
        // }, 2000);
        
        console.log('应用商店初始化完成');
        
    } catch (error) {
        console.error('应用商店初始化失败:', error);
    }
}

/**
 * 页面完全加载后的回调
 */
function onPageReady() {
    // 检查所有必要的元素是否存在
    const requiredElements = [
        'sidebar',
        'app-grid',
        'loading-indicator',
        'empty-state',
        'modalOverlay'
    ];
    
    let missingElements = [];
    requiredElements.forEach(id => {
        if (!document.getElementById(id)) {
            missingElements.push(id);
        }
    });
    
    if (missingElements.length > 0) {
        console.error('缺少必要的页面元素:', missingElements);
        return;
    }
    
    // 初始化应用
    initApp();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', onPageReady);

// 页面卸载前的清理工作
window.addEventListener('beforeunload', function() {
    // 这里可以添加数据保存、统计上报等清理工作
    console.log('页面即将卸载');
});