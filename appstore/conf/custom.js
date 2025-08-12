// conf/custom.js

// 这是一个用于网站个性化设置的配置文件
// 您可以在这里轻松地添加社交链接、开启或关闭特效

export const CUSTOM_CONFIG = {

    // 1. 社交媒体链接
    // 在 socials 数组中添加或修改对象即可。
    // name: 显示的名称
    // url: 您的主页链接
    // icon: 对应的SVG图标代码 (您可以从 https://icones.js.org/ 查找并复制SVG代码)
    socials: [
        {
            name: "Bilibili",
            url: "https://space.bilibili.com/",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M229.33 50.87a23.31 23.31 0 0 0-16.49-16.5C191.33 28 128 28 128 28s-63.33 0-84.84 6.37a23.31 23.31 0 0 0-16.49 16.5C20 72.41 20 128 20 128s0 55.59 6.67 77.13a23.31 23.31 0 0 0 16.49 16.5C64.67 228 128 228 128 228s63.33 0 84.84-6.37a23.31 23.31 0 0 0 16.49-16.5C236 183.59 236 128 236 128s0-55.59-6.67-77.13M104 156V100l48 28Z"/></svg>`
        },
        {
            name: "Email",
            url: "mailto:user@example.com",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>`
        },
        {
            name: "Telegram",
            url: "https://t.me/",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.417 15.181l-2.101-4.46l.001-.001c.144-.31.434-.534.782-.534c.28.001.54.132.702.36l1.34 1.635l1.898 2.29l-.001.001c.19.22.49.32.78.27c.29-.05.54-.23.66-.49l2.18-5.44c.24-.59.88-.93 1.48-.73c.6.2.92.83.72 1.42l-3.47 8.67c-.23.57-.78.94-1.38.94c-.2 0-.4-.04-.6-.13c-.57-.25-.93-.82-.8-1.43l.48-1.91l-1.96-2.36l-1.36 1.64c-.42.51-1.12.7-1.74.49c-.62-.21-1.04-.75-1.06-1.39Z"/></svg>`
        },
        // 在这里添加更多社交链接...
        // { name: "X", url: "...", icon: "..." },
        // { name: "Instagram", url: "...", icon: "..." },
    ],

    // 2. 视觉特效
    // 将值改为 false 即可禁用某个特效
    effects: {
        sakura: true,      // 樱花飘落特效
        clickEffect: true  // 鼠标点击爱心特效
    }

};
