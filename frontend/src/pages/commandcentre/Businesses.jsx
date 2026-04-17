import React, { useState } from 'react';

export default function Businesses() {
  return (
    <div className="min-h-full">
      {/*  Sidebar Navigation Shell  */}

{/*  Main Canvas Area  */}
<main className="ml-64 flex flex-col h-screen">
{/*  Top Navigation Bar  */}

{/*  Content Body  */}
<div className="p-6 overflow-y-auto bg-slate-50 flex-1">
{/*  Stat Cards - Top Level  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Total Users</p>
<h3 className="text-2xl font-black text-slate-900">42,892</h3>
<p className="text-xs text-green-600 font-bold mt-2 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span> +12%
                        </p>
</div>
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<span className="material-symbols-outlined">group</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Total Revenue</p>
<h3 className="text-2xl font-black text-slate-900">$1.2M</h3>
<p className="text-xs text-green-600 font-bold mt-2 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span> +8.4%
                        </p>
</div>
<div className="p-2 bg-green-50 text-green-600 rounded-lg">
<span className="material-symbols-outlined">payments</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Active Shops</p>
<h3 className="text-2xl font-black text-slate-900">1,402</h3>
<p className="text-xs text-slate-400 font-bold mt-2 flex items-center">
                            Stable
                        </p>
</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<span className="material-symbols-outlined">storefront</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex justify-between items-start">
<div>
<p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Avg. Retention</p>
<h3 className="text-2xl font-black text-slate-900">94.2%</h3>
<p className="text-xs text-red-500 font-bold mt-2 flex items-center">
<span className="material-symbols-outlined text-sm mr-1">trending_down</span> -0.5%
                        </p>
</div>
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<span className="material-symbols-outlined">analytics</span>
</div>
</div>
</div>
{/*  Main Split Layout  */}
<div className="grid grid-cols-12 gap-6 h-[calc(100vh-280px)]">
{/*  Left Panel: Business Table  */}
<div className="col-span-12 lg:col-span-7 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<h2 className="font-black text-slate-900 text-base">Registered Businesses</h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50">Filter</button>
<button className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50">Export</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 sticky top-0 z-10">
<tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
<th className="px-6 py-4">Business Name</th>
<th className="px-6 py-4">Category</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Growth</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-blue-50/30 cursor-pointer transition-colors bg-blue-50/50 border-l-4 border-blue-600">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">SC</div>
<div>
<p className="text-sm font-bold text-slate-900">Sharma Chai Stall</p>
<p className="text-[10px] text-slate-500">ID: BIZ-9902</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium text-slate-600">Beverages</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">Active</span>
</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[78%]"></div>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 cursor-pointer transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">KB</div>
<div>
<p className="text-sm font-bold text-slate-900">Kapoor Bakery</p>
<p className="text-[10px] text-slate-500">ID: BIZ-4122</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium text-slate-600">Food &amp; Dining</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">Active</span>
</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[45%]"></div>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 cursor-pointer transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">LM</div>
<div>
<p className="text-sm font-bold text-slate-900">Luxe Motors</p>
<p className="text-[10px] text-slate-500">ID: BIZ-8821</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium text-slate-600">Automotive</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-orange-100 text-orange-700 uppercase">Pending</span>
</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[12%]"></div>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 cursor-pointer transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">GP</div>
<div>
<p className="text-sm font-bold text-slate-900">Green Pharmacy</p>
<p className="text-[10px] text-slate-500">ID: BIZ-1234</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium text-slate-600">Health</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">Active</span>
</td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[92%]"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Right Panel: Deep Dive Details  */}
<div className="col-span-12 lg:col-span-5 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
<div className="p-6 bg-slate-900 text-white">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-2xl font-black">SC</div>
<div>
<h2 className="text-xl font-black">Sharma Chai Stall</h2>
<div className="flex items-center gap-2 mt-1">
<span className="material-symbols-outlined text-sm text-blue-400">location_on</span>
<p className="text-xs text-slate-400">Sector 12, Delhi NCR</p>
</div>
</div>
</div>
<span className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">Verified</span>
</div>
</div>
<div className="p-6 flex-1 overflow-y-auto space-y-8">
{/*  Service Access Section  */}
<div>
<h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Service Access Permissions</h3>
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
<input defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-xs font-bold text-slate-700">Digital Payments</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
<input defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-xs font-bold text-slate-700">Inventory Sync</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
<input className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-xs font-bold text-slate-700">Delivery Module</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
<input defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-xs font-bold text-slate-700">Loyalty Program</span>
</label>
</div>
</div>
{/*  Feature Toggles  */}
<div>
<h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Advanced Features</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">monitoring</span>
<div>
<p className="text-xs font-bold text-slate-800">Advanced Analytics</p>
<p className="text-[10px] text-slate-500">Enable real-time sales heatmaps</p>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400">chat</span>
<div>
<p className="text-xs font-bold text-slate-800">Customer Chat Hub</p>
<p className="text-[10px] text-slate-500">Allow direct customer interaction</p>
</div>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</div>
</div>
</div>
</div>
{/*  Custom Message Input  */}
<div>
<h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Internal Memo / Notes</h3>
<textarea className="w-full h-24 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Type internal update notes here..."></textarea>
<div className="mt-4 flex justify-end gap-3">
<button className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg">Discard Changes</button>
<button className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-black transition-colors">Apply System Configuration</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
