# Harvest Hope Tigray Website

A React-based website for Harvest Hope Tigray, an organization focused on empowering communities through sustainable agriculture and development initiatives.

## 🌟 Features

- **Modern React Application** - Built with React 19 and modern JavaScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Client-Side Routing** - Smooth navigation with React Router
- **GitHub Pages Deployment** - Automated CI/CD pipeline
- **SPA Fallback** - Proper routing support for GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HarvetHope/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
harvesthopetigray/
├── .github/workflows/     # GitHub Actions CI/CD
├── public/                # Static assets
│   ├── images/           # Image assets
│   │   ├── index.html        # Main HTML template
│   │   └── 404.html          # SPA fallback
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── ProjectsSection.js
│   │   └── EmpowerFarmers.js
│   ├── pages/           # Page components
│   │   ├── HomePage.js
│   │   ├── AboutUsPage.js
│   │   ├── ProjectsPage.js
│   │   ├── ContactUsPage.js
│   │   └── DonatePage.js
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   └── index.js         # Application entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## 🛠️ Development Workflow

### Branch Strategy

- **`master`** - Main development branch (contains source code only)
- **`gh-pages`** - Deployment branch (contains built files only, managed by GitHub Actions)

### Development Process

1. **Create a feature branch** (optional for small changes)
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit source files in `src/`
   - Add new components as needed
   - Update styles using Tailwind CSS

3. **Test locally**
   ```bash
   npm start          # Development server
   npm run build      # Production build
   npm test           # Run tests
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

5. **Push to master**
   ```bash
   git push origin master
   ```

6. **Automatic deployment**
   - GitHub Actions automatically builds and deploys
   - Site updates within 2-3 minutes

## 🚀 Deployment

### Automated Deployment (Recommended)

The project uses GitHub Actions for automated deployment:

1. **Push to master branch**
2. **GitHub Actions workflow triggers automatically**
3. **Build process runs in cloud**
4. **Site deploys to GitHub Pages**

### Manual Deployment (Legacy)

If needed, you can deploy manually:

```bash
npm run deploy
```

This will:
- Build the application
- Push to gh-pages branch
- Update the live site

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
REACT_APP_API_URL=your_api_url_here
```

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### GitHub Pages

- **Source**: gh-pages branch
- **URL**: https://harvesthopetigray.org
- **Custom domain**: Configured via CNAME file

## 📦 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
npm run deploy     # Deploy to GitHub Pages (manual)
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes

Use Tailwind CSS utility classes for styling:

```jsx
// Example component styling
<div className="container mx-auto px-6 py-8 bg-gray-50">
  <h1 className="text-3xl font-bold text-gray-900 mb-4">
    Welcome to Harvest Hope Tigray
  </h1>
</div>
```

### Component Structure

Follow this pattern for new components:

```jsx
import React from 'react';

const ComponentName = () => {
  return (
    <div className="component-container">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

## 🔍 Troubleshooting

### Common Issues

1. **Dependency conflicts**
   - Run `npm install --legacy-peer-deps` locally
   - GitHub Actions uses this flag automatically

2. **Build fails**
   - Check for syntax errors
   - Ensure all imports are correct
   - Verify Tailwind CSS classes

3. **Deployment issues**
   - Check GitHub Actions logs
   - Verify gh-pages branch exists
   - Ensure GitHub Pages is enabled

### Development Tips

- Use React Developer Tools for debugging
- Check browser console for errors
- Use Tailwind CSS IntelliSense extension
- Test on different screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to Harvest Hope Tigray.

## 🌐 Live Site

Visit the live site: https://harvesthopetigray.org

## 📞 Support

For technical support or questions about the website, please contact the development team.

---

**Last updated**: June 2025
**Version**: 1.0.0
