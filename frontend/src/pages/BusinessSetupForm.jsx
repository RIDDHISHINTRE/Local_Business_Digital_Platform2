import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function BusinessSetupForm() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container">
      {/* Screen Content */}
      
{/* TopNavBar (Fixed Header) */}
<nav className="fixed top-0 w-full z-50 bg-white/80 nav-blur shadow-sm transition-all duration-200">
<div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
<div className="flex items-center gap-8">
<span className="font-['Syne'] text-2xl font-extrabold text-primary tracking-tight">LocalBoost</span>
</div>
<div className="flex items-center gap-4">
<Link to="/sign-in" className="px-6 py-2 rounded-lg font-medium text-sm text-primary transition-all active:scale-95 hover:opacity-80">Sign In</Link>
<Link to="/flow" className="px-6 py-2 rounded-lg bg-primary text-white font-medium text-sm transition-all active:scale-95 hover:opacity-90 shadow-md">Get Started</Link>
</div>
</div>
<div className="bg-surface-container-high h-[1px] w-full"></div>
</nav>
<main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
<div className="max-w-3xl mx-auto">
{/* Progress Header Section */}
<div className="mb-16 text-center">
<span className="text-secondary font-label text-xs font-bold uppercase tracking-widest block mb-4">Setup in progress</span>
<h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12">Setting up for: Website Builder</h1>
{/* Stepper */}
<div className="flex items-center justify-between relative max-w-lg mx-auto">
{/* Progress Line Background */}
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 -z-10"></div>
{/* Active Progress Line */}
<div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-secondary -translate-y-1/2 -z-10"></div>
{/* Step 1: Account */}
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm ring-4 ring-white">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<span className="mt-3 font-label text-xs font-bold text-secondary uppercase">Account</span>
</div>
{/* Step 2: Business Info (Active) */}
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-white shadow-lg">
                            2
                        </div>
<span className="mt-3 font-label text-xs font-bold text-primary uppercase">Business Info</span>
</div>
{/* Step 3: Submit */}
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-bold text-sm ring-4 ring-white">
                            3
                        </div>
<span className="mt-3 font-label text-xs font-bold text-on-surface-variant uppercase">Submit</span>
</div>
</div>
</div>
{/* Centered Form Card */}
<div className="bg-surface-container-lowest rounded-[20px] p-8 md:p-12 shadow-sm ghost-border relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5">
<span className="material-symbols-outlined text-9xl text-primary" style={{fontVariationSettings: '\'wght\' 200'}}>storefront</span>
</div>
<div className="relative z-10">
<h2 className="font-headline text-2xl font-bold text-primary mb-8">Tell us about your business</h2>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Business Name */}
<div className="flex flex-col gap-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="business-name">Business Name</label>
<input className="w-full bg-surface-container-low border-0 rounded-[10px] py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="business-name" placeholder="e.g. Blue Ribbon Bakery" type="text"/>
</div>
{/* Category */}
<div className="flex flex-col gap-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="category">Category</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low border-0 rounded-[10px] py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all" id="category">
<option disabled="" selected="" value="">Select a category</option>
<option value="retail">Retail &amp; Boutique</option>
<option value="food">Food &amp; Beverage</option>
<option value="services">Professional Services</option>
<option value="health">Health &amp; Wellness</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">expand_more</span>
</div>
</div>
</div>
{/* Business Description */}
<div className="flex flex-col gap-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="description">Business Description</label>
<textarea className="w-full bg-surface-container-low border-0 rounded-[10px] py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all resize-none" id="description" placeholder="Tell customers what makes your business unique..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Address */}
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="address">Address</label>
<input className="w-full bg-surface-container-low border-0 rounded-[10px] py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="address" placeholder="123 Commerce St" type="text"/>
</div>
{/* City */}
<div className="flex flex-col gap-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="city">City</label>
<input className="w-full bg-surface-container-low border-0 rounded-[10px] py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="city" placeholder="Main City" type="text"/>
</div>
</div>
{/* WhatsApp Number */}
<div className="flex flex-col gap-2">
<label className="font-label text-xs font-bold text-primary uppercase tracking-wider" htmlFor="whatsapp">WhatsApp Number</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-4 text-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>chat</span>
<input className="w-full bg-surface-container-low border-0 rounded-[10px] py-4 pl-12 pr-5 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all" id="whatsapp" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
{/* Info Box */}
<div className="bg-surface-container p-6 rounded-[12px] flex items-start gap-4">
<span className="material-symbols-outlined text-secondary">info</span>
<p className="text-sm text-on-surface-variant leading-relaxed">
                                Your business will be reviewed by our compliance team within 24 hours to ensure quality standards are met before going live.
                            </p>
</div>
{/* Action Buttons */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-6">
<button className="w-full md:w-auto px-10 py-4 ghost-border rounded-[10px] text-primary font-bold transition-all active:scale-95 hover:bg-surface-container-low" type="button">
                                Back
                            </button>
<button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-[10px] font-bold shadow-lg transition-all active:scale-95 hover:opacity-90 hover:translate-y-[-2px]"  onClick={(e)=>{e.preventDefault(); window.location.href="/business-status";}}>Submit for Verification</button>
</div>
</form>
</div>
</div>
{/* Help/Support Text */}
<div className="mt-12 text-center">
<p className="text-sm text-on-surface-variant">Need help? <a className="text-secondary font-bold hover:underline" href="#">Contact Support</a></p>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-low">
<div className="bg-primary/5 h-[1px] w-full"></div>
<div className="max-w-7xl mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span className="font-['Syne'] text-lg font-bold text-primary">LocalBoost</span>
<p className="mt-2 text-xs text-on-surface-variant">© 2024 LocalBoost. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-['DM_Sans'] text-xs text-primary font-medium hover:text-secondary transition-colors" href="#">Privacy Policy</a>
<a className="font-['DM_Sans'] text-xs text-primary font-medium hover:text-secondary transition-colors" href="#">Terms of Service</a>
<a className="font-['DM_Sans'] text-xs text-primary font-medium hover:text-secondary transition-colors" href="#">Cookie Policy</a>
<a className="font-['DM_Sans'] text-xs text-primary font-medium hover:text-secondary transition-colors" href="#">Support</a>
</div>
</div>
</footer>

    </div>
  );
}
