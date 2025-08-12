// 文件路径: apps/apple/data.js
// 请使用这份修正后的代码替换您的原文件内容

// apps/apple/data.js

export const appleApps = [
  // --- 移动端 Large（保留原内容） ---
  {
    name: "Shadowrocket",
    category: "工具",
    icon: "https://tse2-mm.cn.bing.net/th/id/OIP-C.40By2FzjfROxeyc5iNfDKQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3.png",
    size: "large",
    rating: "4.9",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "一个类似于v2ray的代理软件，调整单个节点非常方便。",
    features: ["轻松上手", "同步数据", "支持性高", "快捷指令"],
    downloads: {
      official: "https://www.shadowrocket.vip/",
      appStore: "https://apps.apple.com/us/app/shadowrocket/id932747118?l=zh"
    }
  },
  {
    name: "Stash",
    category: "工具",
    icon: "https://stash.ws/images/logo.png",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    type: "mobile",
    description: "一个类似于clash的应用。",
    features: ["轻松上手", "界面美观", "可玩性高", "分流强大"],
    downloads: {
      official: "https://stash.ws/",
      appStore: "https://apps.apple.com/us/app/stash/id1596063349?l=zh"
    }
  },
  {
    name: "Surge",
    category: "工具",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d95c6b68ac743d408421ef2da6495e15_CDR8eISWz8.png",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    type: "mobile",
    description: "很强大的网络工具，它能做很多很棒的事情。",
    features: ["功能强大", "界面美观", "运行速度快"],
    downloads: {
      official: "https://www.nssurge.com/",
      appStore: "https://apps.apple.com/us/app/surge-5/id1442620678?l=zh"
    }
  },
  {
    name: "Quantumult X",
    category: "工具",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/0339a5e47f21ea6bc98357e83cdc1f13_low_res_quantumult_x.png",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    type: "mobile",
    description: "很强大的网络工具，它能做很多很棒的事情。",
    features: ["功能强大", "界面美观", "自定义程度高"],
    downloads: {
      official: "https://quantumultx.org/",
      appStore: "https://apps.apple.com/us/app/quantumult-x/id1443988620?l=zh",
      github: "https://github.com/crossutility/Quantumult-X",
      alternative: "https://.../powertoys.zip"
    }
  },

  // --- 移动端 Medium ---
  {
    name: "OneClick",
    category: "工具",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAA0CAMAAACOwPcAAAAAV1BMVEUAAAAwMDAwMDAyMjIwMDAyMjIwMDAzMzMzMzMyMjIzMzMzMzMyMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIzMzMyMjIyMjIzMzMzMzMzMzMxMTEwMDAzMzM6ye9sAAAAHHRSTlMAEDBgQO8g8L/QoM+Qn+BQwIBwj6/ff29fsD9P0jF5gwAAAt9JREFUeF6l2Omy4ygMBeAjwOB9i53ljt7/OcfVlbQKbKy47/czZeqgIAIx9n4eXbnyZi3vP/gn5rE0vCnK5f5DUDwXjhSdw0X+tnKkeXhk0b3gvfWJC1zJBzqTq1EStVQ9MdUR9qjkvMZBB19yXjEgZQo+1REUdOdzNyVSn2fKrKxZSIlUhqTurONSiex5p3DIMA3vBN7r8EHxiGpyhA25Ng2+49CQzvllPTZw88iRAW8tC649BIZkTEnYu3GktwRBU2BRvMc7FqNHwsWpq1E2WbBIUMuixh9N8knKhrh/T5eyJexZFi75YMIhekWVPPId3zscMiHu3SZbpRjCcffB6kWmz3nASL8Ssnx1uFMfLDgMyKtlYoAssAfOB4mGsEHHgqvz8f37qdkAq/rNSiOIaRdZkz68mj02XitTOFnUeRc5Q/OafTr7ChrpPptuy2BxQStLq6NKIhsWweCKMfkl1EODSyP7a5GyOwnfoDGY9CCqCNfwB77kL0f+PlON1Cltq2xUNVKv83pkDZWe+ftIXa9k6pHmhovG6CxV3XaRQ5G7++rHxQRNepDYv3U310JnfhuhouUwctN4XGD4g6CgJhO5KQw0T5lX4Lfpyi9BcMnqFhbnHHNzN8mCFoQzNoo0n2NGKO1b8obXmwEw8EenNGwaCdCo3LeFjbq91896+DJz86nTq6++MA7AJIMMvvk/MlJy5osbqe3XY0MhagStSK4RsayXaiSS7W7UQ32xYQ9vSWLxSLmC4zI3FYv1eZoYXO6+LTp/8l7jM95HM23kTdR/XcGsn5ZUc2x5fp4zjyiR22RNRFGWy30pOdUiwwZONOWtK8uVY1XcCLreIctUrONAEJhY1RLOTKwKBhF7vUi9VK0ZXOATE0E3B05of6L8K/+4x1eo5Zx+wCE3Kok6X/ORMCHL1YFjfetxCc0VJ17q2TqNPb+Nk8F18PMYPlMe2wHfMW5D+AVyG4Mj/wNAbPJj5VpeAgAAAABJRU5ErkJggg==",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，安卓端也有此软件，覆盖基础功能，可单独开热点。",
    features: ["功能强大", "界面美观", "自定义程度高"],
    downloads: {
      official: "https://oneclick.earth/#/",
      appstore: "https://apps.apple.com/us/app/oneclick-safe-easy-fast/id1545555197"
    }
  },
  {
    name: "Kitsunebi",
    category: "工具",
    icon: "https://wiki.fbi.company/~gitbook/image?url=https%3A%2F%2F1006315213-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-M0AxUKb5Wx76XNkBuNG%252F-M0ISft7jSr6hlWTE_du%252F-M0ITvcxNE_KMlqJXfZ_%252Funnamed.webp.jpg%3Falt%3Dmedia%26token%3D75ed23ba-4a72-4467-9ce6-9a7cda47cafe&width=768&dpr=1&quality=100&sign=1650d327&sv=2",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能，可单独开热点，多平台支持。",
    features: ["功能强大", "界面美观", "自定义程度高"],
    downloads: {
      appStore: "https://apps.apple.com/us/app/kitsunebi-proxy-utility/id1446584073"
      
    }
  },
  {
    name: "Egern",
    category: "工具",
    icon: "https://egernapp.com/zh-CN/img/logo.svg",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能。",
    features: ["功能强大", "界面美观", "自定义程度高"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/egern/id1616105820",
      official: "https://egernapp.com/zh-CN/"
    }
  },
  {
    name: "LanceX",
    category: "工具",
    icon: "https://shadowboat.app/lancex/doc/apple-touch-icon.png",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/lancex/id1536754048",
      official: "https://shadowboat.app/lancexapp/"
    }
  },
  {
    name: "PuffGlide",
    category: "工具",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/42/c3/0a/42c30acc-b3d0-8279-f1b2-e77be1a725fd/AppIcon-0-0-1x_U007epad-0-85-220.png/1200x1200mv.webp",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/puff-glide/id6463709890",
      
    }
  },
  {
    name: "Loon",
    category: "工具",
    icon: "https://nsloon.uk/logo.webp",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: " iOS 平台上功能最强大、最灵活的网络代理工具之一。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/loon/id1373567447",
      official: "https://nsloon.uk/    "
    }
  },
  {
    name: "Loon-lite",
    category: "工具",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/e2/a8/1f/e2a81f83-7fa7-34cc-6779-648955d2a159/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/180x180bb.png",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: " Loon的轻量版，更低价格",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/loon-lite/id6444029612",
      official: "https://nsloon.uk/"
    }
  },
  {
    name: "Hiddify-next",
    category: "工具",
    icon: "https://hiddifynext.org/wp-content/uploads/2024/06/1717385658-favicon.png",
    size: "medium",
    rating: "4.5",
    platform: "多平台",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      official: "https://hiddify.com"
    }
  },
  {
    name: "Choc",
    category: "工具",
    icon: "https://choc.watfaq.com/~gitbook/image?url=https%3A%2F%2F1265905731-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FE8jwTAUjXK597fB3tJQ5%252Ficon%252FWn6Ik9v9MZi3wvczJmsa%252F389FEE9C-4316-4863-95EC-B5A1D3057587.png%3Falt%3Dmedia%26token%3D64841706-23d9-4b69-bec5-8fdcf1a9708d&width=32&dpr=4&quality=100&sign=c9fe395d&sv=2",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端clash同源软件。",
    features: ["界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/choc/id1582542227",
      official: "https://choc.watfaq.com/"
    }
  },
  {
    name: "ClashX",
    category: "工具",
    icon: "https://www.mtmup.com/wp-content/uploads/2024/04/ClashX-Pro-150x150.png",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端免费软件，覆盖基础功能。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/hk/app/clashx-服务监控面板/id6444824570",
      official: "https://clashx.wiki/official/"
    }
  },
  {
    name: "Clash Dash",
    category: "工具",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/09/74/b5/0974b5a4-ba7b-90a5-9967-e5924b7b0bf9/AppIcon-0-0-1x_U007epad-0-1-85-220.png/300x300bb.png",
    size: "medium",
    rating: "4.5",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端软件，原生开发。",
    features: ["功能强大", "界面美观", "简易便捷"],
    downloads: {
      appStore: "https://apps.apple.com/cn/app/clash-dash/id6738882561?platform=iphone",
      github: "https://github.com/bin64/Clash-Dash"
    }
  },
   {
   name: "sing-box",
  category: "工具",
  icon: "https://sing-box.org/wp-content/uploads/2023/12/1702057725-favicon.png",
  size: "medium",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，多平台支持。",
  features: ["独特配置", "界面简约", "多平台支持"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/sing-box/id6451272673",
    official: "https://sing-box.sagernet.org/zh/"
  }
},

  // --- 移动端 Small ---
  {
    name: "Leaf VPN",
    category: "工具",
    icon: "https://img.samsungapps.com/productNew/000005892052/IconImage_20240812091247736_NEW_WAP_ICON_512_512.png",
    size: "small",
    rating: "4.0",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端软件，本质是VPN。",
    features: [ "界面美观", "上手容易"],
    downloads: {
      appStore: "https://apps.apple.com/us/app/leaf-vpn/id1534109007",
      official: "https://leaf-vpn.net/"
    }
  },
  {
    name: "i2Ray",
    category: "工具",
    icon: "https://i2ray.com/i2Ray_files/logo.png",
    size: "small",
    rating: "4.0",
    platform: "iOS, iPadOS",
    type: "mobile",
    description: "苹果端软件，软件免费，v2内核。",
    features: [ "界面美观", "上手容易"],
    downloads: {
      appStore: "https://apps.apple.com/us/app/i2ray/id1445270056",
      official: "https://i2ray.com/"
    }
  },
{
  name: "Brook",
  category: "工具",
  icon: "https://raw.githubusercontent.com/zhaoolee/GraphBed/master/images/e5e30a212910b3b180dfb36f7737325a.png",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "小众软件", "上手容易", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/brook-not-just-proxy/id1216002642"
  }
},
{
  name: "ShadowLink",
  category: "工具",
  icon: "https://ts2.tc.mm.bing.net/th/id/OIP-C.pyzQgbjdT_mWX31gkokpXgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费，内置节点。",
    features: [ "套壳代理", "上手容易", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/shadowlink-shadowsocks-proxy/id1439686518",
    official: "https://docs.shadowlink.vip/"
  }
},
{
  name: "ConnectSPro",
  category: "工具",
  icon: "https://images.dwncdn.net/images/t_app-icon-s/p/be267d1d-42b1-4a56-9301-c91d80e8077a/2705836743/2094_4-78500211-logo",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "软件免费", "上手容易", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/connectspro/id1442910378"
  }
},
{
  name: "Mume",
  category: "工具",
  icon: "https://pic.psp99.com/psp99/imgfile/20240718/18143259lvzd.png",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "软件免费", "软件开源", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/mume-vpn/id1144787928"
  }
},
{
  name: "FlyRouter",
  category: "工具",
  icon: "https://ts4.tc.mm.bing.net/th/id/OIP-C.XzOwOIPf-1nN_n6C4hs6zgHaD4",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "软件免费", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/flyrouter/id1354248771"
  }
},
{
  name: "Potatso",
  category: "工具",
  icon: "https://potatso.net/wp-content/uploads/2025/05/cropped-potatso-logo.png",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "软件免费", "老牌软件"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/potatso/id1239860606",
    official: "https://potatso.net"
  }
},
{
  name: "Outline",
  category: "工具",
  icon: "https://outline-vpn.com/img/outline-logo.png",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，软件免费。",
    features: [ "软件免费", "老牌软件", "简洁易用"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/outline-app/id1356177741",
    official: "https://outline-vpn.com/img/outline-logo.png"
  }
},
{
  name: "Kitsunebi",
  category: "工具",
  icon: "https://img.jiaochengzhijia.com/uploadfile/2023/0104/20230104115032397.jpg@crop@150x150.jpg",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，可单独开热点，多平台支持。",
    features: ["功能强大", "界面美观", "自定义程度高"],
  downloads: {
    appStore: "https://apps.apple.com/us/app/outline-app/id1356177741"
  }
},
{
  name: "Xurge",
  category: "工具",
  icon: "https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/d7/89/04/d789044a-19b6-3704-a0b0-cea13665178c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，多平台支持。",
    features: ["功能强大", "界面美观", "自定义程度高"],
  downloads: {
    appStore: "https://apps.apple.com/hk/app/xurge-unofficial-surge-helper/id1525585898"
  }
},
{
  name: "ForXray",
  category: "工具",
  icon: "https://image.winudf.com/v2/image1/Y29tLmdpdGh1Yi5mb3hyYXlfaWNvbl8xNjk0MDI3Njg0XzAyNg/icon.webp?w=360&fakeurl=1&type=.webp",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，软件美观。",
    features: ["功能强大", "界面美观"],
  downloads: {
    appStore: "https://apps.apple.com/hk/app/foxray/id6448898396"
  }
},
{
  name: "Chute",
  category: "工具",
  icon: ".src/img/logo.png",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，软件美观。",
  features: ["内置节点", "界面美观", "简单易用"],
  downloads: {
    appStore: "https://apps.apple.com/hk/app/chute-network-toolbox/id1515248945",
    official: "https://www.chute.life/"
  }
},
{
  name: "Spectre",
  category: "工具",
  icon: "https://clashkit.com/wp-content/uploads/2024/05/Spectre-app.webp",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，软件美观。",
  features: ["界面美观", "简单易用"],
  downloads: {
    appStore: "https://apps.apple.com/hk/app/spectre-vpn/id1508712998"
  }
},
{
  name: "v2Box",
  category: "工具",
  icon: "https://play-lh.googleusercontent.com/kVeisXWkT4oRMDsZbFrY7XXJvnxHJ7PnQFE71XCcCWAoeOAg5G3HJRDp4Ro3Xbc3WA=w0",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，软件美观，支持多平台。",
  features: ["界面美观", "简单易用", "多平台支持"],
  downloads: {
    appStore: "https://apps.apple.com/app/id6446814690",
    official: "https://v2box.pro/zh/"
  }
},
{
  name: "Telescope",
  category: "工具",
  icon: "https://www.telescope.name/bundles/starhome/home/telescope/pc-img/logo2.svg",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端免费软件，覆盖基础功能，软件美观，支持多平台。",
  features: ["界面美观", "简单易用", "多平台支持"],
  downloads: {
    appStore: "https://apps.apple.com/hk/app/v2box-v2ray-client/id6446814690",
    officialL: "https://www.telescope.name/"
  }
},
{
  name: "Streisand",
  category: "工具",
  icon: "https://streisandapp.com/_astro/favicon.Cmt8UfjC.svg",
  size: "small",
  rating: "4.0",
  platform: "iOS, iPadOS",
  type: "mobile",
  description: "苹果端软件，内置节点，软件美观。",
  features: ["界面美观", "简单易用", "内置节点"],
  downloads: {
    appStore: "https://apps.apple.com/app/id6450534064",
    official: "https://streisandapp.com/      "    
  }
},

