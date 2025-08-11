## 应用商店配置与管理指南 (V3.0)

您好！欢迎来到V3.0版应用商店。此版本专注于提升视觉精致度、信息密度和移动端体验，并对所有卡片样式进行了重新设计。

### 一、 文件目录结构 (无变化)

文件结构保持不变，您可以继续沿用此前的项目结构。

```
应用商店/
apps/
├── home/
│   └── content.md        (主页内容)
├── windows/
│   ├── data.js
│   └── content.md        (PC端内容)
├── android/
│   ├── data.js  
│   └── content.md        (安卓端内容)
├── apple/
│   ├── data.js
│   └── content.md        (苹果端内容)
├── other/
│   ├── data.js
│   └── content.md        (其他端内容)
└── linux/
    └── data.js
```

### 二、 核心配置 (在 ```index.html``` 中)

所有核心配置依然集中在 ```index.html``` 文件底部的 ```CONFIG``` 对象中。大部分配置保持不变，但请注意以下几点：

- 主题色系统已升级：您仍然只需要在 ```CONFIG.categories``` 中为每个分类设置一个 ```themeColor``` (十六进制颜色码，如 ```'#0ea5e9'```)。新版代码会自动根据这个主色调，智能地生成不同深浅、不同饱和度的颜色，用于 Banner、侧边栏选中状态、卡片背景等，实现了您要求的“同色系但有区分”的视觉效果。

- 卡片布局自动化：

    - l```arge``` **卡片**：新版 ```large``` 卡片会自动从应用的 ```features``` 数组中提取前两个特色功能，并将其展示在卡片上。它还会自动寻找 ```appStore``` 和 ```official``` 类型的下载链接，如果存在，则会以小图标按钮的形式直接显示在卡片上。您无需任何额外配置。

    - ```medium``` **和** ```small``` **卡片**：已根据您提供的参考图完全重制，布局和响应式行为（桌面/移动端显示数量）已内建，您只需在 ```data.js``` 中指定 ```size: "medium"``` 或 ```size: "small"``` 即可。

### 三、 数据文件 (```data.js```)

您的 ```data.js``` 文件结构完全无需改动。新版网页会自动适应您现有的数据结构，并以全新的、更美观的方式将其呈现出来。

例如，一个 ```large``` 卡片的应用数据：

// ```data.js``` 文件中的一个应用条目
``` java
{
    name: "PowerToys",
    category: "系统工具",
    icon: "...",
    size: "large", // 指定尺寸
    rating: "4.8",
    platform: "PC",
    description: "...",
    features: [
      "颜色选择器",  // <- 会被自动显示在卡片上
      "窗口置顶",    // <- 会被自动显示在卡片上
      "批量图像大小调整器" // (这个不会显示在卡片上，但详情页可见)
    ],
    downloads: {
      official: "https://...", // <- 会被自动渲染为卡片上的下载按钮
      appStore: "ms-windows-store://...", // <- 也会被渲染
      github: "https://..." // (这个不会显示在卡片上，但详情页可见)
    }
}
```

### 四、版权信息 (在 ```index.html``` 中)

所有配置依然集中在 ```index.html``` 文件底部的 ```CONFIG``` 对象中。

``` java
const CONFIG = {
    // 1. 网站基础信息
    siteName: "应用商店",
    siteLogo: "./src/img/logo.png", // 您的Logo路径
    
    // 2. (新增) 页脚信息
    footer: {
        creationYear: 2023, // 网站创建年份
        author: "Your Name", // 您的名称
        version: "4.0.0" // 版本号
    },

    // 3. 主页免责声明 (无变化)
    disclaimer: `...`,

    // 4. 分类信息与主题配置
    categories: [
        { id: 'home', name: '主页', icon: '...', themeColor: '#6b7280', ... },
        { type: 'divider' }, // <-- 新增：用于在侧边栏生成分割线
        { id: 'windows', name: 'PC端', ... },
        // ...
        { type: 'divider' },
        { id: 'other', name: '其他', ... }
    ]
};
```

- ```footer```: 新增的页脚配置区，您可以在此修改作者、年份和版本号。

- ```categories```:

  - ```{ type: 'divider' }```: 在您想添加分割线的位置，插入这样一行即可。

  - ```themeColor```: 现在只需要提供一个十六进制颜色码，代码会自动生成配套的浅色和渐变色，使整体风格统一又富有层次。

### 五、卡片布局与数据联动 (自动)

新版卡片的设计是高度自动化的，它会智能地读取您的 ```data.js``` 数据并以最佳方式呈现。

- ```large``` 卡片:

  - 自动展示内容: 会自动抓取 ```features``` 数组的前两项、```rating``` 评分，并显示在卡片上。

  - 自动添加快捷下载: 会自动寻找 ```downloads``` 对象中的 ```official``` 和 ```appStore``` 链接，并生成快捷下载按钮。

- ```medium``` / ```small``` 卡片:

  - 自动添加下载按钮: 会自动寻找 ```downloads``` 对象中的任意一个可用链接（优先级：```official > github > appStore > alternative```），并生成“点击下载”按钮。

这意味着您只需专注于维护 ```data.js``` 文件的准确性，网页的视觉表现会由代码自动完成，无需您进行额外操作


