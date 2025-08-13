## 🗃️应用商店项目结构与管理指南

您好！为了方便您管理大量的应用，我已将整个项目重构为模块化结构。请按照以下说明来组织您的文件和管理应用内容。

### 一、 推荐的文件目录结构

请在您的电脑上创建如下的文件夹和文件结构：

```
应用商店/
├── 📂 apps/               <-- 存放所有应用数据的核心文件夹
│   ├── 📂 android/
│   │   ├── 📄 data.js      <-- 安卓应用的数据文件
│   │   └── 📂 img/         <-- 存放安卓应用的本地图标
│   ├── 📂 apple/
│   │   ├── 📄 data.js      <-- 苹果应用的数据文件
│   │   └── 📂 img/
│   ├── 📂 linux/
│   │   ├── 📄 data.js
│   │   └── 📂 img/
│   ├── 📂 windows/
│   │   ├── 📄 data.js
│   │   └── 📂 img/
│   └── 📂 other/
│       ├── 📄 data.js
│       └── 📂 img/
│
├── 📄 index.html           <-- 您的网站主文件（核心代码）
└── 📄 README.md            <-- 您可以忽略这个文件，或者用它来做笔记
```

### 关键点:

- 您大部分的工作都将在 ``apps`` 文件夹内完成。
- ``index.html`` 文件是网站的入口，您基本不需要修改它。

### 二、 如何添加或修改一个应用？ (核心操作)

操作非常简单，就像填写一份清单。我们以在 **PC端 (Windows)** 添加一个名为 "MyCoolApp" 的新应用为例：

### 第1步：准备图标

- 将 ``MyCoolApp.png`` 这个图标文件，放入 ``apps/windows/img/`` 文件夹中。

### 第2步：编辑数据文件

- 用任何文本编辑器（如记事本、VS Code等）打开 ``apps/windows/data.js`` 文件。
- 您会看到一个类似下面这样的结构。您只需复制一个 ``{...}`` 代码块，粘贴到末尾，然后修改里面的内容即可。

``` JavaScript
// apps/windows/data.js

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

    // 这是一个模板，您可以复制这个模板来添加新应用
  {
    name: "MyCoolApp", // 1. 修改应用名称
    category: "工具", // 2. 修改分类
    icon: "apps/windows/img/MyCoolApp.png", // 3. 修改图标路径
    size: "small", // 4. 决定卡片大小
    rating: "5.0", // 5. 填写评分
    platform: "PC", // 6. 填写支持平台
    description: "这是我的超酷应用，它能做很多很棒的事情。", // 7. 填写简介
    features: [ // 8. 填写特色功能
      "一键完成任务",
      "界面美观",
      "运行速度快"
    ],
  },
  // ... 您可以在这里添加更多应用
];
```

### 特别说明：

- 图标 (``icon``):
  - 本地图标: 路径请务必从 ``apps/`` 开始写，例如 ``apps/windows/img/MyCoolApp.png``。
  - 网络图标: 直接粘贴完整的 ``https://...`` 网址即可。
- 苹果/其他分类 (``apple/data.js``, ``other/data.js``):
  - 这两个分类的应用，我额外为您增加了一个 ``type`` 标签，用以区分“桌面端”和“移动端”。在添加应用时，请记得填写 ``type: "desktop"`` 或 ``type: "mobile"``。

``` JavaScript
// 在 apple/data.js 或 other/data.js 中

{
  name: "Apple Music",
  // ...其他信息...
  platform: "苹果全家桶",
  type: "desktop" // <-- 在这里注明是桌面端还是移动端
},
{
  name: "微信",
  // ...其他信息...
  platform: "iOS, iPadOS",
  type: "mobile" // <-- 在这里注明
}
```

### 三、总结

您现在拥有了一个高度自动化的应用商店。您的日常工作就是：

1. **放图标**到对应的 ``img`` 文件夹。
2. **填表格**到对应的 ``data.js`` 文件。

网站会自动完成剩下的所有工作。祝您使用愉快！

## 🧰重要更新说明
1. **动态加载**: 代码中的 ```<script type="module">``` 部分现在使用 ```import()``` 函数来异步加载每个分类的 ```data.js``` 文件。这意味着网页启动时，会自动去 ```apps/windows/```, ```apps/apple/``` 等文件夹里寻找 ```data.js```。

2. **容错处理**: 如果某个分类的 ```data.js``` 文件不存在或者内容有误，程序**不会崩溃**。它会在浏览器的控制台打印一条警告信息，并视该分类为空，其他正常的分类会照常显示。

**搜索功能完善**: 我还为您增加了一个简单的搜索功能。在顶部的搜索框输入关键词，可以实时筛选所有分类下的应用。

**排序优化**: 现在同一分类下的应用会按照 ```large > medium > small``` 的优先级进行排序展示。

### 您现在需要做什么？

您的 ```index.html``` 文件已经准备就绪。接下来，请您按照之前指南中的说明，开始创建您的 ```data.js``` 文件。

例如，您可以创建 ```apps/windows/data.js``` 文件，并填入以下内容作为开始：

``` JavaScript
// 文件路径: /apps/windows/data.js

// 注意：变量名必须是 "windowsApps"，与 index.html 中的配置对应
export const windowsApps = [
  {
    name: "PowerToys",
    category: "系统工具",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Microsoft_PowerToys_Logo.svg/2048px-Microsoft_PowerToys_Logo.svg.png",
    size: "medium", // 可选 'small', 'medium', 'large'
    rating: "4.8",
    platform: "PC",
    description: "Microsoft PowerToys 是一组实用工具，可帮助高级用户调整和简化其 Windows 体验，从而提高工作效率。",
    features: [
      "颜色选择器",
      "窗口置顶",
      "批量图像大小调整器",
      "键盘管理器"
    ],
  },
  {
    name: "Typora",
    category: "文本编辑",
    // 您也可以使用本地图标
    icon: "apps/windows/img/typora-icon.png", // 假设您已将图标放入该路径
    size: "small",
    rating: "4.9",
    platform: "PC, Linux, macOS",
    description: "一款所见即所得的极简 Markdown 编辑器。",
    features: [
      "实时预览",
      "专注模式",
      "支持数学公式",
      "多种主题"
    ],
  },
  // 在这里继续添加更多PC端应用...
];

```


为每个分类（```apple```, ```android``` 等）都创建相应的 ```data.js``` 文件，并修改其中的 ```export const ...``` 变量名（例如 ```appleApps```, ```androidApps``` 等），您的应用商店就会自动填充内容了。
