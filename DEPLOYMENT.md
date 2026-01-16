# Deployment Guide for Netlify

## Prerequisites
- Node.js 20.x or later
- npm or yarn
- Git account
- Netlify account

## Quick Deployment Steps

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Product Listing Page"
   git branch -M main
   git remote add origin https://github.com/yourusername/Appscrip-task-[YourName].git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

4. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at: `https://[random-name].netlify.app`

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Method 3: Manual Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `.next` folder
   - Your site will be deployed instantly

## Environment Variables (if needed)

If you need to add environment variables:

1. In Netlify dashboard, go to: Site settings > Environment variables
2. Add your variables:
   - `NEXT_PUBLIC_API_URL` (if using custom API)

## Custom Domain Setup

1. In Netlify dashboard: Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to update DNS records

## Build Settings Details

```toml
# netlify.toml (already included in project)
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test responsive design on mobile/tablet
- [ ] Check all filters work
- [ ] Verify products load from API
- [ ] Test sorting functionality
- [ ] Check SEO meta tags (view source)
- [ ] Verify Schema markup (Google Rich Results Test)
- [ ] Test performance (Lighthouse)

## Troubleshooting

### Build Fails
- Check Node version is 20.x
- Ensure all dependencies are installed
- Verify no TypeScript errors

### API Not Loading
- Check API endpoint is accessible
- Verify CORS settings if using custom API

### Images Not Loading
- Ensure Next.js Image domains are configured
- Check image URLs are accessible

## Performance Optimization Tips

1. **Enable Next.js Plugin**
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

2. **Enable Edge Functions** (optional)
   - In Netlify dashboard: Site settings > Edge Functions

3. **Add Headers** (already configured in netlify.toml)
   - Security headers
   - Cache control

## Monitoring

- Check build logs in Netlify dashboard
- Monitor site analytics
- Set up deploy notifications

## Support

For issues:
- Check [Netlify Docs](https://docs.netlify.com/)
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

**Your site should now be live! 🎉**

Share the URL: `https://[your-site-name].netlify.app`
