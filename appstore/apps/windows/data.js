// 请在这里管理您的 Windows 应用
// 这是一个 JavaScript 数组，里面包含了多个应用对象。
// 每个 {...} 就是一个应用。复制一份并修改内容即可添加新应用。
export const windowsApps = [
  {
    // --- 基础信息 ---
    name: "Visual Studio Code", // 应用名称
    category: "开发", // 应用的分类，会显示在卡片上
    icon: "https://s1.aigei.com/src/img/png/37/371e854770f44605a1a3f1fa72e4323b.png?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:vIDeR8QCV-VkxHrq1c-XTnld5-s=", // 图标路径。本地图标请以 "apps/" 开头。也可以是网络链接 "https://..."
    
    // --- 卡片样式 ---
    size: "medium", // 卡片大小: 'small', 'medium', 'large' (large会占据更多空间，用于主推应用)
    
    // --- 详情页信息 ---
    rating: "4.9", // 推荐指数/评分
    platform: "PC, Linux", // 支持的平台
    description: "一个轻量级但功能强大的源代码编辑器，支持几乎所有主流的开发语言。", // 应用简介
    features: [ // 特色功能列表，每个功能占一行
      "智能感知",
      "代码调试",
      "Git集成",
      "海量插件"
    ],
  downloads: {
      github: "https://github.com/microsoft/PowerToys/", // Github 链接
      official: "https://learn.microsoft.com/zh-cn/windows/powertoys/install", // 官网链接
      appStore: "ms-windows-store://pdp/?productid=9MT60BCXJ3TT", // 应用商店链接 (例如 Microsoft Store)
      alternative: "https://.../powertoys.zip" // 备用下载链接
  },
  {
    // --- 基础信息 ---
    name: "PowerToys",
    category: "系统工具",
    icon: "https://img.netzwelt.de/dw160_dh160_sw0_sh0_sx0_sy0_sr1x1_nu1/picture/original/2020/05/microsoft-powertoys-logo-277453.png",
    size: "medium",
    
    // --- 详情页信息 ---
    rating: "4.8",
    platform: "PC",
    description: "Microsoft PowerToys 是一组实用工具...",
    features: [
      "颜色选择器",
      "窗口置顶",
      "批量图像大小调整器"
    ],

    // --- 下载链接 (新增) ---
    // 这是一个对象，您可以按需提供以下四种链接中的任意几种。
    // 如果某个应用没有某种下载方式，直接省略那一行即可。
    downloads: {
      github: "https://github.com/microsoft/PowerToys/", // Github 链接
      official: "https://learn.microsoft.com/zh-cn/windows/powertoys/install", // 官网链接
      appStore: "ms-windows-store://pdp/?productid=9MT60BCXJ3TT", // 应用商店链接 (例如 Microsoft Store)
      alternative: "https://.../powertoys.zip" // 备用下载链接
    }
  },
  {
    name: "MyCoolApp", // 1. 修改应用名称
    category: "工具", // 2. 修改分类
    icon: "apps/windows/img/MyCoolApp.png", // 3. 修改图标路径
    size: "large", // 4. 决定卡片大小
    rating: "5.0", // 5. 填写评分
    platform: "PC", // 6. 填写支持平台
    description: "这是我的超酷应用，它能做很多很棒的事情。", // 7. 填写简介
    features: [ // 8. 填写特色功能
      "一键完成任务",
      "界面美观",
      "运行速度快"
    ],
        downloads: {
      github: "https://github.com/microsoft/PowerToys/", // Github 链接
      official: "https://learn.microsoft.com/zh-cn/windows/powertoys/install", // 官网链接
      appStore: "ms-windows-store://pdp/?productid=9MT60BCXJ3TT", // 应用商店链接 (例如 Microsoft Store)
      alternative: "https://.../powertoys.zip" // 备用下载链接
  },
];

