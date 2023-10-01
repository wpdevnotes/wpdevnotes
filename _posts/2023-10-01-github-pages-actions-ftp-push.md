---
title:  "Use github pages to push to the server"
date:   2023-10-01 16:00:00 +0200
categories: actions
author: Marko Krstić
---

```yaml
on: push
name: 🚀 Deploy website on push
jobs:
  web-deploy:
    name: 🎉 Deploy
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get latest code
      uses: actions/checkout@v3

    - name: 📂 Sync files
      uses: SamKirkland/FTP-Deploy-Action@v4.3.4
      with:
        server: YOURSERVER
        username: YOURUSERNAME
        password: ${{ secrets.FTP_PASSWORD }}
        protocol: ftp
        port: 21
```

YOURSERVER = Example (ftp.markokrstic.com)

Navigate to the settings > Secrets
![image](_posts/2023-10-01-github-pages-actions-ftp-push/settings.png)

Add your secrets 
![image](_posts/2023-10-01-github-pages-actions-ftp-push/secret.png)