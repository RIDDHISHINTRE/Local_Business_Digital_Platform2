import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ServiceDetail() {
  return (
    <div className="min-h-screen">
      {/* Screen Content */}
      
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1B2A5E]/80 backdrop-blur-md shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
<span className="font-['Syne'] text-2xl font-extrabold text-[#1B2A5E] dark:text-white">LocalBoost</span>
<div className="hidden md:flex items-center space-y-0 space-x-8 font-['DM_Sans'] text-sm font-medium tracking-tight">
<a className="text-[#1DB887] font-bold border-b-2 border-[#1DB887] pb-1" href="#">Services</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">How it Works</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">Pricing</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">About</a>
</div>
<div className="flex items-center space-x-4">
<Link to="/sign-in" className="text-[#1B2A5E] font-['DM_Sans'] text-sm font-medium hover:opacity-80 transition-all duration-200">Sign In</Link>
<Link to="/flow" className="bg-[#021449] text-white px-6 py-2.5 rounded-[10px] font-['DM_Sans'] text-sm font-medium hover:opacity-90 active:scale-95 transition-all">Get Started</Link>
</div>
</div>
<div className="bg-slate-100 dark:bg-slate-800 h-[1px] w-full"></div>
</nav>
<main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
{/* Breadcrumb */}
<nav className="mb-12 flex items-center space-x-2 text-sm font-medium text-on-surface-variant font-['DM_Sans']">
<a className="hover:text-secondary transition-colors" href="#">Services</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-primary font-bold">Website Builder</span>
</nav>
{/* Main Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
{/* Left: Sticky Showcase Card */}
<div className="lg:col-span-4 lg:sticky lg:top-32">
<div className="bg-surface-container-lowest rounded-[16px] p-8 editorial-shadow border border-primary/5">
<div className="mb-8 w-20 h-20 bg-primary-container/5 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-5xl text-primary" style={{fontVariationSettings: '\'FILL\' 1'}}>language</span>
</div>
<div className="mb-2 text-label-sm uppercase tracking-widest text-secondary font-bold font-['DM_Sans'] text-[11px]">Subscription Plan</div>
<div className="mb-8 flex items-baseline space-x-1">
<span className="text-4xl font-extrabold text-primary font-['Syne']">$49</span>
<span className="text-on-surface-variant font-medium">/month</span>
</div>
<div className="space-y-4">
<button className="w-full bg-[#021449] text-white py-4 rounded-[10px] font-bold text-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center space-x-2">
<span>Use This Service</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="w-full border border-primary/10 py-4 rounded-[10px] font-medium text-primary hover:bg-surface-container-low transition-all">
                            Book a Consultation
                        </button>
</div>
<div className="mt-8 pt-8 border-t border-primary/5">
<p className="text-xs text-on-surface-variant text-center leading-relaxed">
                            No long-term contracts. Cancel anytime. <br/>Secure payment via LocalBoost Pay.
                        </p>
</div>
</div>
</div>
{/* Right: Content Column */}
<div className="lg:col-span-8">
{/* Header */}
<div className="mb-10">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold font-['DM_Sans'] mb-6">
<span className="material-symbols-outlined text-sm mr-2" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
                        Popular
                    </span>
<h1 className="text-6xl font-extrabold text-primary font-['Syne'] leading-tight mb-8">Website Builder</h1>
<p className="text-xl text-on-surface-variant leading-relaxed font-['DM_Sans'] max-w-2xl">
                        Empower your business with a high-performance, conversion-optimized website. Our intuitive builder combines architectural precision with editorial aesthetics to give you a digital headquarters that truly reflects your brand's authority.
                    </p>
</div>
{/* Features Checklist */}
<div className="mb-16 bg-surface-container-low rounded-[16px] p-10">
<h3 className="text-2xl font-bold font-['Syne'] text-primary mb-8">What's included</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">Mobile responsive architecture</span>
</div>
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">SEO optimized framework</span>
</div>
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">24/7 Dedicated Support</span>
</div>
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">Cloud-native hosting</span>
</div>
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">E-commerce ready core</span>
</div>
<div className="flex items-start space-x-4">
<div className="mt-1 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
</div>
<span className="font-medium text-primary-container">Advanced security layers</span>
</div>
</div>
</div>
{/* Why choose this Stats */}
<div className="mb-16">
<h3 className="text-2xl font-bold font-['Syne'] text-primary mb-10">Why choose this</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-surface-container-highest rounded-[16px] border-l-4 border-secondary">
<div className="text-3xl font-extrabold text-primary font-['Syne'] mb-2">99.9%</div>
<div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-['DM_Sans']">Uptime</div>
<p className="mt-4 text-sm text-on-surface-variant/80">Reliability you can trust, ensuring your business is always open.</p>
</div>
<div className="p-8 bg-surface-container-highest rounded-[16px] border-l-4 border-secondary">
<div className="text-3xl font-extrabold text-primary font-['Syne'] mb-2">2.4x</div>
<div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-['DM_Sans']">Conversion</div>
<p className="mt-4 text-sm text-on-surface-variant/80">Our layouts are psychologically optimized for high conversion.</p>
</div>
<div className="p-8 bg-surface-container-highest rounded-[16px] border-l-4 border-secondary">
<div className="text-3xl font-extrabold text-primary font-['Syne'] mb-2">15ms</div>
<div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-['DM_Sans']">Load Speed</div>
<p className="mt-4 text-sm text-on-surface-variant/80">Industry-leading performance that boosts your SEO ranking.</p>
</div>
</div>
</div>
{/* Visual Asset Section */}
<div className="relative overflow-hidden rounded-[24px] h-[400px]">
<img className="w-full h-full object-cover" data-alt="Modern workspace with high-end computer screen displaying a clean minimalist website layout with dramatic editorial typography and soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmAWIMLJQpFi7lGohcmXAuyzox12hyqH4I0aY3TgwOR_i6KCyeYxQgIjOKRCyNqumd6ZWhVJLrDEWc9FPIh1J6ElzdkQOpEihM3rRmgiYGb5whLMiohcOsDbV05SSflaoFXWM9ewO6JlN9UM2qmarHYTGcvWaip4n0HLUn5bkQdBdWvPBUJVlBJpPyZ39D-a7Ozb7wOPs6TViRpYYnpDJq8HonrHAUA5v57UGdlJeAcIvNTYbYlQgcB87D2MLK_IEO_gFGuIrqN6Y"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
<div className="max-w-md">
<h4 className="text-white text-3xl font-bold font-['Syne'] mb-4">Precision Engineering for the Web</h4>
<p className="text-white/80 font-['DM_Sans']">Every pixel is placed with intentional asymmetry to create a bespoke editorial feel that separates you from the competition.</p>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-slate-50 dark:bg-[#0F1A3D] w-full py-12 px-8 border-t border-[#1B2A5E]/10">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-6 md:space-y-0">
<div className="flex flex-col items-center md:items-start space-y-2">
<span className="font-['Syne'] text-lg font-bold text-primary dark:text-white">LocalBoost</span>
<p className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400">© 2024 LocalBoost. All rights reserved.</p>
</div>
<div className="flex space-x-8">
<a className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400 hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Privacy Policy</a>
<a className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400 hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Terms of Service</a>
<a className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400 hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Cookie Policy</a>
<a className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400 hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Support</a>
</div>
</div>
</footer>

    </div>
  );
}
