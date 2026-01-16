import ProductListingPage from "@/components/ProductListingPage";
import { Product } from "@/types";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch categories");
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main>
      {/* Mandatory single H1 for SEO */}
      <h1 className="sr-only">Product Listing Page</h1>

      <ProductListingPage
        initialProducts={products}
        categories={categories}
      />
    </main>
  );
}
