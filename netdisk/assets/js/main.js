let currentView = 'grid';
let currentPath = '';
let isDarkMode = false;

// 合并所有文件类型处理器
const fileHandlers = {
    ...docsHandler,
    ...musicsHandler,
    ...picturesHandler,
    ...programsHandler
};

// 文件系统结构
const fileSystem = {
    '文档': {
        type: 'folder',
        content: {
            '工作文件.doc': { type: 'file', extension: 'doc', url: 'https://example.com/files/work.doc' },
            '项目报告.pdf': { type: 'file', extension: 'pdf', url: 'https://example.com/files/work.doc' },
            '会议纪录.txt': { type: 'file', extension: 'txt', url: 'https://example.com/files/work.doc' },
            '参考文档.pdf': { type: 'file', extension: 'pdf', url: 'https://example.com/files/reference.pdf' }
            
        }
    },
    '图片': {
        type: 'folder',
        content: {
            '相册': {
                type: 'folder',
                content: {
                    '旅行照片.jpg': { type: 'file', extension: 'jpg' },
                    '生日派对.jpg': { type: 'file', extension: 'jpg' }
                }
            },
            '截图': {
                type: 'folder',
                content: {
                    '设计稿.png': { type: 'file', extension: 'png' },
                    '会议记录.png': { type: 'file', extension: 'png' }
                }
            }
        }
    },
    '音乐': {
        type: 'folder',
        content: {
            '最爱': {
                type: 'folder',
                content: {
                    '歌曲1.mp3': { type: 'file', extension: 'mp3' },
                    '歌曲2.mp3': { type: 'file', extension: 'mp3' }
                }
            }
        }
    },
    '程序': {
        type: 'folder',
        content: {
            '项目源码': {
                type: 'folder',
                content: {
                    'main.py': { type: 'file', extension: 'py' },
                    'index.html': { type: 'file', extension: 'html' },
                    'style.css': { type: 'file', extension: 'css' }
                }
            }
        }
    }
};

function getFileHandler(extension) {
    return fileHandlers[extension] || fileHandlers['default'];
}

function getCurrentFolder() {
    if (!currentPath) return fileSystem;
    return currentPath.split('/').reduce((current, folder) => current[folder].content, fileSystem);
}

// 修改文件渲染逻辑
function renderFiles() {
    const container = document.getElementById('files-container');
    const currentFolder = getCurrentFolder();
    container.className = currentView === 'grid' ? 'files-grid' : 'files-list';
    
    container.innerHTML = '';
    
    Object.entries(currentFolder).forEach(([name, item]) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const icon = document.createElement('div');
        icon.className = 'file-icon';
        icon.textContent = item.type === 'folder' ? '📁' : 
            getFileHandler(item.extension).getIcon();
        
        const fileName = document.createElement('div');
        fileName.className = 'file-name';
        
        if (item.type === 'file' && item.url) {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.textContent = name;
            link.className = 'file-link';
            fileName.appendChild(link);
        } else {
            fileName.textContent = name;
        }
        
        fileItem.appendChild(icon);
        fileItem.appendChild(fileName);
        
        if (item.type === 'folder') {
            fileItem.onclick = () => {
                currentPath = currentPath ? `${currentPath}/${name}` : name;
                updateBreadcrumb();
                renderFiles();
            };
        } else if (!item.url) {
            fileItem.onclick = () => {
                getFileHandler(item.extension).handleClick(name);
            };
        }
        
        container.appendChild(fileItem);
    });
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    const paths = currentPath.split('/');
    
    breadcrumb.innerHTML = '<span onclick="navigateTo(\'\')">首页</span>';
    
    let currentBreadcrumb = '';
    paths.forEach((path, index) => {
        if (path) {
            currentBreadcrumb += (currentBreadcrumb ? '/' : '') + path;
            breadcrumb.innerHTML += ` / <span onclick="navigateTo('${currentBreadcrumb}')">${path}</span>`;
        }
    });
}

function navigateTo(path) {
    currentPath = path;
    updateBreadcrumb();
    renderFiles();
}

function toggleView() {
    currentView = currentView === 'grid' ? 'list' : 'grid';
    document.getElementById('view-icon').textContent = currentView === 'grid' ? '▤' : '≡';
    renderFiles();
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.getElementById('theme-icon').textContent = isDarkMode ? '🌞' : '🌓';
}

// 搜索功能
document.getElementById('search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // 实现搜索逻辑
});