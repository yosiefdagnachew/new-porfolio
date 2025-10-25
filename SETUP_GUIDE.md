# Portfolio Setup & Customization Guide

## 🎯 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The portfolio will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## 📝 Customization Steps

### Step 1: Update Personal Information

Edit `src/config/portfolio.js`:

```javascript
export const portfolioConfig = {
  personal: {
    name: 'Yosief Dagnachew',
    title: 'Full Stack Web Developer & Software Engineer',
    bio: 'Your bio here',
    email: 'your.email@example.com',
    phone: '+251 9XX XXX XXXX',
    location: 'Your Location',
    university: 'Debre Markos University',
    gpa: '3.83',
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your.email@example.com',
  },
}
```

### Step 2: Update Projects

Edit `src/pages/Projects.jsx` and modify the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    category: 'fullstack', // or 'frontend', 'backend'
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '🎨', // Use emoji or image URL
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com',
    featured: true
  },
  // Add more projects...
]
```

### Step 3: Update Skills

Edit `src/pages/Skills.jsx` and modify the `skillCategories` array:

```javascript
const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'JavaScript', proficiency: 90 },
      // Add more skills...
    ]
  },
  // Add more categories...
]
```

### Step 4: Update Certificates

Edit `src/pages/Certificates.jsx` and modify the `certificates` array:

```javascript
const certificates = [
  {
    id: 1,
    title: 'Certificate Title',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    description: 'Certificate description',
    credentialUrl: 'https://credential-url.com',
    icon: '🎓'
  },
  // Add more certificates...
]
```

### Step 5: Update About Section

Edit `src/pages/About.jsx` and update:
- Education details in the `education` array
- Experience details in the `experience` array
- Bio text in the "Who I Am" section

### Step 6: Update Contact Information

Edit `src/pages/Contact.jsx` and update:
- Email address
- Phone number
- Location
- Social media links

### Step 7: Update Footer

Edit `src/components/Footer.jsx` and update:
- Social media links
- Quick links
- Contact information

## 🎨 Customizing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Main background
      secondary: '#1e293b',    // Secondary background
      accent: '#3b82f6',       // Primary accent color
      'accent-light': '#60a5fa', // Light accent color
    },
  },
}
```

## 🔤 Customizing Fonts

The portfolio uses:
- **Sans**: Inter (from Google Fonts)
- **Mono**: Fira Code (from Google Fonts)

To change fonts, edit `index.html` and `tailwind.config.js`.

## 📱 Adding Your Resume

1. Place your resume PDF in the `public` folder (create if it doesn't exist)
2. Update the resume link in `src/config/portfolio.js`:
```javascript
resume: '/your-resume.pdf'
```

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```

2. Build and push to GitHub:
```bash
npm run build
git add .
git commit -m "Deploy portfolio"
git push
```

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 🔍 SEO Optimization

Update `src/config/portfolio.js`:

```javascript
seo: {
  title: 'Your Name - Your Title',
  description: 'Your portfolio description',
  keywords: 'your, keywords, here',
}
```

Also update `index.html` meta tags.

## 📊 Analytics

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Build Errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### SSL Certificate Issues
```bash
npm config set strict-ssl false
npm install
```

## 📚 Project Structure

```
new-portfolio/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── config/         # Configuration files
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── dist/               # Production build
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── README.md           # Documentation
```

## 💡 Tips & Best Practices

1. **Keep it Updated**: Regularly update your projects and skills
2. **Use Real Links**: Make sure all social links and project links work
3. **Optimize Images**: Use optimized images for better performance
4. **Mobile First**: Test on mobile devices before deploying
5. **SEO**: Keep meta tags and descriptions updated
6. **Performance**: Monitor build size and optimize as needed

## 🆘 Need Help?

- Check the README.md for general information
- Review the component files for implementation details
- Check Framer Motion docs: https://www.framer.com/motion/
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Check React docs: https://react.dev/

---

Happy coding! 🚀

