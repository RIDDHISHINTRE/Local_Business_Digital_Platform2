import React, { useState } from 'react';

export default function Pricing() {
  return (
    <div className="min-h-full">
      <div className="flex h-screen overflow-hidden">
{/*  SideNavBar  */}

{/*  Main Content Canvas  */}
<main className="flex-1 flex flex-col min-w-0 bg-slate-50">
{/*  TopNavBar  */}

{/*  Workspace Content  */}
<div className="flex-1 overflow-hidden flex">
{/*  Left Panel: Plans List  */}
<div className="w-[400px] border-r border-slate-200 bg-white overflow-y-auto p-6 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-bold tracking-tight text-slate-900">Subscription Plans</h2>
<button className="text-blue-600 p-1 hover:bg-blue-50 rounded-full transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
<div className="space-y-4">
{/*  Starter Card  */}
<div className="relative group cursor-pointer border-2 border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-bold text-slate-900">Starter</h3>
<p className="text-xs text-slate-500">Perfect for individuals</p>
</div>
<div className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">DRAFT</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-slate-900">$29</span>
<span className="text-xs text-slate-400 font-medium">/ month</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex gap-2">
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="text-[10px] text-slate-400 font-medium flex-1 text-right">3 features</span>
</div>
</div>
{/*  Professional Card (Active/Selected)  */}
<div className="relative group cursor-pointer border-2 border-blue-500 bg-blue-50/30 rounded-xl p-5 shadow-lg shadow-blue-500/10">
<div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm">MOST POPULAR</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-bold text-slate-900">Professional</h3>
<p className="text-xs text-slate-500">For growing businesses</p>
</div>
<div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-slate-900">$89</span>
<span className="text-xs text-slate-400 font-medium">/ month</span>
</div>
<div className="mt-4 pt-4 border-t border-blue-100 flex gap-2">
<span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span>
<span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span>
<span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span>
<span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span>
<span className="text-[10px] text-slate-500 font-medium flex-1 text-right">8 features</span>
</div>
</div>
{/*  Enterprise Card  */}
<div className="relative group cursor-pointer border-2 border-slate-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-bold text-slate-900">Enterprise</h3>
<p className="text-xs text-slate-500">Customized scale</p>
</div>
<div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-black text-slate-900">$249</span>
<span className="text-xs text-slate-400 font-medium">/ month</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex gap-2">
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="material-symbols-outlined text-slate-300 text-sm">check_circle</span>
<span className="text-[10px] text-slate-400 font-medium flex-1 text-right">Unlimited</span>
</div>
</div>
</div>
</div>
{/*  Right Panel: Plan Editor  */}
<div className="flex-1 overflow-y-auto bg-slate-50/50 p-8">
<div className="max-w-3xl mx-auto">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-black text-slate-900 tracking-tight">Edit Plan: Professional</h1>
<p className="text-slate-500 text-sm font-medium">Last updated 2 days ago by System Admin</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Discard</button>
<button className="px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">Save Changes</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Basic Details Section  */}
<section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
<div className="flex items-center gap-2 border-b border-slate-100 pb-4">
<span className="material-symbols-outlined text-blue-500">edit_note</span>
<h3 className="font-bold text-slate-900">Plan Details</h3>
</div>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Plan Name</label>
<input className="w-full border-slate-200 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 font-medium" type="text" value="Professional"/>
</div>
<div>
<label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Description</label>
<textarea className="w-full border-slate-200 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 font-medium" rows="2">The best value for growing teams and scaling production workflows.</textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Monthly Price ($)</label>
<input className="w-full border-slate-200 rounded-lg text-sm font-bold" type="number" value="89"/>
</div>
<div>
<label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Yearly Price ($)</label>
<input className="w-full border-slate-200 rounded-lg text-sm font-bold" type="number" value="890"/>
</div>
</div>
</div>
</section>
{/*  Configuration Section  */}
<section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
<div className="flex items-center gap-2 border-b border-slate-100 pb-4">
<span className="material-symbols-outlined text-blue-500">settings_applications</span>
<h3 className="font-bold text-slate-900">Visibility &amp; Status</h3>
</div>
<div className="space-y-5">
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-bold text-slate-900">Show pricing on homepage</p>
<p className="text-[11px] text-slate-500 font-medium">Make this plan visible to public visitors</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-bold text-slate-900">Highlight plan</p>
<p className="text-[11px] text-slate-500 font-medium">Add 'Most Popular' badge and styling</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between group">
<div>
<p className="text-sm font-bold text-slate-900">Enable trial period</p>
<p className="text-[11px] text-slate-500 font-medium">Allow 14-day free testing</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
</div>
</section>
{/*  Features List Section  */}
<section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 col-span-full">
<div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-blue-500">checklist</span>
<h3 className="font-bold text-slate-900">Included Features</h3>
</div>
<button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
<span className="material-symbols-outlined text-base">add</span> Add Item
                                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="Up to 15 team members"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="Advanced analytics dashboard"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="Custom domain integration"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="API Access (10k requests/mo)"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="24/7 Priority Email Support"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-lg group">
<span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
<input className="flex-1 bg-transparent border-none text-sm font-medium p-0 focus:ring-0" type="text" value="SOC2 Compliance Reports"/>
<button className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all">
<span className="material-symbols-outlined text-lg">delete</span>
</button>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</main>
</div>
    </div>
  );
}
