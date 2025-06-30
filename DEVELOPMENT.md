# Development Guide - Harvest Hope Tigray Website

## 🏗️ Technical Architecture

### Technology Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Create React App 5.0.1
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 6.28.1
- **Icons**: FontAwesome 6.7.2
- **Deployment**: GitHub Pages + GitHub Actions
- **Package Manager**: npm

### Key Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^6.28.1",
  "react-scripts": "5.0.1",
  "@fortawesome/react-fontawesome": "^0.2.2",
  "tailwindcss": "^3.4.17",
  "gh-pages": "^6.3.0"
}
```

## 📋 Development Standards

### Code Style

#### JavaScript/React
- Use functional components with hooks
- Prefer arrow functions for components
- Use destructuring for props
- Implement proper error boundaries
- Follow React best practices

#### Example Component Structure:
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = React.useState(initialValue);

  const handleClick = () => {
    // Event handler logic
  };

  return (
    <div className="component-wrapper">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

#### CSS/Tailwind
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use semantic color names

### File Naming Conventions

- **Components**: PascalCase (e.g., `Header.js`, `HeroSection.js`)
- **Pages**: PascalCase with "Page" suffix (e.g., `HomePage.js`)
- **Utilities**: camelCase (e.g., `utils.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `constants.js`)

### Folder Structure Guidelines

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Card, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── sections/       # Page sections (Hero, Features, etc.)
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── constants/          # Application constants
├── styles/             # Global styles and Tailwind config
└── assets/             # Static assets (images, icons)
```

## 🔧 Development Environment Setup

### Required Tools

1. **Node.js 20+**
   ```bash
   node --version  # Should be 20.x or higher
   ```

2. **npm or yarn**
   ```bash
   npm --version   # Should be 9.x or higher
   ```

3. **Git**
   ```bash
   git --version   # Should be 2.x or higher
   ```

### IDE/Editor Setup

#### Recommended Extensions (VS Code)
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

#### Editor Configuration
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  }
}
```

## 🚀 Development Workflow

### 1. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### 2. Git Workflow

```bash
# Check current status
git status

# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature description"

# Push to remote
git push origin feature/new-feature

# Merge to master (after review)
git checkout master
git merge feature/new-feature
git push origin master
```

### 3. Commit Message Convention

Use conventional commit messages:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/tooling changes

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

#### Responsive Design
```jsx
// Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>
```

#### Component Styling
```jsx
// Use consistent spacing
<section className="py-12 px-6 md:px-8 lg:px-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
      Section Title
    </h2>
  </div>
</section>
```

#### Color Usage
```jsx
// Use semantic color names
<button className="bg-emerald-600 hover:bg-emerald-700 text-white">
  Primary Button
</button>

<div className="bg-gray-50 text-gray-900">
  Content Area
</div>
```

### Custom CSS

When Tailwind isn't sufficient, add custom CSS in `src/App.css`:

```css
/* Custom component styles */
.custom-component {
  /* Custom styles */
}

/* Responsive utilities */
@media (max-width: 768px) {
  .mobile-specific {
    /* Mobile styles */
  }
}
```

## 🔍 Testing Strategy

### Unit Testing
- Test individual components
- Use React Testing Library
- Mock external dependencies

### Integration Testing
- Test component interactions
- Test routing functionality
- Test form submissions

### Manual Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Performance is acceptable
- [ ] Accessibility standards met

## 🚀 Deployment Process

### Automated Deployment (GitHub Actions)

The deployment process is fully automated:

1. **Push to master branch**
2. **GitHub Actions workflow triggers**
3. **Dependencies installed with `--legacy-peer-deps`**
4. **Production build created**
5. **SPA fallback generated**
6. **Deployed to gh-pages branch**

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Deployment Checklist

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] No console errors
- [ ] Responsive design works
- [ ] All links functional
- [ ] Images optimized
- [ ] Performance acceptable

## 🔧 Configuration Files

### package.json
Key scripts and dependencies configuration

### tailwind.config.js
Tailwind CSS customization and theme settings

### .github/workflows/deploy.yml
GitHub Actions CI/CD configuration

### .gitignore
Specifies which files to exclude from version control

## 🐛 Debugging Guide

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for syntax errors
npm run build
```

#### Dependency Conflicts
```bash
# Use legacy peer deps
npm install --legacy-peer-deps
```

#### Styling Issues
- Check Tailwind CSS classes
- Verify responsive breakpoints
- Inspect browser developer tools

### Debugging Tools

- **React Developer Tools**: Component inspection
- **Browser DevTools**: Network, console, elements
- **Lighthouse**: Performance and accessibility
- **WebPageTest**: Performance testing

## 📊 Performance Optimization

### Build Optimization
- Code splitting with React.lazy()
- Image optimization
- Minification and compression
- Tree shaking

### Runtime Optimization
- Memoization with React.memo()
- useCallback for event handlers
- useMemo for expensive calculations
- Lazy loading of components

### Monitoring
- Core Web Vitals
- Lighthouse scores
- Real User Monitoring (RUM)

## 🔒 Security Considerations

### Best Practices
- Sanitize user inputs
- Use HTTPS in production
- Implement Content Security Policy
- Regular dependency updates
- Secure environment variables

### Environment Variables
```env
# .env.local (not committed to git)
REACT_APP_API_URL=https://api.example.com
REACT_APP_ANALYTICS_ID=your-analytics-id
```

## 📚 Additional Resources

### Documentation
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)
- [Create React App Documentation](https://create-react-app.dev/docs/)

### Tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Last updated**: June 2025
**Maintained by**: Development Team 