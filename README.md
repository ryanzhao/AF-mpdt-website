# AF-MPDT Website

Single-page interactive showcase for the AF-MPDT research platform.

## Local preview

Open `index.html` directly in a browser, or run a simple server:

```powershell
py -3 -m http.server 8080
```

Then visit `http://127.0.0.1:8080`.

## Custom media

All manually editable homepage media now lives in [`media-library/`](./media-library/).

- Images: `media-library/images/`
- Videos: `media-library/videos/`
- Homepage image, labels, and captions: `homepage-config.js`

See [`media-library/README.md`](./media-library/README.md) for the step-by-step workflow.
See [`QUICK-HOMEPAGE-EDIT.md`](./QUICK-HOMEPAGE-EDIT.md) for the shortest edit path.

## GitHub Pages + Custom Domain

1. Push this repository to GitHub.
2. In **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch), folder `/root`
3. Add your custom domain in the Pages domain field, for example `www.yourdomain.com`.
4. In your DNS provider:
   - Add a `CNAME` record: `www` → `<your-github-username>.github.io`
   - (Optional apex domain) add `A` records to GitHub Pages IPs.
5. In GitHub Pages settings, enable **Enforce HTTPS** once certificate issuance completes.

If needed, create a `CNAME` file in repo root containing your domain.
