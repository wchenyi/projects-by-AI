// 项目数据配置
const projects = [
    {
        id: 1,
        category: 'other',
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
        category: 'other',
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
        description: '传统占卜工具',
        icon: '☯️',
        tags: ['Claude'],
        versions: [
            { name: '开始起卦', url: 'https://dao6.wangcy.cam' }
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
        category: 'other',
        name: '个人介绍',
        description: '个人简历和介绍页面',
        icon: '👤',
        tags: ['Claude'],
        versions: [
            { name: '查看介绍', url: 'https://projects.wangcy.site/me.html' }
        ]
    },
    {
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
        category: 'learning',
        name: '八卦知识',
        description: '中国传统文化学习',
        icon: '📖',
        tags: ['Claude'],
        versions: [
            { name: '学习页面', url: 'https://projects.wangcy.site/%E5%85%AB%E5%8D%A6%E7%9F%A5%E8%AF%86' }
        ]
    },
    {
        id: 12,
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
        id: 13,
        category: 'office',
        name: '起始页生成',
        description: '自动搜索起始页生成器',
        icon: '🔍',
        tags: ['ChatGPT'],
        versions: [
            { name: '访问页面', url: 'https://wchenyi.github.io/Auto-search' }
        ]
    },
    {
        id: 14,
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
        id: 15,
        category: 'learning',
        name: '法考主观题模拟',
        description: '法律考试模拟练习 Gemini 版',
        icon: '📚',
        tags: ['Gemini'],
        versions: [
            { name: 'Gemini 版', url: 'https://projects.wangcy.site/fakao/g/index' }
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