
import React from 'react';

const Craftsmanship: React.FC = () => {
  return (
    <section className="w-full bg-[#080808] py-20 md:py-32 border-y border-dark-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Tinh hoa thủ công trong từng đường kim
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Tại SuitCare, chúng tôi tin rằng một bộ vest hoàn hảo cần một người bảo vệ xứng tầm. Mỗi chiếc túi được chế tác từ những người thợ lành nghề nhất, sử dụng vải công nghệ cao giúp giữ form dáng vest nguyên vẹn dù bạn đi bất cứ đâu.
          </p>
          
          <ul className="space-y-4">
            {[
              'Chất liệu da nhập khẩu Ý & Vải Oxford kháng nước',
              'Thiết kế thông minh chống nhăn tuyệt đối',
              'Bảo hành trọn đời cho các chi tiết khóa kéo'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">check_circle</span>
                <span className="text-slate-200 font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
          
          <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all group pt-4">
            Xem câu chuyện thương hiệu 
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="aspect-[4/5] md:aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden border border-dark-border rotate-[-2deg] shadow-2xl transition-transform hover:rotate-0 duration-500">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8dxTt1Srg75zJZykRSpjyeYPyDiLkfujYUJ_G7hqIoxeL1z0tmgN7EQ_9F-f2V2g_sO_IKPzA7-jzV9oIIWlqIHfnIyfmKUvyJJMMGZsWi_NWYLO4OcBWCW7SlwZm1aAk3Qg7q_Osi9RjQBB7l3miSYRLcYGYFuqxjqzyMqBXTrGQOhFvezUcc5rHC6o2TKDlk6V0TplyfVCk5gzVw6PB30Jh_p3m4ZsvAhPSD4TnwlPaBgzLpxtm7jWHz-GD-L-iPtH3idEO43tR" alt="Craftsmanship 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] md:aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden border border-dark-border translate-y-12 rotate-[3deg] shadow-2xl transition-transform hover:rotate-0 duration-500">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCD74101W77r7EadXxz9hx5KNAk0K64AkWbonRDf1N6tN_xgfeau1CGiU-Jvi4NFIfB7FJuCURQdxcOeghEQ15fvBqxXUWWL_7VoMe-ub9b_l96QPv2xdWohVzNiZWfsfhp3JvLw7bwvXZjyvrWFBBenGe8dTYDZ8Qe9HjXbvGSCnN-6BompH6rYZ7ESXbF3Da0AGWF272xQbSH_XpUoNKrr1W3ygzdU05wZ9HpQCBsjhRE8C8_AvvcrprsiduIIrqCPtNCvwvEDjL" alt="Craftsmanship 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
