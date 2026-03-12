---
title: "React-Native 环境搭建"
date: "2026-03-11 20:00:00"
author: "张大敏"
tags:
  - "React-Native"
  - "移动端"
  - "开发环境"
readTime: "6 min read"
---

# React-Native 环境搭建指南

> 一篇快速上手的 RN 环境搭建指南，适合新手入门。

## 前置准备

在开始之前，请确保你的电脑已安装以下工具：

- **Node.js** (推荐 v18+)：[https://nodejs.org/](https://nodejs.org/)
- **npm** 或 **yarn**：随 Node.js 一起安装
- **Git**：[https://git-scm.com/](https://git-scm.com/)

## 开发工具选择

### 方案一：Expo（推荐新手）

Expo 是最简单的 RN 开发方式，无需配置原生环境。

```bash
# 安装 Expo CLI
npm install -g expo-cli

# 创建新项目
npx create-expo-app my-app

# 进入项目目录
cd my-app

# 启动开发服务器
npx expo start
```

**优点：**
- 无需配置 Android Studio / Xcode
- 扫码即可在真机预览
- 适合快速原型开发

**缺点：**
- 部分原生模块需要 eject 才能使用

### 方案二：React-Native CLI（完整功能）

需要配置完整的原生开发环境。

#### macOS 配置

```bash
# 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node

# 安装 Watchman
brew install watchman

# 安装 CocoaPods
sudo gem install cocoapods

# 创建项目
npx react-native init MyApp
```

#### Windows 配置

1. 安装 **Android Studio**
2. 配置 **Android SDK**
3. 设置环境变量 `ANDROID_HOME`
4. 安装 JDK 11

```bash
# 创建项目
npx react-native init MyApp

# 运行 Android
npx react-native run-android
```

## 第一个 RN 应用

创建项目后，编辑 `App.js`：

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>👋 你好，React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## 常用命令

```bash
# 启动开发服务器
npm start

# 运行 Android
npm run android

# 运行 iOS (仅 macOS)
npm run ios

# 清理缓存
npm start -- --reset-cache
```

## 开发建议

1. **新手从 Expo 开始** - 降低入门门槛
2. **使用 TypeScript** - 更好的类型提示
3. **安装 React Native Debugger** - 方便调试
4. **阅读官方文档** - [https://reactnative.dev/](https://reactnative.dev/)

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| 模拟器启动慢 | 增加 RAM 分配，使用真机调试 |
| 热更新不生效 | 重启 Metro Bundler，清理缓存 |
| 原生模块报错 | 检查 iOS pod install 或 Android 依赖 |

---

**参考资源：**
- [React Native 官方文档](https://reactnative.dev/docs/getting-started)
- [Expo 文档](https://docs.expo.dev/)
- [React Native 中文网](https://reactnative.cn/)

> 💡 提示：环境搭建是最繁琐的一步，完成后就可以专注业务开发了！
