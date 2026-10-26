# Cloned Sites Components

This folder contains isolated React components, local SVGs, and modules for websites cloned using the `clone-website` skill.

## Structure
```
components/sites/
  <site-identifier>/
    Hero.tsx
    Navbar.tsx
    Features.tsx
    Footer.tsx
    *.module.css
```

Each cloned site keeps its components self-contained here, preventing any collision with 13 Utopia's production components (`components/home/`, `components/layout/`, etc.).
