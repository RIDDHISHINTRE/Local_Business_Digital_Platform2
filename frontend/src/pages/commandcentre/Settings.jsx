import React, { useState } from 'react';

export default function Settings() {
  return (
    <div className="min-h-full">
      <div className="flex h-screen overflow-hidden">
{/*  SideNavBar  */}

{/*  Main Content Area  */}
<div className="flex-1 flex flex-col min-w-0 overflow-hidden">
{/*  TopNavBar  */}

{/*  Scrollable Content  */}
<main className="flex-1 overflow-y-auto p-8">
<div className="max-w-6xl mx-auto">
<div className="mb-10">
<h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">System Dashboard</h2>
<p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Manage your platform configuration, users, and security protocols.</p>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  General Settings Card  */}
<div className="md:col-span-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<span className="material-symbols-outlined">settings_input_component</span>
</div>
<h3 className="text-lg font-bold">General Settings</h3>
</div>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-transform active:scale-95">Save Changes</button>
</div>
<div className="p-8 space-y-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="space-y-4">
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Platform Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-sm focus:ring-blue-500" type="text" value="System Dashboard"/>
<p className="text-xs text-slate-500 font-medium">The public name of your application as seen by users.</p>
</div>
<div className="space-y-4">
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Primary Support Email</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-3 px-4 text-sm focus:ring-blue-500" type="email" value="support@systemdash.com"/>
</div>
</div>
<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
<label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">Brand Logo</label>
<div className="flex items-center gap-6">
<div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 overflow-hidden relative group">
<img alt="Platform Logo" className="w-full h-full object-cover" data-alt="abstract geometric corporate logo with vibrant blue and teal gradients on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWrffNwnq_zrBevyVT0umDhLXtj1ybAntgoKd1_mY_GYAfRNXIwlCUYqaPLoLQXglAO1bpcB_Iy5dvG9B85cvdONsvlQzRzwxjhWLAXQuWQwIXjJKTSr_rK0gv0Jddjep5J8QZfwKuFwgVJbqUQtgmUKIXKDPGj8xtdBYPAOdHokdKhhEvrORLttXWCpFLlZwiHNtVZgRu_HqyxNDI2EwsYiDw_sQ5ZV9PhwFfMM9zObX2nUrhYEev-fHkC5G_Lp36COumPqS5poc"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
<span className="material-symbols-outlined text-white">upload</span>
</div>
</div>
<div className="flex-1">
<button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">Upload New Logo</button>
<p className="text-xs text-slate-500 font-medium">PNG, JPG or SVG. Recommended size 400x400px. Max 2MB.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Notification Settings Card  */}
<div className="md:col-span-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<h3 className="text-lg font-bold">Notifications</h3>
</div>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-bold text-slate-800 dark:text-slate-200">Email Alerts</p>
<p className="text-xs text-slate-500 font-medium">Critical system events</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-bold text-slate-800 dark:text-slate-200">SMS Alerts</p>
<p className="text-xs text-slate-500 font-medium">Security breach attempts</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-bold text-slate-800 dark:text-slate-200">Browser Push</p>
<p className="text-xs text-slate-500 font-medium">Weekly analytics reports</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
<p className="text-xs text-slate-500 font-medium italic">Changes apply to all administrators by default.</p>
</div>
</div>
</div>
{/*  Admin Controls Card  */}
<div className="md:col-span-7 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
<span className="material-symbols-outlined">group_add</span>
</div>
<h3 className="text-lg font-bold">Admin Controls</h3>
</div>
</div>
<div className="p-8">
<p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-6">Create New Administrator</p>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Role</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500">
<option>Content Admin</option>
<option>Super Admin</option>
<option>Billing Admin</option>
<option>Viewer</option>
</select>
</div>
<div className="flex items-end">
<button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity" type="submit">Create User</button>
</div>
</form>
<div className="mt-10">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Active Administrators</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">JD</div>
<div>
<p className="text-sm font-bold">Jane Doe</p>
<p className="text-xs text-slate-500">Super Admin</p>
</div>
</div>
<span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-red-500 transition-colors">more_vert</span>
</div>
</div>
</div>
</div>
</div>
{/*  Security Card  */}
<div className="md:col-span-5 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
<span className="material-symbols-outlined">security</span>
</div>
<h3 className="text-lg font-bold">Security</h3>
</div>
</div>
<div className="p-8 space-y-8">
<div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-blue-500" data-icon="lock" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
<p className="text-sm font-bold">Two-Factor Auth</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<p className="text-xs text-slate-500 font-medium">Add an extra layer of security to your admin account by requiring more than just a password.</p>
</div>
<div className="space-y-4">
<p className="text-sm font-bold text-slate-800 dark:text-slate-200">Change Password</p>
<div className="space-y-3">
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="Current password" type="password"/>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="New password" type="password"/>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-blue-500" placeholder="Confirm new password" type="password"/>
</div>
<button className="w-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 py-2 rounded-lg text-sm font-bold border border-blue-100 dark:border-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">Update Security</button>
</div>
<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
<div className="flex items-center justify-between text-slate-500">
<p className="text-xs font-medium">Last Login: Oct 24, 2023 • 14:22</p>
<span className="material-symbols-outlined text-sm cursor-pointer hover:text-slate-700">info</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
    </div>
  );
}
