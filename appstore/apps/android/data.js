// apps/android/data.js

export const androidApps = [
  // --- Large Cards ---
  {
    name: "Clash For Android",
    category: "代理工具",
    icon: "https://clashe.org/wp-content/uploads/2024/10/logo-2.png", // Placeholder icon
    size: "large",
    rating: "5.0",
    platform: "Android",
    description: "资源占用较低（参考值：27.58MB）。高阶操作需配置代码，可单独开热点，不可单独混淆。",
    features: ["低资源占用", "配置灵活", "支持热点"],
    downloads: {
      github: "https://github.com/Kr328/ClashForAndroid/releases",
      alternative: "https://musetransfer.com/s/25jgukrue",
      appStore: "https://play.google.com/store/search?q=clash&c=apps&hl=zh_CN",
      official: "https://d3.netfiles.pw/v2/android/ClashForAndroid-v2.5.4.apk"
    }
  },
  {
    name: "v2RayNG",
    category: "代理工具",
    icon: "https://ts2.tc.mm.bing.net/th/id/OIP-C.bvgPvhC-0YJnoR_lkJT2sAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", // Placeholder icon
    size: "large",
    rating: "5.0",
    platform: "Android",
    description: "资源占用较高（参考值：60.23MB）。高阶操作无需代码，可单独开热点（鸿蒙系统热点可能有Bug），可单独混淆。",
    features: ["图形化操作", "支持热点", "支持混淆"],
    downloads: {
      github: "https://github.com/2dust/v2rayNG/releases",
      alternative: "https://musetransfer.com/s/0z1ny21fc",
      appStore: "https://play.google.com/store/search?q=v2ray&c=apps&hl=zh_CN",
      official: "https://d3.netfiles.pw/v2/android/v2rayNG-v1.7.3.apk"
    }
  },
  {
    name: "ClashMeta",
    category: "代理工具",
    icon: "https://mogua.co/download/99b5fb7dda6fe114e45fdc3b6d170358-icon.png", // Placeholder icon
    size: "large",
    rating: "5.0",
    platform: "多平台",
    description: "多平台支持，详情可查阅Wiki。",
    features: ["多平台", "Meta核心", "文档齐全"],
    downloads: {
      github: "https://github.com/MetaCubeX/ClashMetaForAndroid/",
      alternative: "https://musetransfer.com/s/y43osk4bw",
      appStore: "https://play.google.com/store/apps/details?id=com.github.metacubex.clash.meta",
      official: "https://clashmeta.xyz/"
    }
  },
  {
    name: "FIClash",
    category: "代理工具",
    icon: "https://www.clashis.com/wp-content/uploads/2024/11/cropped-Clash-logo.png", // Placeholder icon
    size: "large",
    rating: "5.0",
    platform: "全平台",
    description: "基于ClashMeta，Material You设计风格，全平台，资源占用较大。",
    features: ["ClashMeta内核", "Material You", "全平台"],
    downloads: {
      github: "https://github.com/chen08209/FlClash"
    }
  },

  // --- Medium Cards ---
  {
    name: "OneClick",
    category: "代理工具",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAA0CAMAAACOwPcAAAAAV1BMVEUAAAAwMDAwMDAyMjIwMDAyMjIwMDAzMzMzMzMyMjIzMzMzMzMyMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIzMzMyMjIyMjIzMzMzMzMzMzMxMTEwMDAzMzM6ye9sAAAAHHRSTlMAEDBgQO8g8L/QoM+Qn+BQwIBwj6/ff29fsD9P0jF5gwAAAt9JREFUeF6l2Omy4ygMBeAjwOB9i53ljt7/OcfVlbQKbKy47/czZeqgIAIx9n4eXbnyZi3vP/gn5rE0vCnK5f5DUDwXjhSdw0X+tnKkeXhk0b3gvfWJC1zJBzqTq1EStVQ9MdUR9qjkvMZBB19yXjEgZQo+1REUdOdzNyVSn2fKrKxZSIlUhqTurONSiex5p3DIMA3vBN7r8EHxiGpyhA25Ng2+49CQzvllPTZw88iRAW8tC649BIZkTEnYu3GktwRBU2BRvMc7FqNHwsWpq1E2WbBIUMuixh9N8knKhrh/T5eyJexZFi75YMIhekWVPPId3zscMiHu3SZbpRjCcffB6kWmz3nASL8Ssnx1uFMfLDgMyKtlYoAssAfOB4mGsEHHgqvz8f37qdkAq/rNSiOIaRdZkz68mj02XitTOFnUeRc5Q/OafTr7ChrpPptuy2BxQStLq6NKIhsWweCKMfkl1EODSyP7a5GyOwnfoDGY9CCqCNfwB77kL0f+PlON1Cltq2xUNVKv83pkDZWe+ftIXa9k6pHmhovG6CxV3XaRQ5G7++rHxQRNepDYv3U310JnfhuhouUwctN4XGD4g6CgJhO5KQw0T5lX4Lfpyi9BcMnqFhbnHHNzN8mCFoQzNoo0n2NGKO1b8obXmwEw8EenNGwaCdCo3LeFjbq91896+DJz86nTq6++MA7AJIMMvvk/MlJy5osbqe3XY0MhagStSK4RsayXaiSS7W7UQ32xYQ9vSWLxSLmC4zI3FYv1eZoYXO6+LTp/8l7jM95HM23kTdR/XcGsn5ZUc2x5fp4zjyiR22RNRFGWy30pOdUiwwZONOWtK8uVY1XcCLreIctUrONAEJhY1RLOTKwKBhF7vUi9VK0ZXOATE0E3B05of6L8K/+4x1eo5Zx+wCE3Kok6X/ORMCHL1YFjfetxCc0VJ17q2TqNPb+Nk8F18PMYPlMe2wHfMW5D+AVyG4Mj/wNAbPJj5VpeAgAAAABJRU5ErkJggg==", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android, iOS",
    description: "资源占用较低（参考值：57.45MB）。苹果和安卓端都有此软件、免费，可单独开热点。",
    features: ["多平台支持", "类似v2", "界面美观"],
    downloads: {
      official: "https://oneclick.earth/#/",
      appStore: "https://play.google.com/store/apps/details?id=earth.oneclick"
    }
  },
  {
    name: "NekoBoxForAndroid",
    category: "代理工具",
    icon: "https://getnekobox.com/wp-content/uploads/2023/11/logo.webp", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "全平台",
    description: "资源占用较低（参考值：50.89MB）。全平台覆盖，使用sing-box内核，有插件可选，功能实用，比较推荐。",
    features: ["多平台支持", "性能强悍", "bug少"],
    downloads: {
      github: "https://github.com/MatsuriDayo/NekoBoxForAndroid",
      alternative: "https://musetransfer.com/s/vnfu2gpto",
      appStore: "https://play.google.com/store/apps/details?id=moe.nb4a",
      official: "https://matsuridayo.github.io/"
    }
  },
  {
    name: "Matsuri",
    category: "代理工具",
    icon: "https://matsuridayo.github.io/assets/images/matsuri1.jpg", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android",
    description: "资源占用较低（参考值：50.64MB）。和NB4A一个作者，为长期版本，可将节点添加到桌面。",
    features: ["多平台支持", "性能强悍", "bug少"],
    downloads: {
      github: "https://github.com/MatsuriDayo/Matsuri",
      alternative: "https://musetransfer.com/s/qusu1bsni",
      appStore: "https://play.google.com/store/apps/details?id=moe.matsuri.lite"
    }
  },
  {
    name: "Hiddify",
    category: "代理工具",
    icon: "https://hiddify.com/assets/ic_hiddify_wiki.png", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android",
    description: "简单易用，多平台支持",
    features: ["使用便捷", "多平台", "功能简约"],
    downloads: {
      official: "https://hiddify.com",
      appStore: "https://play.google.com/store/apps/details?id=ang.hiddify.com"
    }
  },
  {
    name: "Hiddify-next",
    category: "代理工具",
    icon: "https://hiddifynext.org/wp-content/uploads/2024/06/1717385658-favicon.png", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android",
    description: "简单易用，多平台支持，轻量版",
    features: ["使用便捷", "多平台", "功能简约", "轻量版"],
    downloads: {
      github: "https://github.com/hiddify/hiddify-next/releases",
      appStore: "https://play.google.com/store/apps/details?id=app.hiddify.com"
    }
  },
  {
    name: "sing-box",
    category: "代理工具",
    icon: "https://sing-box.org/wp-content/uploads/2023/12/1702057725-favicon.png", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android, Win, iOS, Apple TV",
    description: "少有的免费，支持安卓、Win、iOS、Apple TV的软件。",
    features: ["免费使用", "配置独特", "界面清爽"],
    downloads: {
      github: "https://github.com/SagerNet/sing-box"
    }
  },
  {
    name: "karing",
    category: "代理工具",
    icon: "https://karing.app/img/logo.png", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "多平台，新软件。",
    features: ["新起之秀", "多平台支持", "界面美观"],
    downloads: {
      github: "https://github.com/KaringX/karing"
    }
  },
  {
    name: "Clash MultuPlatform",
    category: "代理工具",
    icon: "https://ts2.tc.mm.bing.net/th/id/OIP-C.IisKG27ugAKDyVq-fDkjFwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    description: "cfa作者在cfa之后的多平台代理软件，目前删库。",
    features: ["多平台", "已删库"],
    downloads: {
      official: "https://t.me/c/1834195052/42",
      alternative: "https://musetransfer.com/s/q5ot9fud0"
    }
  },
  {
    name: "Clash You",
    category: "代理工具",
    icon: "https://ts2.tc.mm.bing.net/th/id/OIP-C.IisKG27ugAKDyVq-fDkjFwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", // Placeholder icon
    size: "medium",
    rating: "4.5",
    platform: "Android",
    description: "于2023年停止更新，MD3设计风格的Clash。",
    features: ["新起之秀", "界面美观"],
    downloads: {
      github: "https://github.com/Yos-X/ClashYou/releases"
    }
  },

  // --- Small Cards ---
  {
    name: "Shadowrocket",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "资源占用较高（参考值：98.24MB）。自带免费节点，可单独开热点，可单独用混淆。",
    features: [],
    downloads: {
      appStore: "https://play.google.com/store/apps/details?id=com.v2cross.shadowrocket"
    }
  },
  {
    name: "Kitsunebi",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/eycorsican/kitsunebi-android/releases",
      alternative: "https://apkpure.com/kitsunebi/fun.kitsunebi.kitsunebi4android",
      appStore: "https://play.google.com/store/apps/details?id=fun.kitsunebi.kitsunebi4android&hl=zh_CN"
    }
  },
  {
    name: "BifrostV",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "",
    features: [],
    downloads: {
      official: "https://apkpure.com/cn/bifrostv/com.github.dawndiy.bifrostv",
      alternative: "https://github.com/wchenyi/wall/raw/gh-pages/%E5%AE%89%E5%8D%93/BifrostV.apk",
      appStore: "https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv"
    }
  },
  {
    name: "SagerNet",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "类似v2rayng的软件，但是支持的协议比较多。",
    features: [],
    downloads: {
      github: "https://github.com/SagerNet/SagerNet/releases/",
      appStore: "https://play.google.com/store/apps/details?id=io.nekohasekai.sagernet"
    }
  },
  {
    name: "Tinyproxy",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "资源占用较高（参考值：98.24MB）。需代码，可单独用混淆，可单独开热点。",
    features: [],
    downloads: {
      official: "https://tinyproxy.github.io",
      alternative: "https://github.com/wchenyi/wall/raw/gh-pages/%E5%AE%89%E5%8D%93/TinyProxy.apk"
    }
  },
  {
    name: "Pharos Pro",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/PharosVip/Pharos-Android-Test/releases"
    }
  },
  {
    name: "ssrray",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "对免流设置和检测页面友好，资源占用较高（参考值：116MB）。",
    features: [],
    downloads: {
      github: "https://github.com/xxf098/shadowsocksr-v2ray-trojan-android/releases"
    }
  },
  {
    name: "ClashA",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "已停止更新，已有各版本仍可使用。",
    features: [],
    downloads: {
      official: "https://github.com/ccg2018/ClashA/releases"
    }
  },
  {
    name: "ClashAR",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/Qv2ray/Qv2ray"
    }
  },
  {
    name: "ClashR",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "",
    features: [],
    downloads: {
      github: "https://github.com/naicfeng/ClashRForAndroid/releases"
    }
  },
  {
    name: "Shadowsocksr",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "可单独用混淆，是协议，也有同名网站。",
    features: [],
    downloads: {
      github: "https://github.com/shadowsocksr-backup/shadowsocksr-android/releases",
      appStore: "https://play.google.com/store/apps/details?id=com.hdev.shadowsocksr"
    }
  },
  {
    name: "Shadowsocks",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "是协议，也有同名软件。",
    features: [],
    downloads: {
      github: "https://github.com/shadowsocks/shadowsocks-android/releases",
      appStore: "https://play.google.com/store/search?q=Shadowsocks&c=apps"
    }
  },
  {
    name: "igniter",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "专为Trojan协议的客户端。",
    features: [],
    downloads: {
      github: "https://github.com/trojan-gfw/igniter/releases",
      appStore: "https://play.google.com/store/search?q=igniter&c=apps"
    }
  },
  {
    name: "v2flyNG",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "和v2rayNG是同一个作者，是v2rayNG的付费版本。",
    features: [],
    downloads: {
      github: "https://github.com/2dust/v2flyNG/releases",
      appStore: "https://play.google.com/store/apps/details?id=com.v2ray.v2fly"
    }
  },
  {
    name: "Trojan",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "是协议，也有同名软件。",
    features: [],
    downloads: {
      appStore: "https://play.google.com/store/apps/details?id=com.crosserr.trojan"
    }
  },
  {
    name: "AnXray",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "Android系统Trojan客户端，GitHub已经删库。",
    features: [],
    downloads: {
      official: "https://itlanyan.com/download.php?filename=/v2/android/AnXray-v0.4rc06.apk"
    }
  },
  {
    name: "Outline",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "多平台",
    description: "多平台，谷歌团队神秘加成。",
    features: [],
    downloads: {
      official: "https://getoutline.org/zh-CN/",
      github: "https://github.com/Jigsaw-Code/outline-client/releases/tag/v1.10.0-2",
      appStore: "https://play.google.com/store/apps/details?id=org.outline.android.client"
    }
  },
  {
    name: "clash-rev",
    category: "代理工具",
    icon: "./src/img/logo.png", // Placeholder icon
    size: "small",
    rating: "4.0",
    platform: "Android",
    description: "clash删库后继承的项目，目前为了不必要的竞争，已经存档。",
    features: [],
    downloads: {
      github: "https://github.com/MerlinKodo/clash-rev"
    }
  }
];


