# Changelog - Apranova Website Updates

## October 18, 2025 - Legal Pages & Final Design Updates

### 1. Footer Component Updates

**Removed:**
- "Follow Us" heading and all social media icons (Twitter, LinkedIn, GitHub)
- Social media icon imports from lucide-react

**Added:**
- New "Legal" section in footer with two links:
  - "Privacy Policy" → `/privacy-policy`
  - "Terms and Conditions" → `/terms-and-conditions`
- React Router Link import for internal navigation

**Styling:**
- Maintained existing footer layout (3-column grid)
- Links styled with hover effects matching existing design
- Vertical layout for legal links with proper spacing

---

### 2. New Legal Pages Created

#### Privacy Policy Page (`src/pages/PrivacyPolicyPage.jsx`)

**Content Sections:**
- Information We Collect (Account, Usage, Technical data)
- How We Use Your Information (Educational services, Platform improvement, Communication)
- Data Storage and Security (Infrastructure, Access controls, Code isolation)
- Data Sharing and Third Parties (Educational institutions, Service providers, Legal requirements)
- Cookies and Tracking (Essential, Analytics, Third-party cookies)
- Your Rights and Choices (Access, Correction, Deletion, GDPR/CCPA rights)
- Data Retention policies
- Children's Privacy (16+ age requirement)
- International Data Transfers
- Changes to Privacy Policy
- Contact section with email CTA

