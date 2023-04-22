# eslint-plugin-fix-js

校验常见的js兼容性问题

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-fix-js`:

```sh
npm install eslint-plugin-fix-js --save-dev
```

## Usage

Add `fix-js` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fix-js"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fix-js/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


