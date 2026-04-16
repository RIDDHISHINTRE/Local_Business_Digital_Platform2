import React, { useState } from 'react';

export default function Services() {
  return (
    <div className="min-h-full">
      {/*  SideNavBar (Authority: JSON)  */}

{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen flex flex-col">
{/*  TopNavBar (Authority: JSON)  */}

{/*  Dashboard Content Area  */}
<div className="p-8 space-y-8 flex-1 overflow-y-auto">
{/*  Top Dashboard Stats & Activity Feed  */}
<div className="grid grid-cols-12 gap-6">
{/*  Activity Feed  */}
<div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-blue-500">bolt</span>
                            Recent Activity
                        </h3>
<button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
</div>
<div className="space-y-4">
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">check_circle</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium"><span className="font-bold">Enterprise Cloud</span> service updated by Sarah</p>
<p className="text-xs text-slate-400">2 minutes ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">add_box</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">New <span className="font-bold">Premium Support</span> tier created</p>
<p className="text-xs text-slate-400">45 minutes ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">warning</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">Pricing conflict detected in <span className="font-bold">Basic Tier</span></p>
<p className="text-xs text-slate-400">2 hours ago</p>
</div>
</div>
</div>
</div>
{/*  Service Popularity Chart  */}
<div className="col-span-12 lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-blue-500">leaderboard</span>
                            Service Popularity (Monthly)
                        </h3>
<select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-bold py-1 px-3">
<option>Last 30 Days</option>
<option>Last 90 Days</option>
</select>
</div>
<div className="h-32 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[65%] group-hover:h-[75%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">Jan</div>
</div>
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[45%] group-hover:h-[55%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">Feb</div>
</div>
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[85%] group-hover:h-[95%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">Mar</div>
</div>
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[55%] group-hover:h-[65%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">Apr</div>
</div>
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[95%] group-hover:h-[100%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">May</div>
</div>
<div className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-lg relative group h-1/2">
<div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all duration-500 h-[75%] group-hover:h-[85%]"></div>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold">Jun</div>
</div>
</div>
</div>
</div>
{/*  Two-Panel Main Layout: Services Manager  */}
<div className="grid grid-cols-12 gap-8 items-start">
{/*  Left Panel: dense grid/list of services  */}
<div className="col-span-12 xl:col-span-7 space-y-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-extrabold tracking-tight">Active Services</h2>
<p className="text-xs text-slate-500">Manage visibility and featured status of your core offerings.</p>
</div>
<div className="flex gap-2">
<button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-sm">filter_list</span>
</button>
<button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-sm">view_module</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-4">
{/*  Service Item 1  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
<img alt="Service preview" className="w-full h-full object-cover" data-alt="clean abstract visualization of data analytics dashboard with blue and teal highlights, professional tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAspeDx0m8CHijytcDKKweeldu0sDN1Jpz3778Laz3N2ipaPWYcB5pEQBAmIJcFldgzBaqclzrjFM2o2CPVJg4SqticLWkAkH3ezioF05pPEQc7LD5G2qisJy0611gmhYO6OiKM4qvlQhDdMlNnnIsBJuvwX8Gga6UaYVAdcUk7h10ghQAmCztJnxtUEeeh-GovgvU3ZC3d1fG2ejyrnquV8UEWwk77giBOGCsyfN39HhpnDA6nVCTrxZLO9tcrMeFOg1RvV5at7NA"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-bold text-sm">Cloud Infrastructure Alpha</h4>
<span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded-full">SAAS</span>
</div>
<p className="text-xs text-slate-500 mb-2">Automated scaling for high-traffic networks.</p>
<div className="flex flex-wrap gap-4 items-center mt-3">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Visible</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Featured</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Show Price</span>
</label>
</div>
</div>
</div>
<div className="flex flex-col gap-1 items-end">
<span className="text-sm font-black">$499/mo</span>
<button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">edit_square</span>
</button>
</div>
</div>
</div>
{/*  Service Item 2  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
<img alt="Service preview" className="w-full h-full object-cover" data-alt="minimalist 3d render of an abstract shield icon, cybersecurity theme, glowing blue accents on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHb3xwR0leEbRsedq7GMbCauNkL467npMqVPAVFGbAS9dMrXezVZDozPnb3qZrE4iF5zKVmpOyqF_KtIKT_lkjm4Pup8n5Vdq50G5wqJq6O2J5zEuCb6lcLxUD-o7T3erw2W1jdvE_Dp_tzTM1z5LucfDc_ZyBUAs-VM0FmeGz-ln0BAtpeq1q6iCEfxf9GSxdNhnVAcJC0U7j3tmlSTqtoMP1MQgH1dQSGz6vr5Em-wyc35sVlHQbiNQdc1SsJhvFeEbrmdvQKRo"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-bold text-sm">Security Audit Pro</h4>
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full">SECURITY</span>
</div>
<p className="text-xs text-slate-500 mb-2">Quarterly penetration testing &amp; compliance check.</p>
<div className="flex flex-wrap gap-4 items-center mt-3">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Visible</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Featured</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Show Price</span>
</label>
</div>
</div>
</div>
<div className="flex flex-col gap-1 items-end">
<span className="text-sm font-black">$2,400/yr</span>
<button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">edit_square</span>
</button>
</div>
</div>
</div>
{/*  Service Item 3  */}
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
<img alt="Service preview" className="w-full h-full object-cover" data-alt="group of professional diverse designers working together in a modern bright office with plants, warm sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1RAjOXj-VA0kAsJE8OaaJ543PVEz1Uprn6LZmFYLx3FCZhCPi3ydYYdGTdVTFgpTDTWIyJWCgW9lb0Zv4lQf__K2-hYQqQcvMg1AfJ-OCfNsIGsz16EnPJxEM-TV9nAVgTQQrYWSM6C9PoIiBUDQ2A8soLLPgC9voC40xk-IqF0k6yd7xju0Xys76Y6ERRzU4gXbFZZZBZ7Td4kyzXN1-QupYNa7TbrB1ccSZ0PilM0U1fUf-dO2GFi2ocJxF_t7Cc19vMOYpc3A"/>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="font-bold text-sm">UI/UX Strategy Session</h4>
<span className="bg-purple-100 text-purple-700 text-[10px] font-black px-2 py-0.5 rounded-full">DESIGN</span>
</div>
<p className="text-xs text-slate-500 mb-2">1-on-1 consultation for product evolution.</p>
<div className="flex flex-wrap gap-4 items-center mt-3">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Visible</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Featured</span>
</label>
</div>
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
<span className="ml-2 text-[10px] font-bold text-slate-600 uppercase">Show Price</span>
</label>
</div>
</div>
</div>
<div className="flex flex-col gap-1 items-end">
<span className="text-sm font-black">$150/hr</span>
<button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">edit_square</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Right Panel: Inline Editor / Add Service  */}
<div className="col-span-12 xl:col-span-5">
<div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
<div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="font-bold text-sm">Add New Service</h3>
<span className="material-symbols-outlined text-slate-400 cursor-pointer">close</span>
</div>
<div className="p-6 space-y-6">
<div>
<label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Service Title</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Premium API Access" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Category</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm">
<option>SaaS</option>
<option>Security</option>
<option>Design</option>
<option>Marketing</option>
</select>
</div>
<div>
<label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Base Price</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-7 pr-3 text-sm focus:ring-blue-500" placeholder="0.00" type="number"/>
</div>
</div>
</div>
<div>
<label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Description</label>
<textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="Describe the service value..." rows="3"></textarea>
</div>
<div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-blue-400 transition-colors">
<span className="material-symbols-outlined text-slate-300 group-hover:text-blue-500 transition-colors mb-2 text-3xl">image</span>
<p className="text-xs font-bold text-slate-500">Drop thumbnail or <span className="text-blue-600">browse</span></p>
<p className="text-[10px] text-slate-400 mt-1">PNG, JPG up to 5MB</p>
</div>
<div className="flex items-center gap-3 pt-2">
<button className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold text-sm transition-transform active:scale-95">Save Draft</button>
<button className="flex-[2] bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-transform active:scale-95">Publish Service</button>
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
