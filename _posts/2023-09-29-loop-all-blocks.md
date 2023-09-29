---
title:  "Loop all blocks"
date:   2023-09-29 19:58:19 +0200
categories: FSE
---
## Instead of adding one by one you can loop all blocks inside build folder

```php
<?php

function create_block_dpluginsblocks_block_init() {
    $folders = glob(__DIR__ . '/build/*', GLOB_ONLYDIR);
    
    foreach ($folders as $folder) {
        register_block_type($folder);
    }
}

add_action('init', 'create_block_dpluginsblocks_block_init');
```