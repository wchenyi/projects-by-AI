// apps/windows/data.js

// 请在这里管理您的 Windows 应用
// 这是一个 JavaScript 数组，里面包含了多个应用对象。
// 每个 {...} 就是一个应用。复制一份并修改内容即可添加新应用。
export const windowsApps = [
  {
    // --- 基础信息 ---
    name: "Shadowrocket", // 应用名称
    category: "开发", // 应用的分类，会显示在卡片上
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/3ca3cb3142ee84fb7c9f901271491cea_low_res_shadowrocket.png", // 图标路径。本地图标请以 "apps/" 开头。也可以是网络链接 "https://..."
    
    // --- 卡片样式 ---
    size: "large", // 卡片大小: 'small', 'medium', 'large' (large会占据更多空间，用于主推应用)
    
    // --- 详情页信息 ---
    rating: "4.9", // 推荐指数/评分
    platform: "Mac, IOS, iPadOS, visionOS, TVOS", // 支持的平台
    type: "desktop", //  在这里注明是桌面端还是移动端
    description: "一个类似于v2ray的代理软件，调整单个节点非常方便。", // 应用简介
    features: [ // 特色功能列表，每个功能占一行
      "轻松上手",
      "同步数据",
      "支持性高",
      "快捷指令"
    ],
  },
  
  // 这是一个模板，您可以复制这个模板来添加新应用
  {
    name: "Stash", // 1. 修改应用名称
    category: "工具", // 2. 修改分类
    icon: "https://stash.ws/images/logo.png", // 3. 修改图标路径    
    type: "desktop", //  在这里注明是桌面端还是移动端
    size: "large", // 4. 决定卡片大小
    rating: "5.0", // 5. 填写评分
    platform: "Mac, IOS, iPadOS, visionOS, TVOS", // 6. 填写支持平台
    description: "一个类似于clash的应用。", // 7. 填写简介
    features: [ // 8. 填写特色功能
      "一键完成任务",
      "界面美观",
      "运行速度快"
    ],
  },
  // ... 您可以在这里添加更多应用
    {
    name: "Stash", // 1. 修改应用名称
    category: "工具", // 2. 修改分类
    icon: "https://stash.ws/images/logo.png", // 3. 修改图标路径    
    type: "desktop", //  在这里注明是桌面端还是移动端
    size: "large", // 4. 决定卡片大小
    rating: "5.0", // 5. 填写评分
    platform: "Mac, IOS, iPadOS, visionOS, TVOS", // 6. 填写支持平台
    description: "这是我的超酷应用，它能做很多很棒的事情。", // 7. 填写简介
    features: [ // 8. 填写特色功能
      "一键完成任务",
      "界面美观",
      "运行速度快"
    ],
  },
];
