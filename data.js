// 项目数据配置
const projects = [
    {
        id: 1,
        category: 'office',
        name: '赞助页面',
        description: '支持项目的赞助页面',
        icon: '💝',
        tags: ['Claude'],
        versions: [
            { name: '访问页面', url: 'https://wchenyi.github.io/donate' }
        ]
    },
    {
        id: 2,
        category: 'office',
        name: '二维码生成页面',
        description: '快速生成二维码工具',
        icon: '📱',
        tags: ['Claude'],
        versions: [
            { name: '基础版', url: 'https://projects.wangcy.site/QR/QR.html' }
        ]
    },
    {
        id: 3,
        category: 'office',
        name: '二维码生成改进版',
        description: '功能增强的二维码生成器',
        icon: '🎯',
        tags: ['Claude'],
        versions: [
            { name: '升级版', url: 'https://projects.wangcy.site/QR/upgrade/index.html' }
        ]
    },
    {
        id: 4,
        category: 'office',
        name: '个人项目展示页',
        description: '展示个人项目的网站',
        icon: '🌟',
        tags: ['Claude'],
        versions: [
            { name: '访问网站', url: 'https://projects.wangcy.site/lib/index.html' }
        ]
    },
    {
        id: 5,
        category: 'entertainment',
        name: '道家小六壬起卦',
        description: '道家小六壬排盘工具',
        icon: '☯️',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://dao6.wangcy.online' }
        ]
    },
    {
        id: 6,
        category: 'entertainment',
        name: '在线歌单',
        description: '个人音乐播放器',
        icon: '🎵',
        tags: ['Claude'],
        versions: [
            { name: '播放音乐', url: 'https://music.wangcy.site/' }
        ]
    },
    {
        id: 7,
        category: 'office',
        name: 'Start Page',
        description: '个性化起始页',
        icon: '🚀',
        tags: ['Claude'],
        versions: [
            { name: '访问页面', url: 'https://projects.wangcy.site/start-page/index.html' }
        ]
    },
    {
        id: 8,
        category: 'office',
        name: 'NetDisk',
        description: '网络存储工具',
        icon: '💾',
        tags: ['Claude'],
        versions: [
            { name: '访问工具', url: 'https://projects.wangcy.site/netdisk/assets/index.html' }
        ]
    },
    {
        id: 9,
        category: 'other',
        name: 'App Store - CL',
        description: '应用商店界面 Claude 版本',
        icon: '📦',
        tags: ['Claude'],
        versions: [
            { name: 'Claude 版', url: 'https://projects.wangcy.site/appstore-CL/index.html' }
        ]
    },
    {
        id: 10,
        category: 'entertainment',
        name: '道家小六壬起卦2',
        description: '另一种风格的道家小六壬起卦',
        icon: '☯️',
        tags: ['Gemini'],
        versions: [
            { name: '开始起卦', url: 'https://dao6.dpdns.org' }
        ]
    },
    {
        id: 11,
        category: 'learning',
        name: '法考主观模拟网站',
        description: '法律考试模拟练习',
        icon: '⚖️',
        tags: ['Claude'],
        versions: [
            { name: 'Claude 版', url: 'https://projects.wangcy.site/fakao/c/index' }
        ]
    },
    {
        id: 12,
        category: 'office',
        name: '起始页生成',
        description: '自动搜索起始页生成器',
        icon: '🔍',
        tags: ['ChatGPT'],
        versions: [
            { name: '访问页面', url: 'https://projects.wangcy.site/Auto-search' }
        ]
    },
    {
        id: 13,
        category: 'other',
        name: 'App Store',
        description: '应用商店界面 Gemini 版本',
        icon: '🏪',
        tags: ['Gemini'],
        versions: [
            { name: 'Gemini 版', url: 'https://projects.wangcy.site/appstore/index.html' }
        ]
    },
    {
        id: 14,
        category: 'learning',
        name: '法考主观题模拟',
        description: '法律考试模拟练习 Gemini 版',
        icon: '📚',
        tags: ['Gemini'],
        versions: [
            { name: 'Gemini 版', url: 'https://projects.wangcy.site/fakao/g/index' }
        ]
    },
    {
        id: 15,
        category: 'office',
        name: '收藏夹转网页',
        description: '浏览器收藏夹转MD3风格网页',
        icon: '🔖',
        tags: ['Gemini'],
        versions: [
            { name: '访问页面', url: 'https://projects.wangcy.site/favorite/index' }
        ]
    },
    {
        id: 16,
        category: 'entertainment',
        name: '六十四卦学习',
        description: '六十四卦的相关知识学习',
        icon: '📖',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://projects.wangcy.site/八卦/bg-xuexi' }
        ]
    },
    {
        id: 17,
        category: 'entertainment',
        name: '六十四卦素材',
        description: '六十四卦素材PNG下载，符号复制',
        icon: '☯️',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://projects.wangcy.site/八卦/bg-sucai' }
        ]
    },
    {
        id: 18,
        category: 'entertainment',
        name: '京房卦训练',
        description: '京房六十四卦训练',
        icon: '☯️',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://projects.wangcy.site/八卦/bg-jingfang' }
        ]
    },
    {
        id: 19,
        category: 'entertainment',
        name: '世应训练',
        description: '六十四卦的世爻和应爻训练',
        icon: '☯️',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://projects.wangcy.site/八卦/bg-xunlian' }
        ]
    }
];

// 分类信息配置
const categoryInfo = {
    office: { 
        name: '办公', 
        color: 'linear-gradient(135deg, #3b82f6, #1e40af)', 
        icon: '💼' 
    },
    life: { 
        name: '生活', 
        color: 'linear-gradient(135deg, #10b981, #047857)', 
        icon: '🏠' 
    },
    learning: { 
        name: '学习', 
        color: 'linear-gradient(135deg, #a855f7, #7e22ce)', 
        icon: '📚' 
    },
    entertainment: { 
        name: '娱乐', 
        color: 'linear-gradient(135deg, #ec4899, #be185d)', 
        icon: '🎭' 
    },
    other: { 
        name: '其他', 
        color: 'linear-gradient(135deg, #6b7280, #374151)', 
        icon: '⭐' 
    }
};

