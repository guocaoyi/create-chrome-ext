# Create Chrome Extension

## Installing

> Node >= 14.18.0

```bash
# with npm
λ npm create crxapp@latest

# with pnpm
λ pnpm create crxapp

# with yarn
λ yarn create crxapp

# with npx
λ npx create-crxapp
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Svelte project, run:

```bash
# npm 6.x
npm create crxapp@latest my-crxapp --template svelte-ts

# npm 7+, extra double-dash is needed:
npm create crxapp@latest my-crxapp -- --template svelte-ts

# yarn
yarn create crxapp my-crxapp --template svelte-ts

# pnpm
pnpm create crxapp my-crxapp --template svelte-ts
```

Currently supported template presets include:

- `react-ts`
- `svelte-ts`
- `vue-ts`

You can use `.` for the project name to scaffold in the current directory.
