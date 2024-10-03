document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.getElementById('main-content');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Sidebar toggle
  sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('expanded');
  });

  // Dark mode toggle
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = darkModeToggle.querySelector('i');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
  });

  // Navigation
  const navLinks = document.querySelectorAll('.sidebar-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href').substring(1);
          loadContent(href);
      });
  });

  // Load initial content
  loadContent('home');
});

function loadContent(page) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Clear existing content

  switch (page) {
      case 'home':
          mainContent.innerHTML = '<h1>欢迎来到应用商店</h1><p>这里是主页内容。</p>';
          break;
      case 'android':
      case 'apple':
      case 'windows':
      case 'linux':
      case 'other':
          loadAppPage(page);
          break;
      case 'docs':
          loadDocuments();
          break;
      default:
          mainContent.innerHTML = '<h1>404 Not Found</h1><p>抱歉，找不到该页面。</p>';
  }
}

function loadAppPage(category) {
  const mainContent = document.getElementById('main-content');
  
  // Add banner
  const banner = document.createElement('div');
  banner.className = 'banner';
  mainContent.appendChild(banner);

  // Add page description
  const description = document.createElement('p');
  description.textContent = `这里是 ${category} 类别的应用。`;
  mainContent.appendChild(description);

  // Add app grid
  const appGrid = document.createElement('div');
  appGrid.className = 'app-grid';
  mainContent.appendChild(appGrid);

  // Add sample apps (you should replace this with actual data)
  for (let i = 0; i < 6; i++) {
      appGrid.appendChild(createAppCard(`${category} 应用 ${i + 1}`));
  }
}

function createAppCard(appName) {
  const card = document.createElement('div');
  card.className = 'app-card';
  
  const img = document.createElement('img');
  img.src = '/api/placeholder/64/64'; // Replace with actual app icon
  img.alt = appName;
  
  const title = document.createElement('h3');
  title.textContent = appName;
  
  const description = document.createElement('p');
  description.textContent = '这是应用的简短描述。';
  
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  
  const officialLink = document.createElement('a');
  officialLink.href = '#';
  officialLink.textContent = '官网';
  
  const downloadLink = document.createElement('a');
  downloadLink.href = '#';
  downloadLink.textContent = '下载';
  
  buttons.appendChild(officialLink);
  buttons.appendChild(downloadLink);
  
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(buttons);
  
  card.addEventListener('click', () => showAppDetails(appName));
  
  return card;
}

function loadDocuments() {
  const mainContent = document.getElementById('main-content');
  
  // Sample documents (you should replace this with actual data)
  const documents = [
      { title: '使用指南', author: '张三', date: '2024-03-15', summary: '这篇文档介绍了如何使用我们的应用商店。' },
      { title: '隐私政策', author: '李四', date: '2024-03-10', summary: '关于我们如何保护您的隐私和数据安全的详细说明。' },
      { title: '常见问题', author: '王五', date: '2024-03-05', summary: '解答用户最常见的问题和疑虑。' }
  ];
  
  documents.forEach(doc => {
      const docElement = document.createElement('div');
      docElement.className = 'document';
      
      const title = document.createElement('h2');
      title.textContent = doc.title;
      
      const meta = document.createElement('p');
      meta.className = 'meta';
      meta.textContent = `作者: ${doc.author} | 日期: ${doc.date}`;
      
      const summary = document.createElement('p');
      summary.textContent = doc.summary;
      
      docElement.appendChild(title);
      docElement.appendChild(meta);
      docElement.appendChild(summary);
      
      mainContent.appendChild(docElement);
  });
}

function showAppDetails(appName) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = () => modal.remove();
  
  const title = document.createElement('h2');
  title.textContent = appName;
  
  const description = document.createElement('p');
  description.textContent = '这是应用的详细描述。您可以在这里添加更多关于应用的信息，包括功能、系统要求等。';
  
  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(description);
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}