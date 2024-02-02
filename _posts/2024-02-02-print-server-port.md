---
title:  "Print Server Port in webstie footer"
date:   2024-02-02 19:58:19 +0200
categories: Server
author: Marko Krstić
---
## Code Snippet

If you are unsure what website port your website is using you can use this code snippet to see it in the website footer.


```php
<?php
/*
Plugin Name: Print Server Port
Plugin URI: http://yourwebsite.com/
Description: This plugin prints the web server's port number on the frontend.
Version: 1.0
Author: Your Name
Author URI: http://yourwebsite.com/
*/

// Hook into the 'wp_footer' action
add_action('wp_footer', 'print_server_port');

// Function to print the server port
function print_server_port() {
    $server_port = $_SERVER['SERVER_PORT'];
    echo "<div style='text-align: center; margin-top: 20px;'>Server Port: {$server_port}</div>";
}

```

