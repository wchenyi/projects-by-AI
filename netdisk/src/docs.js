const docsHandler = {
    'doc': {
        getIcon: () => '📄',
        handleClick: (filename, url) => {
            if (url) {
                window.open(url, '_blank');
            } else {
                alert(`打开Word文档: ${filename}`);
            }
        }
    },
    'pdf': {
        getIcon: () => '📑',
        handleClick: (filename, url) => {
            if (url) {
                window.open(url, '_blank');
            } else {
                alert(`打开PDF文档: ${filename}`);
            }
        }
    },
    'txt': {
        getIcon: () => '📝',
        handleClick: (filename, url) => {
            if (url) {
                window.open(url, '_blank');
            } else {
                alert(`打开文本文档: ${filename}`);
            }
        }
    },
    // ... 其他文档类型处理器 ...
    'default': {
        getIcon: () => '📄',
        handleClick: (filename, url) => {
            if (url) {
                window.open(url, '_blank');
            } else {
                alert(`打开文件: ${filename}`);
            }
        }
    }
};