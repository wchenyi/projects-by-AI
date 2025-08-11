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

### 二、 如何添加/修改应用 (含下载链接)

操作的核心依然是编辑各个分类下的 ```data.js``` 文件。主要变化是在每个应用对象中增加了一个 ```downloads``` 字段。

下面是一个完整的应用条目示例，展示了如何添加下载链接：

``` JavaScript
// 位于例如 apps/windows/data.js 文件中

export const windowsApps = [
  {
    // --- 基础信息 ---
    name: "PowerToys",
    category: "系统工具",
    icon: "https://.../PowerToys_Logo.png",
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
    name: "Typora",
    category: "文本编辑",
    icon: "...",
    // ... 其他信息 ...
    
    // 这个应用只有官网下载
    downloads: {
      official: "https://typora.io/"
    }
  },

  {
    name: "一个苹果应用示例",
    category: "摄影",
    icon: "...",
    type: "mobile", // 别忘了为 apple 和 other 分类添加 type
    // ... 其他信息 ...

    // 这个应用只有 App Store 下载
    downloads: {
      appStore: "https://apps.apple.com/cn/app/lightroom/id878783582"
    }
  }
];
```
### 关键点:

- ```downloads``` 是一个花括号 ```{}``` 包裹的对象。

- 您可以在 ```downloads``` 对象中使用的 **键名** 是固定的：```appStore```, ```github```, ```official```, ```alternative```。

- **按需提供**：如果您的应用只有官网和Github下载，那就在 ```downloads``` 中只写 ```official``` 和 ```github``` 这两行。如果一个链接都没有，可以完全省略 ```downloads``` 字段。

- 网页会根据您提供的链接，自动生成对应logo和颜色的按钮。

现在，您的应用商店已经功能完备，可以真正投入使用了！