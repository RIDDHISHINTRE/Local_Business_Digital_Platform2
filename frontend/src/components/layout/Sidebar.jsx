import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/admin/commandcentre/overview', icon: 'dashboard', label: 'Overview' },
  { to: '/admin/commandcentre/homepage', icon: 'home_max', label: 'Homepage' },
  { to: '/admin/commandcentre/services', icon: 'settings_suggest', label: 'Services' },
  { to: '/admin/commandcentre/businesses', icon: 'store', label: 'Businesses' },
  { to: '/admin/commandcentre/pricing', icon: 'payments', label: 'Pricing' },
  { to: '/admin/commandcentre/testimonials', icon: 'format_quote', label: 'Testimonials' },
  { to: '/admin/commandcentre/analytics', icon: 'monitoring', label: 'Analytics' },
  { to: '/admin/commandcentre/settings', icon: 'settings', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="bg-slate-900 font-sans text-sm font-medium tracking-tight h-screen w-64 left-0 top-0 border-r border-slate-800 shadow-xl fixed z-50 flex flex-col">
      <div className="flex flex-col h-full py-6">
        <div className="px-6 mb-8">
          <div className="text-xl font-black text-white tracking-tighter mb-1">Command Center</div>
          <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest">B2B Admin Console</div>
        </div>
        <div className="px-4 mb-6">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg font-bold transition-all hover:bg-blue-500 active:scale-95">
            <span className="material-symbols-outlined text-sm">add</span>
            New Service
          </button>
        </div>
        <nav className="flex-1 space-y-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mx-0 my-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-slate-800 pt-4 px-4">
          <NavLink
            to="/sign-in"
            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
