# AppScrip Task - Product Listing Page

## Task Requirements Checklist

### ✅ Implementation Requirements
- [x] HTML & CSS implementation
- [x] Functional page in React.JS using Next.js framework
- [x] Server Side Rendering (SSR) implemented
- [x] Responsive design for mobile & tablet

### ✅ Evaluation Criteria
- [x] Clean code structure with organized components
- [x] Proper naming conventions (camelCase, PascalCase)
- [x] Minimal pre-built JS packages (only Next.js, React, Tailwind)
- [x] Screen size fit with responsive breakpoints
- [x] Minimal DOM size with efficient components

### ✅ SEO Settings
- [x] Page title set
- [x] Page description set
- [x] H1 & H2 tags properly used
- [x] Schema.org structured data (Organization & Website)
- [x] SEO-friendly image names
- [x] Alt text on all images

### ✅ Deployment
- [x] Ready to host on Netlify
- [x] GitHub repository structured
- [ ] Update repo name to: Appscrip-task-[YourName]

### ✅ Bonus Features
- [x] Integration with Fake Store API
- [x] Dynamic product filtering
- [x] Advanced sorting options
- [x] Mobile-first responsive design

## Technical Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Server-Side Rendering
- Fake Store API

## Key Features
1. **SSR Implementation**: Products fetched server-side for optimal SEO
2. **Responsive Design**: Mobile (1 col), Tablet (2 col), Desktop (3 col)
3. **Advanced Filters**: Categories, price range, sorting
4. **SEO Optimized**: Meta tags, Schema markup, semantic HTML
5. **Performance**: Lazy loading, code splitting, optimized images

## Running the Project

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

## Deployment to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy using one of these methods:
   - **GitHub Integration**: Push to GitHub and connect to Netlify
   - **Netlify CLI**: `netlify deploy --prod`
   - **Drag & Drop**: Drag `.next` folder to Netlify Drop

3. Build settings on Netlify:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20.x

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Home page with SSR
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Site header with navigation
│   ├── Footer.tsx              # Site footer with links
│   ├── ProductListingPage.tsx  # Main PLP with filters
│   ├── ProductCard.tsx         # Product card component
│   ├── FilterSidebar.tsx       # Filter controls
│   └── SchemaMarkup.tsx        # SEO structured data
└── types/
    └── index.ts                # TypeScript interfaces
```

## Code Quality Highlights

- **TypeScript**: Full type safety across all components
- **Component Architecture**: Small, reusable, single-responsibility components
- **State Management**: Efficient with useMemo hooks
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized with Next.js Image, lazy loading

## SEO Implementation

- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Schema.org**: Organization and Website structured data
- **Semantic HTML**: header, nav, main, article, footer
- **Image Optimization**: Next.js Image with lazy loading and alt text
- **Heading Structure**: Logical H1/H2 hierarchy

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## API Integration

Uses Fake Store API:
- Products: https://fakestoreapi.com/products
- Categories: https://fakestoreapi.com/products/categories

---

**Developed for AppScrip Technical Assessment**
