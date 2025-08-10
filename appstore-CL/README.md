\# 模块化应用商店项目结构



\## 📁 文件目录结构



```

应用商店/

├── index.html              # 主页面文件

├── README.md              # 项目说明文档

│

├── css/                   # 样式文件夹

│   └── styles.css         # 主样式文件（支持深色模式）

│

├── js/                    # JavaScript文件夹

│   ├── theme.js          # 主题管理模块

│   ├── ui.js             # UI交互管理模块  

│   ├── appLoader.js      # 应用数据加载器

│   └── main.js           # 主程序入口

│

├── win/                   # Windows应用分类

│   ├── apps.json         # Windows应用数据

│   └── img/              # Windows应用图标文件夹

│       ├── photoshop.png

│       ├── vscode.png

│       └── ...

│

├── and/                   # Android应用分类

│   ├── apps.json         # Android应用数据

│   └── img/              # Android应用图标文件夹

│       ├── wechat.png

│       ├── douyin.png

│       └── ...

│

├── apple/                 # 苹果应用分类

│   ├── apps.json         # 苹果应用数据

│   └── img/              # 苹果应用图标文件夹

│       ├── finalcutpro.png

│       ├── procreate.png

│       └── ...

│

├── linux/                 # Linux应用分类

│   ├── apps.json         # Linux应用数据

│   └── img/              # Linux应用图标文件夹

│

└── other/                 # 其他应用分类

&nbsp;   ├── apps.json         # 其他应用数据

&nbsp;   └── img/              # 其他应用图标文件夹

```



\## 🔧 如何添加新应用



\### 步骤1：准备应用图标

1\. 将应用图标（推荐尺寸：512x512px或256x256px）保存到对应分类的`img/`文件夹

2\. 图标格式支持：PNG、JPG、WEBP

3\. 文件命名建议：使用英文小写，例如`photoshop.png`



\### 步骤2：编辑应用数据

打开对应分类的`apps.json`文件，按以下格式添加应用信息：



```json

{

&nbsp; "name": "应用名称",

&nbsp; "category": "应用分类",

&nbsp; "description": "应用描述（建议50-100字）",

&nbsp; "rating": 4.5,

&nbsp; "downloads": "1M+",

&nbsp; "platforms": \["Windows", "macOS"],

&nbsp; "device\_type": "桌面端",  // 仅apple和other分类需要

&nbsp; "icon\_url": "分类文件夹/img/图标文件名",

&nbsp; "download\_url": "官方下载链接",

&nbsp; "alternate\_url": "备用下载链接（可选）",

&nbsp; "features": \[

&nbsp;   {

&nbsp;     "icon": "fas fa-功能图标",

&nbsp;     "title": "功能标题",

&nbsp;     "description": "功能描述"

&nbsp;   }

&nbsp;   // 可添加多个功能特色

&nbsp; ]

}

```



\### 步骤3：保存并测试

1\. 保存`apps.json`文件

2\. 刷新网页查看效果

3\. 点击应用卡片测试详情页面



\## 🎨 应用图标处理



\### 图标来源方式：

1\. \*\*本地图标\*\*：将图标文件放在`分类/img/`文件夹中

2\. \*\*网络图标\*\*：直接使用网络图片链接



\### 图标自适应设置：

代码已自动处理图标大小适配，无论原图多大都会：

\- 自动缩放到合适尺寸（64x64px或96x96px）

\- 保持图片比例不变形

\- 居中显示



\### 图标加载失败处理：

如果图标加载失败，会自动显示默认的立方体图标。



\## 🌙 深色模式支持



\- 点击右上角按钮可切换深色/浅色模式

\- 主题设置会自动保存到本地存储

\- 支持跟随系统主题变化



\## 📱 响应式设计



\- \*\*桌面端\*\*：完整侧边栏 + 网格布局

\- \*\*平板端\*\*：自适应网格布局

\- \*\*手机端\*\*：隐藏式侧边栏 + 单列布局



\## 🔍 字段说明



\### 应用数据字段：

\- `name`: 应用名称（必填）

\- `category`: 应用分类（必填）

\- `description`: 应用描述（必填，建议50-100字）

\- `rating`: 评分（必填，0.0-5.0）

\- `downloads`: 下载量（必填，如"1M+"）

\- `platforms`: 支持平台数组（必填）

\- `device\_type`: 设备类型（apple和other分类专用）

\- `icon\_url`: 图标路径（必填）

\- `download\_url`: 下载链接（必填）

\- `alternate\_url`: 备用链接（可选）

\- `features`: 特色功能数组（可选）



\### 平台选项：

\- `Windows` - Windows系统

\- `macOS` - Mac系统  

\- `Linux` - Linux系统

\- `Android` - 安卓系统

\- `iOS` - iOS系统

\- `iPadOS` - iPad系统

\- `Web` - 网页版



\### 设备类型（apple和other分类）：

\- `桌面端` - 电脑应用

\- `移动端` - 手机/平板应用  

\- `全平台` - 支持多种设备



\### FontAwesome图标：

特色功能的图标使用FontAwesome类名，常用图标：

\- `fas fa-magic` - 魔法/AI功能

\- `fas fa-code` - 代码/开发

\- `fas fa-video` - 视频

\- `fas fa-music` - 音乐

\- `fas fa-image` - 图片

\- `fas fa-users` - 用户/社交

\- `fas fa-cloud` - 云服务

\- 更多图标请查看：https://fontawesome.com/icons



\## 🚀 使用建议



1\. \*\*图标优化\*\*：使用压缩后的PNG格式图标，减少加载时间

2\. \*\*描述文案\*\*：保持描述简洁明了，突出应用特色

3\. \*\*分类合理\*\*：将应用放在最合适的分类文件夹中

4\. \*\*定期更新\*\*：及时更新应用信息和下载链接

5\. \*\*测试兼容\*\*：在不同设备和浏览器中测试显示效果



\## 🔧 技术特性



\- ✅ 响应式设计，支持各种屏幕尺寸

\- ✅ 深色模式支持，自动保存用户偏好

\- ✅ 模块化代码结构，便于维护和扩展

\- ✅ 自适应图标处理，支持各种尺寸图片

\- ✅ 优雅的加载动画和错误处理

\- ✅ 毛玻璃视觉效果，现代化界面

\- ✅ 键盘快捷键支持（ESC关闭窗口）

\- ✅ 移动端友好的触摸交互



需要帮助或有问题，请检查浏览器控制台的错误信息。

