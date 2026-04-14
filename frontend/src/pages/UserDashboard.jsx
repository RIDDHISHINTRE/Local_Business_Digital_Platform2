import React from 'react';

export default function UserDashboard() {
  return (
    <div className="bg-surface text-on-background font-body selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Screen Content */}
      
{/* SIDE BAR NAVIGATION (SideNavBar mapping) */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-[#1B2A5E]/10 flex flex-col p-6 space-y-4 z-40">
{/* Brand Logo Header */}
<div className="mb-8 px-2">
<h1 className="font-['Syne'] font-bold text-[#1B2A5E] text-2xl tracking-tighter">LocalBoost</h1>
<p className="text-xs font-['DM_Sans'] text-slate-500 uppercase tracking-widest mt-1">Business Portal</p>
</div>
{/* Navigation Tabs */}
<nav className="flex-1 space-y-1">
{/* Services (Active) */}
<a className="flex items-center gap-3 bg-white text-[#1DB887] font-bold rounded-lg shadow-sm px-4 py-3 transition-transform active:scale-98 group" href="#">
<span className="material-symbols-outlined" data-icon="storefront">storefront</span>
<span className="font-['DM_Sans'] text-base">Services</span>
</a>
{/* My Business */}
<a className="flex items-center gap-3 text-slate-600 hover:bg-slate-100 hover:translate-x-1 transition-all px-4 py-3 rounded-lg active:scale-98" href="#">
<span className="material-symbols-outlined" data-icon="business_center">business_center</span>
<span className="font-['DM_Sans'] text-base">My Business</span>
</a>
{/* Analytics */}
<a className="flex items-center gap-3 text-slate-600 hover:bg-slate-100 hover:translate-x-1 transition-all px-4 py-3 rounded-lg active:scale-98" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-['DM_Sans'] text-base">Analytics</span>
</a>
{/* Settings */}
<a className="flex items-center gap-3 text-slate-600 hover:bg-slate-100 hover:translate-x-1 transition-all px-4 py-3 rounded-lg active:scale-98" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-['DM_Sans'] text-base">Settings</span>
</a>
</nav>
{/* Footer Tab */}
<div className="pt-6 border-t border-[#1B2A5E]/10">
<a className="flex items-center gap-3 text-slate-600 hover:text-error hover:translate-x-1 transition-all px-4 py-3 rounded-lg active:scale-98" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-['DM_Sans'] text-base">Logout</span>
</a>
</div>
</aside>
{/* MAIN CONTENT CANVAS */}
<main className="ml-64 min-h-screen">
{/* TOP APP BAR */}
<header className="sticky top-0 w-full z-30 bg-white/80 backdrop-blur-md px-10 py-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<h2 className="font-['Syne'] text-2xl font-extrabold text-[#1B2A5E] tracking-tight">Browse Services</h2>
</div>
<div className="flex items-center gap-6">
{/* Search Input */}
<div className="relative w-72">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/40 font-['DM_Sans'] text-sm transition-all" placeholder="Search services..." type="text"/>
</div>
<div className="flex items-center gap-3 border-l border-slate-200 pl-6">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-sm">A</div>
<span className="font-['DM_Sans'] font-medium text-[#1B2A5E]">Arjun</span>
</div>
</div>
</header>
<div className="px-10 py-8 max-w-7xl mx-auto">
{/* WELCOME BAR / HERO */}
<section className="mb-12 relative overflow-hidden rounded-[20px] bg-primary-container p-12 flex flex-col md:flex-row justify-between items-center text-white">
<div className="z-10 text-center md:text-left">
<p className="text-secondary-fixed-dim font-bold text-sm uppercase tracking-[0.2em] mb-3">Dashboard Overview</p>
<h3 className="font-['Syne'] text-5xl font-bold mb-4 leading-tight">Good morning, Arjun</h3>
<div className="flex items-center justify-center md:justify-start gap-3">
<span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="verified" style={{fontVariationSettings: '\'FILL\' 1'}}>verified</span>
                            10 Services Available
                        </span>
<p className="text-on-primary-container font-['DM_Sans'] text-sm">Explore new growth opportunities for your business today.</p>
</div>
</div>
{/* Decorative Abstract Element */}
<div className="absolute right-[-100px] top-[-100px] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px]"></div>
<div className="absolute left-[20%] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-[#1DB887]/20 blur-[60px]"></div>
</section>
{/* SERVICES GRID SECTION */}
<section className="mb-20">
<div className="flex justify-between items-end mb-8">
<div>
<span className="text-[#1DB887] text-xs font-bold uppercase tracking-widest mb-2 block">Premium Marketplace</span>
<h4 className="font-['Syne'] text-3xl font-bold text-[#1B2A5E]">Growth Toolkit</h4>
</div>
<button className="text-sm font-bold text-primary flex items-center gap-2 hover:opacity-70 transition-all">
                        View All Collections
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Card 1: Website Builder */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="web">web</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">Website Builder</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Launch a professional, SEO-optimized business site in hours. Full mobile responsiveness included.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Card 2: Social Media Setup */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="campaign">campaign</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">Social Media Setup</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Connect with locals on Instagram, Facebook, and Twitter. Consistent branding across all channels.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Card 3: Print & Branding */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="print">print</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">Print &amp; Branding</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Custom business cards, flyers, and physical signage designed to make your storefront stand out.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Card 4: GST Registration */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="account_balance">account_balance</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">GST Registration</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Simplify your compliance. Fast-track your GST and legal filings with our expert local consultants.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Card 5: Inventory Management */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="inventory_2">inventory_2</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">Inventory Suite</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Track stock levels, set automated reorder alerts, and manage supplier relationships seamlessly.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
{/* Card 6: Marketing Analytics */}
<div className="group bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
<span className="material-symbols-outlined text-[#1B2A5E] group-hover:text-secondary text-3xl" data-icon="query_stats">query_stats</span>
</div>
<h5 className="font-['Syne'] text-xl font-bold text-[#1B2A5E] mb-3">Ad Performance</h5>
<p className="text-slate-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">Detailed insights into your local marketing spend. Know exactly which campaigns drive customers.</p>
<a className="inline-flex items-center text-[#1DB887] font-bold text-sm gap-2 group/link" href="#">
                            Read more
                            <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</section>
{/* ASYMMETRIC HIGHLIGHT SECTION */}
<section className="grid grid-cols-12 gap-8 items-center mb-24">
<div className="col-span-12 md:col-span-7">
<div className="relative rounded-2xl overflow-hidden aspect-video editorial-shadow">
<img alt="Business Consultation" className="w-full h-full object-cover" data-alt="a confident professional business owner in a clean modern office workspace with soft natural light and business tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACzJvIPvGABWzgQcNwkW2AUVTXRZ6thGXTB7FU_J5VxFZX5FNqjz9kZVc84KyUWmzB8GXpnECowA7MrgcF8JC5-DixGxq392sJ5JhgAnVGrP8S4tjVxLa8Ch1ufMAP1gukzZlMSqdZ-fxl6dj0rF5q4oA0GzNwDKXfuZuymyX8D5hr_7tvcHigotcBWI_wlJ03-CkzTkYssS0A5mAV1I-Ff8LP_klpUAF5oP5swwDxKOeSBAZzO0N20tTe1YWNCgA1P5-p7rYKBe4"/>
<div className="absolute inset-0 bg-primary/20"></div>
</div>
</div>
<div className="col-span-12 md:col-span-5 md:pl-8">
<span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded mb-6 inline-block">Exclusive Offer</span>
<h2 className="font-['Syne'] text-4xl font-bold text-[#1B2A5E] mb-6 leading-tight">Expert Advisory for Local Growth</h2>
<p className="text-slate-600 font-['DM_Sans'] text-lg mb-8">Get a 1-on-1 strategy session with a local growth specialist to audit your digital presence and map out a 12-month expansion plan.</p>
<button className="bg-secondary text-white px-8 py-4 rounded-[10px] font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg shadow-secondary/20 active:scale-95">
                        Schedule Free Audit
                    </button>
</div>
</section>
</div>
{/* FOOTER (Footer mapping) */}
<footer className="bg-slate-50 border-t border-[#1B2A5E]/10 py-12 px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<span className="font-['Syne'] text-lg font-bold text-[#1B2A5E]">LocalBoost</span>
<p className="text-xs font-['DM_Sans'] text-slate-400 mt-1">© 2024 LocalBoost. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="text-xs font-['DM_Sans'] text-slate-500 hover:text-[#1DB887] transition-colors" href="#">Privacy Policy</a>
<a className="text-xs font-['DM_Sans'] text-slate-500 hover:text-[#1DB887] transition-colors" href="#">Terms of Service</a>
<a className="text-xs font-['DM_Sans'] text-slate-500 hover:text-[#1DB887] transition-colors" href="#">Cookie Policy</a>
<a className="text-xs font-['DM_Sans'] text-slate-500 hover:text-[#1DB887] transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</main>
{/* FAB Suppression Rule followed: No FAB on Dashboard/Details as primary actions are card-based */}

    </div>
  );
}
