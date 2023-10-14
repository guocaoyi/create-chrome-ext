# Erstellen einer Chrome-Erweiterung (.crx)

![Vorschau crx](./img/crx-preview.png)
[![OSCS-Status](https://www.oscs1024.com/platform/badge/guocaoyi/create-chrome-ext.svg?size=small)](https://www.oscs1024.com/project/guocaoyi/create-chrome-ext?ref=badge_small)
[![npm](https://img.shields.io/npm/v/create-chrome-ext?logo=npm)](https://www.npmjs.com/package/create-chrome-ext)
[![npm-Downloads](https://img.shields.io/npm/dw/create-chrome-ext)](https://www.npmjs.com/package/create-chrome-ext)
![GitHub-Sprachanzahl](https://img.shields.io/github/languages/count/guocaoyi/create-chrome-ext)
[![npm-Veröffentlichung](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml)

> Strukturieren Sie Ihre Chrome-Erweiterung, mit Unterstützung mehrerer Boilerplates!

- 🚀 Blitzschnelle HMR (Verwendung von [Vite4](https://vitejs.dev))
- 🌈 Unterstützung mehrerer Frameworks ([React](https://reactjs.org) · [Vue](https://vuejs.org) · [Svelte](https://svelte.dev) · [Preact](https://preactjs.com) · [Solid](https://www.solidjs.com) · [Alpine](https://alpinejs.dev) · [Lit](https://lit.dev) · [Inferno](https://www.infernojs.org) · [Stencil](https://stenciljs.com) · [Vanilla](http://vanilla-js.com))
- 🥢 Unterstützung mehrerer Sprachen ([JavaScript](https://www.javascript.com/) · [TypeScript](https://www.typescriptlang.org/))
- 🥡 Sofort einsatzbereit (Background \ Content \ Popup \ Options \ SidePanel \ DevTools \ NewTab)
- 🧶 Optimierte Builds

[English](../README.md) · [简体中文](./README.zh-CN.md) · [French](./README.fr-FR.md) · [한국어](./README.ko-KR.md) · [Indonesian](./README.id-ID.md) · [Русский](./README.ru-RU.md) · [Deutsch](./README.de-DE.md) · [日本語](./README.ja-JP.md) (Translated by ChatGPT)

## Installation

> Node >= 14.18.0

```bash
# Verwenden Sie den Befehl npm-create oder verwenden Sie pnpm | yarn
λ npm create chrome-ext

# oder verwenden Sie den Befehl npx
λ npx create-chrome-ext

# oder verwenden Sie den Befehl npm-init
λ npm init chrome-ext
```

## Verwendung

Sie können auch direkt den Projektnamen und die Vorlage, die Sie verwenden möchten, über zusätzliche Befehlszeilenoptionen angeben. Um beispielsweise eine Vite + Svelte-Projektstruktur zu erstellen, führen Sie folgenden Befehl aus:

```bash
# npm 6.x
λ npm create chrome-ext@latest my-crx-app --template svelte-js

# oder npm 7+, es ist ein zusätzlicher Doppelstrich erforderlich:
λ npm create chrome-ext@latest my-crx-app -- --template react-ts

# oder yarn
λ yarn create chrome-ext my-crx-app --template vue-ts

# oder pnpm
λ pnpm create chrome-ext my-crx-app --template vanilla-ts
```

Sie können das Projekt auch mit dem Befehlszeilen-Tool `crx` generieren. Führen Sie dazu den folgenden Befehl aus:

```bash
λ npm install create-chrome-ext --global

# und dann
λ crx my-crx-app
# oder
λ crx my-crx-app --template preact-js
# oder verwenden Sie create-chrome-exe (globale Umgebung)
λ create-chrome-ext my-crx-app
```

## Vorschau

![crx-Ausführung](./img/crx-run.png)
![crx-Installation](./img/crx-install.png)
![crx-Build](./img/crx-build.png)
