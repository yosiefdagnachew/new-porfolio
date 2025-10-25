# Yosief Dagnachew - Portfolio Website

A modern, interactive, and visually appealing portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful glass-morphism effects and smooth animations
- **Interactive Components**: Engaging animations powered by Framer Motion
- **Dark Mode**: Built-in dark theme support
- **Project Showcase**: Filter projects by category (Frontend, Backend, Full Stack)
- **Skills Display**: Animated skill bars with proficiency levels
- **Certificates Section**: Showcase your achievements and certifications
- **Contact Form**: Functional contact form for inquiries
- **Social Integration**: Links to all social media profiles
- **Performance Optimized**: Fast loading with Vite and optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📋 Pages

1. **Home** - Hero section with introduction and call-to-action
2. **About** - Professional background, education, and experience
3. **Projects** - Showcase of projects with filtering and links
4. **Skills** - Technical skills with proficiency indicators
5. **Certificates** - Certifications and achievements
6. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🔧 Configuration

Update your personal information in `src/config/portfolio.js`:

```javascript
export const portfolioConfig = {
  personal: {
    name: 'Your Name',
    email: 'your.email@example.com',
    // ... other details
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    // ... other social links
  },
}
```

## 📝 Customization

### Adding Projects
Edit `src/pages/Projects.jsx` and add your projects to the `projects` array.

### Updating Skills
Edit `src/pages/Skills.jsx` and modify the `skillCategories` array.

### Adding Certificates
Edit `src/pages/Certificates.jsx` and add your certificates to the `certificates` array.

### Changing Colors
Modify the theme colors in `tailwind.config.js` under the `colors` section.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Customization Guide

### Colors
- Primary: `#0f172a` (Dark blue)
- Secondary: `#1e293b` (Slate)
- Accent: `#3b82f6` (Blue)
- Accent Light: `#60a5fa` (Light blue)

### Fonts
- Sans: Inter
- Mono: Fira Code

## 📞 Contact

For questions or support, reach out through:
- Email: yosief@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React and Vite communities
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- React Icons for beautiful icons

---

**Made with ❤️ by Yosief Dagnachew**

