'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/app/ui/productCard';
import ProductCardSkeleton from '@/app/ui/productSkeleton';
import SearchBar from '@/app/ui/searchBar';
import Pagination from '@/app/ui/pagination';
import { fetchProducts } from '@/app/lib/data';
import { Product } from '@/app/lib/definitions';

export default function ProductList() {
  // State for the search input
  const [searchTerm, setSearchTerm] = useState('');

  // State for all products and the filtered (searched) list
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch products once when the component mounts
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);                       // Start loading
        const data = await fetchProducts();     // Fetch product data
        setProducts(data);                      // Store all products
        setFilteredProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products.');   // Handle fetch error
      } finally {
        setLoading(false);                      // End loading
      }
    }
    loadProducts();
  }, []);

  // Filter products whenever the search term or product list changes
  useEffect(() => {
    const filtered = products.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);                      // Reset to first page on search
  }, [searchTerm, products]);

  // Calculate products to show on the current page
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="space-y-6">
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {/* Show error message if there's a problem loading products */}
      {error && (
        <div className="text-red-500 text-center">Failed to load products.</div>
      )}

      {/* Show loading skeletons while data is being fetched */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {/* Render the current page of filtered products */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={productsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
}
