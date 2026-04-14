import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LocalBoostHomepage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* Screen Content */}
      
{/* Top Navigation Shell */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1B2A5E]/80 backdrop-blur-md shadow-sm dark:shadow-none">
<div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
<span className="font-['Syne'] text-2xl font-extrabold text-[#1B2A5E] dark:text-white">LocalBoost</span>
<div className="hidden md:flex items-center space-x-8 font-['DM_Sans'] text-sm font-medium tracking-tight">
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">Services</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">How it Works</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">Pricing</a>
<a className="text-[#1B2A5E] dark:text-slate-300 hover:text-[#1DB887] transition-colors" href="#">About</a>
</div>
<div className="flex items-center space-x-4 font-['DM_Sans'] text-sm">
<Link to="/sign-in" className="text-[#1B2A5E] dark:text-white font-medium hover:opacity-80 transition-all duration-200 active:scale-95">Sign In</Link>
<Link to="/flow" className="bg-[#1B2A5E] text-white px-6 py-2.5 rounded-[10px] font-bold hover:opacity-90 transition-all duration-200 active:scale-95 shadow-lg">Get Started</Link>
</div>
</div>
</nav>
{/* Hero Section */}
<section className="relative pt-32 pb-24 overflow-hidden bg-surface">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
{/* Left Content */}
<div className="lg:col-span-7">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                    All-in-One Digital Platform for Local Businesses
                </span>
<h1 className="font-['Syne'] text-[60px] leading-[1.1] font-extrabold text-primary mb-8">
                    Your Business, Digitally Transformed
                </h1>
<p className="text-lg text-on-surface-variant max-w-xl mb-12 font-medium">
                    Bridge the gap between your physical storefront and the digital marketplace. We handle the tech, so you can focus on your craft.
                </p>
