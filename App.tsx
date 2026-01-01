
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Craftsmanship from './components/Craftsmanship';
import Footer from './components/Footer';
import { FEATURED_PRODUCTS, NEW_COLLECTION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Featured Products */}
        <ProductSection 
          title="Sản phẩm nổi bật" 
          products={FEATURED_PRODUCTS} 
          showControls={true} 
        />
        
        <Craftsmanship />
        
        {/* New Collection */}
        <ProductSection 
          title="Bộ Sưu Tập Mới" 
          subtitle="Những thiết kế mới nhất cho mùa Thu Đông 2026"
          products={NEW_COLLECTION} 
        />
        
        {/* Call to Action Bar */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 pb-20">
          <div className="bg-primary/20 p-12 rounded-3xl flex flex-col items-center text-center gap-6 shadow-2xl border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Bắt đầu hành trình đẳng cấp cùng SuitCare
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl font-medium">
              Sở hữu ngay giải pháp bảo vệ trang phục tối ưu nhất hiện nay. Miễn phí vận chuyển cho đơn hàng đầu tiên của bạn.
            </p>
            <button className="h-14 px-10 bg-primary text-black font-bold rounded-xl hover:bg-primary-hover transition-all shadow-xl active:scale-95 mt-2">
              Xem tất cả sản phẩm
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