// --- 桌面端 MacOS Large ---
{
  name: "ClashX",
  category: "工具",
  icon: "https://clashx.wiki/wp-content/uploads/2025/01/ClashX.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    official: "https://clashx.wiki/official/",
    alternative: "https://d2.netfiles.pw/v2/macos/ClashX-Pro-v1.70.0.2.dmg",
    github: "https://github.com/bannedbook/ClashX/releases"
  }
},
{
  name: "ClashXMeta",
  category: "工具",
  icon: "https://mogua.co/download/99b5fb7dda6fe114e45fdc3b6d170358-icon.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    github: "https://github.com/MetaCubeX/ClashX.Meta",
    official: "https://clashmetacn.com/"
  }
},
{
  name: "Stash",
  category: "工具",
  icon: "https://stashapp.uk/assets/logo.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端多系统软件。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    official: "https://stash.ws",
    appstore: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349?platform=iphone"
  }
},
{
  name: "Surge for Mac",
  category: "工具",
  icon: "https://i.altapps.net/icons/surge-for-mac-53ae1.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端多系统软件。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    official: "https://nssurge.com"
  }
},
{
  name: "Clash Verge",
  category: "工具",
  icon: "https://zh.opensuse.org/images/6/67/Clash-verge.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端多系统软件，多平台。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    github: "https://github.com/zzzgydi/clash-verge/releases",
    official: "https://clash-verge.com/download/"
  }
},
{
  name: "clash-verge-rev",
  category: "工具",
  icon: "https://clash-verge-rev.org/assets/logo.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
   description: "Clash Verge 的延续。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    github: "https://github.com/clash-verge-rev/clash-verge-rev",
    official: "https://clash-verge-rev.org/"
  }
},
{
  name: "Mihomo Party",
  category: "工具",
  icon: "https://mihomo.party/logo.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "一个更易用的代理客户端。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    github: "https://github.com/pompurin404/mihomo-party/releases",
    official: "https://mihomo.party/"
  }
},
{
  name: "FIClash",
  category: "工具",
  icon: "https://mihomo.party/logo.png",
  size: "large",
  rating: "5.0",
  platform: "MacOS",
  type: "desktop",
  description: "material you设计风格，类surfboard。",
    features: ["功能强大", "界面美观", "简易便捷"],
  downloads: {
    github: "https://github.com/chen08209/FlClash"
  }
},

