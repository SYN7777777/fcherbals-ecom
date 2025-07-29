import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import Testimonials from "../Testimonials";
// Import ProductCard as before

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from data.json
  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (product) => {
    alert(`Buy "${product.name}" clicked!`);
    // ...purchase logic
  };

  if (loading) {
    return (
      <section className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-amber-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-amber-800 font-medium">Loading our premium collection...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 sm:py-20 px-6 bg-gradient-to-br from-amber-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
  
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-2 border border-amber-200/50 mb-4 rounded-full">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="font-poppins font-semibold text-amber-800 uppercase tracking-widest text-sm">Premium Collection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-playfair font-black text-transparent bg-gradient-to-r from-amber-800 via-amber-600 to-emerald-700 bg-clip-text mb-4 leading-tight tracking-wider">
            Our Exquisite Products
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Discover our carefully curated selection of premium products, crafted with excellence and delivered with passion.
          </p>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onBuyNow={handleBuyNow}
            />
          ))}
        </div>
        {/* Optional: Handle empty state */}
        {products.length === 0 && !loading && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-600">We're working on adding amazing products for you!</p>
          </div>
        )}
      
      </div>
    </section>
  );
}
