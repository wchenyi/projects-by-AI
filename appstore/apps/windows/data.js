// 请在这里管理您的 Windows 应用
// 这是一个 JavaScript 数组，里面包含了多个应用对象。
// 每个 {...} 就是一个应用。复制一份并修改内容即可添加新应用。
// apps/windows/data.js

export const windowsApps = [
  // --- Large Cards ---
  {
    name: "Clash For Windows",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "large",
    rating: "5.0",
    platform: "Windows",
    description: "界面美观操作简便，占用空间较大，官网下载需自行安装汉化。",
    features: [],
    downloads: {
      github: "https://github.com/Fndroid/clash_for_windows_pkg/releases",
      alternative: "https://d3.netfiles.pw/v2/windows/Clash.for.Windows.Setup.0.19.15.exe"
    }
  },
  {
    name: "v2RayN-Core",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "large",
    rating: "5.0",
    platform: "Windows",
    description: "小白操作，空间占用小，zip解压安装，无需汉化，不支持ss插件。",
    features: [],
    downloads: {
      github: "https://github.com/2dust/v2rayN/releases",
      alternative: "https://d2.netfiles.pw/v2/windows/v2rayN-v5.9.zip"
    }
  },

  // --- Medium Cards ---
  {
    name: "Clash Verge",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "Clash 的变体，资源占用小，自定义皮肤，配置文件管理和增强。",
    features: [],
    downloads: {
      github: "https://github.com/zzzgydi/clash-verge/releases",
      official: "https://clashverge.net/"
    }
  },
  {
    name: "clash-verge-rev",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/clash-verge-rev/clash-verge-rev",
      official: "https://clashverge.net/clash-verge-rev/"
    }
  },
  {
    name: "Clash.Net",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "依赖于 .Net 运行的轻量级 Clash，原生支持中文，项目已删库，列出最后一版下载地址。",
    features: [],
    downloads: {
      github: "https://github.com/V2RaySSR/Clash.Net/releases"
    }
  },
  {
    name: "ClashWeb",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "轻量级 Clash，`withoutPython` 版本依赖 Python 环境，基本操作同 CFW。",
    features: [],
    downloads: {
      official: "https://merlinblog.xyz/wiki/clashweb.html",
      alternative: "https://musetransfer.com/s/ukmtdumku"
    }
  },
  {
    name: "ClashMeta",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/MetaCubeX/Clash.Meta/releases",
      official: "https://clashmeta.xyz/"
    }
  },
  {
    name: "Mihomo Party",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "Windows",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/pompurin404/mihomo-party/releases"
    }
  },
  {
    name: "Hiddify-next",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "多平台支持。",
    features: [],
    downloads: {
      github: "https://github.com/hiddify/hiddify-next/releases"
    }
  },
  {
    name: "sing-box",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "少有的免费，支持多平台（Win/Android/iOS/Apple TV）。",
    features: [],
    downloads: {
      github: "https://github.com/SagerNet/sing-box"
    }
  },
  {
    name: "F1Clash",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "medium",
    rating: "4.5",
    platform: "全平台",
    description: "基于 ClashMeta，Material You 设计风格，全平台支持。",
    features: [],
    downloads: {
      github: "https://github.com/chen08209/FlClash"
    }
  },

  // --- Small Cards ---
  {
    name: "ClashN",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "空间占用较小，zip 解压安装；注意需额外安装 .NET Runtime 才能运行。",
    features: [],
    downloads: {
      github: "https://github.com/2dust/clashN/releases",
      alternative: "https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime"
    }
  },
  {
    name: "v2ray-plugin",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "shadowsocks 插件。",
    features: [],
    downloads: {
      github: "https://github.com/shadowsocks/v2ray-plugin"
    }
  },
  {
    name: "v2RayN(32位)",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows (32-bit)",
    description: "32 位版本，兼容性更好，适合老机器，zip 解压安装，无需汉化。",
    features: [],
    downloads: {
      official: "https://download.sakura-cat.club/directlink/1/v2rayN-v5.9.zip",
      alternative: "https://download.oneok.cloud/v2rayN-v5.9.zip"
    }
  },
  {
    name: "Qv2ray",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "目前已停止维护，听说对 Win7 支持比较好。",
    features: [],
    downloads: {
      github: "https://github.com/Qv2ray/Qv2ray/releases"
    }
  },
  {
    name: "v2rayW",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/Cenmrev/V2RayW/releases",
      official: "https://clash-n.com/"
    }
  },
  {
    name: "Shadowsocks",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "支持 ss 插件的客户端（协议/软件同名）。",
    features: [],
    downloads: {
      github: "https://github.com/shadowsocks/shadowsocks-windows"
    }
  },
  {
    name: "Netch",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "体积小，全局代理效果好。",
    features: [],
    downloads: {
      github: "https://github.com/NetchX/Netch/releases",
      alternative: "https://d2.netfiles.pw/v2/windows/Netch-v1.9.2.7z"
    }
  },
  {
    name: "nekoray",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "全平台",
    description: "全平台支持，有插件可选；不支持 32 位，Win7 以下可能不可用。",
    features: [],
    downloads: {
      github: "https://github.com/MatsuriDayo/nekoray/releases",
      official: "https://matsuridayo.github.io/download/"
    }
  },
  {
    name: "karing",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "多平台",
    description: "多平台，新软件。",
    features: [],
    downloads: {
      github: "https://github.com/KaringX/karing"
    }
  },
  {
    name: "ClashPro",
    category: "代理工具",
    icon: "./src/img/logo.png",
    size: "small",
    rating: "4.0",
    platform: "Windows",
    description: "新软件。",
    features: [],
    downloads: {
      github: "https://github.com/KaringX/ClashPro/releases"
    }
  }
];




