# Создание расширения Chrome (.crx)

![Предпросмотр crx](./img/crx-preview.png)
[![Статус OSCS](https://www.oscs1024.com/platform/badge/guocaoyi/create-chrome-ext.svg?size=small)](https://www.oscs1024.com/project/guocaoyi/create-chrome-ext?ref=badge_small)
[![npm](https://img.shields.io/npm/v/create-chrome-ext?logo=npm)](https://www.npmjs.com/package/create-chrome-ext)
[![Загрузки npm](https://img.shields.io/npm/dw/create-chrome-ext)](https://www.npmjs.com/package/create-chrome-ext)
![Количество языков в GitHub](https://img.shields.io/github/languages/count/guocaoyi/create-chrome-ext)
[![Опубликовать в npm](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/guocaoyi/create-chrome-ext/actions/workflows/npm-publish.yml)

> Создание скелета вашего расширения для Chrome, поддерживается несколько шаблонов!

- 🚀 Быстрое обновление с помощью HMR (используется [Vite4](https://vitejs.dev))
- 🥡 Готово к использованию
- 🌈 Поддержка нескольких фронтенд-фреймворков ([React](https://reactjs.org) · [Vue](https://vuejs.org) · [Svelte](https://svelte.dev) · [Preact](https://preactjs.com) · [Solid](https://www.solidjs.com) · [Alpine](https://alpinejs.dev) · [Lit](https://lit.dev) · [Inferno](https://www.infernojs.org) · [Stencil](https://stenciljs.com) · [Vanilla](http://vanilla-js.com))
- 🥢 Поддержка нескольких языков ([JavaScript](https://www.javascript.com/) · [TypeScript](https://www.typescriptlang.org/))
- 🧶 Оптимизированные сборки (Фон · Контент · Всплывающее окно · Опции · Боковая панель · Панель инструментов разработчика)

[English](../README.md) · [简体中文](./README.zh-CN.md) · [French](./README.fr-FR.md) · [한국어](./README.ko-KR.md) · [Indonesian](./README.id-ID.md) · [Русский](./README.ru-RU.md) · [Deutsch](./README.de-DE.md) · [日本語](./README.ja-JP.md) (Translated by ChatGPT)

## Установка

> Node >= 14.18.0

```bash
# Используйте команду npm-create или pnpm или yarn
λ npm create chrome-ext

# или используйте команду npx
λ npx create-chrome-ext

# или используйте команду npm-init
λ npm init chrome-ext
```

## Использование

Вы также можете непосредственно указать имя проекта и шаблон, который вы хотите использовать, с помощью дополнительных опций командной строки. Например, для создания скелета проекта Vite + Svelte, выполните:

```bash
# npm 6.x
λ npm create chrome-ext@latest my-crx-app --template svelte-js

# или npm 7+, требуется дополнительное двойное тире:
λ npm create chrome-ext@latest my-crx-app -- --template react-ts

# или yarn
λ yarn create chrome-ext my-crx-app --template vue-ts

# или pnpm
λ pnpm create chrome-ext my-crx-app --template vanilla-ts
```

Вы также можете создать проект с помощью CLI `crx`, выполните:

```bash
λ npm install create-chrome-ext --global

# и затем
λ crx my-crx-app
# или
λ crx my-crx-app --template preact-js
# или используйте create-chrome-exe (глобальное окружение)
λ create-chrome-ext my-crx-app
```

## Просмотр

![Запуск crx](./img/crx-run.png)
![Установка crx](./img/crx-install.png)
![Сборка crx](./img/crx-build.png)
