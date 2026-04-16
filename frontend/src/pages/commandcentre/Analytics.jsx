import React, { useState } from 'react';

export default function Analytics() {
  return (
    <div className="min-h-full">
      {/*  SideNavBar (Authority: JSON)  */}

{/*  TopNavBar (Authority: JSON)  */}

{/*  Main Content  */}
<main className="ml-64 pt-24 px-8 pb-12">
{/*  Header & Filters  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Analytics Overview</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Real-time performance tracking for Command Center services.</p>
</div>
<div className="flex items-center gap-3">
<div className="inline-flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-1">
<button className="px-4 py-1.5 text-xs font-bold rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Last 7 days</button>
<button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50">Last 30 days</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
<span className="material-symbols-outlined text-lg" data-icon="download">download</span>
                    Export
                </button>
</div>
</div>
{/*  Top Stats (Bento Grid Style)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
<span className="material-symbols-outlined text-blue-600" data-icon="group">group</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        12.5%
                    </span>
</div>
<h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Visitors</h3>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">128,430</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
<span className="material-symbols-outlined text-indigo-600" data-icon="conversion_path">conversion_path</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        3.2%
                    </span>
</div>
<h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Conversions</h3>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">4,219</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
<span className="material-symbols-outlined text-teal-600" data-icon="payments">payments</span>
</div>
<span className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_down">trending_down</span>
                        0.8%
                    </span>
</div>
<h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue</h3>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">$42,980</p>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
<span className="material-symbols-outlined text-amber-600" data-icon="show_chart">show_chart</span>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        18.4%
                    </span>
</div>
<h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Growth %</h3>
<p className="text-2xl font-black text-slate-900 dark:text-white mt-1">24.8%</p>
</div>
</div>
{/*  Charts Grid  */}
<div className="grid grid-cols-12 gap-6">
{/*  Line Chart: Traffic over time  */}
<div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="font-bold text-slate-900 dark:text-white">Traffic over time</h4>
<p className="text-xs text-slate-500">Daily unique sessions vs. return visits</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-slate-500">Direct</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></span>
<span className="text-xs font-medium text-slate-500">Referral</span>
</div>
</div>
</div>
<div className="h-64 flex items-end gap-1 overflow-hidden relative">
{/*  Simulated Line Chart Path  */}
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="text-blue-500" d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,30" fill="none" stroke="currentColor" stroke-width="2"></path>
<path d="M0,100 Q10,75 20,60 T40,40 T60,50 T80,20 T100,30 L100,100 L0,100 Z" fill="url(#gradient-blue)" opacity="0.1"></path>
<defs>
<lineargradient id="gradient-blue" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:rgb(59, 130, 246);stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:rgb(59, 130, 246);stop-opacity:0"></stop>
</lineargradient>
</defs>
</svg>
{/*  Grid Lines  */}
<div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="border-b border-slate-400 w-full"></div>
<div className="border-b border-slate-400 w-full"></div>
<div className="border-b border-slate-400 w-full"></div>
<div className="border-b border-slate-400 w-full"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
{/*  Pie Chart: Category Distribution  */}
<div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<h4 className="font-bold text-slate-900 dark:text-white mb-6">Category Distribution</h4>
<div className="relative flex justify-center py-4">
<svg className="w-48 h-48 transform -rotate-90">
<circle className="text-blue-600" cx="96" cy="96" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="110" stroke-width="24"></circle>
<circle className="text-indigo-400" cx="96" cy="96" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="330" stroke-width="24"></circle>
<circle className="text-slate-200 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="70" stroke="currentColor" stroke-dasharray="440" stroke-dashoffset="390" stroke-width="24"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-2xl font-black text-slate-900 dark:text-white">75%</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Enterprise</span>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-600"></span>
<span className="text-slate-500">Enterprise Core</span>
</div>
<span className="font-bold">45%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
<span className="text-slate-500">Professional UI</span>
</div>
<span className="font-bold">30%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800"></span>
<span className="text-slate-500">Developer API</span>
</div>
<span className="font-bold">25%</span>
</div>
</div>
</div>
{/*  Bar Chart: Service Usage  */}
<div className="col-span-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="font-bold text-slate-900 dark:text-white">Service Usage</h4>
<p className="text-xs text-slate-500">Resource allocation per primary module</p>
</div>
<select className="text-xs font-bold bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-0">
<option>Current Quarter</option>
<option>Last Quarter</option>
</select>
</div>
<div className="grid grid-cols-6 items-end gap-8 h-48 px-4">
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[60%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[70%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Auth</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[45%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[90%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Storage</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[85%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[60%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">API Gateway</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[70%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[40%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Compute</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[30%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[85%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Analytics</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-lg h-[55%] relative group-hover:bg-blue-200 transition-colors">
<div className="absolute bottom-0 left-0 right-0 bg-blue-600 rounded-t-lg h-[50%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Static Assets</span>
</div>
</div>
</div>
</div>
{/*  Featured Section (Asymmetric / Glassmorphism)  */}
<div className="mt-12 grid grid-cols-12 gap-8">
<div className="col-span-12 lg:col-span-7 relative group overflow-hidden rounded-3xl h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Futuristic high-tech operation center with multiple monitors showing complex financial data and maps in a dimly lit blue atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXhW0sZfjapmBs5QhIpEeiFhU3XpwNmBOGeCv4RUBuxZSKwBzZzHuvvOHQ2vaXhjUEX-K73RZRxKKYPyAzRa2apz7L6jPRLnG1F49t4ECc1C_EAJ2dn71OMVSquW2xDLmMLLQgqbKeGdXYlWYHlIoed1fp4PDvXnw1k1-5httJ_pnOoeeum6W_tBniGYK2iZD5lBp7y425ElBfXlQmSVuvbtfYA1__SfBSZurNwkI9rXR8hLUkRxiWj-nxJYFbYtYsw7IdvJH9zIc"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10 max-w-lg">
<span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">System Update</span>
<h3 className="text-3xl font-black text-white leading-tight mb-4">Autonomous Scaling &amp; Predictive Thresholds</h3>
<p className="text-slate-300 text-sm font-medium">New AI-driven infrastructure monitoring is now live across all nodes. System will auto-scale based on the predicted traffic surge next month.</p>
</div>
</div>
<div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
<div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-500/20">
<span className="material-symbols-outlined text-6xl absolute -right-4 -bottom-4 opacity-20" data-icon="auto_awesome" style="font-size: 160px;">auto_awesome</span>
<h4 className="text-xl font-black mb-2">Smart Insights</h4>
<p className="text-blue-100 text-sm mb-6 leading-relaxed">Your conversion rate on Enterprise tier is 12% higher than last month. Consider increasing ad spend for this segment.</p>
<button className="px-6 py-2 bg-white text-blue-600 text-sm font-bold rounded-xl hover:shadow-lg transition-all">Review Suggestions</button>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span className="material-symbols-outlined text-blue-600" data-icon="security">security</span>
</div>
<div>
<h4 className="font-black text-slate-900 dark:text-white">Security Health</h4>
<p className="text-xs text-slate-500">All protocols operational</p>
</div>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[94%]"></div>
</div>
<div className="flex justify-between mt-3">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Integrity Score</span>
<span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">94/100</span>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
