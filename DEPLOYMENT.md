# Deployment Guide

This guide covers how to deploy your portfolio to various platforms.

## 🚀 Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added all your projects
- [ ] Updated skills and proficiency levels
- [ ] Added certificates
- [ ] Updated social media links
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Tested production build with `npm run preview`

---

## 1. Vercel (Recommended - Easiest)

### Benefits:
- Free tier available
- Automatic deployments from Git
- Fast CDN
- Great performance

### Steps:

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect Your Repository**
   - Click "New Project"
   - Select your repository
   - Vercel auto-detects Vite configuration

3. **Configure Project**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

4. **Custom Domain** (Optional)
   - Go to Project Settings
   - Add your custom domain
   - Update DNS records

### Deploy Command:
```bash
npm install -g vercel
vercel
```

---

## 2. Netlify

### Benefits:
- Free tier with generous limits
- Easy drag-and-drop deployment
- Built-in form handling
- Great documentation

### Steps:

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to https://netlify.com
   - Sign up
   - Drag and drop the `dist` folder
   - Your site is live!

3. **Connect Git Repository** (Recommended)
   - Click "New site from Git"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

4. **Custom Domain**
   - Go to Site Settings
   - Add custom domain
   - Update DNS records

---

## 3. GitHub Pages

### Benefits:
- Free hosting
- Integrated with GitHub
- Good for portfolios

### Steps:

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Create GitHub Actions Workflow**
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [main]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Enable GitHub Pages**
   - Go to Repository Settings
   - Scroll to "GitHub Pages"
   - Select "gh-pages" branch
   - Your site is live at `https://yourusername.github.io/repository-name`

---

## 4. Traditional Hosting (Shared/VPS)

### Providers:
- Bluehost
- HostGator
- SiteGround
- DigitalOcean
- Linode

### Steps:

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Connect via FTP/SFTP
   - Upload contents of `dist` folder to `public_html` or `www` directory

3. **Configure Server**
   - Ensure `index.html` is served for all routes
   - For Apache, create `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Set Up SSL Certificate**
   - Use Let's Encrypt (free)
   - Or purchase from your hosting provider

---

## 5. Docker Deployment

### Create Dockerfile:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Build and Run:
```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

---

## 6. AWS S3 + CloudFront

### Steps:

1. **Create S3 Bucket**
   - Enable static website hosting
   - Upload `dist` folder contents

2. **Create CloudFront Distribution**
   - Set S3 bucket as origin
   - Configure caching

3. **Add Custom Domain**
   - Update Route 53 DNS records

---

## 📊 Deployment Comparison

| Platform | Cost | Ease | Performance | Custom Domain |
|----------|------|------|-------------|---------------|
| Vercel | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Yes |
| Netlify | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Yes |
| GitHub Pages | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Yes |
| Traditional | $$ | ⭐⭐⭐ | ⭐⭐⭐ | Yes |
| AWS | $$ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Yes |

---

## 🔍 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Links work properly
- [ ] Images load correctly
- [ ] Forms work (if applicable)
- [ ] Mobile responsive
- [ ] Performance is good
- [ ] SEO meta tags present
- [ ] SSL certificate active
- [ ] Analytics configured

---

## 🐛 Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Clear browser cache

### Routes Not Working
- Ensure server redirects to `index.html`
- Check `base` path configuration
- Verify React Router setup

### Slow Performance
- Check bundle size: `npm run build`
- Enable gzip compression
- Use CDN
- Optimize images

### SSL Certificate Issues
- Use Let's Encrypt (free)
- Check certificate expiration
- Verify domain configuration

---

## 📈 Performance Optimization

### Before Deployment:

1. **Check Bundle Size**
   ```bash
   npm run build
   ```
   Look for the output size

2. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

3. **Enable Gzip Compression**
   - Most hosting providers do this automatically

4. **Minify Code**
   - Vite does this automatically

---

## 🎯 Recommended Deployment

**For Beginners**: Vercel or Netlify
- Easiest setup
- Best performance
- Free tier sufficient
- Automatic deployments

**For Advanced Users**: GitHub Pages or AWS
- More control
- Better for learning
- Scalable solutions

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
- Vite Docs: https://vitejs.dev/guide/static-deploy.html

---

Happy deploying! 🚀

