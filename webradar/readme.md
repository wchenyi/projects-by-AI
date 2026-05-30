文件已完整输出，可以直接下载使用。以下是代码的完整说明：



\---



\## 功能架构



\*\*真实 API 集成\*\*



| API | 说明 | 浏览器支持 |

|---|---|---|

| `navigator.bluetooth.requestDevice()` | 用户选择授权蓝牙设备 | Chrome 56+, Edge 79+ |

| `device.gatt.connect()` | 连接 GATT 服务读取设备信息 | 同上 |

| `navigator.bluetooth.requestLEScan()` | BLE 广播扫描（被动）| Chrome 79+ 实验性 |

| `navigator.connection` | 当前 WiFi 连接信息 | Chrome, Firefox, Edge |



\*\*蓝牙扫描流程\*\*

1\. 调用 `requestDevice()` → 浏览器弹出系统选择窗口

2\. 用户选中设备后，尝试连接 GATT 读取：电池电量、制造商、型号、固件版本

3\. 同时开启 `requestLEScan()` 被动监听周边 BLE 广播（如浏览器支持）

4\. 根据设备名称关键词自动识别设备类型



\*\*WiFi 信息\*\*

\- 通过 `Network Information API` 读取当前连接的网络类型、速度、RTT 等

\- 浏览器隐私政策限制无法列举周边 AP 列表（需原生 App）



\---



\## 使用要求



```

✅ Chrome 56+ 或 Edge 79+（蓝牙功能）

✅ HTTPS 环境 或 localhost

✅ 用户手动授权蓝牙权限

```



\*\*本地测试方法：\*\*

```bash

\# Python 快速起一个本地服务器

python3 -m http.server 8080

\# 然后访问 http://localhost:8080/radar.html

```



\*\*部署到 HTTPS 可用 GitHub Pages、Netlify、Vercel 等免费服务。\*\*

