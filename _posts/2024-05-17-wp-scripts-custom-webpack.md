---
title:  "WP Scripts Custom Config"
date:   2024-05-17 19:58:19 +0200
categories: Scripts
author: Marko Krstić
---
## Code Snippet

Creating a custom webpack configuration file for @WordPress/Scripts


```js
// Import the original config from the @wordpress/scripts package.
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

// Import the helper to find and generate the entry points in the src directory
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config');

// Add any a new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		'variation-icon': './src/variation-icon.js',
	},
};

```

