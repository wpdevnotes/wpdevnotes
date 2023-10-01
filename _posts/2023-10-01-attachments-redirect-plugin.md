---
title:  "Attachments redirect"
date:   2023-10-01 15:00:00 +0200
categories: Database
author: Marko Krstić
---

```php
<?php
/*
Plugin Name: Attachments Redirect Local Images to Live
Description: Redirects local image URLs to the live site.
Version: 1.0
Author: Marko Krstic
*/

add_filter('wp_get_attachment_url', 'replace_attachment_url');

function replace_attachment_url($url)
{
    // Define your local and live URLs
    $local_url = 'http://shop-live.local/';
    $live_url = 'https://dplugins.com/';

    // Replace the local URL with the live URL
    $new_url = str_replace($local_url, $live_url, $url);

    return $new_url;
}
```
