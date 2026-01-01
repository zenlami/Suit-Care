
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-dark-border pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">dry_cleaning</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">SuitCare</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Giải pháp bảo vệ trang phục hoàn hảo cho doanh nhân. Tự hào thương hiệu Việt Nam chất lượng cao với tiêu chuẩn quốc tế.
            </p>
            <div className="flex gap-4">
              {['public', 'mail', 'call'].map((icon) => (
                <a key={icon} href="#" className="size-10 rounded-full border border-dark-border flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Về SuitCare</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Câu chuyện thương hiệu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hệ thống cửa hàng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên hệ hợp tác</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Hỗ trợ khách hàng</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vận chuyển & Giao nhận</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Đăng ký nhận tin</h4>
            <p className="text-sm text-slate-500 mb-6">Nhận thông tin về bộ sưu tập mới và các ưu đãi đặc quyền cho hội viên.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email của bạn"
                className="w-full h-12 bg-dark-surface border border-dark-border rounded-lg px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button className="w-full h-12 bg-primary text-black font-black rounded-lg hover:bg-primary-hover transition-all active:scale-[0.98]">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-dark-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
          <p>© 2026 SuitCare Vietnam. All rights reserved. Crafted for Professionals.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
