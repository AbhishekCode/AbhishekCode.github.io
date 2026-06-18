# Personal Website

React + Vite + TypeScript + Tailwind CSS personal portfolio. Profile and project data load from a [GitHub Gist](https://gist.github.com/AbhishekCode/9052ef9a070e0d5ab046fa3464d026c4).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npm test` — run tests

## Gist data

Update `doc/gist/personalData.json` and `doc/gist/projectdata.json`, then paste into the gist files on GitHub.

## Deploy

GitHub Actions builds `website/` and deploys to GitHub Pages on every push to `master`.

**One-time setup** in the repo on GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

After that, pushes to `master` run `.github/workflows/deploy.yml` automatically. You can also trigger a deploy manually from the **Actions** tab.
