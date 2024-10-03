// 初始化PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
  
  // 切换侧边栏显示
  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('open');
  };
  document.querySelector('.toggle-sidebar').addEventListener('click', toggleSidebar);
  
  // 切换明暗模式
  const toggleDarkmode = () => {
    document.body.classList.toggle('dark');
  };
  document.querySelector('.toggle-darkmode').addEventListener('click', toggleDarkmode);
  
  // 提交搜索表单
  const submitSearch = (event) => {
    event.preventDefault();
    const query = document.querySelector('.search-form input').value;
    // 执行搜索逻辑...
  };
  document.querySelector('.search-form').addEventListener('submit', submitSearch);
  
  // 显示指定分类的应用
  const showApps = (category) => {
    // 获取该分类下的应用数据
    const apps = data[category];
    
    // 生成HTML
    let html = '';
    for (let app of apps) {
      html += `
        <div class="app-card">
          <img src="${app.logo}" alt="${app.name}">
          <h3>${app.name}</h3>
          <p>${app.description}</p>
          <div class="links">
            <a href="${app.website}">官网</a>
            <a href="${app.download}">下载</a>
            ${app.alternateDownloads.map(link => `<a href="${link}">备用下载</a>`).join('')}
          </div>
        </div>
      `;
    }
  
    // 渲染到页面
    document.querySelector('.apps').innerHTML = html;
  };
  
  // 根据导航切换分类
  const navigate = (event) => {
    if (event.target.matches('.sidebar a')) {
      const category = event.target.dataset.category;
      if (category === 'home') {
        showHome();
      } else if (category === 'docs') {
        showDocs();      
      } else {
        showApps(category);
      }
      toggleSidebar();
    }
  };
  document.querySelector('.sidebar').addEventListener('click', navigate);
  
  // 显示主页内容
  const showHome = () => {
    document.querySelector('main').innerHTML = `
      <div class="banner">
        <!-- 主页顶部横向滚动banner -->
      </div>
      <div class="home-content">
        <!-- 在home.js中定义的主页内容 -->
      </div>
    `;
    // 加载主页banner
    loadHomeBanner();
    // 加载主页其他内容
    loadHomeContent();
  };
  
  const showDocs = () => {
    // 加载文档列表
    // ...
  };
  
  const loadHomeBanner = () => {
    // ...
  };
  
  // 显示应用详情弹出层
  const showAppDetails = (app) => {
    // ...
  };
  
  // 页面加载完毕后显示主页内容
  window.addEventListener('DOMContentLoaded', showHome);