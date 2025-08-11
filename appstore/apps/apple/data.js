// 文件路径: apps/apple/data.js
// 请使用这份修正后的代码替换您的原文件内容

export const appleApps = [
  {
    // --- 基础信息 ---
    name: "Shadowrocket", // 应用名称
    category: "开发", // 应用的分类，会显示在卡片上
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/3ca3cb3142ee84fb7c9f901271491cea_low_res_shadowrocket.png", // 图标路径
    
    // --- 卡片样式 ---
    size: "large", // 卡片大小
    
    // --- 详情页信息 ---
    rating: "4.9", // 推荐指数/评分
    platform: "iOS, iPadOS", // 支持的平台
    type: "mobile", //  在这里注明是桌面端还是移动端
    description: "一个类似于v2ray的代理软件，调整单个节点非常方便。", // 应用简介
    features: [ // 特色功能列表
      "轻松上手",
      "同步数据",
      "支持性高",
      "快捷指令"
    ],
    downloads: {
      official: "https://www.shadowrocket.vip/", // 官网链接
      appStore: "https://apps.apple.com/us/app/shadowrocket/id932747118?l=zh", // 应用商店链接
    }
  },
  
  {
    name: "Stash",
    category: "工具",
    icon: "https://stash.ws/images/logo.png",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    type: "desktop",
    description: "一个类似于clash的应用。",
    features: [
      "轻松上手",
      "界面美观",
      "可玩性高",
      "分流强大"
    ],
    downloads: {
      official: "https://stash.ws/",
      appStore: "https://apps.apple.com/us/app/stash/id1596063349?l=zh",
    }
  },

  {
    name: "Surge",
    category: "工具",
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d95c6b68ac743d408421ef2da6495e15_CDR8eISWz8.png",
    type: "mobile",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    description: "很强大的网络工具，它能做很多很棒的事情。",
    features: [
      "功能强大",
      "界面美观",
      "运行速度快"
    ],
    downloads: {
      official: "https://www.nssurge.com/",
      appStore: "https://apps.apple.com/us/app/surge-5/id1442620678?l=zh",
    }
  },

  {
    name: "Quantumult X",
    category: "工具",
    // 修正：移除了链接末尾的 "##"
    icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/0339a5e47f21ea6bc98357e83cdc1f13_low_res_quantumult_x.png",
    type: "mobile",
    size: "large",
    rating: "5.0",
    platform: "Mac, IOS, iPadOS, visionOS, TVOS",
    description: "很强大的网络工具，它能做很多很棒的事情。",
    features: [
      "功能强大",
      "界面美观",
      "自定义程度高"
    ],
    downloads: {
      official: "https://quantumultx.org/",
      appStore: "https://apps.apple.com/us/app/quantumult-x/id1443988620?l=zh",
      github: "https://github.com/crossutility/Quantumult-X",
      alternative: "https://.../powertoys.zip"
    }
  },

  {
    name: "Loon-Lite",
    category: "工具",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c0/76/8c/c0768c8e-eacc-ad9c-d1e2-ea6aa30fd6ba/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x1200mv.webp",
    type: "mobile",
    size: "medium",
    rating: "5.0",
    platform: "IOS, iPadOS",
    description: "纯净的网络工具",
    features: [
      "页面美观",
      "价格较低"
    ],
    downloads: {
      official: "https://nsloon.uk/",
      appStore: "https://apps.apple.com/hk/app/loon-lite/id6444029612",
    }
  },

  {
    name: "SingBox",
    category: "工具",
    // 修正：替换为可用的图片链接
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9a/74/d3/9a74d3c3-3e1b-5683-4f51-2c092c23258e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp",
    type: "mobile",
    size: "medium",
    rating: "5.0",
    platform: "IOS, iPadOS",
    description: "免费、纯净的网络工具",
    features: [
      "页面美观",
      "完全免费"
    ],
    downloads: {
      official: "https://singbox.app/official/",
      appStore: "https://apps.apple.com/us/app/sing-box/id6451272673",
      github: "https://github.com/SagerNet/sing-box",
    }
  },

  {
    name: "OneClick",
    category: "工具",
    // 建议：最好将这个Base64图片保存为本地文件，例如 "apps/apple/img/oneclick.png"
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAA0CAMAAACOwPcAAAAAV1BMVEUAAAAwMDAwMDAyMjIwMDAyMjIwMDAzMzMzMzMyMjIzMzMzMzMyMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIzMzMyMjIyMjIzMzMzMzMzMzMxMTEwMDAzMzM6ye9sAAAAHHRSTlMAEDBgQO8g8L/QoM+Qn+BQwIBwj6/ff29fsD9P0jF5gwAAAt9JREFUeF6l2Omy4ygMBeAjwOB9i53ljt7/OcfVlbQKbKy47/czZeqgIAIx9n4eXbnyZi3vP/gn5rE0vCnK5f5DUDwXjhSdw0X+tnKkeXhk0b3gvfWJC1zJBzqTq1EStVQ9MdUR9qjkvMZBB19yXjEgZQo+1REUdOdzNyVSn2fKrKxZSIlUhqTurONSiex5p3DIMA3vBN7r8EHxiGpyhA25Ng2+49CQzvllPTZw88iRAW8tC649BIZkTEnYu3GktwRBU2BRvMc7FqNHwsWpq1E2WbBIUMuixh9N8knKhrh/T5eyJexZFi75YMIhekWVPPId3zscMiHu3SZbpRjCcffB6kWmz3nASL8Ssnx1uFMfLDgMyKtlYoAssAfOB4mGsEHHgqvz8f37qdkAq/rNSiOIaRdZkz68mj02XitTOFnUeRc5Q/OafTr7ChrpPptuy2BxQStLq6NKIhsWweCKMfkl1EODSyP7a5GyOwnfoDGY9CCqCNfwB77kL0f+PlON1Cltq2xUNVKv83pkDZWe+ftIXa9k6pHmhovG6CxV3XaRQ5G7++rHxQRNepDYv3U310JnfhuhouUwctN4XGD4g6CgJhO5KQw0T5lX4Lfpyi9BcMnqFhbnHHNzN8mCFoQzNoo0n2NGKO1b8obXmwEw8EenNGwaCdCo3LeFjbq91896+DJz86nTq6++MA7AJIMMvvk/MlJy5osbqe3XY0MhagStSK4RsayXaiSS7W7UQ32xYQ9vSWLxSLmC4zI3FYv1eZoYXO6+LTp/8l7jM95HM23kTdR/XcGsn5ZUc2x5fp4zjyiR22RNRFGWy30pOdUiwwZONOWtK8uVY1XcCLreIctUrONAEJhY1RLOTKwKBhF7vUi9VK0ZXOATE0E3B05of6L8K/+4x1eo5Zx+wCE3Kok6X/ORMCHL1YFjfetxCc0VJ17q2TqNPb+Nk8F18PMYPlMe2wHfMW5D+AVyG4Mj/wNAbPJj5VpeAgAAAABJRU5ErkJggg==",
    type: "mobile",
    size: "small",
    rating: "5.0",
    platform: "IOS, iPadOS",
    description: "类似小火箭，免费的网络工具",
    features: [
      "功能强大",
      "功能免费",
      "自定义程度高"
    ],
    downloads: {
      official: "https://oneclick.earth/#/",
      appStore: "https://apps.apple.com/us/app/oneclick-safe-easy-fast/id1545555197",
    }
  },
];
