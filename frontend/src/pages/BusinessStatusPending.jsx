import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function BusinessStatusPending() {
  return (
    <div className="bg-surface-container-low font-body text-on-surface min-h-screen asymmetric-gradient">
      {/* Screen Content */}
      
{/* Top Navigation (Shell Implementation) */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1B2A5E]/80 backdrop-blur-md shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
<div className="font-['Syne'] text-2xl font-extrabold text-[#1B2A5E] dark:text-white">LocalBoost</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-['DM_Sans'] text-sm font-medium tracking-tight text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">Services</a>
<a className="font-['DM_Sans'] text-sm font-medium tracking-tight text-[#1DB887] font-bold border-b-2 border-[#1DB887] pb-1" href="#">My Business</a>
<a className="font-['DM_Sans'] text-sm font-medium tracking-tight text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">Pricing</a>
<a className="font-['DM_Sans'] text-sm font-medium tracking-tight text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">About</a>
</div>
<div className="flex items-center space-x-4">
<Link to="/sign-in" className="font-['DM_Sans'] text-sm font-medium tracking-tight text-[#1B2A5E] hover:opacity-80 transition-all duration-200">Sign In</Link>
<Link to="/flow" className="bg-[#1B2A5E] text-white px-6 py-2 rounded-lg font-['DM_Sans'] text-sm font-medium tracking-tight active:scale-95 transition-transform">Get Started</Link>
</div>
</div>
<div className="bg-slate-100 dark:bg-slate-800 h-[1px] w-full"></div>
</nav>
{/* Main Content Canvas */}
<main className="pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-screen">
{/* Status Notification Banner */}
<div className="mb-12 text-center max-w-2xl">
<span className="font-label text-[11px] font-bold tracking-[0.2em] text-secondary uppercase mb-4 block">Verification Dashboard</span>
<h1 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
                Reviewing your <br/>business presence
            </h1>
</div>
{/* Central Status Card (High-End Asymmetric Design) */}
<div className="relative w-full max-w-4xl">
{/* Background Decorative Element */}
<div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
<div className="bg-surface-container-lowest rounded-[24px] shadow-[0_12px_40px_rgba(27,42,94,0.06)] overflow-hidden">
<div className="flex flex-col md:flex-row">
{/* Left Column: Status & Identity */}
<div className="p-10 md:w-2/5 bg-surface-container-low/50">
<div className="mb-8">
<div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center shadow-lg shadow-tertiary-fixed-dim/30">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="hourglass">hourglass</span>
</div>
</div>
<div className="space-y-4">
<h2 className="font-headline text-2xl font-bold text-primary leading-tight">Your business is under verification</h2>
<p className="text-on-surface-variant leading-relaxed">We are currently reviewing your documents and service listings to ensure they meet our community standards.</p>
</div>
{/* Progress Micro-Counter */}
<div className="mt-12 pt-8 border-t border-outline-variant/30">
<div className="flex items-center gap-3">
<span className="text-3xl font-headline font-extrabold text-primary">75%</span>
<div className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Verification<br/>Complete</div>
</div>
</div>
</div>
{/* Right Column: Timeline & Info */}
<div className="p-10 md:w-3/5">
<div className="space-y-10 relative">
{/* Timeline Line */}
<div className="absolute left-4 top-2 bottom-2 w-[2px] bg-surface-container-high -z-0"></div>
{/* Step 1: Done */}
<div className="relative flex gap-6 items-start">
<div className="z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-white text-sm" data-icon="check">check</span>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-primary">Account created</h3>
<p className="text-sm text-on-surface-variant">Profile and contact details secured.</p>
</div>
</div>
{/* Step 2: Done */}
<div className="relative flex gap-6 items-start">
<div className="z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-white text-sm" data-icon="check">check</span>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-primary">Service selected</h3>
<p className="text-sm text-on-surface-variant">Selected 'Premium Local Growth' tier.</p>
</div>
</div>
{/* Step 3: Active Pulse */}
<div className="relative flex gap-6 items-start">
<div className="z-10 w-8 h-8 rounded-full bg-tertiary flex items-center justify-center shadow-lg relative">
<div className="absolute inset-0 rounded-full bg-tertiary-fixed step-pulse -z-10"></div>
<span className="material-symbols-outlined text-white text-sm" data-icon="sync">sync</span>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-primary">Admin verification</h3>
<p className="text-sm text-on-surface-variant font-medium">Ongoing manual check by our team.</p>
</div>
</div>
{/* Step 4: Waiting */}
<div className="relative flex gap-6 items-start">
<div className="z-10 w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
<div>
<h3 className="font-headline text-lg font-bold text-outline">Go live</h3>
<p className="text-sm text-on-surface-variant opacity-50">Publishing to the LocalBoost network.</p>
</div>
</div>
</div>
{/* Info Box */}
<div className="mt-12 p-6 bg-primary-container rounded-2xl flex gap-4 items-center">
<div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-secondary-fixed text-xl" data-icon="notifications_active">notifications_active</span>
</div>
<p className="text-on-primary-container text-sm leading-relaxed">
                                We'll send you an email and WhatsApp message as soon as the review is finalized. Usually takes 24-48 hours.
                            </p>
</div>
</div>
</div>
</div>
{/* Additional Support Link */}
<div className="mt-8 text-center">
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors inline-flex items-center gap-2" href="#">
<span>Need help? Contact support</span>
<span className="material-symbols-outlined text-base" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
{/* Featured Merchant Cards (Bento style teaser) */}
<div className="w-full max-w-7xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 md:col-span-1 p-8 bg-white rounded-2xl flex flex-col justify-between h-64 border border-outline-variant/10">
<div className="text-label text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">Pro Tip</div>
<h4 className="font-headline text-xl font-bold text-primary">Optimize your SEO while you wait.</h4>
<a className="font-bold text-secondary text-sm flex items-center gap-1" href="#">Read Guide <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></a>
</div>
<div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden group">
<img alt="Local business owner" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" data-alt="vibrant modern office space with diverse group of professionals collaborating in a high-key sunlit environment with minimalist decor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeF-5AhounkjpGL91jKl-WCJbEp6Bj2160fQJMQoxASyqEmadZacGKr2P2b98m21CXIkvviebIqEq9OvuYFJLLpQrsekBm2spgfPFa9DRAbJqo_hNrMqFFYztZH2m8bjQh-3krhyTVYwE6Lum6L34Gl3VXlBMPgvB3leyg33fEkcxRIVNSh_P_Ya238VgLx6TsVHvUd1NNgqiD6iMLl3yr46d-E00bAT2CoJZkc7lQTbbdHTvwM7RdpwEVkNYjy_FrIDIrKT7cT1o"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
<h4 className="font-headline text-2xl font-bold text-white mb-2">Join a community of 50,000+ merchants</h4>
<p className="text-white/80 text-sm max-w-md">LocalBoost helps businesses like yours grow visibility by 300% in the first quarter.</p>
</div>
</div>
</div>
</main>
{/* Footer (Shell Implementation) */}
<footer className="bg-slate-50 dark:bg-[#0F1A3D] w-full py-12 px-8 border-t border-[#1B2A5E]/10">
<div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
<div className="flex flex-col items-center md:items-start">
<div className="font-['Syne'] text-lg font-bold text-[#1B2A5E] dark:text-slate-400 mb-2">LocalBoost</div>
<p className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400">© 2024 LocalBoost. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
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
