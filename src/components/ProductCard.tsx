import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatImageName = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <article className="group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
        <Image
          src={product.image}
          alt={`${product.title} - ${product.category} product available for purchase`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.rating.rate >= 4.5 && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded shadow-sm">
            ⭐ Bestseller
          </span>
        )}
      </div>

      <div className="space-y-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base text-gray-900 line-clamp-2 group-hover:text-gray-600 transition-colors leading-snug">
          {product.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating.rate}/5 ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center gap-2 mt-auto pt-1">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 capitalize">{product.category}</p>
      </div>
    </article>
  );
}
