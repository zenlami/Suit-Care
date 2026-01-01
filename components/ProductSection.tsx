
import React from 'react';
import { Product } from '../types';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showControls?: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price);

  const formattedOldPrice = product.oldPrice 
    ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.oldPrice)
    : null;

  return (
    <div className="group cursor-pointer flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col gap-4">
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark-surface border border-dark-border">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url("${product.image}")` }}
        />
        {product.isHot && (
          <span className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded shadow-xl">HOT</span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        
        {/* Hover Action Button */}
        <button className="absolute bottom-4 right-4 size-12 rounded-full bg-white text-dark-bg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-primary hover:text-black active:scale-90">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors truncate">{product.name}</h3>
        {product.description && (
          <p className="text-slate-500 text-sm">{product.description}</p>
        )}
        <div className="flex items-center gap-3 pt-1">
          <span className="text-primary font-bold text-lg">{formattedPrice}</span>
          {formattedOldPrice && (
            <span className="text-slate-600 text-sm line-through">{formattedOldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, subtitle, products, showControls = false }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-white">{title}</h2>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </div>
        
        {showControls && (
          <div className="flex gap-3">
            <button className="size-10 rounded-full border border-dark-border text-white flex items-center justify-center hover:bg-white/10 hover:border-white transition-all">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="size-10 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary-hover transition-all">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex overflow-x-auto lg:overflow-visible lg:flex-wrap gap-6 hide-scrollbar pb-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
