## Quick Homepage Edit

Only edit these two places:

1. `media-library/images/`
2. `homepage-config.js`

### Change the main setup image

1. Put your image into `media-library/images/`
2. Open `homepage-config.js`
3. Change:

```js
hero: {
  image: "media-library/images/your-file.jpg"
}
```

### Move a label

Each label uses percentage coordinates:

```js
{
  x: 56,
  y: 34,
  label: "Thruster",
  title: "Thruster assembly",
  description: "..."
}
```

- `x`: left to right
- `y`: top to bottom
- Increase `x` to move right
- Increase `y` to move down

### Add a new label

Copy one hotspot object and paste it inside `hero.hotspots`.

### Change the label text

Edit these fields:

- `label`: short text shown on the image
- `title`: title in the hover card
- `description`: short explanation in the hover card

### Preview locally

```powershell
py -3 -m http.server 8080
```

Open:

```text
http://127.0.0.1:8080
```

If the browser still shows the old file, press `Ctrl + F5`.
