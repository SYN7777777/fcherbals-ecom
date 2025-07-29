// ProductCard.jsx (Your existing component)
import { ShoppingBag } from "lucide-react";

function ProductCard({ product, onBuyNow }) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border border-white/50 hover:border-lime-300/60 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 space-y-2">
        {/* Name & Volume */}
        <h2 className="text-lg font-playfair-display font-extrabold text-gray-900 group-hover:text-lime-800 transition-colors duration-300 tracking-wide line-clamp-2">
          {product.name}
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="bg-gray-100 px-2 py-0.5 rounded-full font-inter font-semibold">{product.volume}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 font-inter line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-black font-inter text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text tracking-tight">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 text-white rounded-2xl font-inter font-bold text-xs uppercase shadow-md hover:shadow-lg transition-all duration-300 group-active:scale-95"
            onClick={() => onBuyNow(product)}
          >
            <ShoppingBag className="w-4 h-4" />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;