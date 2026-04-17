import React, { useState } from 'react';

export default function Overview() {
  return (
    <div className="min-h-full">
      {/*  SideNavBar Component  */}

{/*  TopNavBar Component  */}

{/*  Main Content Canvas  */}
<main className="ml-64 p-8">
{/*  Stat Cards Section  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{/*  Total Users  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Users</p>
<h3 className="text-3xl font-black text-slate-900">42,892</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-emerald-600 font-bold text-sm">
<span className="material-symbols-outlined text-lg">trending_up</span>
<span>+12%</span>
<span className="text-slate-400 font-normal ml-auto">vs last month</span>
</div>
</div>
{/*  Active Businesses  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Active Businesses</p>
<h3 className="text-3xl font-black text-slate-900">1,402</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-slate-500 font-bold text-sm">
<span className="material-symbols-outlined text-lg">video_stable</span>
<span>Stable</span>
<span className="text-slate-400 font-normal ml-auto">98% retention</span>
</div>
</div>
{/*  Pending Approvals  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 ring-2 ring-orange-500/10 flex flex-col justify-between">
<div>
<p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Approvals</p>
<h3 className="text-3xl font-black text-orange-600">14</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-orange-600 font-bold text-sm">
<span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
<span>Urgent</span>
<span className="text-slate-400 font-normal ml-auto">Action required</span>
</div>
</div>
{/*  Monthly Revenue  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
<div>
<p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Monthly Revenue</p>
<h3 className="text-3xl font-black text-slate-900">$1.2M</h3>
</div>
<div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-sm">
<span className="material-symbols-outlined text-lg">payments</span>
<span>+8.4%</span>
<span className="text-slate-400 font-normal ml-auto">Target: $1.5M</span>
</div>
</div>
</div>
{/*  Main Content Columns  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Left Column: Recent Activity  */}
<div className="lg:col-span-2">
<div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
<div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
<h2 className="font-bold text-slate-900">Recent Activity Feed</h2>
<button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
</div>
<div className="divide-y divide-slate-50">
{/*  Activity Item 1  */}
<div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">domain_add</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-bold text-slate-900">New Business Registration</p>
<span className="text-[10px] text-slate-400">2 mins ago</span>
</div>
<p className="text-sm text-slate-600">Lumina Tech Solutions applied for a premium partner license.</p>
</div>
<button className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full hover:bg-slate-200">Review</button>
</div>
{/*  Activity Item 2  */}
<div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">sync</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-bold text-slate-900">Service Update</p>
<span className="text-[10px] text-slate-400">45 mins ago</span>
</div>
<p className="text-sm text-slate-600">Global API Gateway version 2.4.0 successfully deployed to production.</p>
</div>
</div>
{/*  Activity Item 3  */}
<div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-bold text-slate-900">System Alert</p>
<span className="text-[10px] text-slate-400">2 hours ago</span>
</div>
<p className="text-sm text-slate-600">Latency spike detected in Frankfurt-DE region. Traffic rerouted automatically.</p>
</div>
</div>
{/*  Activity Item 4  */}
<div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">person_add</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-bold text-slate-900">New Administrator Onboarded</p>
<span className="text-[10px] text-slate-400">5 hours ago</span>
</div>
<p className="text-sm text-slate-600">Sarah Jenkins assigned to Regional Monitoring team.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Chart & Quick Actions  */}
<div className="space-y-8">
{/*  Service Popularity Chart (UI Mockup)  */}
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<h2 className="font-bold text-slate-900 mb-6">Service Popularity</h2>
<div className="space-y-5">
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-600">Cloud Hosting</span>
<span className="text-slate-900">88%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-600">Managed DB</span>
<span className="text-slate-900">64%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{ width: '64%' }}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-600">AI Compute</span>
<span className="text-slate-900">42%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{ width: '42%' }}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-bold">
<span className="text-slate-600">Edge CDN</span>
<span className="text-slate-900">31%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-300 rounded-full" style={{ width: '31%' }}></div>
</div>
</div>
</div>
</div>
{/*  Quick Actions Panel  */}
<div className="bg-slate-900 p-6 rounded-xl shadow-xl text-white">
<h2 className="font-bold text-white mb-4">Quick Actions</h2>
<div className="grid grid-cols-1 gap-3">
<button className="flex items-center gap-3 w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">add_circle</span>
<span className="font-semibold text-sm">Add Service</span>
</button>
<button className="flex items-center gap-3 w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform">verified_user</span>
<span className="font-semibold text-sm">Approve Businesses</span>
<span className="ml-auto bg-orange-500 text-[10px] px-2 py-0.5 rounded-full">14</span>
</button>
<button className="flex items-center gap-3 w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-emerald-400 group-hover:scale-110 transition-transform">home_app_logo</span>
<span className="font-semibold text-sm">Edit Homepage</span>
</button>
</div>
</div>
{/*  System Health Indicator  */}
<div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
<div className="relative z-10">
<p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">System Health</p>
<h4 className="text-xl font-black mb-4">All Systems Operational</h4>
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg inline-flex">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs font-bold">Uptime: 99.998%</span>
</div>
</div>
{/*  Decorative Background Image  */}
<div className="absolute inset-0 opacity-10 mix-blend-overlay">
<img className="w-full h-full object-cover" data-alt="futuristic digital network connection map with glowing nodes and data streams in deep blue space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwLapc43iNjYVbBPggzONXGaGkyetvBeHz2WErA9mA3XbSOiAv1Ke8ACSmAXaKsWGALTAubOzK3fd81jcwjT7wb2AxUL71Fkd2nW2Bq4xg41ugbp0NGripknFP25wD11P78l8bqGSe26V8JVqEunU0YVT0fH56UiToqOVCp9ZLdn6sr18O-CxwgHpb1ZSwG655o7uvwRDCIy3xMli0D5ksqlBlPzahsi_-JBJ0cG3R5ZoAmz8w4IPaqh0Dq3Opxz99gxSl1Ot-zVc"/>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
