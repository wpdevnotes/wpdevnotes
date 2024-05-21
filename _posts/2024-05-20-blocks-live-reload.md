---
title:  "gutenberg blocks live reload"
date:   2024-05-21 19:58:19 +0200
categories: Scripts
author: Marko Krstić
---

## Install NPM

After instaling NPX Create block run:

```npm install browser-sync npm-run-all --save-dev```

Then in the package.json update scripts section

```js
  "scripts": {
    "preview": "npm-run-all --parallel sync start",
    "sync": "browser-sync start -p 'dev-wordpress.local' --files '**/*.php' 'build/*.js' 'build/*.css'",
    "build": "wp-scripts build",
    "packages-update": "wp-scripts packages-update",
    "plugin-zip": "wp-scripts plugin-zip",
    "start": "wp-scripts start"
  },
```

Replace 'dev-wordpress.local' with your local websute URL

