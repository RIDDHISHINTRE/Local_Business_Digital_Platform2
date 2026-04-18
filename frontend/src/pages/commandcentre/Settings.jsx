import React, { useState } from 'react';

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${checked ? 'bg-[#1DB887]' : 'bg-surface-container-high'}`}
    >
      <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`}></span>
    </button>
  );
}

function SectionCard({ icon, iconBg, title, children, action }) {
  return (
    <div className="bg-surface-container-lowest rounded-[20px] shadow-[0_12px_40px_rgba(27,42,94,0.08)] border border-primary/5 overflow-hidden">
      <div className="px-8 py-5 border-b border-primary/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <h3 className="font-['Syne'] text-lg font-bold text-primary">{title}</h3>
        </div>
        {action}
      </div>
      <div className="p-8">{children}</div>
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });
  const [security, setSecurity] = useState({ twoFactor: true });

  return (
    <div className="p-8 min-h-full">
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* General Settings — wide */}
          <div className="md:col-span-8">
            <SectionCard
              icon="settings_input_component"
              iconBg="bg-blue-50 text-blue-600"
              title="General Settings"
              action={
                <button className="px-5 py-2 bg-[#1DB887] hover:bg-[#18a67a] text-white text-sm font-bold rounded-xl transition-all active:scale-95 shadow-md shadow-[#1DB887]/20">
                  Save Changes
                </button>
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-primary/50 uppercase tracking-widest">Platform Name</label>
                  <input
                    className="w-full bg-surface-container border border-primary/5 rounded-xl py-3 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none transition-shadow"
                    type="text"
                    defaultValue="LocalBoost"
                  />
                  <p className="text-[11px] text-primary/40">The public name of your application as seen by users.</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-primary/50 uppercase tracking-widest">Support Email</label>
                  <input
                    className="w-full bg-surface-container border border-primary/5 rounded-xl py-3 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none transition-shadow"
                    type="email"
                    defaultValue="support@localboost.io"
                  />
                </div>
              </div>
              <div className="pt-6 border-t border-primary/5">
                <label className="block text-xs font-black text-primary/50 uppercase tracking-widest mb-4">Brand Logo</label>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-surface-container rounded-[18px] flex items-center justify-center border-2 border-dashed border-primary/10 overflow-hidden relative group cursor-pointer hover:border-[#1DB887]/40 transition-colors">
                    <div className="w-full h-full flex items-center justify-center bg-[#0F1A3D] rounded-[16px]">
                      <span className="font-['Syne'] font-black text-[#1DB887] text-lg">LB</span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-[16px]">
                      <span className="material-symbols-outlined text-white text-[20px]">upload</span>
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-2 border border-primary/10 rounded-xl text-sm font-bold text-primary/70 hover:bg-surface-container transition-colors mb-2">Upload New Logo</button>
                    <p className="text-[11px] text-primary/40">PNG, JPG or SVG. Recommended 400×400px. Max 2MB.</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Notifications */}
          <div className="md:col-span-4">
            <SectionCard
              icon="notifications_active"
              iconBg="bg-orange-50 text-orange-500"
              title="Notifications"
            >
              <div className="space-y-6">
                {[
                  { key: 'email', label: 'Email Alerts', desc: 'Critical system events' },
                  { key: 'sms', label: 'SMS Alerts', desc: 'Security breach attempts' },
                  { key: 'push', label: 'Browser Push', desc: 'Weekly analytics reports' },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-primary">{label}</p>
                      <p className="text-[11px] text-primary/40">{desc}</p>
                    </div>
                    <Toggle
                      checked={notifications[key]}
                      onChange={() => setNotifications((n) => ({ ...n, [key]: !n[key] }))}
                    />
                  </div>
                ))}
                <div className="pt-4 border-t border-primary/5">
                  <p className="text-[11px] text-primary/30 italic">Changes apply to all administrators by default.</p>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Admin Controls */}
          <div className="md:col-span-7">
            <SectionCard
              icon="group_add"
              iconBg="bg-purple-50 text-purple-600"
              title="Admin Controls"
            >
              <p className="text-sm font-bold text-primary mb-5">Create New Administrator</p>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">Full Name</label>
                  <input className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">Email Address</label>
                  <input className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="john@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black text-primary/40 uppercase tracking-widest">Assigned Role</label>
                  <select className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm text-primary focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none">
                    <option>Content Admin</option>
                    <option>Super Admin</option>
                    <option>Billing Admin</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-[#0F1A3D] text-white py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity" type="submit">Create User</button>
                </div>
              </form>
              <div>
                <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">Active Administrators</p>
                {[
                  { initials: 'JD', name: 'Jane Doe', role: 'Super Admin', color: 'bg-blue-100 text-blue-600' },
                  { initials: 'RS', name: 'Riddhi S.', role: 'Content Admin', color: 'bg-[#1DB887]/10 text-[#1DB887]' },
                ].map((admin) => (
                  <div key={admin.name} className="flex items-center justify-between p-4 bg-surface-container rounded-2xl mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs ${admin.color}`}>{admin.initials}</div>
                      <div>
                        <p className="text-sm font-bold text-primary">{admin.name}</p>
                        <p className="text-[11px] text-primary/40">{admin.role}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary/20 hover:text-primary/60 cursor-pointer transition-colors">more_vert</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Security */}
          <div className="md:col-span-5">
            <SectionCard
              icon="security"
              iconBg="bg-[#1DB887]/10 text-[#1DB887]"
              title="Security"
            >
              <div className="p-5 bg-surface-container rounded-2xl border border-primary/5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#1DB887] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                    <p className="text-sm font-bold text-primary">Two-Factor Auth</p>
                  </div>
                  <Toggle
                    checked={security.twoFactor}
                    onChange={() => setSecurity((s) => ({ ...s, twoFactor: !s.twoFactor }))}
                  />
                </div>
                <p className="text-[11px] text-primary/40 leading-relaxed">Add an extra layer of security to your admin account by requiring more than just a password.</p>
              </div>
              <div className="space-y-4 mb-6">
                <p className="text-sm font-bold text-primary">Change Password</p>
                <input className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="Current password" type="password" />
                <input className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="New password" type="password" />
                <input className="w-full bg-surface-container border border-primary/5 rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none" placeholder="Confirm new password" type="password" />
                <button className="w-full bg-[#1DB887]/10 text-[#1DB887] py-2.5 rounded-xl text-sm font-bold border border-[#1DB887]/20 hover:bg-[#1DB887]/20 transition-colors">Update Security</button>
              </div>
              <div className="pt-5 border-t border-primary/5 flex justify-between items-center">
                <p className="text-[11px] text-primary/30">Last Login: Oct 24, 2023 • 14:22</p>
                <span className="material-symbols-outlined text-[16px] text-primary/20 hover:text-primary/50 cursor-pointer transition-colors">info</span>
              </div>
            </SectionCard>
          </div>

        </div>
      </div>
    </div>
  );
}
