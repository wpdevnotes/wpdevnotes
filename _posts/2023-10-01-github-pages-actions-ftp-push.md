---
title:  "Use github pages to push to the server"
date:   2023-10-01 16:00:00 +0200
categories: actions
author: Marko Krstić
---

```yaml
on: [push]

jobs:
  deploy_job:
    runs-on: ubuntu-latest
    name: deploy
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Deploy file
        uses: wlixcc/SFTP-Deploy-Action@v1.2.4
        with:
          username: ${{ secrets.FTP_USERNAME }}
          server: ${{ secrets.FTP_SERVER }}
          local_path: './build/*'
          remote_path: '/home/dplugins/webapps/dplugins-com/wp-content/plugins/dplugins-shop-blocks'
          password: ${{ secrets.FTP_PASSWORD }}

```

YOURSERVER = Example (ftp.markokrstic.com)

Navigate to the settings > Secrets
![image](_posts/2023-10-01-github-pages-actions-ftp-push/settings.png)

Add your secrets 
![image](https://raw.githubusercontent.com/wpdevnotes/wpdevnotes.github.io/main/_posts/2023-10-01-github-pages-actions-ftp-push/secret.png)

### Get more actions examples
https://github.com/marketplace/actions/sftp-deploy

