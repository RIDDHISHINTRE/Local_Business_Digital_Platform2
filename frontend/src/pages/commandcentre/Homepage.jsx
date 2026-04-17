import React, { useState } from 'react';

export default function Homepage() {
  return (
    <div className="min-h-full">
      <div className="flex h-screen overflow-hidden">
{/*  SideNavBar  */}

{/*  Main Content Container  */}
<main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">
{/*  TopNavBar  */}

{/*  Content Area  */}
<div className="flex-1 overflow-auto p-6">
{/*  Announcement Banner Control  */}
<div className="mb-6 bg-navy-900 text-white p-4 rounded-xl shadow-lg border border-teal-500/30 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-teal-500/20 p-2 rounded-lg text-teal-400">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
</div>
<div>
<h3 className="text-sm font-bold">Announcement Banner</h3>
<p className="text-xs text-slate-400">Global promotional bar active on all site pages</p>
</div>
</div>
<div className="flex items-center gap-4">
<input className="bg-navy-800 border-navy-700 text-xs px-4 py-2 rounded-lg w-96 text-slate-200" type="text" value="Special Offer: 20% off for all new business partners!"/>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-slate-400">Active</span>
<div className="w-10 h-5 bg-teal-600 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
{/*  Two-Panel Layout  */}
<div className="grid grid-cols-12 gap-6 h-[calc(100vh-210px)]">
{/*  Left Panel: Section List  */}
<div className="col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="font-bold text-slate-800">Page Structure</h2>
<button className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-600 font-bold">Reorder</button>
</div>
<div className="flex-1 overflow-auto p-4 space-y-3">
{/*  Hero Section (Active)  */}
<div className="group flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
<span className="material-symbols-outlined text-slate-300 cursor-grab" data-icon="drag_indicator">drag_indicator</span>
<div className="flex-1">
<span className="text-xs font-bold text-blue-600 block">Section 01</span>
<span className="text-sm font-bold text-slate-900">Hero Header</span>
</div>
<div className="flex gap-2">
<button className="p-1 text-slate-400 hover:text-blue-600"><span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span></button>
<button className="p-1 text-slate-400 hover:text-blue-600"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
</div>
</div>
{/*  Stats Section  */}
<div className="group flex items-center gap-3 p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all">
<span className="material-symbols-outlined text-slate-300" data-icon="drag_indicator">drag_indicator</span>
<div className="flex-1">
<span className="text-xs font-bold text-slate-400 block">Section 02</span>
<span className="text-sm font-bold text-slate-700">Metrics &amp; Stats</span>
</div>
<div className="flex gap-2">
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span></button>
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
</div>
</div>
{/*  Features Section  */}
<div className="group flex items-center gap-3 p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all">
<span className="material-symbols-outlined text-slate-300" data-icon="drag_indicator">drag_indicator</span>
<div className="flex-1">
<span className="text-xs font-bold text-slate-400 block">Section 03</span>
<span className="text-sm font-bold text-slate-700">Service Highlights</span>
</div>
<div className="flex gap-2">
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span></button>
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
</div>
</div>
{/*  Pricing Section  */}
<div className="group flex items-center gap-3 p-4 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all opacity-60">
<span className="material-symbols-outlined text-slate-300" data-icon="drag_indicator">drag_indicator</span>
<div className="flex-1">
<span className="text-xs font-bold text-slate-400 block">Section 04</span>
<span className="text-sm font-bold text-slate-700">Pricing Grid</span>
</div>
<div className="flex gap-2">
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="visibility_off">visibility_off</span></button>
<button className="p-1 text-slate-400"><span className="material-symbols-outlined text-sm" data-icon="edit">edit</span></button>
</div>
</div>
</div>
<div className="p-4 mt-auto">
<button className="w-full border-2 border-dashed border-slate-200 text-slate-500 py-3 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
<span className="material-symbols-outlined text-base" data-icon="add_circle">add_circle</span>
                                Add Section
                            </button>
</div>
</div>
{/*  Right Panel: Detail Editor  */}
<div className="col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
<div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<div>
<h2 className="font-black text-lg text-slate-900 tracking-tight">Hero Section Editor</h2>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Drafting v2.4 - Last saved 2 mins ago</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-white shadow-sm transition-all">Preview Layout</button>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-md transition-all">Save Changes</button>
</div>
</div>
<div className="flex-1 overflow-auto p-8">
<div className="max-w-3xl mx-auto space-y-8">
{/*  Title Input  */}
<div className="space-y-2">
<label className="block text-xs font-extrabold text-navy-900 uppercase tracking-widest">Hero Title</label>
<input className="w-full px-4 py-4 text-xl font-bold bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-xl transition-all outline-none" type="text" value="Enterprise-grade Command Centers for Global Scaling"/>
<p className="text-[10px] text-slate-400 italic">Recommended: Keep under 60 characters for mobile visibility.</p>
</div>
{/*  Subtitle Input  */}
<div className="space-y-2">
<label className="block text-xs font-extrabold text-navy-900 uppercase tracking-widest">Subtitle / Description</label>
<textarea className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-xl transition-all outline-none leading-relaxed" rows="4">Streamline your entire business infrastructure with a unified console designed for rapid decision-making and operational excellence.</textarea>
</div>
{/*  CTA Control  */}
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-extrabold text-navy-900 uppercase tracking-widest">Primary CTA Text</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="mouse">mouse</span>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-xl outline-none text-sm font-bold" type="text" value="Get Started"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-extrabold text-navy-900 uppercase tracking-widest">Button Variant</label>
<select className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 focus:border-blue-500 rounded-xl outline-none text-sm font-bold appearance-none">
<option>Teal Solid (Default)</option>
<option>Blue Solid</option>
<option>Outline Ghost</option>
</select>
</div>
</div>
{/*  Hero Image Background  */}
<div className="space-y-4">
<label className="block text-xs font-extrabold text-navy-900 uppercase tracking-widest">Hero Media</label>
<div className="relative group h-48 rounded-2xl overflow-hidden border-2 border-dashed border-slate-200">
<img className="w-full h-full object-cover" data-alt="ultra-modern glass office interior with minimalist desks and cinematic soft sunlight reflecting on polished concrete floors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7zT2kpP8iBItAhpp4xqoK9ifEjcLoyoBMc7wKmZU-cFBX9EIZ0mARa2kVnFuIChU6vv_oDGhYNWfJbCtO3E8lOA6rXZegbslU4IlWorAV-lUngcAJScfm8ZZ7dTMgEcQac11PaQkXfyp3a-ySapeBmOVB-NBU6mENSeI6HnMsVRjXQsBrTO-Ody4kPqCO4inbs7aIDy1k9_yl0H6Yi-ak9Doe3cWTjcx93q-yzr5epdKL2zbJif6SmT_RmqXcLi3KddupKYBXU7c"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<button className="bg-white text-navy-950 font-bold px-6 py-2 rounded-full text-sm flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="upload">upload</span>
                                                Change Image
                                            </button>
</div>
</div>
</div>
{/*  Display Options  */}
<div className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between">
<div>
<h4 className="text-sm font-bold text-slate-900">Show Trust Badges</h4>
<p className="text-xs text-slate-500">Display partner logos immediately below the hero CTA</p>
</div>
<div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
