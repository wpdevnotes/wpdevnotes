---
title: "GitHub Action to create a release"
date: 2024-05-25 19:58:19 +0200
categories: GitHub
author: Marko Krstić
---

Place it under "./github/workflows/release.yml"

```
name: Build and Release

on:
  push:
    tags:
      - '[0-9]+'  # Matches single-digit tags like 1, 2, 3, etc.
      - '[0-9]+.[0-9]+'  # Matches tags like 1.0, 1.1, 2.0, etc.
      - '[0-9]+.[0-9]+.[0-9]+'  # Matches tags like 1.0.0, 1.0.1, 2.0.0, etc.

jobs:
  dist:
    name: "Build distribution release."
    runs-on: ubuntu-latest

    steps:
      - name: "Checks out the repository."
        uses: "actions/checkout@v2"

      - name: "Setup NodeJS."
        uses: actions/setup-node@v2
        with:
          node-version: '20'  # Use the latest LTS version of Node.js

      - name: "Install NPM dependencies"
        run: |
          if [ -f package.json ]; then
            npm install
          fi

      - name: "Build release: Stable"
        run: |
          if [ -f package.json ]; then
            npm run build
          fi

      - name: "Copy files to distribution directory excluding .distignore entries"
        run: |
          if [ -f .distignore ]; then
            rsync -a --delete --exclude-from='.distignore' ./ dist/
          else
            rsync -a --delete ./ dist/
          fi

      - name: "Create a Release Archive"
        run: |
          cd dist
          zip -r ../test-2.zip .

      - name: "Debug: List Distribution Directory"
        run: ls -la dist

      - name: "Create a GitHub Release"
        uses: softprops/action-gh-release@v1
        with:
          files: test-2.zip
        env:
          GITHUB_TOKEN: ${{ secrets.TEST_TOKEN }} # Replase TEST_TOKEN with your token name
```
