# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## Step 3: Customize Your Information (2 minutes)

### Update Personal Info
Edit `src/config/portfolio.js`:
```javascript
personal: {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: 'Your Phone',
  location: 'Your Location',
  gpa: 'Your GPA',
}
```

### Update Social Links
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- Replace GitHub URL
- Replace LinkedIn URL
- Replace Twitter URL
- Replace email address

## Step 4: Add Your Projects (1 minute)

Edit `src/pages/Projects.jsx`:

```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'What your project does',
  category: 'fullstack',
  technologies: ['React', 'Node.js'],
  image: '🎯',
  github: 'https://github.com/you/project',
  live: 'https://your-project.com',
  featured: true
}
```

## Step 5: Build & Deploy (1 minute)

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Or Deploy to Netlify
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist` folder

---

## 📋 Essential Customizations

### 1. Update About Page
- Edit `src/pages/About.jsx`
- Update education and experience

### 2. Update Skills
- Edit `src/pages/Skills.jsx`
- Add your skills and proficiency levels

### 3. Update Certificates
- Edit `src/pages/Certificates.jsx`
- Add your certificates

### 4. Update Contact Info
- Edit `src/pages/Contact.jsx`
- Update email, phone, location

### 5. Change Colors (Optional)
- Edit `tailwind.config.js`
- Modify the `colors` section

---

## 🎨 Useful Emojis for Projects

- 🛍️ E-commerce
- ✓ Task/Todo
- 🌤️ Weather
- 📝 Blog
- 📊 Dashboard
- 💬 Chat
- 🎮 Game
- 📱 Mobile App
- 🔐 Security
- 🎓 Education

---

## 📁 File Structure

```
src/
├── pages/
│   ├── Home.jsx          ← Hero section
│   ├── About.jsx         ← Education & Experience
│   ├── Projects.jsx      ← Your projects
│   ├── Skills.jsx        ← Your skills
│   ├── Certificates.jsx  ← Your certificates
│   └── Contact.jsx       ← Contact form
├── components/
│   ├── Navbar.jsx        ← Navigation
│   ├── Footer.jsx        ← Footer
│   ├── Button.jsx        ← Reusable button
│   └── Card.jsx          ← Reusable card
├── config/
│   └── portfolio.js      ← Your personal info
└── App.jsx               ← Main app
```

---

## 🔗 Important Links to Update

1. **GitHub**: `src/components/Footer.jsx` (line ~20)
2. **LinkedIn**: `src/components/Footer.jsx` (line ~21)
3. **Twitter**: `src/components/Footer.jsx` (line ~22)
4. **Email**: `src/pages/Contact.jsx` (line ~50)
5. **Projects**: `src/pages/Projects.jsx` (line ~10)
6. **Skills**: `src/pages/Skills.jsx` (line ~10)

---

## ✅ Verification Checklist

Before deploying, verify:

- [ ] Your name appears correctly
- [ ] Your email is correct
- [ ] Social links work
- [ ] Projects display correctly
- [ ] Skills are accurate
- [ ] Certificates are listed
- [ ] Contact form works
- [ ] Mobile view looks good
- [ ] All links are working

---

## 🚀 Deploy Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 💡 Pro Tips

1. **Use Real Links**: Make sure all GitHub and project links are real
2. **Keep Updated**: Update projects and skills regularly
3. **Mobile First**: Always test on mobile
4. **SEO**: Update meta tags in `index.html`
5. **Performance**: Check build size with `npm run build`

---

## 🆘 Common Issues

### Port 3000 Already in Use
```bash
npm run dev -- --port 3001
```

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deploy
- Check browser console (F12)
- Clear cache
- Verify all links are correct

---

## 📚 Full Documentation

- **Setup Guide**: See `SETUP_GUIDE.md`
- **Customization**: See `CUSTOMIZATION_EXAMPLES.md`
- **Deployment**: See `DEPLOYMENT.md`
- **README**: See `README.md`

---

## 🎉 You're Ready!

Your portfolio is ready to customize and deploy. Start with Step 1 above and you'll have a live portfolio in minutes!

**Questions?** Check the documentation files or the component code comments.

Happy coding! 🚀

