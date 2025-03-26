import CategoryFilter from '@/components/products/CategoryFilter';
import { fetchProducts } from './lib/fetchProducts';

export default async function Home() {
  const products = await fetchProducts();
  

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <CategoryFilter categories={categories} initialProducts={products} />
    </main>
  );
}