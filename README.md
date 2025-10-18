# Apranova - Enterprise Learning Platform Website

A professional, multi-page website for Apranova's enterprise-level educational technology platform. Built with React, Vite, and Tailwind CSS.

## 🎨 Design Specifications

- **Color Scheme**: Black background (#000000), white text (#FFFFFF), blue accent (#4A90E2), gray (#333333)
- **Style**: Minimalist, corporate, professional with clean typography
- **Layout**: Grid-based, spacious sections with clear visual hierarchy
- **Typography**: Inter font family for excellent readability

## 📄 Pages

1. **Homepage** - Hero section with key features and CTAs
2. **Platform Features** - 5 core capabilities with detailed descriptions
3. **Learning Tracks** - Data Professional and Full-Stack Developer tracks
4. **Development Roadmap** - 3-phase development timeline
5. **User Roles & Access** - Student, Trainer, Admin roles and future roles
6. **Technology Stack** - Complete tech stack with categories
7. **About & Vision** - Mission, philosophy, and vision
8. **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

### Frontend
- **React** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Build Tools
- **Vite** - Next-generation build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
apranova-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Main navigation bar
│   │   └── Footer.jsx         # Footer component
│   ├── pages/
│   │   ├── HomePage.jsx       # Landing page
│   │   ├── FeaturesPage.jsx   # Platform features
│   │   ├── LearningTracksPage.jsx
│   │   ├── RoadmapPage.jsx
│   │   ├── RolesPage.jsx
│   │   ├── TechStackPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile navigation

### Accessibility
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for all images
- High contrast color scheme

### Performance
- Lazy loading for images
- Optimized bundle size with Vite
- Code splitting with React Router
- WebP image format support

### SEO
- Meta tags in index.html
- Semantic HTML structure
- Descriptive page titles
- Clean URL structure

## 🎨 Design System

### Colors
```css
--primary: #4A90E2      /* Blue accent */
--dark: #000000         /* Black background */
--dark-gray: #333333    /* Gray for depth */
--white: #FFFFFF        /* White text */
```

### Typography
- **Headings**: Bold, large sizes (heading-xl, heading-lg, heading-md, heading-sm)
- **Body**: Regular weight, 16px base size
- **Font**: Inter, Helvetica, Arial, sans-serif

### Components
- **Cards**: Dark gray background with hover effects
- **Buttons**: Primary (blue) and Secondary (outlined)
- **Sections**: Consistent padding (80-100px vertical)

## 📸 Images

All images are sourced from Unsplash with appropriate licensing:
- Professional workspace photos
- Team collaboration images
- Technology and infrastructure visuals
- Modern office environments

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',
      dark: '#000000',
      'dark-gray': '#333333',
    },
  },
}
```

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### Modifying Content
All content is in the respective page components. Simply edit the JSX to update text, images, or structure.

## 📧 Contact

Email: contact@apranova.com

## 📝 License

Copyright © 2025 Apranova. All rights reserved.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `dist` folder or connect repo
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
- **GitHub Pages**: Use `gh-pages` package

### Environment Variables
No environment variables required for basic deployment. For contact form functionality, integrate with a backend service.

## 🔄 Future Enhancements

- Backend integration for contact form
- Blog section for updates and announcements
- Student testimonials and case studies
- Interactive demo of the platform
- Multi-language support
- Dark/light mode toggle (currently dark only)

## 🐛 Known Issues

None at this time. Please report issues via email.

## 👥 Contributing

This is a private project. For inquiries about contributing, please contact us.

---

Built with ❤️ for the future of technical education

