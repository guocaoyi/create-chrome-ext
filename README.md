# Create CRX APP

## Installing

> Node >= 14.18.0

With NPM:

```bash
λ npm create crxapp@latest
```

With Yarn:

```bash
λ yarn create crxapp
```

With PNPM:

```bash
λ pnpm create crxapp
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Svelte project, run:

```bash
# npm 6.x
npm create crxapp@latest my-crxapp --template svelte

# npm 7+, extra double-dash is needed:
npm create crxapp@latest my-crxapp -- --template svelte

# yarn
yarn create crxapp my-crxapp --template svelte

# pnpm
pnpm create crxapp my-crxapp --template svelte
```

Currently supported template presets include:

- `react-ts`
- `svelte-ts`
- `vue-ts`

You can use `.` for the project name to scaffold in the current directory.
