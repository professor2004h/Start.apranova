# Quick Start Guide

Get the Apranova website running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Terminal/Command Prompt

## Installation

```bash
# 1. Navigate to the project directory
cd ApraNova

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The website will be available at: **http://localhost:5173/**

## Project Overview

### 📁 Key Files

- `src/App.jsx` - Main application with routing
- `src/components/Navigation.jsx` - Top navigation bar
- `src/components/Footer.jsx` - Footer component
- `src/pages/` - All page components
- `src/index.css` - Global styles and Tailwind utilities
- `tailwind.config.js` - Tailwind CSS configuration

### 🎨 Pages

1. **Home** (`/`) - Landing page with hero and features
2. **Features** (`/features`) - Platform capabilities
3. **Learning Tracks** (`/learning-tracks`) - Course offerings
4. **Roadmap** (`/roadmap`) - Development timeline
5. **Roles** (`/roles`) - User roles and permissions
6. **Tech Stack** (`/tech-stack`) - Technologies used
7. **About** (`/about`) - Mission and vision
8. **Contact** (`/contact`) - Contact form

## Making Changes

### Update Content

All content is in the page components. For example, to update the homepage:

1. Open `src/pages/HomePage.jsx`
2. Find the section you want to edit
3. Modify the text or content
4. Save - changes appear instantly (hot reload)

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#4A90E2',  // Change this
  dark: '#000000',
  'dark-gray': '#333333',
}
```

### Add New Page

1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `src/components/Navigation.jsx`

### Replace Images

Images are from Unsplash. To replace:

1. Find the image URL in the page component
2. Replace with your own image URL or local path
3. Update alt text for accessibility

## Common Tasks

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Check for Issues

```bash
# Check for dependency vulnerabilities
npm audit

# Fix automatically (if possible)
npm audit fix
```

## Customization Checklist

- [ ] Update contact email (Footer.jsx, ContactPage.jsx)
- [ ] Replace placeholder images with actual photos
- [ ] Customize color scheme (tailwind.config.js)
- [ ] Update meta tags (index.html)
- [ ] Add your logo (replace "AN" monogram)
- [ ] Configure contact form backend
- [ ] Add Google Analytics (optional)

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Check for TypeScript/ESLint errors
npm run build

# If errors persist, check console for details
```

### Images Not Loading

- Ensure image URLs are accessible
- Check browser console for 404 errors
- Verify image paths are correct

## Development Tips

### Hot Reload

Vite provides instant hot reload. Just save your files and see changes immediately.

### Component Structure

```jsx
const MyComponent = () => {
  return (
    <div className="section-padding bg-black">
      <div className="container-custom">
        <h2 className="heading-lg">Title</h2>
        <p className="text-gray-300">Content</p>
      </div>
    </div>
  )
}
```

### Tailwind Classes

Common utility classes:
- `section-padding` - Standard section spacing
- `container-custom` - Max-width container
- `heading-xl/lg/md/sm` - Heading sizes
- `btn-primary` - Primary button
- `btn-secondary` - Secondary button
- `card` - Card component

### Icons

Using Lucide React:
```jsx
import { Icon } from 'lucide-react'

<Icon className="w-6 h-6 text-primary" />
```

## Next Steps

1. **Customize Content** - Update all text and images
2. **Test Thoroughly** - Check all pages and links
3. **Optimize Images** - Compress and convert to WebP
4. **Deploy** - See DEPLOYMENT.md for options
5. **Monitor** - Set up analytics and monitoring

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)

## Support

For questions or issues:
- Email: contact@apranova.com
- Check README.md for detailed documentation
- See DEPLOYMENT.md for deployment help

---

Happy coding! 🚀

