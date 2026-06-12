# Dudeung Store Review

Static store review page for Dudeung Store.

## How to run locally

Open `index.html` in your browser.

## GitHub Pages deployment

1. Initialize git:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit for GitHub Pages deployment"
   ```
2. Add remote:
   ```powershell
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. After pushing, GitHub Actions will deploy the site with the workflow in `.github/workflows/deploy-github-pages.yml`.