**Design Features:**
- Black background with white text throughout
- Blue accent color (#4A90E2) for icons
- Border separators (`border-t border-gray-800`) between sections
- Icon-based section headers using lucide-react icons
- Responsive layout with max-width containers
- Professional, enterprise-grade styling
- Accessible and readable typography

#### Terms and Conditions Page (`src/pages/TermsPage.jsx`)

**Content Sections:**
- Acceptance of Terms (Agreement, Eligibility, Modifications)
- User Accounts and Responsibilities (Account creation, Account types, User conduct)
- Acceptable Use Policy (Educational purpose, Code of conduct, Resource usage)
- Intellectual Property Rights (Platform ownership, User content, Educational materials, Third-party content)
- Service Availability and Limitations (Availability, Beta features, Data backup)
- Disclaimers and Limitation of Liability (Warranties, Liability limits, Educational outcomes, Third-party services)
- Account Termination
- Indemnification
- Governing Law and Dispute Resolution
- Severability and Entire Agreement
- Contact section with email CTA

**Design Features:**
- Consistent black background styling
- Same layout pattern as Privacy Policy page
- Icon-based section headers
- Border separators between sections
- Professional legal document formatting
- Responsive and accessible design

---

### 3. Navigation and Routing Updates

**Navigation Component (`src/components/Navigation.jsx`):**
- Added "Privacy Policy" link to main navigation
- Added "Terms" link to main navigation (shortened label for space)
- Now displays 9 navigation items instead of 7
- Links appear in both desktop and mobile navigation menus

**App Router (`src/App.jsx`):**
- Added `/privacy-policy` route → `PrivacyPolicyPage`
- Added `/terms-and-conditions` route → `TermsPage`
- Imported both new page components
- Now has 9 total routes

---

### 4. HomePage Final Background Fixes

**Sections Updated:**
- **Key Differentiators section** (line 88): Changed from `bg-dark-gray` to `bg-black border-t border-gray-800`
- **Feature Cards section** (line 105): Added `bg-black border-t border-gray-800`
- **Collaboration Image section** (line 123): Changed from `bg-dark-gray` to `bg-black border-t border-gray-800`

**Result:**
- All sections now use pure black background
- Consistent border separators throughout
- No remaining gray backgrounds on HomePage
- Complete visual consistency across entire website

---

## October 18, 2025 - Design Refinement Update

### 1. Contact Page Removal & CTA Updates

**Removed:**
- `src/pages/ContactPage.jsx` - Deleted entirely
- Contact route from `src/App.jsx`
- Contact navigation link from `src/components/Navigation.jsx`

**Updated CTAs to Email Links:**
All "Contact Us", "Get in Touch", "Request Early Access", and "Get Started" buttons now use `mailto:` links that open the user's email client.

**Changes by Page:**

- **HomePage.jsx**
  - Hero CTA: "Request Early Access" → `mailto:contact@apranova.com?subject=Early Access Request`
  - Bottom CTA: "Request Early Access" → `mailto:contact@apranova.com?subject=Early Access Request`

- **AboutPage.jsx**
  - CTA: "Get Started Today" → `mailto:contact@apranova.com?subject=Get Started with Apranova`

**Email Links Styling:**
- All email links maintain consistent button styling (`btn-primary` or `btn-secondary`)
- Hover effects and transitions preserved
- Accessible with proper semantic HTML

---

### 2. Background Color & Visual Separation Updates

**Color Scheme Changes:**

**Before:**
- Alternating sections: Black (#000000) and Gray (#333333)
- Cards: Gray background (#333333)

**After:**
- All sections: Pure black (#000000)
- Cards: Black background with enhanced borders
- Visual separation via subtle border lines

**Updated Files:**

#### `src/index.css`
- **Card component**: Changed from `bg-dark-gray` to `bg-black` with `border-2 border-gray-800` and `shadow-lg`

#### `src/components/Navigation.jsx`
- Hover states: Changed from `hover:bg-dark-gray` to `hover:bg-gray-900`
- Mobile menu button: Updated hover background

#### `src/pages/HomePage.jsx`
- CTA section: Removed gradient, added `border-t border-gray-800` separator
- Updated card container styling

#### `src/pages/FeaturesPage.jsx`
- All feature sections: Changed from alternating `bg-black`/`bg-dark-gray` to all `bg-black`
- Added `border-t border-gray-800` to sections (except first)
- Architecture section: Enhanced border and shadow

#### `src/pages/LearningTracksPage.jsx`
- Track sections: Changed from alternating backgrounds to all `bg-black`
- Added `border-t border-gray-800` separators
- Deliverables section: Added border separator

#### `src/pages/RoadmapPage.jsx`
- Timeline section: Changed to `bg-black` with border separator
- Icon circles: Changed from `bg-dark-gray` to `bg-black` with shadow
- Future phases note: Enhanced border and shadow
- Key milestones: Added border separator

#### `src/pages/RolesPage.jsx`
- Role sections: Changed from alternating to all `bg-black`
- Added border separators between sections
- Future roles section: Added border separator
- Access comparison table:
  - Header: Changed from `bg-dark-gray` to `bg-black` with border
  - Rows: Updated hover effect to `hover:bg-gray-900/30`
  - Added row borders for better separation

#### `src/pages/TechStackPage.jsx`
- Technology category sections: All `bg-black` with border separators
- Architecture overview: Enhanced with borders and shadows
- Architecture layer boxes: Changed from `bg-dark-gray` to `bg-black` with borders
- Technical highlights: Added border separator

#### `src/pages/AboutPage.jsx`
- Mission section: Enhanced border and shadow
- Target audience section: Added border separator
- Values section: Added border separator
- CTA section: Enhanced border and shadow, removed gradient

---

### 3. Visual Improvements

**Enhanced Card Styling:**
- Thicker borders (`border-2` instead of `border`)
- Darker border color (`border-gray-800` instead of `border-gray-700`)
- Added `shadow-lg` for depth on black backgrounds
- Maintained hover effects with `hover:border-primary`

**Section Separators:**
- Subtle horizontal lines (`border-t border-gray-800`) between major sections
- Creates visual hierarchy without color changes
- Maintains minimalist aesthetic

**Improved Contrast:**
- Cards now stand out better against black background
- Border thickness and shadows provide depth
- Consistent visual language throughout

---

## Design Rationale

### Why Remove Gray Backgrounds?

1. **Stronger Minimalism**: Pure black creates a more striking, modern aesthetic
2. **Better Focus**: Content stands out more clearly without background color changes
3. **Consistency**: Uniform background reduces visual noise
4. **Professional**: Aligns with high-end enterprise design patterns

### Why Use Border Separators?

1. **Subtle Division**: Maintains section separation without color changes
2. **Clean Lines**: Reinforces the minimalist, corporate aesthetic
3. **Visual Flow**: Guides the eye through content naturally
4. **Accessibility**: Clear section boundaries for all users

### Why Email Links Instead of Contact Form?

1. **Simplicity**: Direct communication without backend complexity
2. **Familiarity**: Users comfortable with their own email client
3. **Flexibility**: Users can compose messages with full email features
4. **Professional**: Standard practice for B2B enterprise communication

---

## Technical Details

### Color Values Used

- **Black Background**: `#000000` (`bg-black`)
- **Border Color**: `#1f2937` (`border-gray-800`)
- **Hover Background**: `#111827` (`bg-gray-900`)
- **Primary Accent**: `#4A90E2` (unchanged)
- **Text Colors**: White, gray-300, gray-400 (unchanged)

### CSS Classes Modified

- `.card` - Updated in `src/index.css`
- Section backgrounds - Updated across all page components
- Navigation hover states - Updated in `Navigation.jsx`
- Table styling - Updated in `RolesPage.jsx`

### Removed Dependencies

- No package dependencies removed
- Only removed `ContactPage.jsx` component
- Removed one route from React Router

---

## Testing Checklist

- [x] All pages load without errors
- [x] Navigation works correctly (7 pages instead of 8)
- [x] Email links open default email client
- [x] Email subject lines are pre-filled
- [x] All sections have proper visual separation
- [x] Cards are visible and distinct on black background
- [x] Hover effects work on all interactive elements
- [x] Mobile responsive design maintained
- [x] Accessibility features preserved
- [x] No console errors or warnings

---

## Browser Compatibility

All changes use standard CSS and HTML features supported by:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Migration Notes

### For Future Updates

If you need to restore the Contact page:
1. Recreate `src/pages/ContactPage.jsx` from git history
2. Add route back to `src/App.jsx`
3. Add navigation link to `src/components/Navigation.jsx`
4. Update CTAs to use `Link to="/contact"` instead of `mailto:`

### For Custom Email Addresses

To change the contact email, update all `mailto:` links:
- Search for `contact@apranova.com` in the codebase
- Replace with your desired email address
- Update subject lines as needed

---

## Summary

**Files Modified:** 10
**Files Deleted:** 1
**Lines Changed:** ~150+
**Breaking Changes:** None (only visual updates)
**Performance Impact:** Positive (one less page to load)

The website now features a cleaner, more minimalist design with pure black backgrounds throughout, subtle border separators for visual hierarchy, and direct email communication via mailto links. All changes maintain the professional, enterprise-grade aesthetic while improving visual consistency and user experience.

---

**Updated by:** Augment Agent  
**Date:** October 18, 2025  
**Version:** 1.1.0

