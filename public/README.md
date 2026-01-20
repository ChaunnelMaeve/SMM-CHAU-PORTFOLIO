# Public Assets Folder

This folder contains static assets that are served directly by the web server.

## SEO Files (✅ Added)
- `robots.txt` - Search engine crawler directives
- `sitemap.xml` - XML sitemap for indexing
- `.htaccess` - Apache server configuration
- `manifest.json` - PWA manifest

## Required Image Assets (⚠️ Placeholder - Add Your Own)
Replace these with your actual images:

1. **og-image.jpg** (1200x630px) - Social media preview image
2. **profile-image.jpg** (400x400px) - Professional headshot
3. **logo.png** (512x512px) - Brand logo
4. **icon-192.png** (192x192px) - PWA app icon
5. **icon-512.png** (512x512px) - PWA app icon (large)
6. **apple-touch-icon.png** (180x180px) - iOS home screen icon

See `/app/PUBLIC_ASSETS_GUIDE.md` for detailed specifications.

## Testing Locally
Access these files at:
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml
- http://localhost:3000/manifest.json

## Notes
- Images referenced in meta tags will return 404 until you add them
- This won't break functionality but may affect social media previews
- Create placeholder images or use the specifications in PUBLIC_ASSETS_GUIDE.md
