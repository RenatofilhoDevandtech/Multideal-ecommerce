
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  category: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  tag,
  icon,
  iconBgColor = "bg-ml-blue/10",
  category,
  products
}) => {
  return (
    <section className="container mx-auto px-4 md:px-8 space-y-6 sm:space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className={`${iconBgColor} p-1.5 rounded-lg`}>
              {icon}
            </div>
            <span className="text-[11px] sm:text-[12px] font-black text-gray-600 uppercase tracking-[0.2em]">{tag}</span>
          </div>
          <h2 className="text-[20px] sm:text-[22px] md:text-2xl font-bold text-gray-800 tracking-tight">{title}</h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px]">{subtitle}</p>
        </div>
        <Link to={`/produtos?category=${encodeURIComponent(category)}`} className="text-ml-blue text-[13px] sm:text-[14px] font-bold hover:underline mb-1 flex items-center gap-1 group w-fit">
          Explorar Coleção <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id.toString()}
            name={product.name}
            price={product.salePrice}
            image={product.image}
            category={product.category}
            isTrending={true}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
