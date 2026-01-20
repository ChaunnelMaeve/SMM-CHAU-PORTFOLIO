# SEO Assets - Placeholder Image Guide

## 📁 Required Images Location: `/public/`

### 🖼️ Images to Create/Add

#### 1. Open Graph Image
**Filename**: `og-image.jpg`
**Dimensions**: 1200 x 630 pixels
**Format**: JPG or PNG
**Size**: < 300KB
**Purpose**: Social media sharing (Facebook, LinkedIn, WhatsApp)
**Content**: Professional image representing your portfolio/brand

#### 2. Profile Image
**Filename**: `profile-image.jpg`
**Dimensions**: 400 x 400 pixels (square)
**Format**: JPG or PNG
**Size**: < 100KB
**Purpose**: Person schema, about sections
**Content**: Professional headshot or logo

#### 3. Logo
**Filename**: `logo.png`
**Dimensions**: 512 x 512 pixels (square, transparent background)
**Format**: PNG
**Size**: < 50KB
**Purpose**: Organization schema, branding
**Content**: Your personal or business logo

#### 4. PWA Icons
**Filenames**: 
- `icon-192.png` (192 x 192 pixels)
- `icon-512.png` (512 x 512 pixels)
**Format**: PNG
**Purpose**: Progressive Web App icons for mobile
**Content**: Logo or brand icon on solid/transparent background

#### 5. Apple Touch Icon
**Filename**: `apple-touch-icon.png`
**Dimensions**: 180 x 180 pixels
**Format**: PNG
**Purpose**: iOS home screen icon
**Content**: Logo or brand icon

#### 6. Favicon (Already exists)
**Filename**: `vite.svg` (replace with your own if needed)
**Format**: SVG or ICO
**Purpose**: Browser tab icon

---

## 🎨 Design Guidelines

### For OG Image (1200x630)
- Include your name/brand prominently
- Use brand colors (#00ff88 - primary green, #00d4ff - cyan)
- Add tagline or role: "Digital Marketing Strategist"
- Keep text large and readable
- Ensure it looks good as a thumbnail
- Test on dark and light backgrounds

### For Profile Image
- Professional headshot with good lighting
- Plain or minimally distracting background
- Proper framing (head and shoulders)
- High resolution, well-focused
- Friendly, professional expression

### For Logo/Icons
- Simple, recognizable design
- Works in small sizes
- Transparent background preferred
- Consistent with brand identity
- High contrast for visibility

---

## 🛠️ How to Create These Images

### Option 1: Design Tools
- **Canva**: Free templates for OG images
- **Figma**: Professional design tool
- **Adobe Photoshop**: Advanced editing
- **GIMP**: Free alternative to Photoshop

### Option 2: Online Generators
- **OG Image Generator**: https://www.opengraph.xyz/
- **Social Image Generator**: https://www.bannerbear.com/
- **Favicon Generator**: https://realfavicongenerator.net/

### Option 3: AI Image Generation
- Use DALL-E, Midjourney, or Stable Diffusion
- Prompt example: "Professional digital marketing portfolio banner, cyan and green neon colors, cyberpunk style, 1200x630"

---

## 📥 Adding Images to Your Project

1. **Create/Download** your images
2. **Optimize** them for web:
   ```bash
   # Using imagemagick (if installed)
   convert og-image.jpg -quality 85 -strip og-image.jpg
   ```
3. **Place** them in `/app/public/` folder
4. **Verify** they're accessible at:
   - `http://localhost:3000/og-image.jpg`
   - `http://localhost:3000/profile-image.jpg`
   - etc.

---

## ✅ Checklist

- [ ] og-image.jpg created (1200x630)
- [ ] profile-image.jpg added (400x400)
- [ ] logo.png created (512x512)
- [ ] icon-192.png added
- [ ] icon-512.png added
- [ ] apple-touch-icon.png added
- [ ] All images optimized for web
- [ ] All images accessible in /public/
- [ ] Social media cards tested

---

## 🧪 Testing Your Images

### Test Social Media Previews
1. **Facebook**: https://developers.facebook.com/tools/debug/
2. **Twitter**: https://cards-dev.twitter.com/validator
3. **LinkedIn**: https://www.linkedin.com/post-inspector/

### Test Accessibility
1. Ensure OG image loads quickly (< 1 second)
2. Check image appears correctly on mobile
3. Verify no CORS issues with images
4. Test on multiple devices/browsers

---

## 🎯 Image Specifications Summary

| Image | Size | Format | Max File Size | Purpose |
|-------|------|--------|---------------|----------|
| og-image.jpg | 1200x630 | JPG/PNG | 300KB | Social sharing |
| profile-image.jpg | 400x400 | JPG/PNG | 100KB | Profile/Schema |
| logo.png | 512x512 | PNG | 50KB | Branding |
| icon-192.png | 192x192 | PNG | 20KB | PWA mobile |
| icon-512.png | 512x512 | PNG | 50KB | PWA mobile |
| apple-touch-icon.png | 180x180 | PNG | 30KB | iOS icon |

---

*Note: Until you add these images, the current references will return 404 errors, but this won't break functionality. Social media platforms will use fallback images.*