// 请在这里管理您的 Windows 应用
// 这是一个 JavaScript 数组，里面包含了多个应用对象。
// 每个 {...} 就是一个应用。复制一份并修改内容即可添加新应用。
export const windowsApps = [
  {
    // --- 基础信息 ---
    name: "Visual Studio Code", // 应用名称
    category: "开发", // 应用的分类，会显示在卡片上
    icon: "apps/windows/img/vscode.svg", // 图标路径。本地图标请以 "apps/" 开头。也可以是网络链接 "https://..."
    
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
  },
];
