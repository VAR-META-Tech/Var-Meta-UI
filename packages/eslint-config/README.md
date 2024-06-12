# `@var-meta-tech/eslint-config`

A Collection of eslint configurations.

## For Frontend config with eslint-plugin-testing-library

Here is an example `.eslintrc.js`.

```js
module.exports = {
  extends: ['@var-meta-tech/eslint-config/frontend'],
};
```

## For Backend config with eslint-plugin-simple-import-sort and eslint-plugin-unused-imports

Here is an example `.eslintrc.js`.

```js
module.exports = {
  extends: ['@var-meta-tech/eslint-config/backend'],
};
```

Note: the config exported by this package sets `parserOptions.project = true`.
Read about the `project` option [here](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration).

There are [some more `parserOptions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#configuration) you may care about.

# Example command line usage:

```
$ npx eslint .
```
