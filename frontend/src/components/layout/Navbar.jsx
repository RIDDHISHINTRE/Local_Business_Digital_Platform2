import React from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/admin/commandcentre/overview': { title: 'Overview', subtitle: 'Platform health and key metrics at a glance' },
  '/admin/commandcentre/homepage': { title: 'Homepage Control', subtitle: 'Manage your homepage content and sections' },
  '/admin/commandcentre/services': { title: 'Services & Analytics', subtitle: 'Manage service listings and track performance' },
  '/admin/commandcentre/businesses': { title: 'Business Management', subtitle: 'Review and manage business registrations' },
  '/admin/commandcentre/pricing': { title: 'Pricing Manager', subtitle: 'Control pricing plans and feature access' },
  '/admin/commandcentre/testimonials': { title: 'Testimonials Manager', subtitle: 'Curate client reviews and case studies' },
  '/admin/commandcentre/analytics': { title: 'Analytics Dashboard', subtitle: 'Deep dive into platform usage and growth' },
  '/admin/commandcentre/settings': { title: 'Settings', subtitle: 'Configure platform-wide settings and preferences' },
};

export default function Navbar() {
  const { pathname } = useLocation();
  const page = pageTitles[pathname] || { title: 'Command Center', subtitle: 'B2B Admin Console' };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 ml-64">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">{page.title}</h1>
          <p className="text-sm text-slate-500 mt-0.5">{page.subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Admin User</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
