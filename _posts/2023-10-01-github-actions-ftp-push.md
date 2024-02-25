---
title:  "Use github pages to push to the server"
date:   2023-10-01 16:00:00 +0200
categories: actions
author: Marko Krstić
---

```yaml
name: FTP Deploy

on: push

jobs:
  deploy:
    name: Deploy to FTP
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Deploy to FTP
      uses: SamKirkland/FTP-Deploy-Action@4.2.0
      with:
        server: ${{ secrets.FTPSERVER }}
        username: ${{ secrets.FTPUSER }}
        password: ${{ secrets.FTPPASS }}
        server-dir: serverpath/wp-content/plugins/biotech-blocks/
        local-dir: ./
```

YOURSERVER = Example (ftp.markokrstic.com)

Navigate to the settings > Secrets
![image](https://raw.githubusercontent.com/wpdevnotes/wpdevnotes.github.io/main/_posts/2023-10-01-github-pages-actions-ftp-push/settings.png)

Add your secrets 
![image](https://raw.githubusercontent.com/wpdevnotes/wpdevnotes.github.io/main/_posts/2023-10-01-github-pages-actions-ftp-push/secret.png)

### Get more actions examples
https://github.com/marketplace/actions/sftp-deploy

