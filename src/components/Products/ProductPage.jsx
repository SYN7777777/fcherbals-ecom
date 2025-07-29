import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((p) => p.id === parseInt(id));
        setProduct(item);
      });
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start sm:mt-24">
      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-playfair font-bold text-amber-800">
          {product.name}
        </h1>
        <p className="text-gray-600 text-lg font-poppins">
          {product.description}
        </p>
        <p className="text-green-600 text-2xl font-semibold font-poppins">
          ₹{product.price}
        </p>
        <p className="text-sm text-gray-500">Volume: {product.volume}</p>
      </div>
    </div>
  );
};

export default ProductPage;
