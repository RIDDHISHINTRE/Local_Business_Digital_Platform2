import React, { useState } from 'react';

export default function Testimonials() {
  return (
    <div className="min-h-full">
      {/*  Sidebar Navigation Shell  */}

{/*  Top Navigation Bar  */}

{/*  Main Content Canvas  */}
<main className="pt-16 pl-64 h-screen overflow-hidden flex">
{/*  Left Panel: Grid of Testimonials  */}
<section className="flex-1 p-8 overflow-y-auto bg-slate-50/50">
<div className="max-w-5xl mx-auto">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Testimonials Manager</h2>
<p className="text-slate-500 text-sm">Manage and curate customer social proof across platforms.</p>
</div>
<div className="flex gap-2">
<button className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                            Filter
                        </button>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                            Create New
                        </button>
</div>
</div>
{/*  Bento Grid Layout for Testimonials  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{/*  Testimonial Card 1  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-600">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-full object-cover" data-alt="professional portrait of a creative director, cheerful expression, bright studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Is56u9NAQGK9pNlgL5eCaAPXDfQY7r6uSwtYQaiHhBYnyoFWACLL0PLU8BHOdrjVhb0TdjG_ODw6JmLU2RUTVysMxu8sdeQL1nq-HhFQEvChUHYUBeoalRqALtiS-RD7s2vOUCSuA5gHkIFUmoQOZu3lsLSvFsWKie3P6M3Gx1-tuJluThY_RxuXmULmOlauKt8Mn2ey-T1WNW3-3YHZYkcQRoJmNJi-QoZYziogxYuwdaPCbbBAthCgxglzE9xFSVxCT7s2Eqc"/>
<div>
<h4 className="font-bold text-slate-900 dark:text-white text-sm">Sarah Jenkins</h4>
<p className="text-xs text-slate-500">CEO, CreativeFlow</p>
</div>
</div>
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">"The command center has completely transformed how we handle our backend logic. It's the most intuitive B2B tool we've used this year."</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">On Homepage</span>
<span className="text-[10px] text-slate-400">Last edited 2h ago</span>
</div>
</div>
{/*  Testimonial Card 2  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<img alt="Marcus Chen" className="w-10 h-10 rounded-full object-cover" data-alt="smiling young male tech entrepreneur, outdoor modern urban setting, natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Fu8vt93HVMj0ZXJjAMQqeQj82yIjsuWwytnURFaPE-VW__skJTtrd25K6GYmjY9ctep34grmb8c9LG0dzuNwUGzm6c9jTauvjh2GurrgVoU-7lfi_5aSI49cClahGAgbhdvVzTDQ8sTbfbY7Wc8jQqXP4dI6C8afRZ6vn3yndglHB2NLRaKSqqZypF2Bl6hyym5U5hq7__2-bl0vP_4tU5opxZnX0IMRCMxmw8D2hn41j2EIPxXdmBCu11cd7-AgiKswqkdlMSo"/>
<div>
<h4 className="font-bold text-slate-900 dark:text-white text-sm">Marcus Chen</h4>
<p className="text-xs text-slate-500">Founder, CloudScale</p>
</div>
</div>
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">"Pricing was a bit complex at first, but the testimonial system itself is rock solid. Our conversion rates improved by 15%."</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded">Hidden</span>
<span className="text-[10px] text-slate-400">Last edited Yesterday</span>
</div>
</div>
{/*  Testimonial Card 3  */}
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<img alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover" data-alt="mid-shot of a confident professional woman with glasses, minimalist workspace background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzGdMAiOeshY0pRx5ADCMCcGL-3xdLmYCiNPaPtTLe9K92Y21M15KfY5kV8yAijarLBcUtY1_7WUXxHnbqlEubIxzIXD_pYT9u9Vutjnkb7oVAhlrbt-wYSdh04cFPlI7jmWfBbwEh-l_L8jTzKDMCiMlO8l1yvuUSV1JPO-xyULrmLWo2cfdPAYk9s_voI_N8zSCA7_-_xD2IQIShm6DWlEmxpcOP5OqKceg2uyMCiXx2Dh_JsbtCwNM7haI1Hcf6Q_AYbyUa08"/>
<div>
<h4 className="font-bold text-slate-900 dark:text-white text-sm">Elena Rodriguez</h4>
<p className="text-xs text-slate-500">Operations Manager, LogiTech</p>
</div>
</div>
<div className="flex text-amber-400">
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">"Support has been phenomenal. Every time we had a question about the dashboard integration, they were there."</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">On Homepage</span>
<span className="text-[10px] text-slate-400">Last edited 3 days ago</span>
</div>
</div>
{/*  Placeholder/Empty State  */}
<div className="bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center p-8 text-center opacity-60">
<span className="material-symbols-outlined text-4xl text-slate-400 mb-2" data-icon="post_add">post_add</span>
<p className="text-sm font-medium text-slate-500">Add a fourth testimonial to balance the homepage grid</p>
</div>
</div>
</div>
</section>
{/*  Right Panel: Editor Form  */}

</main>
    </div>
  );
}
