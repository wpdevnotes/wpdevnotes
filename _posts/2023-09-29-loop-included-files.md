---
title:  "Loop include files"
date:   2023-09-29 19:58:19 +0200
categories: FSE
author: Marko Krstić
---
## Instead of adding one by one you can include all files inside ```/inc/``` folder

```php
<?php

function load_dp_inc_files()
{
    $dirPath = __DIR__ . '/inc/';
    $files = scandir($dirPath);
    foreach ($files as $file) {
        $filePath = $dirPath . '/' . $file;
        if (is_file($filePath)) {
            require_once($filePath);
        }
    }
}

add_action('init', 'load_dp_inc_files');
```


If you need to load only php files
```php
<?php

// Load all INC Files 

function load_dp_blocks_inc_files()
{
    $dirPath = __DIR__ . '/inc/';
    $files = scandir($dirPath);
    foreach ($files as $file) {
        $filePath = $dirPath . $file; // Removed the extra '/' since it's already in $dirPath
        if (is_file($filePath) && pathinfo($filePath, PATHINFO_EXTENSION) === 'php') {
            require_once($filePath);
        }
    }
}

add_action('init', 'load_dp_blocks_inc_files');
```
