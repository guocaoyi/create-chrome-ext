# Create Chrome Extension

## Installing

> Node >= 14.18.0

```bash
# with npm
λ npm create chrome-ext@latest

# with pnpm
λ pnpm create chrome-ext

# with yarn
λ yarn create chrome-ext

# with npx
λ npx create-chrome-ext
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Svelte project, run:

```bash
# npm 6.x
npm create chrome-ext@latest my-chrome-ext --template svelte-ts

# npm 7+, extra double-dash is needed:
npm create chrome-ext@latest my-chrome-ext -- --template svelte-ts

# yarn
yarn create chrome-ext my-chrome-ext --template svelte-ts

# pnpm
pnpm create chrome-ext my-chrome-ext --template svelte-ts
```

Currently supported template presets include:

- `react-ts`
- `svelte-ts`
- `vue-ts`

You can use `.` for the project name to scaffold in the current directory.
