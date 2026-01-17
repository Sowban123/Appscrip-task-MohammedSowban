import ProductListingPage from "@/components/ProductListingPage";
import { Product } from "@/types";

export const dynamic = "force-dynamic";

const API_HEADERS = {
  headers: {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json",
  },
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      ...API_HEADERS,
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    console.log("Netlify Products:", data.length);
    return data;
  } catch (error) {
    console.error("Products fetch failed:", error);
    return [];
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
      cache: "no-store",
      ...API_HEADERS,
    });

    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    console.log("Netlify Categories:", data.length);
    return data;
  } catch (error) {
    console.error("Categories fetch failed:", error);
    return [];
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  console.log("SSR Products:", products.length);
  console.log("SSR Categories:", categories);

  return (
    <main>
      <ProductListingPage
        initialProducts={products}
        categories={categories}
      />
    </main>
  );
}