<div className="flex flex-wrap gap-12">
<div>
<p className="text-4xl font-bold text-primary">12k+</p>
<p className="text-xs font-bold text-outline tracking-wider uppercase mt-1">Vendors Active</p>
</div>
<div>
<p className="text-4xl font-bold text-secondary">94%</p>
<p className="text-xs font-bold text-outline tracking-wider uppercase mt-1">Growth Rate</p>
</div>
<div>
<p className="text-4xl font-bold text-primary">24/7</p>
<p className="text-xs font-bold text-outline tracking-wider uppercase mt-1">Expert Support</p>
</div>
</div>
</div>
{/* Right: Dashboard Mockup */}
<div className="lg:col-span-5 relative">
<div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(27,42,94,0.10)] overflow-hidden border border-primary/5">
{/* Dashboard Header */}
<div className="p-6 bg-primary text-white flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
<span className="text-primary font-bold">A</span>
</div>
<div>
<p className="text-sm font-bold">Welcome, Arjun</p>
<p className="text-[10px] opacity-70">Business Dashboard</p>
</div>
</div>
<span className="material-symbols-outlined text-white/80">notifications</span>
</div>
{/* Dashboard Content */}
<div className="p-6 space-y-6">
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-surface-container-low border border-primary/5">
<span className="material-symbols-outlined text-secondary mb-2" data-icon="language">language</span>
<p className="text-xs font-bold text-primary">Website Builder</p>
<p className="text-[10px] text-outline">Live &amp; Syncing</p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low border border-primary/5">
<span className="material-symbols-outlined text-secondary mb-2" data-icon="share">share</span>
<p className="text-xs font-bold text-primary">Social Media</p>
<p className="text-[10px] text-outline">Active Campaigns</p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low border border-primary/5">
<span className="material-symbols-outlined text-secondary mb-2" data-icon="print">print</span>
<p className="text-xs font-bold text-primary">Print Media</p>
<p className="text-[10px] text-outline">Design Ready</p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low border border-primary/5">
<span className="material-symbols-outlined text-secondary mb-2" data-icon="description">description</span>
<p className="text-xs font-bold text-primary">GST Filing</p>
<p className="text-[10px] text-outline">Up to date</p>
</div>
</div>
{/* Status Bar */}
<div className="bg-tertiary-fixed/20 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<p className="text-[11px] font-bold text-tertiary">3 businesses awaiting approval</p>
</div>
<span className="material-symbols-outlined text-tertiary text-sm" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
{/* Decoy element to break grid symmetry */}
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>
{/* Stats Strip */}
<section className="bg-primary-container py-16">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<h3 className="text-5xl font-extrabold text-white mb-2">97%</h3>
<p className="text-on-primary-container text-sm font-medium">Customer Success</p>
</div>
<div className="text-center">
<h3 className="text-5xl font-extrabold text-white mb-2">78%</h3>
<p className="text-on-primary-container text-sm font-medium">Faster Setup</p>
</div>
<div className="text-center">
<h3 className="text-5xl font-extrabold text-white mb-2">3.5x</h3>
<p className="text-on-primary-container text-sm font-medium">ROI on Average</p>
</div>
<div className="text-center">
<h3 className="text-5xl font-extrabold text-white mb-2">$4.2T</h3>
<p className="text-on-primary-container text-sm font-medium">Market Potential</p>
</div>
</div>
</div>
</section>
{/* Problem Section */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20">
<p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">The Problem</p>
<h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary max-w-2xl">Local Businesses Are Being Left Behind</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-low p-10 rounded-[24px] hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="cloud_off">cloud_off</span>
</div>
<h4 className="text-xl font-bold text-primary mb-4">Zero Online Visibility</h4>
<p className="text-on-surface-variant leading-relaxed">Most local shops rely solely on foot traffic. Without a digital presence, you're invisible to 80% of modern shoppers.</p>
</div>
<div className="bg-surface-container-low p-10 rounded-[24px] hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="construction">construction</span>
</div>
<h4 className="text-xl font-bold text-primary mb-4">Technical Struggles</h4>
<p className="text-on-surface-variant leading-relaxed">Building a website shouldn't feel like rocket science. Local owners shouldn't have to learn code to sell online.</p>
</div>
<div className="bg-surface-container-low p-10 rounded-[24px] hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="payments">payments</span>
</div>
<h4 className="text-xl font-bold text-primary mb-4">Complex Compliance</h4>
<p className="text-on-surface-variant leading-relaxed">GST, tax filings, and digital invoicing are massive hurdles that slow down your real work.</p>
</div>
<div className="bg-surface-container-low p-10 rounded-[24px] hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary" data-icon="campaign">campaign</span>
</div>
<h4 className="text-xl font-bold text-primary mb-4">Marketing Blindness</h4>
<p className="text-on-surface-variant leading-relaxed">Knowing where to spend on ads or how to manage social media is a full-time job you don't have time for.</p>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
<h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary">Everything You Need to Grow Online</h2>
</div>
<button className="bg-primary text-white px-8 py-4 rounded-[10px] font-bold hover:opacity-90 transition-all shadow-xl">View All Services</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="bg-white p-8 rounded-[32px] shadow-sm border border-primary/5">
<div className="aspect-video mb-8 overflow-hidden rounded-2xl bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Modern clean laptop displaying a sleek business website builder interface with drag and drop elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoiQz_0kzxS7y__cEk_x9OGip8jpSpSEa0ZkZEC_0FFrWk4U-wX_f-YUhCGISifsIAQPjpCmA5BgTUOFrbLY7IiA8i4W2oJ6tTxcp5iGmkyKEMZQ-QBDhKPwytlz6N1B663B9-AVzTPI4H5FqsEiEbR0nYwJkuKdqe9iXx972ksR-1y5F8ZwIH2PsEeRJoekXiAgcgkRTtJQuIcVRKXVGEAxZiNE3KxVq-WANKHYdQkKZsJBDkq9oj5t81paggLjSJLkJzo_kebB0"/>
</div>
<h4 className="text-2xl font-bold text-primary mb-4">Website Builder</h4>
<p className="text-on-surface-variant mb-6">Create a stunning, SEO-optimized website in minutes with zero coding skills required.</p>
<div className="flex items-center text-secondary font-bold cursor-pointer group">
<span>Learn More</span>
<span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div className="bg-white p-8 rounded-[32px] shadow-sm border border-primary/5">
<div className="aspect-video mb-8 overflow-hidden rounded-2xl bg-slate-100">
<img className="w-full h-full object-cover" data-alt="Digital marketing manager organizing social media posts on a grid of various smartphone screens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcErdFAF2EjkzHXAjhKovkPakR0pSi1mPfQfXdwnlgG4yR5tHPKrZPXam0VkTrEdQd12LFzBolSNeelj6j1JmZu1BLVLzeR4UuBWDzYHBDPvPKV5xUYpmlz0EgPjDu9CkC9grf74tNuHloWprC4zTNKDxm_jlQrdK5u-5Eij0i9elYvcNfz6dX_YcesCFwer6PWaJz-OMx6RL1HVIw5NWEDeu_teaJjpUPGbCrtXhOVRSWBCyeE53L0d30Boi8_AV6pMQ3JXafGW8"/>
</div>
<h4 className="text-2xl font-bold text-primary mb-4">Social Media Setup</h4>
<p className="text-on-surface-variant mb-6">Get your profiles optimized and automated. Reach your local community where they spend time.</p>
<div className="flex items-center text-secondary font-bold cursor-pointer group">
<span>Learn More</span>
<span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div className="bg-white p-8 rounded-[32px] shadow-sm border border-primary/5">
<div className="aspect-video mb-8 overflow-hidden rounded-2xl bg-slate-100">
<img className="w-full h-full object-cover" data-alt="High-quality printed business cards and branding materials arranged on a designer wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfurD1kNYHacAd7xbTcSK6e8b6bYwaKr7eSYhjCn_2ZkElQEDnwOqvcClG2vXkSYvoMi_sBW7OhcVVmKtM_jHhrz-SgXvTfbeMN5RfiyCPI4PlEkWSaFIDPRq-UWztDWsWPY37Y7DIRHxvZSSUgZmtjN8euIcuC5jKEXuzwrhXy0SB0_oeZg6bsb559AjOdCKOIZtfAZaIoFAI5JaDM3zKS0vDTG8gLvnU81cwm6lTwqE21I1X6X-3BxXUj9JHd7FVS9XqJrBW8E"/>
</div>
<h4 className="text-2xl font-bold text-primary mb-4">Print &amp; Branding</h4>
<p className="text-on-surface-variant mb-6">Professional logos, business cards, and flyers that match your digital identity perfectly.</p>
<div className="flex items-center text-secondary font-bold cursor-pointer group">
<span>Learn More</span>
<span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/* How It Works (Vertical Timeline) */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-24">
<p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">The Process</p>
<h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary">From Offline to Online in 72 Hours</h2>
</div>
<div className="relative max-w-4xl mx-auto">
{/* Vertical Line */}
<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2"></div>
<div className="space-y-32">
{/* Step 1 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-24 text-left md:text-right order-2 md:order-1 mt-8 md:mt-0">
<h4 className="text-2xl font-bold text-primary mb-4">Day 1: Sign Up</h4>
<p className="text-on-surface-variant">Simple onboarding. Tell us about your business, upload your logo, and pick your primary goals.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center z-10 order-1">
<span className="text-primary font-bold text-xl">01</span>
</div>
<div className="md:w-1/2 md:pl-24 order-3"></div>
</div>
{/* Step 2 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-24 order-2 md:order-1 mt-8 md:mt-0"></div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-10 order-1">
<span className="text-secondary font-bold text-xl">02</span>
</div>
<div className="md:w-1/2 md:pl-24 text-left order-3">
<h4 className="text-2xl font-bold text-primary mb-4">Day 2: Set Up</h4>
<p className="text-on-surface-variant">Our AI engines build your site and sync your social handles while you approve the branding mockups.</p>
</div>
</div>
{/* Step 3 */}
<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-24 text-left md:text-right order-2 md:order-1 mt-8 md:mt-0">
<h4 className="text-2xl font-bold text-primary mb-4">Day 3: Launch</h4>
<p className="text-on-surface-variant">Go live across all platforms. Receive your first digital orders and start tracking your growth metrics.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center z-10 order-1">
<span className="font-bold text-xl">03</span>
</div>
<div className="md:w-1/2 md:pl-24 order-3"></div>
</div>
</div>
</div>
</div>
</section>
{/* USP & Proof Section */}
<section className="py-32 bg-primary text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<p className="text-secondary-fixed font-bold text-xs tracking-[0.2em] uppercase mb-6">Why LocalBoost</p>
<h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold mb-10">We Scale While You Stay Local</h2>
<ul className="space-y-6">
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-xs" data-icon="check">check</span>
</div>
<p className="text-lg">One dashboard for all operations</p>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-xs" data-icon="check">check</span>
</div>
<p className="text-lg">No technical expertise required ever</p>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-xs" data-icon="check">check</span>
</div>
<p className="text-lg">Enterprise-grade marketing for small shops</p>
</li>
<li className="flex items-start space-x-4">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-xs" data-icon="check">check</span>
</div>
<p className="text-lg">Integrated GST &amp; Tax compliance tools</p>
</li>
</ul>
</div>
<div className="relative">
<div className="bg-white/10 backdrop-blur-xl p-10 rounded-[40px] border border-white/10">
<h4 className="text-2xl font-bold mb-8">Quarterly Business Impact</h4>
<div className="space-y-8">
<div>
<div className="flex justify-between mb-3">
<span className="text-white/80">Average ROI</span>
<span className="font-bold text-secondary-fixed">4.5x Increase</span>
</div>
<div className="h-3 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-secondary-fixed w-[85%]"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-3">
<span className="text-white/80">Revenue Growth</span>
<span className="font-bold text-secondary-fixed">60% Increase</span>
</div>
<div className="h-3 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-secondary-fixed w-[60%]"></div>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a smiling mature small business owner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Dtj2nM0lz2ufWFhANqvV76-NUOv5W0o8HUISBoR3uJbush_QlRAKRp002hrcxmWu231aPVtWaRVqCe9QqyvuiosJlU5qljAPB6Bmke_CVXe-9Bm8X50zdPWBztZSX9z_ziqF1pG2Hx754Mr8wDFi9AWW1qrFiiJwPO5Rg9OkoyqidVHAgFRb7ae0SHVZiW0kYSzSbqKDp8fmWAmBSYrlnCjuP1XB53WW0JdGaZ4H76kgG4JV9yBU8086XWPIurtRbrOkpk9p1iI"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a young entrepreneur woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYut7ihiO_EJaZJoOHwdMyeFy3TpbH2nBzGgv0bBpzs4plJ4dztNFgsydxg6McyPHYdynj4j_ll_Htmnimx0DuXG-5eUZ2kM8r4HDGLTxFJWU4vr1n40zjS-FTMh_XL4Wnz0T7XKUHRmmAI9BQdb82Jlkd2oFxP7DhxcrP3p0BOqxTdW09SU8Msg8HSn4SnBPkNzpgbNUDpnQE4hnMHy2aaFZksAcCqn1agVUzVz5SMaIX8NJS0oRRDymS3q4-nQTDj71nsmuuOmw"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300">
<img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a friendly male professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4N9CN8Uh_XTNchJWMn3NWUkvXt_HlQnqMVtuyDOt-KbwVI5kBC1b1csXxkDYzmI7vmFhnnBdAIo5nQr-BZtxHl4J2jNiUVIJYuEKb0RC4Eqf1Rz9BnW918UghybszmUrNrCFSQN2xpa4DrekHFg6kQ04D6QCCcMvAHAATHn5zHksc0XdvzQ_tfFIPdiu7MvFpXLVQVT7pzz5xcERSBMMAuLQWumZ92bQlzsKxbbt4RzdgSpMaijMps-1T38aOVXMUWBCjgCBtvWw"/>
</div>
</div>
<p className="text-xs font-bold text-white/60 uppercase tracking-widest">Trusted by 12,000+ Owners</p>
</div>
</div>
</div>
{/* Abstract floating orb */}
<div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px] -z-10"></div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-primary-container rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-['Syne'] text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Boost Your Local Legacy?</h2>
<p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12">Join the digital revolution. Start your transformation today with no upfront cost or commitments.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="w-full sm:w-auto bg-[#1DB887] text-white px-10 py-5 rounded-[12px] font-bold text-lg hover:scale-105 transition-transform shadow-[0_8px_24px_rgba(29,184,135,0.30)]">Start Free — No Card Needed</button>
<button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-[12px] font-bold text-lg hover:bg-white/5 transition-colors">Talk to Our Team</button>
</div>
</div>
{/* Background decorative shapes */}
<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1DB887]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-slate-50 dark:bg-[#0F1A3D] w-full py-12 px-8 border-t border-[#1B2A5E]/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
<div className="flex flex-col items-center md:items-start space-y-4">
<span className="font-['Syne'] text-lg font-bold text-[#1B2A5E] dark:text-slate-400">LocalBoost</span>
<p className="font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400">© 2024 LocalBoost. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 font-['DM_Sans'] text-xs text-[#1B2A5E] dark:text-slate-400">
<a className="hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Privacy Policy</a>
<a className="hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Terms of Service</a>
<a className="hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Cookie Policy</a>
<a className="hover:text-[#1DB887] transition-colors cursor-pointer" href="#">Support</a>
</div>
</div>
</footer>

    </div>
  );
}
