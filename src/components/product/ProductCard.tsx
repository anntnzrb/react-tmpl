import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
        {product.title}
      </h3>
      <p className="text-gray-600 text-sm mb-2 capitalize">
        {product.category}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>⭐</span>
          <span>{product.rating.rate}</span>
          <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
}
