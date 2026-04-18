import React from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/admin/commandcentre': { title: 'Business Management', subtitle: 'Review and manage business registrations' },
  '/admin/commandcentre/businesses': { title: 'Business Management', subtitle: 'Review and manage business registrations' },
  '/admin/commandcentre/testimonials': { title: 'Testimonials Manager', subtitle: 'Curate and manage client social proof across platforms' },
  '/admin/commandcentre/emailing': { title: 'Emailing & Notifications', subtitle: 'Manage communication templates and delivery history' },
  '/admin/commandcentre/emailing/create-template': { title: 'Template Editor', subtitle: 'Create or edit email templates' },
  '/admin/commandcentre/settings': { title: 'Settings', subtitle: 'Configure platform-wide settings and preferences' },
};

export default function Navbar() {
  const { pathname } = useLocation();
  const page = pageTitles[pathname] || { title: 'Command Center', subtitle: 'B2B Admin Console' };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-10 py-6 border-b border-surface-container shadow-sm">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="font-['Syne'] text-3xl font-bold text-primary tracking-tight">{page.title}</h1>
          <p className="text-[11px] font-bold text-[#1DB887] uppercase tracking-[0.2em] mt-1">{page.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-primary/10">
            <div className="w-10 h-10 rounded-xl bg-[#1DB887] flex items-center justify-center font-['Syne'] font-black text-white text-sm">A</div>
            <div>
              <p className="text-sm font-bold text-primary">Admin User</p>
              <p className="text-[11px] text-primary/40">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
