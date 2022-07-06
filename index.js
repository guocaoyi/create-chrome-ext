#!/usr/bin/env node

// @ts-check
import * as fs from 'fs'
import * as path from 'path'
import minimist from 'minimist'
import prompts from 'prompts'
import mustache from 'mustache'
import { fileURLToPath } from 'url'
import { red, ansi256, reset } from 'kolorist'

const argv = minimist(process.argv.slice(2), { string: ['_'] })
const cwd = process.cwd()

/**
 * sorted by total ranking
 */
const Boilerplates = [
  {
    name: 'react', // star:191 wd:15097
    kolor: ansi256(81),
    variants: [
      {
        name: 'react-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'react-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'vue', // star:197 wd:3223
    kolor: ansi256(36),
    variants: [
      {
        name: 'vue-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'vue-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'svelte', // star:60.3 wd:339
    kolor: ansi256(203),
    variants: [
      {
        name: 'svelte-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'svelte-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'preact', // star:32 wd:1385
    kolor: ansi256(56),
    variants: [
      {
        name: 'preact-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'preact-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'solid', // star:19.9 wd:30
    kolor: ansi256(25),
    variants: [
      {
        name: 'solid-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'solid-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'lit', // star:11.9 wd:306
    kolor: ansi256(43),
    variants: [
      {
        name: 'lit-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'lit-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  {
    name: 'inferno', // star:15.5 wd:88
    kolor: ansi256(202),
    variants: [
      {
        name: 'inferno-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'inferno-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
  // {
  //   name: 'alpinejs', // star: wd:93
  //   color: ansi256(1),
  // },
  // {
  //   name: 'qwik', // star:4.5 wd:0.8
  //   kolor: ansi256(69),
  // },
  {
    name: 'vanilla', // star:0 wd:0
    kolor: ansi256(230),
    variants: [
      {
        name: 'vanilla-js',
        display: 'JavaScript',
        kolor: ansi256(226),
      },
      {
        name: 'vanilla-ts',
        display: 'TypeScript',
        kolor: ansi256(25),
      },
    ],
  },
]

const TEMPLATES = Boilerplates.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name],
).reduce((a, b) => a.concat(b), [])

const renameFiles = {}

// @ts-ignore
Date.prototype.format = function (fmt) {
  const o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      )
  return fmt
}

async function init() {
  let targetDir = formatTargetDir(argv._[0]) || ''
  let author = '**'
  let template = argv.template || argv.t

  const defaultTargetDir = 'my-crx'
  const getProjectName = () => (targetDir === '.' ? path.basename(path.resolve()) : targetDir)

  let result = {}

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || defaultTargetDir
          },
        },
        {
          type: () => (!fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm'),
          name: 'overwrite',
          message: () =>
            (targetDir === '.' ? 'Current directory' : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          type: targetDir ? null : 'text',
          name: 'author',
          message: reset('Author:'),
          initial: 'no one',
          onState: (state) => {
            author = formatTargetDir(state.value) || 'no one'
          },
        },
        {
          type: (_, opts = {}) => {
            if (opts.overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled')
            }
            return null
          },
          name: 'overwriteChecker',
        },
        {
          type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
          name: 'packageName',
          message: reset('Package name:'),
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) => isValidPackageName(dir) || 'Invalid package.json name',
        },
        {
          type: template && TEMPLATES.includes(template) ? null : 'select',
          name: 'framework',
          message:
            typeof template === 'string' && !TEMPLATES.includes(template)
              ? reset(`"${template}" isn't a valid template. Please choose from below: `)
              : reset('Framework:'),
          initial: 0,
          choices: Boilerplates.map((framework) => {
            const frameworkColor = framework.kolor
            return {
              title: frameworkColor(framework.name),
              value: framework,
            }
          }),
        },
        {
          type: (framework) => (framework && framework.variants ? 'select' : null),
          name: 'variant',
          message: reset('Language:'),
          // @ts-ignore
          choices: (framework) =>
            framework.variants.map((variant) => {
              const variantColor = variant.kolor
              return {
                title: variantColor(variant.name),
                value: variant.name,
              }
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        },
      },
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  // user choice associated with prompts
  const { framework, overwrite, packageName, variant } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  // determine template
  template = variant || framework || template

  console.log(`\nGenerating project in ${root}...`)

  // template boilerplate
  const templateDir = path.resolve(fileURLToPath(import.meta.url), '..', `template-${template}`)

  // mustache
  const mustacheDir = path.resolve(fileURLToPath(import.meta.url), '..', 'mustache')

  const opts = {
    name: packageName || getProjectName(),
    author: author || '*',
    //@ts-ignore
    now: new Date().format('yyyy.MM.dd'),
    //@ts-ignore
    nowYear: new Date().format('yyyy'),
    framework: (framework.name || '').replace(/\S/, (str) => str.toUpperCase()),
  }

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else if (/\.mustache$/gi.test(file)) {
      copy(path.join(mustacheDir, file), targetPath, opts)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  const mFiles = fs.readdirSync(mustacheDir)
  for (const file of mFiles) {
    write(file)
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'))

  pkg.name = packageName || getProjectName()
  pkg.author = author || '*'

  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log(`\nDone. Now run:\n`)
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`)
  }
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
  console.log()
}

/**
 * @param {string | undefined} targetDir
 */
function formatTargetDir(targetDir = '') {
  return targetDir.trim().replace(/\/+$/g, '')
}

function copy(src, dest, opts = {}) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else if (/\.mustache$/gi.test(src)) {
    let stemp = fs.readFileSync(src, { encoding: 'utf8' })
    let result = mustache.render(stemp, opts)
    dest = dest.replace(/\.mustache$/gi, '')
    fs.writeFileSync(dest, result, { encoding: 'utf-8' })
  } else {
    fs.copyFileSync(src, dest)
  }
}

/**
 * @param {string} projectName
 */
function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

/**
 * @param {string} projectName
 */
function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

/**
 * @param {string} srcDir
 * @param {string} destDir
 */
function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

/**
 * @param {string} path
 */
function isEmpty(path) {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

/**
 * @param {string} dir
 */
function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

init().catch((e) => {
  console.error(e)
})
