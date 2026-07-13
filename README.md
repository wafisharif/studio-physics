# AP Physics Guide

A static site teaching AP Physics 1 concepts in depth, with embedded interactive simulators.

## Folder structure

```
ap-physics-guide/
  index.html              homepage / navigation hub
  style.css               shared styles
  script.js                shared interactivity (nav toggle, answer reveal)
  units/
    kinematics.html        FULL flagship lesson (use this as the template for depth)
    dynamics.html
    circular-motion.html
    energy.html
    momentum.html
    torque-rotation.html
    shm.html
  sims/                    drop your 9 existing simulators in here, one folder each
  assets/img/              images
```

## How to add a simulator to a page

1. Copy your simulator's folder into `/sims/`, e.g. `/sims/projectile-motion/index.html`.
2. In the relevant unit page, find the `<div class="sim-embed">` placeholder block and replace it with:

```html
<iframe src="../sims/projectile-motion/index.html" width="100%" height="500" style="border:none; border-radius:10px;"></iframe>
```

Adjust the path and height per simulator.

## How to deploy on GitHub Pages

1. Create a new repository on GitHub (e.g. `ap-physics-guide`).
2. Push this folder's contents to the repo:

```bash
cd ap-physics-guide
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ap-physics-guide.git
git push -u origin main
```

3. On GitHub: go to **Settings → Pages**.
4. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. Your site will be live within a minute or two at:
   `https://YOUR-USERNAME.github.io/ap-physics-guide/`

## Adding a new unit page later

1. Copy `units/kinematics.html` as a starting template (it has the fullest example of every content block: definitions, equations, worked examples, misconceptions, simulator embed, practice problems).
2. Update the `<title>`, header eyebrow/unit number, and all content sections.
3. Add a card for it on `index.html` in the relevant `.unit-grid`.
4. Update the `lesson-pager` links on the pages before/after it so navigation stays connected.

## Notes

- No backend, no build step — just plain HTML/CSS/JS. Anyone can open `index.html` directly to preview locally before pushing.
- Practice problem answers use a simple show/hide button (`script.js`) — no server needed.
- Once you're ready for a custom domain, buy it from any registrar and point it at GitHub Pages via a CNAME file + DNS settings (ask when you get there, it's a 10-minute step).
