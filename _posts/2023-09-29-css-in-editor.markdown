---
title:  "CSS In Gutenberg editor"
date:   2023-09-29 19:58:19 +0200
categories: FSE
---
## CSS Needs minimum selector

```css
.wp-block{}
```

Load CSS in Editor

```php
<?php

function enqueue_custom_editor_styles() {
	wp_enqueue_style(
		'in-editor',
		get_stylesheet_directory_uri() . '/editor.css',
		array(),
		filemtime( get_stylesheet_directory() . '/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'enqueue_custom_editor_styles' );
```

Load CSS in Theme (Front End)

```php
<?php

function enqueue_custom_block_styles() {
	wp_enqueue_style(
		'in-theme',
		get_stylesheet_directory_uri() . '/editor.css',
		array(),
		filemtime( get_stylesheet_directory() . '/editor.css' )
	);
}
add_action( 'enqueue_block_assets', 'enqueue_custom_block_styles' );
```