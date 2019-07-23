# eslint-config

[![INC](https://img.shields.io/badge/%E2%9C%A8-IdeasNeverCease/eslint--config-51dcfb.svg?style=flat-square)](https://code.webb.page/IdeasNeverCease/eslint-config)

> Recommended ESLint settings for !NC projects



### Installation

```bash
$ npx install-peerdeps --dev @inc/eslint-config
```



### Usage

In your `.eslintrc` or `.eslintrc.json` file:

```js
{
  extends: "@inc"
}
```

Or in `package.json`:

```
{
  "name": "your-project-name",
  "eslintConfig": {
    "extends": "@inc"
  }
}
```

You can use [@inc/esnext](https://code.webb.page/IdeasNeverCease/eslint-config/src/branch/master/esnext.js) you are parsing ES2015+:

```
{
  "extends": "@inc/eslint-config/esnext"
}
```

Or [@inc/browser](https://code.webb.page/IdeasNeverCease/eslint-config/src/branch/master/browser.js) if you are in the browser:

```
{
  "extends": "@inc/eslint-config/browser"
}
```



### License

MIT © Paul Anthony Webb
