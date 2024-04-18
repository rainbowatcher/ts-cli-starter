[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rainbowatcher/ts-cli-starter/ci.yml)](https://github.com/rainbowatcher/ts-cli-starter/actions)
![GitHub License](https://img.shields.io/github/license/rainbowatcher/ts-cli-starter)
![GitHub package.json version](https://img.shields.io/github/package-json/v/rainbowatcher/ts-cli-starter)

# ts-cli-starter

## 🚀 Features

- Minimal install sized Dependencies
- VSCode compatible eslint configuration
- Cross platform CI configuration
- Pre-Commit lint
- Auto Changelog generate
- Smooth release experience
- Complete package build config

## Install Size

- [Dependencies](https://packagephobia.com/result?p=@clack/prompts,cac)
  - `@clack/prompts`:[![install size](https://packagephobia.com/badge?p=@clack/prompts)](https://packagephobia.com/result?p=@clack/prompts)
  - `cac`: [![install size](https://packagephobia.com/badge?p=cac)](https://packagephobia.com/result?p=cac)
- [DevDependencies](https://packagephobia.com/result?p=@ava/typescript,@rainbowatcher/eslint-config,bumpp,commitlint,eslint,husky,jiti,pkgroll,typescript,uvu)
  - `commitlint`: [![install size](https://packagephobia.com/badge?p=commitlint)](https://packagephobia.com/result?p=commitlint)
  - `typescript`: [![install size](https://packagephobia.com/badge?p=typescript)](https://packagephobia.com/result?p=typescript)
  - `vitest`: [![install size](https://packagephobia.com/badge?p=vitest)](https://packagephobia.com/result?p=vitest)
  - `eslint` & `@rainbowatcher/eslint-config`: [![install size](https://packagephobia.com/badge?p=@rainbowatcher/eslint-config)](https://packagephobia.com/result?p=@rainbowatcher/eslint-config)
  - `pkgroll`: [![install size](https://packagephobia.com/badge?p=pkgroll)](https://packagephobia.com/result?p=pkgroll)
  - `bumpp`: [![install size](https://packagephobia.com/badge?p=bumpp)](https://packagephobia.com/result?p=bumpp)
  - `@types/node`: [![install size](https://packagephobia.com/badge?p=@types/node)](https://packagephobia.com/result?p=@types/node)
  - `jiti`: [![install size](https://packagephobia.com/badge?p=jiti)](https://packagephobia.com/result?p=jiti)
  - `husky`: [![install size](https://packagephobia.com/badge?p=husky)](https://packagephobia.com/result?p=husky)

## Usage

1. Clone this repository

```bash
npx degit https://github.com/rainbowatcher/ts-cli-starter.git <pkg-name>
```

2. Install dependencies by using `pnpm install`
3. Setup git hooks
   
```bash
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
npx husky add .husky/pre-commit 'npx lint-staged'
```

3. Global Replace `ts-cli-starter` to your package name in project
4. Change the author name in `LICENSE`
5. Clean up the READMEs and remove routes


## License

[MIT](./LICENSE) &copy; Made by ❤️