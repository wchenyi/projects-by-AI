## 应用商店配置与管理指南 (V2.0)
您好！欢迎使用功能全面升级的V2.0版应用商店。此版本引入了主页、PWA支持、自定义主题等强大功能。请按照本指南进行配置与管理。

### 一、 文件目录结构

为了支持新功能，目录结构有少量调整：

```
应用商店/
├── 📂 apps/               <-- 应用数据文件夹 (无变化)
│   ├── 📂 android/
│   │   └── 📄 data.js
│   ├── 📂 apple/
│   │   └── 📄 data.js
│   │   // ... 其他分类
│
├── 📂 src/                <-- (新增) 资源文件夹
│   └── 📂 img/
│       └── 📄 logo.png     <-- (可选) 在此放置您的网站Logo
│
├── 📄 index.html           <-- 网站核心文件 (已更新)
├── 📄 manifest.json        <-- (新增) PWA 配置文件
└── 📄 sw.js                <-- (新增) PWA Service Worker
```

- ```src/img/logo.png```: 这是您网站的自定义Logo。如果此文件存在，网站左上角将显示它；如果不存在，则显示默认图标。

- ```manifest.json``` **和** ```sw.js```: 这两个是实现PWA（渐进式网络应用）功能的文件，能让您的网站被“添加到主屏幕”，像App一样使用。

### 核心配置 (在 ```index.html``` 中修改)

为了让您轻松修改网站的关键信息，我将所有配置项都集中到了 ```index.html``` 文件底部的 ```<script>``` 标签内一个名为 ```CONFIG``` 的对象中。

打开 ```index.html```，滚动到最下方，您会看到：

``` javascript
// ===================================================================================
// 网站核心配置中心
// 在这里修改您网站的所有关键信息
// ===================================================================================
const CONFIG = {
  // 1. 网站基础信息
  siteName: "应用商店", // 会显示在主页Banner和浏览器标签页上
  siteLogo: "./src/img/logo.png", // 您的自定义Logo路径

  // 2. 主页免责声明内容 (支持HTML标签)
  disclaimer: `
    <h3 class="text-xl font-bold mb-4">必看</h3>
    <ul class="space-y-3 list-disc list-inside text-gray-600 dark:text-gray-400">
      <li>出于学习与交流目的设立本站，本站所有内容与本人无任何关联。</li>
      <li>本站不提供任何形式的下载，仅为公开信息的搬运及整理。所有跳转链接均来自互联网。</li>
      <li><strong>请您自觉遵守我国相关法律规定，利用本站提供的信息进行任何操作，所带来的一切后果由您本人承担。</strong></li>
      <li>严禁在国内社交平台传播本站，请低调使用。</li>
    </ul>
    <h3 class="text-xl font-bold mt-8 mb-4">相关法律条列</h3>
    <p class="text-sm text-gray-500">根据《计算机信息网络国际联网安全保护管理办法》规定，任何单位和个人不得利用国际联网制作、复制、查阅和传播下列信息...</p>
  `,

  // 3. 分类信息与主题配置
  categories: [
    // 您可以在这里修改名称、data.js路径、图标，以及每个分类的主题色
    { 
      id: 'home', 
      name: '主页', 
      icon: `...`, // SVG图标代码
      themeColor: 'bg-gray-500', // 侧边栏选中颜色
      gradient: 'from-gray-500 to-gray-700' // Banner渐变色
    },
    { 
      id: 'windows', 
      name: 'PC端', 
      file: './apps/windows/data.js', 
      dataKey: 'windowsApps',
      bannerText: 'Windows 微软',
      icon: `...`,
      themeColor: 'bg-sky-500',
      gradient: 'from-sky-500 to-sky-700'
    },
    // ... 其他分类
  ]
};
```

- ```siteName```: 修改为您想要的网站名称。
- ```disclaimer```: 在这里编辑您的主页免责声明，您可以使用 ```<p>```, ```<li>```, ```<strong>``` 等HTML标签来排版。
- ```categories```: 这是最重要的配置区域。
    - ```id```: 每个分类的唯一标识，请勿修改。
    - ```name```: 显示在侧边栏的名称。
    - ```bannerText```: 显示在该分类页顶部Banner的文字。
    - ```themeColor```: 侧边栏项目被选中时的背景色。
    - ```gradient```: 该分类页Banner的渐变背景色。

### 三、PWA配置 (```manifest.json```)

为了让网站能被添加到主屏幕，您需要创建 ```manifest.json``` 文件，并填入以下内容。请根据您的喜好修改 ```name``` 和 ```short_name```。

``` javascript
{
  "name": "应用商店",
  "short_name": "应用商店",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0ea5e9",
  "description": "一个精美的应用商店网页",
  "icons": [
    {
      "src": "./src/img/logo.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./src/img/logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 四、 Service Worker配置 (```sw.js```)

这是实现离线缓存等PWA功能的脚本。创建 ```sw.js``` 文件，填入以下代码即可，通常无需修改。

``` javascript
// sw.js
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
```

按照以上指南配置后，您的网站将焕然一新，并拥有强大的自定义能力。
