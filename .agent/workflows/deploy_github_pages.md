---
description: Deploy the portfolio to GitHub Pages
---

# Deploy using GitHub Pages

This workflow will guide you through hosting your portfolio for free on GitHub Pages.

## 1. Initialize Git (if not already done)
Open your terminal in the project folder and run:
```bash
git init
git add .
git commit -m "Initial portfolio release"
```

## 2. Create a Repository on GitHub
1.  Go to [GitHub.com](https://github.com/new).
2.  Create a new repository (name it `portfolio` or `alexy-buvry-portfolio`).
3.  **Do not** initialize with README, .gitignore, or License (keep it empty).

## 3. Push your code
Copy the commands provided by GitHub after creating the repo. They will look like this:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 4. Enable GitHub Pages
1.  Go to your repository **Settings** tab.
2.  Click on **Pages** in the left sidebar.
3.  Under **Source**, select `Deploy from a branch`.
4.  Under **Branch**, select `main` and folder `/ (root)`.
5.  Click **Save**.

## 5. View your site
Wait a few minutes (look for the yellow/green dot in the Actions tab).
Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
