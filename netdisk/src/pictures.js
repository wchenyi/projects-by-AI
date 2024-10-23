const picturesHandler = {
    'jpg': {
        getIcon: () => '🖼️',
        handleClick: (filename) => {
            alert(`查看图片: ${filename}`);
        }
    },
    'jpeg': {
        getIcon: () => '🖼️',
        handleClick: (filename) => {
            alert(`查看图片: ${filename}`);
        }
    },
    'png': {
        getIcon: () => '🖼️',
        handleClick: (filename) => {
            alert(`查看图片: ${filename}`);
        }
    },
    'gif': {
        getIcon: () => '🎞️',
        handleClick: (filename) => {
            alert(`查看动图: ${filename}`);
        }
    },
    'svg': {
        getIcon: () => '🎨',
        handleClick: (filename) => {
            alert(`查看矢量图: ${filename}`);
        }
    },
    'webp': {
        getIcon: () => '🖼️',
        handleClick: (filename) => {
            alert(`查看图片: ${filename}`);
        }
    }
};
