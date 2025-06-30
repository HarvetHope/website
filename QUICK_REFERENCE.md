# Quick Reference Guide - Harvest Hope Tigray Website

## 🚀 Essential Commands

### Development
```bash
npm start          # Start development server (http://localhost:3000)
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (irreversible)
```

### Git Operations
```bash
git status                    # Check current status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin master        # Push to master branch
git pull origin master        # Pull latest changes
git checkout -b feature/name  # Create feature branch
```

### Deployment
```bash
npm run deploy               # Manual deployment to GitHub Pages
git push origin master       # Trigger automated deployment
```

## 📁 File Locations

### Key Files
- `src/App.js` - Main application component
- `src/index.js` - Application entry point
- `public/index.html` - HTML template
- `tailwind.config.js` - Tailwind CSS configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow

### Component Structure
- `src/components/` - Reusable components
- `src/pages/` - Page components
- `public/images/` - Image assets

## 🎨 Styling Quick Reference

### Common Tailwind Classes
```jsx
// Layout
"container mx-auto px-6"      // Centered container with padding
"flex items-center justify-between"  // Flexbox layout
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Responsive grid

// Spacing
"p-4"                        // Padding all sides
"px-6 py-8"                  // Horizontal/vertical padding
"m-4"                        // Margin all sides
"mt-8 mb-4"                  // Top/bottom margin

// Typography
"text-2xl font-bold"         // Large bold text
"text-gray-900"              // Dark text color
"text-center"                // Center align text

// Colors
"bg-emerald-600"             // Primary green background
"text-white"                 // White text
"border-gray-200"            // Light gray border

// Responsive
"w-full md:w-1/2 lg:w-1/3"   // Responsive width
"text-lg md:text-xl lg:text-2xl"  // Responsive text size
```

### Color Palette
- **Primary**: `emerald-600` (green)
- **Secondary**: `gray-600` (gray)
- **Background**: `gray-50` (light gray)
- **Text**: `gray-900` (dark gray)
- **White**: `white`

## 🔧 Common Tasks

### Adding a New Page
1. Create file in `src/pages/PageName.js`
2. Add route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

### Adding a New Component
1. Create file in `src/components/ComponentName.js`
2. Import and use in parent component
3. Add styles using Tailwind classes

### Adding Images
1. Place image in `public/images/`
2. Reference with: `src={process.env.PUBLIC_URL + '/images/filename.jpg'}`

### Updating Dependencies
```bash
npm install package-name      # Install new package
npm update                    # Update existing packages
npm audit fix                 # Fix security vulnerabilities
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

#### Styling Not Applied
- Check Tailwind classes are correct
- Verify CSS is imported in component
- Check browser developer tools

#### Images Not Loading
- Verify path in `public/images/`
- Check file permissions
- Use correct `process.env.PUBLIC_URL` prefix

#### Deployment Issues
- Check GitHub Actions logs
- Verify gh-pages branch exists
- Ensure GitHub Pages is enabled

### Debug Commands
```bash
npm run build                # Check for build errors
npm test                     # Run tests
npm audit                    # Check for vulnerabilities
```

## 📱 Responsive Breakpoints

### Tailwind Default Breakpoints
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Usage Example
```jsx
<div className="
  w-full           // Mobile: full width
  md:w-1/2         // Tablet: half width
  lg:w-1/3         // Desktop: third width
  text-sm          // Mobile: small text
  md:text-base     // Tablet: base text
  lg:text-lg       // Desktop: large text
">
  Responsive content
</div>
```

## 🔗 Useful Links

### Documentation
- [React Docs](https://reactjs.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/docs)

### Tools
- [GitHub Repository](https://github.com/HarvetHope/website)
- [Live Site](https://harvesthopetigray.org)
- [GitHub Actions](https://github.com/HarvetHope/website/actions)

### Development Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 📋 Development Checklist

### Before Committing
- [ ] Code runs without errors
- [ ] Responsive design works
- [ ] All links functional
- [ ] Images load correctly
- [ ] No console errors
- [ ] Tests pass (if applicable)

### Before Deploying
- [ ] Build completes successfully
- [ ] Performance is acceptable
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness

## 🚨 Emergency Procedures

### Rollback Deployment
```bash
# Revert to previous commit
git revert HEAD
git push origin master
```

### Fix Critical Issues
```bash
# Hotfix branch
git checkout -b hotfix/critical-fix
# Make changes
git commit -m "fix: critical issue description"
git push origin hotfix/critical-fix
# Merge to master
```

---

**Last updated**: June 2025
**For detailed information**: See `README.md` and `DEVELOPMENT.md` 