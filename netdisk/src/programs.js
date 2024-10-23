const programsHandler = {
    'py': {
        getIcon: () => '🐍',
        handleClick: (filename) => {
            alert(`查看Python代码: ${filename}`);
        }
    },
    'js': {
        getIcon: () => '📜',
        handleClick: (filename) => {
            alert(`查看JavaScript代码: ${filename}`);
        }
    },
    'html': {
        getIcon: () => '🌐',
        handleClick: (filename) => {
            alert(`查看HTML文件: ${filename}`);
        }
    },
    'css': {
        getIcon: () => '🎨',
        handleClick: (filename) => {
            alert(`查看CSS文件: ${filename}`);
        }
    },
    'java': {
        getIcon: () => '☕',
        handleClick: (filename) => {
            alert(`查看Java代码: ${filename}`);
        }
    },
    'cpp': {
        getIcon: () => '⚙️',
        handleClick: (filename) => {
            alert(`查看C++代码: ${filename}`);
        }
    },
    'c': {
        getIcon: () => '⚙️',
        handleClick: (filename) => {
            alert(`查看C代码: ${filename}`);
        }
    },
    // 默认处理器
    'default': {
        getIcon: () => '📄',
        handleClick: (filename) => {
            alert(`打开文件: ${filename}`);
        }
    }
};
