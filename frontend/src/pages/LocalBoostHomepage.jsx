import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LocalBoostHomepage() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getCardWidth = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      return scrollContainerRef.current.children[0].offsetWidth + 32;
    }
    return 400; // fallback
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPos = scrollContainerRef.current.scrollLeft;
      const index = Math.round(scrollPos / getCardWidth());
      setActiveIndex(index);
    }
  };

  const scrollToDot = (index) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: index * getCardWidth(), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current.scrollLeft >= maxScroll - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="bg-surface font-body text-on-surface">




      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>LocalBoost | Your Business, Digitally Transformed</title>

      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&amp;family=DM+Sans:wght@400;500;700&amp;family=Epilogue:wght@700&amp;family=Manrope:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />


      {/*  Top Navigation Shell  */}
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
      {/*  Hero Section  */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/*  Left Content  */}
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
          {/*  Right: Dashboard Mockup  */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(27,42,94,0.10)] overflow-hidden border border-primary/5">
              {/*  Dashboard Header  */}
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
              {/*  Dashboard Content  */}
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
                {/*  Status Bar  */}
                <div className="bg-tertiary-fixed/20 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <p className="text-[11px] font-bold text-tertiary">3 businesses awaiting approval</p>
                  </div>
                  <span className="material-symbols-outlined text-tertiary text-sm" data-icon="chevron_right">chevron_right</span>
                </div>
              </div>
            </div>
            {/*  Decoy element to break grid symmetry  */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>
      {/*  Stats Strip  */}
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
      {/*  Problem Section  */}
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
      {/*  Services Section  */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
              <h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary">Everything You Need to Grow Online</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  Website Builder  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="language">language</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">Website Builder</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Create a stunning, SEO-optimized website in minutes with zero coding skills required. Fully responsive and ready to sell.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            {/*  Social Media Setup  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="share">share</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">Social Media Setup</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Get your profiles optimized and automated. Reach your local community where they spend time most.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            {/*  Print & Branding  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="print">print</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">Print &amp; Branding</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Professional logos, business cards, and flyers that match your digital identity perfectly for a unified look.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            {/*  GST Registration  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="description">description</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">GST Registration</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Navigate the complexities of business compliance with expert-led registration and filing services.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            {/*  Inventory Suite  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="inventory_2">inventory_2</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">Inventory Suite</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Smart stock management that keeps track of every item, ensuring you never miss a sale or overstock.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
            {/*  Ad Performance  */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="trending_up">trending_up</span>
              </div>
              <h4 className="font-['Syne'] text-2xl font-bold text-primary mb-4">Ad Performance</h4>
              <p className="font-['DM_Sans'] text-on-surface-variant leading-relaxed mb-8 flex-grow">Data-driven marketing campaigns that maximize your ROI by targeting the right customers at the right time.</p>
              <div className="flex items-center text-secondary font-bold cursor-pointer group">
                <span className="text-sm">Read more</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform text-lg" data-icon="arrow_forward">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  How It Works (Vertical Timeline)  */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">The Process</p>
            <h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary">From Offline to Online in 72 Hours</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/*  Vertical Line  */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2"></div>
            <div className="space-y-32">
              {/*  Step 1  */}
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
              {/*  Step 2  */}
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
              {/*  Step 3  */}
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
      {/*  Real Results (Carousel Section)  */}
      <section className="py-[128px] bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="max-w-xl">
              <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-4">REAL RESULTS</p>
              <h2 className="font-['Syne'] text-4xl lg:text-5xl font-bold text-primary mb-4">What Our Clients Achieved</h2>
              <p className="text-on-surface-variant font-medium">Real impact for local vendors across India.</p>
            </div>
            <div className="flex space-x-4 mt-8 md:mt-0">
              <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={scrollLeft}><span className="material-symbols-outlined">arrow_back</span></button>
              <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={scrollRight}><span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-12" id="results-carousel" ref={scrollContainerRef} onScroll={handleScroll} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/*  Card 1  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Laptop mockup showing tea business website" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbtifRFxfXXLO6GH2FmEe5tct-lqz5h1doCGJbPaI0ma3ZtMT-xZoB314xF61_JvOtp63G8c6RGZqZkztRHYa1zUM6oIqwmeUXpmknm-QdBID1SY5BdfGOPtDwdq3U7YaeLJiMqhaQS_1VqAOnRcb0POx-QeztC2DtnGkKqF1u8sroiJXTPY_iUbNocs7LBNVwr7XL_cwxjzGMmn1XnkIhsL52Pkp-zssTJNR7wryYEwpskLcS183x512RItTizEiFKgwzaJzcHJQ" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">Website Builder</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Rajesh Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GlmYgNpRbnXNVshodGw1w11utZufCnkwX0jvDw4ExmWjBRaKhaMOjNe1DC7BNMgmtpGDwF2-HTJrr8K2YncVfkQv2-1isxYfeQj3PZaPYBJVA7D2Sd4zGnKXmR5tGyLUx2YXON0vZHW0slgPVQX5Xyym-0A1IKC7Kyc5ootODjVP_NOYPKdwpizRinug5RkQir_iazueJy581cvLo2Vpq3kJ6g1XXXA4_W60QKQa00yeP88z5gIsQJ4yIi9sQ4dBE6Jk8K6nyVY" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Rajesh Sharma</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Sharma Chai Stall</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Expand reach beyond physical stall</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">Custom E-commerce Site</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"I get calls from the next town! My business has changed forever."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">↑ 40% more calls</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card 2  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Branding flatlay" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB13YwVvavjeEAIox95WNOTZqpicpFyymjBmQe47bTttq6Z0IhG2v-ju0euNlhbMZWr-i3Xb7ebeKeGNR3lN-5iIUUItrzv0_8mgS_vkhpbSAZPQFZIfuq2Oe1SYJ3jegM4aXtqdUHTP5KA622rNUkSrupb_G2oLlRCYT5Hgp-gPMSJlCe3_sEa6mHq4czYwuRLHB2J6VpWy6_8rWEOIWk6rZKYX31TC5TP-JilgPZ1VidqT-ZMJQiuI98V1dOv3UN3bcoF48NkTS8" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">Print &amp; Branding</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Priya Mehta" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIY3fbfoowCzfSV3ZmpSdtdoWdywf-wewejT_6ipZ9AMwBEzIhrAaFwg5U7XgcdZAXVbxCHfss251NxPR41UB4D9sZs8lOL5LW_7RUuQw7VWV0118YJSo7lFYve1Z5HIzGKyWyLOJYmm1pEPLGV1Rh-c07lOygUDNZmUkHmxXjK0cKW2d16YGLsmwjMqowTu22Vn2hr3zrrCVWTnKtGl9iExt2zrVMoKnOaeGpE_pPDRMNcGdutorwpy1x5A4eI7mibVtYSUASZ8A" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Priya Mehta</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Priya's Pickles</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Create a premium market presence</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">New Identity &amp; Packaging</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"Sales at the local market doubled once we launched the new look."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">↑ 2x sales</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card 3  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Compliance documents on table" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJY0CdCWEWPhfkj2sDtDQr5tuLQ9R_DbHk5pjqiztSaG60HE-qtpnEXGDgIqZofwCZinb3w4ZVtO3uK14HknbckDcNmRMbf3DFXO7E5RUWGxdkw16cpWIiW1PbmcsFCXyvE6bkZ4R0701fZLhFuPFLrsbMHCJq4yh5n11LYW0aHooZFDh86yhrIqF6vj1g71WazzlIgcuf10ZXAYRQiRBhKuzv4noc9sl-2gj3pBDwW2fNamvg-olvM-5lW7lT2ocaqQP-xrCEDMk" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">GST Registration</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Suresh Patil" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1gBpx2Agerd-vWGJpyFg_Q4J6MqYuDRX1a6z3K_3rRLSFllTlLwDnq6td1JGOgcFdMJ47xgoMIUU8nlwalGSpECaynFbbttV4XF0dFqevyszEE0OfuCVmUPBLkUaB3a8uul9Upkw9S3LnaYG6PW9tjMciQR4i921rRRw-PDnm9I9xpLZzygASYPSmgudp0WziEN2_tq5bmTnMaNZkqXweOaA5c3AuXxfZZAtPfHZPonDC2sUrMjZ6eboKqK4VQ4SAf5ijoftcyI0" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Suresh Patil</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Patil Hardware</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Sell on major online marketplaces</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">GST &amp; Marketplace Setup</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"Sorted it in two days. I am now selling across the country."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">Selling on 3 platforms</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card 4  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Phone showing food social media" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSKyXq9SHXxitpIsJE55RCXbhMrkU5boNAwg8c5DR3X3Uyre7RBJe7c7ILA_u5lCBe3yS8HATUI_phPlMAAm9s-XzoHsyr9TrK5Msvclf9ck606_3-PYCzr-Ul8tDBXwkF9yv72ZOeBJXdGIHVg2R3_yhuWTeEmDtB1osoC91x9w6mOjlQ-H0FM7qoU_LpABrfc3nG7pxCefwtIz2EbH9M6KTip3-Vka97FdLxT5VaM276igZVO5z0gaJ8_3UI5Ow_yK5JPhl1ic" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">Social Media</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Anita Joshi" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-QTzERwdRHQJUgdTyXAXr4ap_BWArScck64Z3V9BMiT8J2yelxqDKBqjO0P3kkPc_hcgsmhigw75klP97CrtccnbC42tXt4myCg5Zs-0xTaru4lkw2ReEE-1tToISRVBhAy7c-VHra6KQyyKD1s0ZD3B3TcsJ9Bpp1vERNceuxcqCCItIF1bv6OYtdxZ2iA0ru9XQtRUaVeVlmPhGD7bsRZ-q7hgTyBkWMiNfa65C9H2bt6izW0Vp1UvwVQ_6Objrq9QQmyOydSY" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Anita Joshi</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Anita's Tiffin</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Build a loyal community online</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">Full Social Automation</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"Fully booked! Our daily stories bring in orders every morning."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">↑ 800 followers</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card 5  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Auto repair shop marketing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_bRk_oPcWroVWKbtCjRP9YeMk3BxAIU20juT3451cP8jO_ecwSbNW1z_OJKMsDmkYRqsdSnofmU7EG9eqdagjJYweoOT44p1u8JcMaKAGgG5gQsqwK8R7xks_L13QoLz-49jHtlYIGAJafr_6jyvlFWpR21cq3w2l2W1QtGcTMqOikHlzsNhGS8Mp8Dg-2jR_VE-Su4HSRCHN3M6vwl1mEM22MrKg7-YOBCndpqJIbOTA5-4OBFHOLy48akA13tVnr6-mxWUypHY" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">Digital Marketing</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Vikram Nair" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxFFlRnJcvXb250t3qr68sEczC7gmmU8YeKkWvF2b6yixbEme03cgWpBWO6H49NvI8G4XRu0Nw5pMLtCY4e022BW8s2TtAK96_GfCioFnYBKCebyIskhtcKet5ckl1OjbkSPdEthssa0ouvMq0uKPDYgVC-VuLa1n_2Y_lUYPuzt63KzWNg4LFX1Fcs4sNBLyxP3ann4FX7tHyg5cjpHTQHW2MUkA821ewpY5crWZew8GHRE3EsdcST1paywFNsz4eZF5nS3xVGS8" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Vikram Nair</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Nair Auto Repair</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Increase high-value service bookings</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">Local Search Ads</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"I had to hire a helper just to handle the new bookings coming in."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">↑ 60% more bookings</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card 6  */}
            <div className="min-w-[400px] bg-white rounded-[32px] border border-primary/5 shadow-sm hover:-translate-y-2 transition-transform duration-300 snap-start flex flex-col h-full">
              <div className="h-[200px] relative overflow-hidden rounded-t-[32px]">
                <img alt="Saree business online" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVOIX1LAcTzjqSoi0KtiGJAKCmx4KtmxgQCpIgytMUEBOcxmCbmySPEPv9IdQ5L9fZZXSOcsaARfRMWChk7_plMdMYSVo7-GzFUjc5W_3Va8p6KPrvo-S_xjcG11osEM5PelRylXBQobbxUP5apdF0VE0KNb956eQASPQBf8TnFASlzYypB3OT3jAhAlkt-AyGF64XaSzSm_Cb3ge3jnAyy7HbcMhPRtXOebTFwlNDLi-x0B58xFDmQv3-3jLrO51gbiKEImoCkaI" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-primary uppercase">Website + Branding</span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-secondary flex items-center">
                    <span className="material-symbols-outlined text-[12px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Sunita Rao" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBZ2APyNqstf4s2bvUj-ek5evbvERsz_aQ09JO6TcTuZvrJ02eq6iU2QDKqXoo1bZM5VVaWta4gScGGgRDIGxRnDaZdNgizfoKQZwS7kmQKDvoHJ40OSWvHrS_VOUK62Uwoww9ciEsds7C21eM8nt2qoRS7kgPWqpnxhmWpzh_UVL2IvrhRlu_0y79Mmk-I938qc9WgcqgwYAfmEjRgVAjrYJswfl3pPmpjhQ-tS4ZN81lhEGA8nCCq1hbyMUkERHsmTy_FSbOams" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold text-primary">Sunita Rao</p>
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">Sunita Sarees</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-outline tracking-wider uppercase">THEIR GOAL</p>
                  <p className="text-sm font-medium">Transform traditional store to D2C</p>
                  <p className="text-[10px] font-bold text-secondary tracking-wider uppercase pt-2">WHAT WE DELIVERED</p>
                  <p className="text-sm font-bold text-secondary">Storefront + Identity</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl relative">
                  <span className="material-symbols-outlined absolute top-4 left-4 text-secondary/20 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="italic text-sm text-on-surface-variant leading-relaxed relative z-10">"First online order in 72 hours. My daughter helps me manage it now."</p>
                  <div className="mt-4 inline-flex items-center bg-secondary/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-secondary">Online in 3 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Indicators  */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                onClick={() => scrollToDot(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
      {/*  USP & Proof Section  */}
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
                      <img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a smiling mature small business owner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Dtj2nM0lz2ufWFhANqvV76-NUOv5W0o8HUISBoR3uJbush_QlRAKRp002hrcxmWu231aPVtWaRVqCe9QqyvuiosJlU5qljAPB6Bmke_CVXe-9Bm8X50zdPWBztZSX9z_ziqF1pG2Hx754Mr8wDFi9AWW1qrFiiJwPO5Rg9OkoyqidVHAgFRb7ae0SHVZiW0kYSzSbqKDp8fmWAmBSYrlnCjuP1XB53WW0JdGaZ4H76kgG4JV9yBU8086XWPIurtRbrOkpk9p1iI" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300">
                      <img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a young entrepreneur woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYut7ihiO_EJaZJoOHwdMyeFy3TpbH2nBzGgv0bBpzs4plJ4dztNFgsydxg6McyPHYdynj4j_ll_Htmnimx0DuXG-5eUZ2kM8r4HDGLTxFJWU4vr1n40zjS-FTMh_XL4Wnz0T7XKUHRmmAI9BQdb82Jlkd2oFxP7DhxcrP3p0BOqxTdW09SU8Msg8HSn4SnBPkNzpgbNUDpnQE4hnMHy2aaFZksAcCqn1agVUzVz5SMaIX8NJS0oRRDymS3q4-nQTDj71nsmuuOmw" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300">
                      <img className="w-full h-full rounded-full object-cover" data-alt="Portrait of a friendly male professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4N9CN8Uh_XTNchJWMn3NWUkvXt_HlQnqMVtuyDOt-KbwVI5kBC1b1csXxkDYzmI7vmFhnnBdAIo5nQr-BZtxHl4J2jNiUVIJYuEKb0RC4Eqf1Rz9BnW918UghybszmUrNrCFSQN2xpa4DrekHFg6kQ04D6QCCcMvAHAATHn5zHksc0XdvzQ_tfFIPdiu7MvFpXLVQVT7pzz5xcERSBMMAuLQWumZ92bQlzsKxbbt4RzdgSpMaijMps-1T38aOVXMUWBCjgCBtvWw" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Trusted by 12,000+ Owners</p>
                </div>
              </div>
            </div>
            {/*  Abstract floating orb  */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px] -z-10"></div>
          </div>
        </div>
      </section>
      {/*  CTA Section  */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary-container rounded-[48px] p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-['Syne'] text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Boost Your Local Legacy?</h2>
              <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12">Join the digital revolution. Start your transformation today with no upfront cost or commitments.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/business-setup" className="w-full sm:w-auto bg-[#1DB887] text-white px-10 py-5 rounded-[12px] font-bold text-lg hover:scale-105 transition-transform shadow-[0_8px_24px_rgba(29,184,135,0.30)]">Start Free — No Card Needed</Link>
                <Link to="/business-setup" className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-[12px] font-bold text-lg hover:bg-white/5 transition-colors">Talk to Our Team</Link>
              </div>
            </div>
            {/*  Background decorative shapes  */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1DB887]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>
      {/*  Footer  */}
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

