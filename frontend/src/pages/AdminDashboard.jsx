import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function AdminDashboard() {
  const { pathname } = useLocation();
  const inCommandCentre = pathname.startsWith('/admin/commandcentre');

  // When inside Command Centre, let CommandCentreLayout take full control
  if (inCommandCentre) {
    return <Outlet />;
  }

  return (
    <div className="bg-surface font-body text-on-background antialiased">
      {/* SideNavBar (Admin Control) */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-[#0F1A3D] text-white shadow-2xl flex flex-col py-10 px-6 z-50">
        <div className="mb-12">
          <span className="font-['Syne'] font-black text-[#1DB887] text-2xl tracking-tighter">LocalBoost</span>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border border-white/10">
              <img alt="Admin Avatar" className="rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1reNdQIg-JytzY4WUmSnOo7iGAjol5cODZ9Z_C5bGeIWCuB5C4m7Ptsr2taLwmK8go272DO0HvnZKRV9ZUB94CGrcwIJWnxTKeJsbXSwRJFAD0aZLmszU8OMpFUU_V5wYMEp0PZrriNCT46MVP38eMBthg4DX_8QMPDeW7LR4MtVIIa1WGxZDfZIY9IqKoOkop_xLb-OkL2t3BUNy09FLvDgpiffDMRpwJ9f_lGrIL6pbxzGcSUldA6CLANQ2C5564Q9ZNSK6Ak0"/>
            </div>
            <div>
              <p className="font-['Syne'] text-sm font-bold tracking-widest uppercase">Admin Control</p>
              <p className="text-xs text-slate-400">System Oversight</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                isActive
                  ? 'text-white bg-[#1DB887] rounded-xl'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Overview</span>
          </NavLink>

          <NavLink
            to="/admin/verify"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                isActive
                  ? 'text-white bg-[#1DB887] rounded-xl'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Verify Businesses</span>
          </NavLink>

          {/* ── Command Centre divider ── */}
          <div className="border-t border-white/10 my-4"></div>
          <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.18em] mb-1">Command Centre</p>

          <NavLink
            to="/admin/commandcentre"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-white bg-blue-600'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <span className="material-symbols-outlined">grid_view</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Command Centre</span>
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <button className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 w-full hover:bg-white/5 transition-all duration-300">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 min-h-screen">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 px-10 py-6 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-[11px] font-bold text-[#1DB887] uppercase tracking-[0.2em] mb-1">Administrative Terminal</p>
            <h1 className="font-['Syne'] text-3xl font-bold text-primary tracking-tight">System Dashboard</h1>
          </div>
        </header>

        <section className="p-10 space-y-10">
          <div className="bg-surface-container-lowest rounded-[20px] shadow-sm overflow-hidden border border-primary/5 p-8">
            <h2 className="font-['Syne'] text-xl font-bold text-primary mb-4">Welcome back, Admin</h2>
            <p className="text-on-surface-variant font-medium text-sm">
              Manage local businesses, verify accounts, and configure the platform using the Command Centre.
            </p>
          </div>
        </section>

        <footer className="mt-12 py-12 px-10 border-t border-primary/5 bg-surface-container-low">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-full">
            <div className="mb-4 md:mb-0">
              <span className="font-['Syne'] text-lg font-bold text-primary">LocalBoost</span>
              <p className="font-['DM_Sans'] text-xs text-on-surface-variant mt-1">© 2024 LocalBoost.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
