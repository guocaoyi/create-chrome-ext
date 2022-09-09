# Create Chrome Extension (.crx)

![crx-preview](./docs/crx-preview.png)

[![OSCS Status](https://www.oscs1024.com/platform/badge/guocaoyi/create-chrome-ext.svg?size=small)](https://www.oscs1024.com/project/guocaoyi/create-chrome-ext?ref=badge_small)
[![npm](https://img.shields.io/npm/v/create-chrome-ext?logo=npm)](https://www.npmjs.com/package/create-chrome-ext)
[![npm-download](https://img.shields.io/npm/dw/create-chrome-ext)](https://www.npmjs.com/package/create-chrome-ext)
![GitHub Language Count](https://img.shields.io/github/languages/count/guocaoyi/create-chrome-ext)
[![npm publish](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml)

> Chrome 插件生成器，支持多种框架模板！

- 🚀 敏捷的热更能力(采用 [Vite2](https://vitejs.dev))
- 🥡 开箱即用
- 🌈 多种前端框架支撑 (9+)
- 🥢 支撑 TypeScript 以及 JavaScript
- 🌗 明亮以及暗黑模式

[EN](./README.md) · [中文](./README_zh.md)

## 安装

> Node >= 14.18.0

```bash
# 使用 npm create 命令
λ npm create chrome-ext

# 或者使用 npx 命令
λ npx create-chrome-ext

# 或者使用 npm init 命令
λ npm init chrome-ext
```

## 用例

您还可以通过其他命令行配置直接指定项目名称和要使用的模板。比如 Vite + Svelte 项目，运行：

```bash
# npm 6.x
λ npm create chrome-ext@latest my-crx-app --template svelte-js

# npm 版本 7 以上， 注意 -- 命令选项
λ npm create chrome-ext@latest my-crx-app -- --template react-ts

# or yarn
λ yarn create chrome-ext my-crx-app --template vue-ts

# or pnpm
λ pnpm create chrome-ext my-crx-app --template vanilla-ts
```

You can also generator the project with `crx` cli, run:

```bash
λ npm install create-chrome-ext --global

# and then
λ crx my-crx-app
# or
λ crx my-crx-app --template preact-js
# or use create-chrome-exe (global env)
λ create-chrome-ext my-crx-app
```

## 模板

预置的前端架构：

[React](https://reactjs.org) · [Vue](https://vuejs.org) · [Svelte](https://svelte.dev) · [Preact](https://preactjs.com) · [Solid](https://www.solidjs.com) · [Alpine](https://alpinejs.dev) · [Lit](https://lit.dev) · [Inferno](https://www.infernojs.org) · [Stencil](https://stenciljs.com) · [Vanilla](http://vanilla-js.com)

语言支持：

[JavaScript](https://www.javascript.com/) · [TypeScript](https://www.typescriptlang.org/)

## 预览

![crx-run](./docs/crx-run.png)
![crx-install](./docs/crx-install.png)
![crx-build](./docs/crx-build.png)