// --- 桌面端 MacOS Medium ---
{
  name: "Qv2ray",
  category: "工具",
  icon: "https://dashboard.snapcraft.io/site_media/appmedia/2020/07/qv2ray.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "先驱软件"],
  downloads: {
    github: "https://github.com/Qv2ray/Qv2ray/releases"
  }
},
{
  name: "v2rayU",
  category: "工具",
  icon: "https://v2rayudl.org/wp-content/uploads/2023/11/cropped-v2rayu-logo.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "先驱软件"],
  downloads: {
    github: "https://github.com/yanue/V2rayU/releases"
  }
},
{
  name: "V2rayX",
  category: "工具",
  icon: "https://moqingtk.com/wp-content/uploads/2024/04/1713602716-463357.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "先驱软件"],
  downloads: {
    github: "https://github.com/yanue/V2rayU/releases"
  }
},
{
  name: "ShadowsocksX-NG",
  category: "工具",
  icon: "https://www.mac668.com/wp-content/uploads/2021/05/7166f289360d0868932598bc6d783651.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "先驱软件"],
  downloads: {
    github: "https://github.com/shadowsocks/ShadowsocksX-NG/releases"
  }
},
{
  name: "ShadowsocksX-NG-R",
  category: "工具",
  icon: "https://www.itgeeker.net/wp-content/uploads/2016/01/Shadowsocks_logo.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "先驱软件"],
  downloads: {
    github: "https://github.com/qinyuhang/ShadowsocksX-NG-R/releases"
  }
},
{
  name: "Nekoray-MacOS",
  category: "工具",
  icon: "https://nekoray123.com/wp-content/loads/2024/10/NekoRay.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "BUG少"],
  downloads: {
    github: "https://sing-box.org/wp-content/uploads/2023/12/1702057725-favicon-150x150.png",
    official: "https://nekoray123.com/official/"
  }
},
{
  name: "Hiddify-next",
  category: "工具",
  icon: "https://hiddifynext.org/wp-content/uploads/2024/06/1717385658-favicon.png",
  size: "medium",
  rating: "4.5",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件，多平台支持",
    features: ["功能强大", "界面美观", "BUG少"],
  downloads: {
    official: "https://hiddify.com",
    alternative: "https://github.com/hiddify/hiddify-next/releases"
  }
},


// --- 桌面端 MacOS Small ---
{
  name: "Trojan-Qt5",
  category: "工具",
  icon: "https://ts4.tc.mm.bing.net/th/id/OIP-C.HMYQE__TFlW-jhYbx2uc0gHaIG?rs=1&pid=ImgDetMain&o=7&rm=3",
  size: "small",
  rating: "4.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件",
  features: ["老牌软件"],
  downloads: {
    official: "https://itlanyan.com/download.php?filename=/trojan/Trojan-Qt5-v1.4.0.dmg",
    alternative: "https://itlanyan.com/go.php?key=trojan-qt5-config"
  }
},
{
  name: "Trojan-MacOS",
  category: "工具",
  icon: "https://img.88icon.com/download/jpg/202007/d5ebeeec84ac3ab2e0e87e7c477c978d_256_256.jpg!bg",
  size: "small",
  rating: "4.0",
  platform: "MacOS",
  type: "desktop",
  description: "苹果端免费软件",
  features: ["老牌软件"],
  downloads: {
    github: "https://github.com/trojan-gfw/trojan/releases",
    alternative: "https://itlanyan.com/go.php?key=trojan-mac-config"
  }
},
];










