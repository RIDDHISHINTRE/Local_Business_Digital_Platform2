import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/admin/commandcentre/businesses', icon: 'store', label: 'Businesses' },
  { to: '/admin/commandcentre/testimonials', icon: 'format_quote', label: 'Testimonials' },
  { to: '/admin/commandcentre/emailing', icon: 'mail', label: 'Emailing' },
  { to: '/admin/commandcentre/settings', icon: 'settings', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 fixed left-0 top-0 bg-[#0F1A3D] text-white shadow-2xl flex flex-col py-10 px-6 z-50">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <div className="font-['Syne'] font-black text-[#1DB887] text-2xl tracking-tighter">LocalBoost</div>
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Command Centre</div>
        </div>

        <nav className="flex-1 space-y-2">
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4 px-3">Management</div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3.5 rounded-xl mx-0 my-1 transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#1DB887] shadow-lg shadow-[#1DB887]/20 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 font-medium'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]" data-icon={item.icon}>{item.icon}</span>
              <span className="font-['DM_Sans'] text-sm tracking-wide">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6">
          <NavLink
            to="/sign-in"
            className="flex items-center gap-3 px-4 py-3.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="font-['DM_Sans'] text-sm tracking-wide">Secure Logout</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
