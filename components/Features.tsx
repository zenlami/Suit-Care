
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-dark-border">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center gap-4 group">
            <div className="size-16 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">{feature.title}</h4>
              <p className="text-sm text-slate-500 mt-1">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
