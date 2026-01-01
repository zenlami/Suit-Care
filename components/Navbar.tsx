
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">dry_cleaning</span>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">SuitCare</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Trang chủ</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Cửa hàng</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Về chúng tôi</a>
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Liên hệ</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-slate-300 hover:text-primary hover:bg-white/5 rounded-full transition-all">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 text-slate-300 hover:text-primary hover:bg-white/5 rounded-full transition-all relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-dark-bg"></span>
          </button>
          <button className="p-2 text-slate-300 hover:text-primary hover:bg-white/5 rounded-full transition-all">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
