# Ayush's Interactive Portfolio

A modern, responsive portfolio website showcasing projects and experience at the intersection of healthcare management and web development.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Interactive**: Smooth animations and hover effects
- **Fast**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and metadata

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── page.tsx           # Main portfolio page
│       ├── layout.tsx          # Root layout with metadata
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js (v18+)
- npm or yarn
- Git

## ⚙️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your portfolio

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm start
   ```

## 📝 Customization

### Update Your Information

Edit `src/app/page.tsx` to customize:
- **Your name** (line ~73)
- **Your title/description** (lines ~74-78)
- **Projects** (update the `projects` array starting at line ~7)
- **Skills** (line ~186)
- **Social links** (lines ~207-227)
- **Email** (line ~243)

### Update Metadata

Edit `src/app/layout.tsx` to change:
- Site title
- Site description
- Keywords
- Other SEO metadata

### Styling

Modify `src/app/globals.css` or use Tailwind classes directly in components.

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New** to create a new repository
3. Name it: `your-username.github.io` (replace with your actual GitHub username)
4. Make it **Public**
5. Don't add README, .gitignore, or license (we have them already)
6. Click **Create repository**

### Step 2: Push Your Code to GitHub

Run these commands in your portfolio folder:

```bash
git config user.email "your.email@gmail.com"
git config user.name "Your Name"
git remote remove origin
git remote add origin https://github.com/your-username/your-username.github.io.git
git branch -M main
git push -u origin main
```

Replace:
- `your.email@gmail.com` with your email
- `Your Name` with your name
- `your-username` with your actual GitHub username

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. The workflow will automatically deploy when you push to `main`

### Step 4: Visit Your Live Portfolio

Your portfolio will be live at:
```
https://your-username.github.io
```

It may take 1-2 minutes for the first deployment. Subsequent deployments are usually faster.

## 📱 Share on LinkedIn

1. Copy your portfolio URL
2. Go to your LinkedIn profile
3. Add a new **Featured** section
4. Paste your portfolio URL
5. Add a nice description like:
   > "Interactive portfolio showcasing my projects in healthcare technology and web development. Built with Next.js and deployed on GitHub Pages."

## 🔄 Making Updates

Every time you push changes to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy your portfolio!

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)
- [Lucide Icons](https://lucide.dev)

## 🎨 Customization Ideas

1. **Add a blog**: Create `src/app/blog/` folder with blog posts
2. **Add projects**: Update the projects array with links to GitHub repos
3. **Add animations**: Use Framer Motion or Animate.css
4. **Dark/Light mode**: Add theme toggle
5. **Contact form**: Integrate Formspree or Emailjs
6. **Analytics**: Add Google Analytics

## ⚡ Performance Tips

- Portfolio builds to static HTML (no server needed)
- All assets are optimized
- ~Lighthouse score: 95+
- Fast CDN delivery via GitHub Pages

## 🤝 Support

Need help? Common issues:

1. **Build fails**: Run `npm install` and `npm run build` again
2. **Deployment not working**: Check GitHub Actions tab in your repo
3. **Domain not loading**: Wait 2-3 minutes, clear browser cache
4. **Icons not showing**: Ensure lucide-react is installed: `npm install lucide-react`

## 📄 License

Feel free to use this portfolio template for your own site!

---

**Last Updated**: 2024  
**Built with ❤️ using Next.js**
