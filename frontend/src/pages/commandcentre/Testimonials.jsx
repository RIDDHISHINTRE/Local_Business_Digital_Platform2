import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[16px] ${i <= rating ? 'text-amber-400' : 'text-primary/10'}`}
          style={{ fontVariationSettings: i <= rating ? "'FILL' 1" : "'FILL' 0" }}
        >star</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);

  const toggleStatus = (id) => {
    setTestimonials((prev) =>
      prev.map((t) => t.id === id ? { ...t, status: t.status === 'published' ? 'hidden' : 'published' } : t)
    );
  };

  return (
    <div className="p-8 min-h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-['Syne'] text-2xl font-black text-primary tracking-tight">Testimonials Manager</h2>
          <p className="text-sm text-primary/50 mt-1">Curate and manage client social proof across platforms.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/10 text-sm font-semibold text-primary/60 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1DB887] hover:bg-[#18a67a] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#1DB887]/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {[
          { label: 'Total Reviews', value: testimonials.length, icon: 'format_quote', color: 'text-blue-600 bg-blue-50' },
          { label: 'Published', value: testimonials.filter((t) => t.status === 'published').length, icon: 'check_circle', color: 'text-[#1DB887] bg-[#1DB887]/10' },
          { label: 'Hidden', value: testimonials.filter((t) => t.status === 'hidden').length, icon: 'visibility_off', color: 'text-orange-500 bg-orange-50' },
        ].map((s) => (
          <div key={s.label} className="bg-surface-container-lowest rounded-[20px] p-5 border border-primary/5 shadow-[0_8px_30px_rgba(27,42,94,0.06)] flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.color}`}>
              <span className="material-symbols-outlined text-[22px]">{s.icon}</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-primary/40">{s.label}</p>
              <p className="font-['Syne'] text-2xl font-black text-primary mt-0.5">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`bg-surface-container-lowest rounded-[20px] p-7 border shadow-[0_12px_40px_rgba(27,42,94,0.08)] transition-all duration-200 hover:shadow-[0_20px_50px_rgba(27,42,94,0.13)] ${t.status === 'published' ? 'border-[#1DB887]/20 border-l-[4px] border-l-[#1DB887]' : 'border-primary/5'}`}
          >
            {/* Image Overlay Preview */}
            <div className="relative h-32 mb-4 rounded-xl overflow-hidden group/thumb">
              <img src={t.thumbnail} alt="Result" className="w-full h-full object-cover transition-transform group-hover/thumb:scale-110" />
              <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur rounded text-[9px] font-bold text-primary uppercase">
                {t.category}
              </div>
            </div>

            {/* Author */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-surface-container"
                />
                <div>
                  <h4 className="font-['Syne'] font-bold text-primary text-sm">{t.name}</h4>
                  <p className="text-[11px] text-[#1DB887] font-bold">{t.business}</p>
                </div>
              </div>
              <StarRating rating={t.rating} />
            </div>

            {/* Impact Strip */}
            <div className="bg-[#1DB887]/5 border border-[#1DB887]/10 rounded-lg px-3 py-2 mb-4 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#1DB887]">Live Impact</span>
              <span className="text-[10px] font-bold text-[#1DB887]">{t.impact}</span>
            </div>

            {/* Quote */}
            <p className="text-sm text-primary/60 leading-relaxed italic mb-6 line-clamp-3">{t.quote}</p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-primary/5">
              <button
                onClick={() => toggleStatus(t.id)}
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-colors ${t.status === 'published' ? 'bg-[#1DB887]/10 text-[#1DB887] hover:bg-[#1DB887]/20' : 'bg-primary/5 text-primary/40 hover:bg-primary/10'}`}
              >
                {t.status === 'published' ? '● Published' : '○ Hidden'}
              </button>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-primary/30">Edited {t.edited}</span>
                <button className="p-1.5 hover:bg-surface-container rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-primary/30 hover:text-primary/60">edit</span>
                </button>
                <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors group">
                  <span className="material-symbols-outlined text-[16px] text-primary/30 group-hover:text-red-500">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add Slot */}
        <div className="bg-surface-container/50 border-2 border-dashed border-primary/10 rounded-[20px] flex flex-col items-center justify-center p-10 text-center hover:border-[#1DB887]/30 hover:bg-[#1DB887]/5 transition-all cursor-pointer group">
          <span className="material-symbols-outlined text-4xl text-primary/20 mb-3 group-hover:text-[#1DB887]/50 transition-colors">post_add</span>
          <p className="text-sm font-semibold text-primary/30 group-hover:text-primary/50 transition-colors">Add a new testimonial</p>
        </div>
      </div>
    </div>
  );
}
