<img src="./asset/illustration/wave_header.svg" width="100%" align="center"/>

<h1 id="top" align="center">
  <img src="./asset/illustration/eslint.svg" width="32px" align="center" />
  Universal Eslint Configuration
</h1>

<br />

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">🛰️ FEATURES</a> • <a href="#vscode-settings">💻 VSCODE</a>
</pre>

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<img src="./asset/illustration/cover.svg" width="100%" align="center" />

<br />

<div align="center">
  <img src="./asset/illustration/eslint_badget.svg" height="28px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/illustration/bun_badget.svg" height="28px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/illustration/github_badget.svg" height="28px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/illustration/typescript_badget.svg" height="28px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/illustration/npm_badget.svg" height="28px" />&nbsp;&nbsp;&nbsp;
  <img src="./asset/illustration/git_badget.svg" height="28px" />
</div>

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="about">
  <img src="./asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
This GitHub repository offers a powerful ESLint configuration to elevate your coding experience. Proactively identify and fix potential errors before they cause issues, preventing runtime failures and streamlining your development workflow.

The configuration enforces consistent coding style and best practices, making your codebase easier to understand, modify, and collaborate on in the long run. It's built to be adaptable, allowing you to fine-tune the rules to your project's specific needs.
</td>
</tr>
</table>

<br />

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="table-of-content">
  <img src="./asset/icon/book.svg" width="24px" align="center"/>
  Table of content
</h2>

- [<img src="./asset/icon/information.svg" width="20px" align="center" /> About](#about)
- [<img src="./asset/icon/satellite.svg" width="20px" align="center" /> Features](#features)
- [<img src="./asset/icon/thunder.svg" width="20px" align="center" /> Requirements](#requirements)
- [<img src="./asset/icon/package.svg" width="20px" align="center" /> Installation](#installation)
- [<img src="./asset/icon/rocket.svg" width="20px" align="center" /> Usage](#usage)
- [<img src="./asset/icon/gear.svg" width="20px" align="center" /> Configuration](#configuration)
- [<img src="./asset/icon/gear.svg" width="20px" align="center" /> Recommended VsCode configuration](#vscode-settings)

<br />

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="features">
  <img src="./asset/icon/satellite.svg" width="24px" align="center" />
  Features
</h2>

- <img src="./asset/icon/eslint.svg" width="24px" align="center" /> `Eslint` - Linter core engine.
- <img src="./asset/icon/astro.svg" width="24px" align="center" /> `Astro` - Awesome Astro components linting.
- <img src="./asset/icon/html.svg" width="24px" align="center" /> `Html` - Tidy and consistent HTML files.
- <img src="./asset/icon/import.svg" width="24px" align="center" /> `Import` - Manage imports effectively.
- <img src="./asset/icon/perfectionist.svg" width="24px" align="center" /> `Perfectionist` - Automated sorting and strict quality.
- <img src="./asset/icon/stylistic.svg" width="24px" align="center" /> `Stylistic` - Beautiful Allman-style formatting.
- <img src="./asset/icon/typescript.svg" width="24px" align="center" /> `Typescript` - Strong type safety for TS 6.0.
- <img src="./asset/icon/unicorn.svg" width="24px" align="center" /> `Unicorn` - 100+ advanced modern rules.

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="requirements">
  <img src="./asset/icon/thunder.svg" width="24px" align="center" />
  Requirements
</h2>

- <img src="./asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./asset/icon/eslint.svg" width="20px" align="center" /> eslint >= **10.10.0**
- <img src="./asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="installation">
  <img src="./asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D eslint-config-universal-code
```

<h3><img src="./asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D eslint-config-elegant-coding
```

<h3><img src="./asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D eslint-config-elegant-coding
```

<h3><img src="./asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D eslint-config-elegant-coding
```

<br />

<img 
  src="./asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<h2 id="usage">
  <img src="./asset/icon/rocket.svg" width="24px" align="center" />
  Usage
</h2>

Create an `eslint.config.js` file in your root and add the following:

```ts
  import eslintConfig from 'eslint-config-universal-code';

  export default eslintConfig();
```

<br />

<img 
  src="./asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<h2 id="configuration">
  <img src="./asset/icon/gear.svg" width="24px" align="center" />
  Configuration
</h2>

Extra settings that can be added.

```ts
  import eslintConfig from 'eslint-config-universal-code';

  export default eslintConfig({
    // This line enables ESLint rules for YAML files.
    yml: true,

    // This line enables ESLint rules for HTML files.
    html: true,

    // This line enables ESLint rules for JSON files.
    json: true,

    // This line enables ESLint rules for Astro components.
    astro: true,

    // This line enables ESLint rules for Astro perfectionist, to sort imports.
    perfectionist: true,

    // This line enables ESLint rules for regex.
    regex: true,

    // This line enable unicorn rules.
    unicorn: true,

    // This line enables ESLint rules for tailwind classes.
    tailwind: true,

    // This line enables ESLint rules for stylistic concerns in your code.
    stylistic: true,

    // This line enables ESLint rules for TypeScript files.
    typescript: true,

    // This line specifies a file to ignore from linting.
    // In this case, 'postcss.config.cjs' will not be processed by ESLint.
    ignore: [ 'postcss.config.cjs' ],
  });
```

To add or override plugins and options, you can pass a second attribute to the function with an array like a normal configuration of eslint:

```ts
export default elegantCoding({
  stylistic: true,
  typescript: true
}, [
  {
    rules:
    {
      'style/indent': 'off'
    }
  },
  {
    plugin: 'customPlugin',
    rules:
    {
      // Extra rules...
    }
  }
]);
```

The list of the used plugins and the names are here:

| New name | Original | Source |
| -------- | -------- | ------ |
| `import` | `import-x` | `eslint-plugin-import-x` |
| `unicorn` | `unicorn` | `eslint-plugin-unicorn` |
| `perfectionist` | `perfectionist` | `eslint-plugin-perfectionist` |
| `node` | `n` | `eslint-plugin-n` |
| `regex` | `regexp` | `eslint-plugin-regexp` |
| `style` | `@stylistic` | `@stylistic/eslint-plugin` |
| `ts` | `@typescript-eslint` | `@typescript-eslint/eslint-plugin` |
| `html` | `@html-eslint` | `@html-eslint/eslint-plugin` |
| `json` | `jsonc` | `eslint-plugin-jsonc` |
| `yml` | `yml` | `eslint-plugin-yml` |
| `astro` | `astro` | `eslint-plugin-astro` |
| `tailwind` | `tailwindcss` | `eslint-plugin-tailwindcss` |

<br />

<img 
  src="./asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<h2 id="vscode-settings">
  <img src="./asset/icon/information.svg" width="24px" align="center"/>
  Recommended VsCode Configuration
</h2>

```json
  "editor.formatOnSave": false,
  "editor.suggest.showWords": false,
  "eslint.run": "onSave",
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.addMissingImports": "explicit",
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Eslint files to validate
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro",
    "typescript",
    "typescriptreact",
    "html",
    "json",
    "jsonc",
    "json5",
    "yaml",
    "github-actions-workflow"
  ],

  // Silent Eslint only style options
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "tailwind/*", "severity": "off", "fixable": true },
    { "rule": "perfectionist/*", "severity": "off", "fixable": true },
  ],

  // Configure Eslint formatter as linter for VsCode
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[astro]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[html]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[yaml]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
```

<br />

<img 
  src="./asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./asset/illustration/wave_footer.svg" width="100%" align="center" />