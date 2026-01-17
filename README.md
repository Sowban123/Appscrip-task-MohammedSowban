# Appscrip-task-Mohammed-Sowban

A fully responsive **Product Listing Page (PLP)** built as part of the  
**Appscrip Frontend Developer Technical Assessment**.

This project is developed using **Next.js (App Router), TypeScript, and Tailwind CSS**, with a strong focus on:

- Server Side Rendering (SSR)
- SEO Optimization
- Performance
- Clean and maintainable code structure

---

## 🚀 Live Demo

**Live Site:**  
https://thunderous-lokum-bbe1b4.netlify.app/

**API Used:**  
https://fakestoreapi.com/

---

## ✨ Key Features

### ⚡ Server Side Rendering (SSR)
- Products and categories are fetched on the server.
- Faster initial load and better SEO performance.

### 📱 Fully Responsive Design
- Optimized for:
  - Mobile
  - Tablet
  - Desktop  
- Grid layout adapts smoothly to screen sizes.

### 🎯 Filtering & Sorting
- Category filtering  
- Price range filtering  
- Sorting options:
  - Recommended
  - Newest
  - Price: Low to High
  - Price: High to Low
  - Highest Rated

### 🔍 SEO Optimized
- Page title and meta description
- Single H1 and proper H2 hierarchy
- Schema.org structured data (Organization & Website)
- Semantic HTML5 elements
- Alt text for all images
- SEO-friendly SSR rendering

### 🚀 Performance Focused
- Minimal DOM size
- Lazy-loaded images
- Code splitting
- Optimized re-renders using `useMemo`

### 🧹 Clean Code
- TypeScript for strict type safety
- Component-based architecture
- Clear naming conventions
- Minimal external dependencies

---

## 🛠 Tech Stack

| Technology     | Usage                          |
|---------------|--------------------------------|
| Next.js 16     | Framework (App Router + SSR)   |
| TypeScript     | Type safety                    |
| Tailwind CSS   | Styling & responsiveness       |
| FakeStore API  | Mock backend data              |
| ESLint         | Code quality & linting         |

---

## 🔍 SEO Implementation Checklist

- ✔ Page Title  
- ✔ Meta Description  
- ✔ H1 & H2 Hierarchy  
- ✔ Schema Markup (JSON-LD)  
- ✔ Semantic HTML  
- ✔ Alt Text for Images  
- ✔ Server Side Rendering  

---

## 🎯 Appscrip Evaluation Criteria Coverage

| Requirement                     | Status |
|---------------------------------|--------|
| HTML & CSS Implementation       | ✅     |
| React with Next.js              | ✅     |
| Server Side Rendering (SSR)     | ✅     |
| Responsive Design               | ✅     |
| Code Structure & Naming         | ✅     |
| Minimal DOM Size                | ✅     |
| SEO Configuration               | ✅     |
| Public GitHub Repository        | ✅     |
| Public Deployment               | ✅     |

---

## 📦 Installation

```bash
git clone https://github.com/Sowban123/Appscrip-task-Mohammed-Sowban.git
cd Appscrip-task-Mohammed-Sowban
npm install
npm run dev




src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # SSR product fetch
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductListingPage.tsx
│   ├── ProductCard.tsx
│   ├── FilterSidebar.tsx
│   └── SchemaMarkup.tsx
└── types/
    └── index.ts
