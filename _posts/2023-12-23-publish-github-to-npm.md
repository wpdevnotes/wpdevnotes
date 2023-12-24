---
title:  "Publish versions NPM with GitHub push"
date:   2023-09-29 19:58:19 +0200
categories: FSE
author: Marko Krstić
---
## github yaml location

```
.github/workflows/publish.yml
```

```yaml
name: "publish npm"

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v2
      - name: setup node
        uses: actions/setup-node@v2
        with:
          node-version: 16
          registry-url: https://registry.npmjs.org
      - name: publish
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}

```

This will push code to NPM after you craete tag with v
Example: v1.0.1

## NPM_AUTH_TOKEN

1. Login under NPM profile and create token
2. go to the github Repository > Settings > Secrets and Variables > Actions
3. Under Repository secrets create NPM_AUTH_TOKEN and paste it NPM account

## esbuild.js

```js
const esbuild = require("esbuild");
const sassPlugin = require("esbuild-sass-plugin").sassPlugin;

async function build() {
    try {
        await esbuild.build({
            entryPoints: ["../main.js"],
            bundle: true,
            // minify: true,
            outfile: "dist/main.min.js",
            plugins: [sassPlugin()],
        });
        console.log("Build successful");
    } catch (error) {
        console.error("Error during build:", error);
    }
}

build();
```

## package.json example

```
{
  "name": "fuzzy-area",
  "version": "1.0.11",
  "description": "simple plain js textarea fuzzy autocomplete with option to defne prefix",
  "main": "fuzzy-area.js",
  "directories": {
    "example": "example"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dplugins-opensource/fuzzy-area.git"
  },
  "keywords": [
    "plain",
    "javascript",
    "textarea",
    "fuzzy",
    "autocomplete"
  ],
  "author": "DPlugins",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/dplugins-opensource/fuzzy-area/issues"
  },
  "homepage": "https://github.com/dplugins-opensource/fuzzy-area#readme"
}

```