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
add_filter('wp_calculate_image_srcset', 'replace_srcset_urls', 10, 5);
add_filter('the_content', 'replace_content_urls');

function replace_attachment_url($url)
{
    return replace_local_with_live_url($url);
}

function replace_local_with_live_url($url)
{
    // Fetch local URL dynamically
    $local_url = trailingslashit(get_home_url());
    $live_url = 'https://dplugins.com/';

    // Replace the local URL with the live URL
    $new_url = str_replace($local_url, $live_url, $url);

    return $new_url;
}

function replace_srcset_urls($sources, $size_array, $image_src, $image_meta, $attachment_id)
{
    foreach ($sources as $key => $source) {
        $sources[$key]['url'] = replace_local_with_live_url($source['url']);
    }

    return $sources;
}

function replace_content_urls($content)
{
    // Use the DOMDocument class to parse the content
    $doc = new DOMDocument();
    @$doc->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));

    // Replace img src attributes
    $images = $doc->getElementsByTagName('img');
    foreach ($images as $image) {
        $src = $image->getAttribute('src');
        $image->setAttribute('src', replace_local_with_live_url($src));
    }

    // Replace anchor href attributes
    $anchors = $doc->getElementsByTagName('a');
    foreach ($anchors as $anchor) {
        $href = $anchor->getAttribute('href');
        $anchor->setAttribute('href', replace_local_with_live_url($href));
    }

    // Save the changes and return the modified content
    $content = $doc->saveHTML();
    return $content;
}
```
