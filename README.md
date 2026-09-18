# Debopriyo Karmaker — Personal Portfolio

> **Executive Cybersecurity Researcher & Modern Web Developer**  
> Computer Science & Engineering Undergraduate at BRAC University, Dhaka, Bangladesh.  
> Active Competitive CTF Player for BRACU SHIKARI (#8 Bangladesh, #244 Worldwide on CTFtime).

---

## Overview

A modern, high-performance personal portfolio engineered with a focus on executive luxury aesthetics (Obsidian & Platinum design system), sharp responsive layouts across all viewports, verified academic dossier, production project exhibitions, and defensive security posture.

## Project Structure

```text
Portfolio/
├── .well-known/                  # Domain and security verification protocols
├── .gitattributes                # Consistent line-ending normalization (LF)
├── .gitignore                    # Git tracking rules for OS, IDE, and build caches
├── Debopriyo_Karmaker_CV.pdf     # Verified professional curriculum vitae
├── index.html                    # Semantic, accessible, SEO-optimized HTML5 structure
├── photo.png                     # High-resolution executive portrait
├── README.md                     # Repository documentation and architecture
├── robots.txt                    # Search engine crawler policies and sitemap
├── script.js                     # Dynamic interactions, Dhaka clock, tilt & animations
├── style.css                     # Obsidian & Platinum design system & responsive styling
├── vercel.json                   # Security headers (CSP, HSTS, X-Frame) & caching
└── website_preview.jpg           # Open Graph and Twitter summary social preview card
```

## Features

- **Obsidian & Platinum Aesthetic**: Modern glassmorphic surfaces, subtle glowing optics, and fine-tuned contrast ratios.
- **Fluid Responsiveness**: Tailored layout scaling across desktop, tablet, and mobile (down to 320px) preserving hero visual hierarchy and card ergonomics.
- **Zero Cheap Emojis**: Crisp, vector SVGs and clean typography for a refined engineering presentation.
- **Interactive Cyber Cards**: Custom hover dynamics, glow systems, and focused reading stability on academic cards.
- **Hardened Security**: Pre-configured HTTP security headers in `vercel.json` (CSP, HSTS, X-Content-Type-Options, X-Frame-Options).
- **SEO Ready**: Rich JSON-LD Person schema, Open Graph tags, canonical URLs, and semantic HTML5 landmarks.

## Local Development

Serve locally using any static web server:

```bash
# Python 3
python -m http.server 8088

# Node http-server (optional)
npx http-server -p 8088
```

Open [http://localhost:8088](http://localhost:8088) in your browser.

## Deployment

Deployable instantly to [Vercel](https://vercel.com):

```bash
vercel --prod
```

---
© 2026 Debopriyo Karmaker. All rights reserved.
