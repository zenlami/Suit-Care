
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 md:py-12">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-dark-surface border border-dark-border flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
        {/* Image Side */}
        <div 
          className="w-full md:w-1/2 min-h-[350px] bg-center bg-cover bg-no-repeat relative order-1 md:order-2"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDoj5r-0nelTAHYH50FzoqCSu6qj_HPWH8405nd_P7cur8STXrw8finE0X_1ObVgYBY9nAK0XAMJ1O9qmS7AXcaGrDf5vEJRMmWYVuq4uIUopBV8FoOJHMp92SozRVKn1lYUQv1eoawyE5BBi1a6oIRLwemxwi9JFoEU_HSXSAd_lYdfgk4a922QuXpSN4fFGqMMJkFROpRQv0lWHCcpwRrCDPIQEHWilcuT8oMsR6EA0DKg7dSZoAYMIw1ROmUCAxmfmBHlY45eyhg")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-8 order-2 md:order-1 animate-fade-in">
          <div className="space-y-4">
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Bộ sưu tập 2026</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Bảo vệ phong thái<br />doanh nhân
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Thiết kế tinh xảo, chất liệu chống nhăn cao cấp. Người bạn đồng hành không thể thiếu cho những chuyến công tác quan trọng.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="h-14 px-8 bg-primary text-black font-bold rounded-lg hover:bg-primary-hover transition-all active:scale-95 shadow-lg shadow-primary/10">
              Khám phá ngay
            </button>
            <button className="h-14 px-8 border border-slate-700 text-white font-bold rounded-lg hover:bg-white/5 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              Xem video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
