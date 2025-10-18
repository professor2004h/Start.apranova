# Deployment Guide

This guide covers various deployment options for the Apranova website.

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds and CDN.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Custom Domain:**
- Go to Project Settings → Domains
- Add `apranova.com`
- Update DNS records as instructed

### 2. Netlify

Another excellent option with drag-and-drop deployment.

**Steps:**
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify
4. Or connect GitHub for automatic deployments

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### 3. GitHub Pages

Free hosting for static sites.

**Steps:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Configure:**
- Update `vite.config.js` with base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/apranova-website/', // Your repo name
})
```

### 4. AWS S3 + CloudFront

Enterprise-grade hosting with AWS.

**Steps:**
1. Build: `npm run build`
2. Create S3 bucket
3. Enable static website hosting
4. Upload `dist` folder contents
5. Create CloudFront distribution
6. Point domain to CloudFront

**AWS CLI Deployment:**
```bash
# Build
npm run build

# Sync to S3
aws s3 sync dist/ s3://apranova.com --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Pre-Deployment Checklist

- [ ] Update contact email in footer and contact page
- [ ] Replace placeholder images with actual photos
- [ ] Test all navigation links
- [ ] Test contact form (integrate backend if needed)
- [ ] Verify mobile responsiveness
- [ ] Check accessibility with screen reader
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Optimize images (compress, convert to WebP)
- [ ] Add Google Analytics or tracking (optional)
- [ ] Set up SSL certificate
- [ ] Configure custom domain DNS

## Environment-Specific Configuration

### Production Build
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

### Build Optimization

**Image Optimization:**
- Use WebP format for better compression
- Lazy load images below the fold
- Use appropriate image sizes for different breakpoints

**Code Splitting:**
- Already implemented via React Router
- Each page loads only when needed

**Caching:**
- Vite automatically generates hashed filenames
- Configure CDN cache headers for static assets

## Custom Domain Setup

### DNS Configuration

**For Vercel/Netlify:**
- A Record: `185.199.108.153` (example)
- CNAME: `www` → `your-site.vercel.app`

**For CloudFront:**
- A Record (Alias): Point to CloudFront distribution
- CNAME: `www` → CloudFront domain

### SSL Certificate

All recommended platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- AWS: Use ACM (AWS Certificate Manager)

## Performance Optimization

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Optimization Tips
1. Enable compression (Gzip/Brotli)
2. Set proper cache headers
3. Use CDN for static assets
4. Minimize JavaScript bundle size
5. Optimize images (WebP, lazy loading)

## Monitoring

### Recommended Tools
- **Google Analytics**: User behavior tracking
- **Vercel Analytics**: Performance monitoring
- **Sentry**: Error tracking
- **Hotjar**: User experience insights

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Rollback Strategy

### Vercel/Netlify
- Both platforms keep deployment history
- One-click rollback to previous versions

### Manual Backup
```bash
# Before deploying, tag the release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# To rollback
git checkout v1.0.0
npm run build
# Deploy
```

## Contact Form Backend

The contact form currently logs to console. To make it functional:

### Option 1: Formspree
```javascript
// In ContactPage.jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
}
```

### Option 2: Netlify Forms
Add `netlify` attribute to form:
```jsx
<form onSubmit={handleSubmit} netlify>
```

### Option 3: Custom Backend
- Build API with Node.js/Express
- Deploy to Vercel/Netlify Functions
- Use SendGrid/Mailgun for email delivery

## Security Considerations

- [ ] Enable HTTPS (SSL)
- [ ] Set security headers (CSP, X-Frame-Options)
- [ ] Implement rate limiting on contact form
- [ ] Sanitize form inputs
- [ ] Add CAPTCHA to prevent spam

## Post-Deployment

1. Submit sitemap to Google Search Console
2. Test all functionality in production
3. Monitor error logs
4. Set up uptime monitoring
5. Configure email notifications for downtime

## Support

For deployment issues, contact: contact@apranova.com

---

Last updated: 2025-10-18

