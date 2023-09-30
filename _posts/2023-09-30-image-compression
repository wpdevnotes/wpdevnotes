---
title:  "Image Compresion"
date:   2023-09-30 19:41:00 +0200
categories: FSE
author: Marko Krstić
---

By the default WordPress used 90% image compression on JPEG images. That can give small blurred effect.

To keep them clear use 100% of image quality

{% highlight php %}
<?php

// Disable WordPress image compression
add_filter('wp_editor_set_quality', function ($arg) {
    return 100;
});
{% endhighlight %}
