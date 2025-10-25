# Customization Examples

This file provides detailed examples of how to customize each section of your portfolio.

## 📋 Table of Contents
1. [Personal Information](#personal-information)
2. [Projects](#projects)
3. [Skills](#skills)
4. [Certificates](#certificates)
5. [Experience & Education](#experience--education)
6. [Social Links](#social-links)

---

## Personal Information

**File**: `src/config/portfolio.js`

```javascript
export const portfolioConfig = {
  personal: {
    name: 'Yosief Dagnachew',
    title: 'Full Stack Web Developer & Software Engineer',
    bio: 'Passionate about building interactive, modern web applications',
    email: 'yosief@example.com',
    phone: '+251 9XX XXX XXXX',
    location: 'Debre Markos, Ethiopia',
    university: 'Debre Markos University',
    gpa: '3.83',
  },
}
```

---

## Projects

**File**: `src/pages/Projects.jsx`

### Example Project Structure:

```javascript
{
  id: 1,
  title: 'E-Commerce Platform',
  description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
  category: 'fullstack',  // Options: 'frontend', 'backend', 'fullstack'
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  image: '🛍️',  // Use emoji or image URL
  github: 'https://github.com/yourusername/project-name',
  live: 'https://your-project.com',
  featured: true  // Shows on home page
}
```

### Adding a New Project:

1. Open `src/pages/Projects.jsx`
2. Find the `projects` array
3. Add your project object:

```javascript
const projects = [
  // ... existing projects
  {
    id: 7,
    title: 'Your Project Name',
    description: 'Brief description of what your project does',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    image: '🎯',
    github: 'https://github.com/yourusername/your-project',
    live: 'https://your-project-url.com',
    featured: false
  }
]
```

---

## Skills

**File**: `src/pages/Skills.jsx`

### Example Skill Category:

```javascript
{
  category: 'Frontend Development',
  skills: [
    { name: 'React', proficiency: 95 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'Tailwind CSS', proficiency: 90 },
    { name: 'Vue.js', proficiency: 75 },
    { name: 'TypeScript', proficiency: 80 },
  ]
}
```

### Proficiency Levels:
- 90-100: Expert
- 75-89: Advanced
- 60-74: Intermediate
- 40-59: Beginner
- Below 40: Learning

---

## Certificates

**File**: `src/pages/Certificates.jsx`

### Example Certificate:

```javascript
{
  id: 1,
  title: 'Full Stack Web Development',
  issuer: 'Udemy',
  date: 'March 2024',
  description: 'Comprehensive course covering React, Node.js, MongoDB, and modern web development practices.',
  credentialUrl: 'https://udemy.com/certificate/your-certificate',
  icon: '🎓'
}
```

### Useful Emojis for Certificates:
- 🎓 General education
- 📜 Certificate
- ⚛️ React
- 🐍 Python
- 🗄️ Database
- ⚡ Performance
- 🔀 Git/Version Control
- 🐳 Docker
- 🔐 Security

---

## Experience & Education

**File**: `src/pages/About.jsx`

### Example Education Entry:

```javascript
{
  school: 'Debre Markos University',
  degree: 'Bachelor of Science in Software Engineering',
  year: '2024',
  gpa: '3.83',
  details: 'Graduated with honors, focusing on full-stack web development and software architecture'
}
```

### Example Experience Entry:

```javascript
{
  title: 'Full Stack Web Developer',
  company: 'Self-Employed',
  period: '2023 - Present',
  description: 'Building modern web applications using React, Node.js, and various databases'
}
```

---

## Social Links

**File**: `src/config/portfolio.js` or `src/components/Footer.jsx`

```javascript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
}
```

### Common Social Platforms:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Twitter: `https://twitter.com/yourusername`
- Portfolio: `https://yourportfolio.com`
- Email: `mailto:your.email@example.com`
- Dev.to: `https://dev.to/yourusername`
- Medium: `https://medium.com/@yourusername`
- CodePen: `https://codepen.io/yourusername`

---

## 🎨 Color Customization

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#0f172a',      // Dark blue - main background
  secondary: '#1e293b',    // Slate - secondary background
  accent: '#3b82f6',       // Blue - primary accent
  'accent-light': '#60a5fa', // Light blue - hover states
  success: '#10b981',      // Green - success messages
  warning: '#f59e0b',      // Amber - warnings
  danger: '#ef4444',       // Red - errors
}
```

### Popular Color Schemes:

**Blue Theme** (Current):
- Primary: `#0f172a`
- Accent: `#3b82f6`

**Purple Theme**:
- Primary: `#1a0033`
- Accent: `#9333ea`

**Green Theme**:
- Primary: `#0f2f1f`
- Accent: `#10b981`

**Orange Theme**:
- Primary: `#2d1810`
- Accent: `#f97316`

---

## 📝 Content Tips

### Project Descriptions
Keep descriptions concise (1-2 sentences):
- ✅ "E-commerce platform with real-time inventory management"
- ❌ "A project I built that has many features and does lots of things"

### Skill Proficiency
Be honest about your skills:
- 95%: Can teach others
- 85%: Can work independently
- 75%: Can work with guidance
- 60%: Basic understanding

### Certificate Descriptions
Include what you learned:
- ✅ "Advanced JavaScript concepts including ES6+, async programming, and design patterns"
- ❌ "JavaScript course"

---

## 🚀 Next Steps

1. Update all personal information
2. Add your projects with real links
3. List your actual skills and proficiency levels
4. Add your certificates and achievements
5. Update social media links
6. Customize colors to match your brand
7. Deploy to your hosting platform

---

For more help, see `SETUP_GUIDE.md`

