// 请在这里管理您的 Windows 应用
// 这是一个 JavaScript 数组，里面包含了多个应用对象。
// 每个 {...} 就是一个应用。复制一份并修改内容即可添加新应用。
// apps/windows/data.js

export const windowsApps = [
  // --- Large Cards ---
  {
    name: "v2RayN-Core",
    category: "代理工具",
    icon: "https://ts1.tc.mm.bing.net/th/id/R-C.1d8eb1af33a92865f0255eab4deb3ab6?rik=R1Bz36MCoDSLGw&riu=http%3a%2f%2fwww.clash1688.com%2fassets%2fimg%2fblog%2fV2rayN.jpg&ehk=i6is759Vcwn4WsS%2f3ur4xc5YlvWb2TSqjNfaptdFySQ%3d&risl=&pid=ImgRaw&r=0",
    size: "large",
    rating: "5.0",
    platform: "Windows",
    description: "小白操作，空间占用小，zip解压安装，无需汉化，不支持ss插件。",
    features: ["操作便捷", "自定义强", "调试工具", "更新快捷"],
    downloads: {
      github: "https://github.com/2dust/v2rayN/releases",
      alternative: "https://d2.netfiles.pw/v2/windows/v2rayN-v5.9.zip"
    }
  },
  {
    name: "ClashMeta",
    category: "代理工具",
    icon: "https://mogua.co/download/99b5fb7dda6fe114e45fdc3b6d170358-icon.png",
    size: "large",
    rating: "4.5",
    platform: "多平台",
    description: "操作同CFA，界面也高度相似便于上手，又有很多实用升级",
    features: ["流量监测", "上手容易", "资源丰富", "界面美观"],
    downloads: {
      github: "https://github.com/MetaCubeX/Clash.Meta/releases",
      official: "https://clashmeta.xyz/"
    }
  },
  {
    name: "Mihomo Party",
    category: "代理工具",
    icon: "https://mihomoparty.net/wp-content/uploads/2024/09/icon-150x150.png",
    size: "large",
    rating: "4.5",
    platform: "Windows",
    description: "界面模仿surge和stash，在win端独具一格，非常实用",
    features: ["界面美观", "功能丰富", "更新较快"],
    downloads: {
      official: "https://mihomoparty.net/",
      github: "https://github.com/pompurin404/mihomo-party/releases"
    }
  },
    {
    name: "FIClash",
    category: "代理工具",
    icon: "https://doc.clashforwindows.app/logo_64.png",
    size: "large",
    rating: "4.5",
    platform: "全平台",
    description: "基于 ClashMeta，Material You 设计风格，全平台支持，模仿surfboard。",
    features: ["全平台支持", "使用方便", "界面美观"],
    downloads: {
      github: "https://github.com/chen08209/FlClash"
    }
  },

  // --- Medium Cards ---
  {
    name: "Clash For Windows",
    category: "代理工具",
    icon: "https://pic1.zhimg.com/v2-ab67026231c772c19b923846e6cd65ee_720w.jpg?source=172ae18b",
    size: "medium",
    rating: "5.0",
    platform: "Windows",
    description: "界面美观操作简便，占用空间较大，官网下载需自行安装汉化。",
    features: ["轻松上手", "分流强大", "界面美观"],
    downloads: {
      github: "https://github.com/Fndroid/clash_for_windows_pkg/releases",
      alternative: "https://d3.netfiles.pw/v2/windows/Clash.for.Windows.Setup.0.19.15.exe"
    }
  },
  {
    name: "Clash Verge",
    category: "代理工具",
    icon: "https://pp.myapp.com/ma_icon/0/icon_54397632_1724394093/256",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "Clash 的变体，资源占用小，自定义皮肤，配置文件管理和增强。",
    features: ["轻松上手", "分流强大", "界面美观", "插件众多"],
    downloads: {
      github: "https://github.com/zzzgydi/clash-verge/releases",
      official: "https://clashverge.net/"
    }
  },
  {
    name: "clash-verge-rev",
    category: "代理工具",
    icon: "https://pp.myapp.com/ma_icon/0/icon_54397632_1724394093/256",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "原本软件基础上的升级改版，功能更强、界面更舒适",
    features: ["轻松上手", "分流强大", "界面美观", "插件众多"],
    downloads: {
      github: "https://github.com/clash-verge-rev/clash-verge-rev",
      official: "https://clashverge.net/clash-verge-rev/"
    }
  },
  {
    name: "Clash.Net",
    category: "代理工具",
    icon: "https://linux.do/uploads/default/original/3X/9/b/9bc586bba07cc2b81c368186d0a387d2fdf083af.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "依赖于 .Net 运行的轻量级 Clash，原生支持中文，项目已删库，列出最后一版下载地址。",
    features: ["使用方便", "界面美观", "配置多样", "占用极低"],
    downloads: {
      github: "https://github.com/V2RaySSR/Clash.Net/releases"
    }
  },
  {
    name: "ClashWeb",
    category: "代理工具",
    icon: "https://pp.myapp.com/ma_icon/0/icon_54397632_1724394093/256",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "轻量级 Clash，`withoutPython` 版本依赖 Python 环境，基本操作同 CFW。",
    features: ["流量监测", "上手容易", "资源丰富", "界面美观"],
    downloads: {
      official: "https://merlinblog.xyz/wiki/clashweb.html",
      alternative: "https://musetransfer.com/s/ukmtdumku"
    }
  },
    {
    name: "Hiddify-next",
    category: "代理工具",
    icon: "https://store-images.s-microsoft.com/image/apps.11245.14155126203361258.5bed0304-dfff-4ff6-8d04-2e8186b86297.04f73a7e-fb28-451a-9e5a-3bc55ebe67bf",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "多平台支持，使用便捷，高效顺滑",
    features: ["多平台", "页面简洁"],
    downloads: {
      github: "https://github.com/hiddify/hiddify-next/releases",
      official: "https://hiddify.me/"
    }
  },
  {
    name: "sing-box",
    category: "代理工具",
    icon: "https://sing-box.org/wp-content/uploads/2023/12/1702057725-favicon.png",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "少有的免费，支持多平台（Win/Android/iOS/Apple TV）。",
    features: ["风格独特", "配置特殊", "全端免费"],
    downloads: {
      github: "https://github.com/SagerNet/sing-box",
      official: "https://singbox.app/official/"
    }
  },

  // --- Small Cards ---
  {
    name: "ClashN",
    category: "代理工具",
    icon: "https://clashn.org/images/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "空间占用较小，zip 解压安装；注意需额外安装 .NET Runtime 才能运行。",
    features: ["界面整洁", "自定义高"],
    downloads: {
      github: "https://github.com/2dust/clashN/releases",
      official: "https://clashn.org/official.html",
      alternative: "https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"
    }
  },
  {
    name: "v2ray-plugin",
    category: "代理工具",
    icon: "https://pp.myapp.com/ma_icon/0/icon_53508470_1558506304/256",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "老牌软件，shadowsocks 插件。",
    features: ["老牌软件"],
    downloads: {
      github: "https://github.com/shadowsocks/v2ray-plugin"
    }
  },
  {
    name: "v2RayN(32位)",
    category: "代理工具",
    icon: "https://pp.myapp.com/ma_icon/0/icon_53508470_1558506304/256",
    size: "small",
    rating: "4.0",
    platform: "Windows (32-bit)",
    description: "32 位版本，兼容性更好，适合老机器，zip 解压安装，无需汉化。",
    features: ["老牌软件", "老设备专用"],
    downloads: {
      official: "https://download.sakura-cat.club/directlink/1/v2rayN-v5.9.zip",
      alternative: "https://download.oneok.cloud/v2rayN-v5.9.zip"
    }
  },
  {
    name: "Qv2ray",
    category: "代理工具",
    icon: "https://dashboard.snapcraft.io/site_media/appmedia/2020/07/qv2ray.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "目前已停止维护，听说对 Win7 支持比较好。",
    features: ["停止维护", "老设备专用"],
    downloads: {
      github: "https://github.com/Qv2ray/Qv2ray/releases"
    }
  },
  {
    name: "v2rayW",
    category: "代理工具",
    icon: "https://vpsgongyi.com/wp-content/uploads/2019/12/v2rayw-logo-150x150.jpg?v=1596264812",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "",
    features: ["老牌软件"],
    downloads: {
      github: "https://github.com/Cenmrev/V2RayW/releases",
      official: "https://clash-n.com/"
    }
  },
  {
    name: "Shadowsocks",
    category: "代理工具",
    icon: "https://hailbytes.com/wp-content/uploads/2022/07/shadowsocks-logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "支持 ss 插件的客户端（协议/软件同名）。",
    features: ["先驱软件"],
    downloads: {
      github: "https://github.com/shadowsocks/shadowsocks-windows"
    }
  },
  {
    name: "Netch",
    category: "代理工具",
    icon: ".https://ts4.tc.mm.bing.net/th/id/OIP-C.-u9KdY-qwW99dSy_ZcXDYQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "体积小，全局代理效果好。",
    features: ["游戏加速"],
    downloads: {
      github: "https://github.com/NetchX/Netch/releases",
      alternative: "https://d2.netfiles.pw/v2/windows/Netch-v1.9.2.7z"
    }
  },
  {
    name: "nekoray",
    category: "代理工具",
    icon: "https://en.nekoray.org/wp-content/uploads/2024/01/NekoRay.png",
    size: "small",
    rating: "4.0",
    platform: "全平台",
    description: "全平台支持，有插件可选；不支持 32 位，Win7 以下可能不可用。",
    features: ["性能强悍", "bug少"],
    downloads: {
      github: "https://github.com/MatsuriDayo/nekoray/releases",
      official: "https://matsuridayo.github.io/download/"
    }
  },
  {
    name: "karing",
    category: "代理工具",
    icon: "https://karing.app/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "多平台",
    description: "多平台，新软件。",
    features: ["其他软件"],
    downloads: {
      github: "https://github.com/KaringX/karing"
    }
  },
  {
    name: "ClashPro",
    category: "代理工具",
    icon: "https://en.clashop.org/wp-content/uploads/2024/10/logo-2.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "新软件。",
    features: ["老牌软件"],
    downloads: {
      github: "https://github.com/KaringX/ClashPro/releases"
    }
  }
];








