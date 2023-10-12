# Chrome拡張機能を作成する（.crx）

![crxプレビュー](./img/crx-preview.png)
[![OSCSステータス](https://www.oscs1024.com/platform/badge/guocaoyi/create-chrome-ext.svg?size=small)](https://www.oscs1024.com/project/guocaoyi/create-chrome-ext?ref=badge_small)
[![npm](https://img.shields.io/npm/v/create-chrome-ext?logo=npm)](https://www.npmjs.com/package/create-chrome-ext)
[![npmダウンロード](https://img.shields.io/npm/dw/create-chrome-ext)](https://www.npmjs.com/package/create-chrome-ext)
![GitHub言語数](https://img.shields.io/github/languages/count/guocaoyi/create-chrome-ext)
[![npm公開](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml)

> Chrome拡張機能の骨組みを作成します。複数のボイラープレートがサポートされています！

- 🚀 高速なHMR（[Vite4](https://vitejs.dev)を使用）
- 🥡 すぐに使える
- 🌈 複数のフロントエンドフレームワークをサポート（[React](https://reactjs.org) · [Vue](https://vuejs.org) · [Svelte](https://svelte.dev) · [Preact](https://preactjs.com) · [Solid](https://www.solidjs.com) · [Alpine](https://alpinejs.dev) · [Lit](https://lit.dev) · [Inferno](https://www.infernojs.org) · [Stencil](https://stenciljs.com) · [Vanilla](http://vanilla-js.com)）
- 🥢 複数の言語をサポート（[JavaScript](https://www.javascript.com/) · [TypeScript](https://www.typescriptlang.org/)）
- 🧶 最適化されたビルド

[English](./README.md) · [简体中文](./docs/README.zh-CN.md) · [French](./docs/README.fr-FR.md) · [Deutsch](./docs/README.de-DE.md) · [Русский](./docs/README.ja-JP.md) · [日本語](./docs/README.ja-JP.md)

## インストール

> Node >= 14.18.0

```bash
# npm-createコマンドを使用するか、pnpmまたはyarnを使用します
λ npm create chrome-ext

# またはnpxコマンドを使用します
λ npx create-chrome-ext

# またはnpm-initコマンドを使用します
λ npm init chrome-ext
```

## 使用法

追加のコマンドラインオプションを使用して、プロジェクト名と使用したいテンプレートを直接指定することもできます。例えば、Vite + Svelteプロジェクトの骨組みを作成するには、次のコマンドを実行します：

```bash
# npm 6.x
λ npm create chrome-ext@latest my-crx-app --template svelte-js

# またはnpm 7+、追加の二重ダッシュが必要です：
λ npm create chrome-ext@latest my-crx-app -- --template react-ts

# またはyarnを使用します
λ yarn create chrome-ext my-crx-app --template vue-ts

# またはpnpmを使用します
λ pnpm create chrome-ext my-crx-app --template vanilla-ts
```

プロジェクトを`crx` CLIで生成することもできます。次のコマンドを実行してください：

```bash
λ npm install create-chrome-ext --global

# そして
λ crx my-crx-app
# または
λ crx my-crx-app --template preact-js
# またはcreate-chrome-exe（グローバル環境を使用）
λ create-chrome-ext my-crx-app
```

## プレビュー

![crx実行](./img/crx-run.png)
![crxインストール](./img/crx-install.png)
![crxビルド](./img/crx-build.png)
