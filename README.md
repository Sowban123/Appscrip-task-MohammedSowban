# Appscrip-task-Frontend-Developer

A modern, responsive Product Listing Page (PLP) built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development, server-side rendering, SEO optimization, and responsive design.

## 🚀 Live Demo

- **Live Site**: [Deploy on Netlify](https://app.netlify.com/drop)
- **API Used**: [Fake Store API](https://fakestoreapi.com/)

## ✨ Features

- **Server-Side Rendering (SSR)**: Products are fetched on the server for optimal performance and SEO
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Advanced Filtering**: 
  - Category filtering
  - Price range filtering
  - Sort by price, rating, newest
- **SEO Optimized**:
  - Proper meta tags and Open Graph data
  - H1/H2 heading hierarchy
  - Schema.org structured data (Organization & Website)
  - Semantic HTML5 elements
  - Image optimization with Next.js Image component
  - Alt text on all images
- **Performance Optimized**:
  - Minimal DOM size
  - Code splitting and lazy loading
  - Optimized images with lazy loading
  - Efficient state management
- **Clean Code**:
  - TypeScript for type safety
  - Component-based architecture
  - Proper naming conventions
  - Minimal external dependencies

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom React components
- **Data Fetching**: Native Fetch API with SSR
- **Code Quality**: ESLint

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Appscrip-task-[YourName].git
cd Appscrip-task-[YourName]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
npm start
```

### Deploy to Netlify

1. **Option 1: Drag & Drop**
   - Run `npm run build`
   - Drag the `.next` folder to [Netlify Drop](https://app.netlify.com/drop)

2. **Option 2: Git Integration**
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Node version: 20.x

3. **Option 3: Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with SSR data fetching
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   ├── ProductListingPage.tsx  # Main PLP component
│   ├── ProductCard.tsx     # Individual product card
│   ├── FilterSidebar.tsx   # Filter controls
│   └── SchemaMarkup.tsx    # Structured data
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🎨 Design Features

- **Mobile Responsive**: Breakpoints at 640px (sm), 768px (md), 1024px (lg)
- **Accessible**: Proper ARIA labels and semantic HTML
- **Modern UI**: Clean, minimalist design with smooth transitions
- **User Experience**: 
  - Sticky header
  - Mobile filter drawer
  - Product count display
  - Empty state handling
  - Loading states

## 🔍 SEO Implementation

1. **Meta Tags**: Title, description, keywords, Open Graph
2. **Heading Hierarchy**: Proper H1, H2 structure
3. **Schema Markup**: Organization and Website structured data
4. **Image Optimization**: 
   - Next.js Image component with lazy loading
   - Responsive images with proper sizing
   - Descriptive alt text
   - SEO-friendly image names
5. **Semantic HTML**: Article, section, nav, header, footer elements

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column grid)
- **Tablet**: 640px - 1024px (2 column grid)
- **Desktop**: > 1024px (3 column grid, visible sidebar)

## 🚀 Performance Optimizations

- Server-Side Rendering for initial load
- Incremental Static Regeneration (ISR) with 1-hour revalidation
- Image optimization with Next.js Image
- Code splitting by route
- Minimal bundle size
- Efficient re-renders with useMemo

## 📊 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Component Structure**: Small, reusable components
- **Naming Convention**: Clear, descriptive names
- **Comments**: Where necessary for clarity

## 🌐 API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data:
- `GET /products` - Fetch all products
- `GET /products/categories` - Fetch all categories

## 🤝 Contributing

This is a technical assessment project. For any questions or feedback, please contact the developer.

## 📄 License

This project is created for AppScrip technical assessment.

---

**Built with ❤️ using Next.js and TypeScript**
