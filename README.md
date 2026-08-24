# 荒岛余生

纯 JavaScript + Canvas 制作的手机端像素生存游戏，无框架、无需构建步骤。

## 本地运行

```bash
python3 -m http.server 4173
```

打开 `http://localhost:4173`。直接打开 HTML 文件时 Service Worker 不会启用，这是浏览器的正常安全限制。

## 发布到 GitHub Pages

1. 将仓库默认分支设为 `main`。
2. 在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。
3. push 到 `main`，`.github/workflows/pages.yml` 会自动发布。

Service Worker 使用网络优先策略：联网时会优先获取刚 push 的版本，断网时再使用缓存。

## AI 策略与本地测试

- 正式 AI 参数集中在 `ai-strategy.js`，该文件会随 GitHub Pages 发布。
- AI 日志、历史记录和连续 10 局测试只会在 `localhost`、`127.0.0.1` 或 `::1` 显示并运行。每局记录对应的策略版本和参数快照。
- 线上版本不会显示测试入口，也不会保存 AI 测试历史。
- 使用 `node server.js` 启动本地实验服务器。每局会一直运行到角色死亡；10 局结束后按平均、中位数和最长生存天数生成参数建议。点击“应用推荐策略”会更新 `ai-strategy.js` 并提升版本号，随后可直接继续下一代测试。
- 新策略的平均生存天数优于上一代后，再 push 发布。

## 当前玩法

- 点击空地自动寻路；水面与物资格无法穿过。
- 点击物资时，角色会走到相邻格，再点击“拾取”。
- 背包中可食用浆果恢复饱食。
- 收集木头和草，制作简易陷阱与鱼竿。
- 有鱼竿后站在岸边点击水格即可钓鱼。
