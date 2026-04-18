import React, { useState } from 'react';

const BUSINESSES = [
  { id: 'BIZ-9902', initials: 'SC', name: 'Sharma Chai Stall', category: 'Beverages', status: 'Active', growth: 78, location: 'Sector 12, Delhi NCR', plan: 'Premium', joined: 'Jan 2024' },
  { id: 'BIZ-4122', initials: 'KB', name: 'Kapoor Bakery', category: 'Food & Dining', status: 'Active', growth: 45, location: 'Andheri, Mumbai', plan: 'Standard', joined: 'Mar 2024' },
  { id: 'BIZ-8821', initials: 'LM', name: 'Luxe Motors', category: 'Automotive', status: 'Pending', growth: 12, location: 'Connaught Place, Delhi', plan: 'Enterprise', joined: 'Nov 2023' },
  { id: 'BIZ-1234', initials: 'GP', name: 'Green Pharmacy', category: 'Health', status: 'Active', growth: 92, location: 'Koramangala, Bangalore', plan: 'Standard', joined: 'Aug 2023' },
];

const SELECTED_DETAIL = BUSINESSES[0];

const statusColor = (status) => {
  if (status === 'Active') return 'bg-[#1DB887]/10 text-[#1DB887]';
  if (status === 'Pending') return 'bg-amber-100 text-amber-700';
  return 'bg-red-100 text-red-600';
};

export default function Businesses() {
  const [selected, setSelected] = useState(BUSINESSES[0]);
  const [features, setFeatures] = useState({ payments: true, inventory: true, delivery: false, loyalty: true });
  const [advanced, setAdvanced] = useState({ analytics: true, chat: false });

  return (
    <div className="p-8 min-h-full">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          { label: 'Total Businesses', value: '1,402', delta: '+12%', up: true, icon: 'store', color: 'text-blue-600 bg-blue-50' },
          { label: 'Total Revenue', value: '$1.2M', delta: '+8.4%', up: true, icon: 'payments', color: 'text-[#1DB887] bg-[#1DB887]/10' },
          { label: 'Active Shops', value: '1,108', delta: 'Stable', up: null, icon: 'storefront', color: 'text-orange-600 bg-orange-50' },
          { label: 'Avg. Retention', value: '94.2%', delta: '-0.5%', up: false, icon: 'analytics', color: 'text-purple-600 bg-purple-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-container-lowest rounded-[20px] p-6 shadow-[0_12px_40px_rgba(27,42,94,0.08)] border border-primary/5 flex justify-between items-start">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-primary/40 mb-2">{stat.label}</p>
              <h3 className="font-['Syne'] text-2xl font-black text-primary">{stat.value}</h3>
              <p className={`text-xs font-bold mt-2 flex items-center gap-1 ${stat.up === true ? 'text-[#1DB887]' : stat.up === false ? 'text-red-500' : 'text-primary/40'}`}>
                {stat.up === true && <span className="material-symbols-outlined text-[14px]">trending_up</span>}
                {stat.up === false && <span className="material-symbols-outlined text-[14px]">trending_down</span>}
                {stat.delta}
              </p>
            </div>
            <div className={`p-2.5 rounded-xl ${stat.color}`}>
              <span className="material-symbols-outlined text-[22px]">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left: Business Table */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-[20px] shadow-[0_12px_40px_rgba(27,42,94,0.08)] border border-primary/5 flex flex-col overflow-hidden">
          <div className="px-8 py-5 border-b border-primary/5 flex justify-between items-center">
            <h2 className="font-['Syne'] font-black text-lg text-primary">Registered Businesses</h2>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 text-xs font-bold border border-primary/10 rounded-xl hover:bg-surface-container text-primary/60 transition-colors">Filter</button>
              <button className="px-4 py-1.5 text-xs font-bold border border-primary/10 rounded-xl hover:bg-surface-container text-primary/60 transition-colors">Export</button>
            </div>
          </div>
          <div className="overflow-y-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container sticky top-0 z-10">
                <tr className="text-[11px] font-black text-primary/50 uppercase tracking-widest">
                  <th className="px-8 py-5">Business Name</th>
                  <th className="px-6 py-5">Category</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Growth</th>
                </tr>
              </thead>
              <tbody>
                {BUSINESSES.map((biz) => (
                  <tr
                    key={biz.id}
                    onClick={() => setSelected(biz)}
                    className={`cursor-pointer transition-all duration-150 ${selected.id === biz.id ? 'bg-[#1DB887]/5 border-l-[3px] border-[#1DB887]' : 'hover:bg-surface-container/50 border-l-[3px] border-transparent'}`}
                  >
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs text-primary/70 bg-surface-container`}>{biz.initials}</div>
                        <div>
                          <p className="text-sm font-bold text-primary">{biz.name}</p>
                          <p className="text-[10px] text-primary/40 font-medium">ID: {biz.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-primary/60">{biz.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${statusColor(biz.status)}`}>{biz.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="bg-[#1DB887] h-full rounded-full" style={{ width: `${biz.growth}%` }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Detail Panel */}
        <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest rounded-[20px] shadow-[0_12px_40px_rgba(27,42,94,0.08)] border border-primary/5 flex flex-col overflow-hidden">
          <div className="p-7 bg-[#0F1A3D] rounded-t-[20px]">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#1DB887]/20 flex items-center justify-center font-['Syne'] text-2xl font-black text-[#1DB887]">{selected.initials}</div>
                <div>
                  <h2 className="font-['Syne'] text-xl font-black text-white">{selected.name}</h2>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="material-symbols-outlined text-[14px] text-[#1DB887]">location_on</span>
                    <p className="text-xs text-white/50">{selected.location}</p>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${selected.status === 'Active' ? 'bg-[#1DB887]/20 text-[#1DB887]' : 'bg-amber-500/20 text-amber-400'}`}>{selected.status}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-black mb-1">Plan</p>
                <p className="text-sm font-bold text-white">{selected.plan}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-black mb-1">Growth</p>
                <p className="text-sm font-bold text-[#1DB887]">{selected.growth}%</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-black mb-1">Joined</p>
                <p className="text-sm font-bold text-white">{selected.joined}</p>
              </div>
            </div>
          </div>

          <div className="p-7 flex-1 overflow-y-auto space-y-7">
            {/* Service Access */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-primary/40 mb-4">Service Access Permissions</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'payments', label: 'Digital Payments' },
                  { key: 'inventory', label: 'Inventory Sync' },
                  { key: 'delivery', label: 'Delivery Module' },
                  { key: 'loyalty', label: 'Loyalty Program' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 p-3 border border-primary/5 rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
                    <input
                      type="checkbox"
                      checked={features[key]}
                      className="rounded border-primary/20 text-[#1DB887] focus:ring-[#1DB887]"
                      onChange={() => setFeatures((f) => ({ ...f, [key]: !f[key] }))}
                    />
                    <span className="text-xs font-bold text-primary/70">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-primary/40 mb-4">Advanced Features</h3>
              <div className="space-y-4">
                {[
                  { key: 'analytics', icon: 'monitoring', label: 'Advanced Analytics', desc: 'Enable real-time sales heatmaps' },
                  { key: 'chat', icon: 'chat', label: 'Customer Chat Hub', desc: 'Allow direct customer interaction' },
                ].map(({ key, icon, label, desc }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary/30 text-[20px]">{icon}</span>
                      <div>
                        <p className="text-xs font-bold text-primary">{label}</p>
                        <p className="text-[10px] text-primary/40">{desc}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAdvanced((a) => ({ ...a, [key]: !a[key] }))}
                      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ${advanced[key] ? 'bg-[#1DB887]' : 'bg-surface-container'}`}
                    >
                      <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${advanced[key] ? 'translate-x-5' : 'translate-x-0'}`}></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Memo */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-primary/40 mb-3">Internal Memo / Notes</h3>
              <textarea
                className="w-full h-24 p-4 bg-surface-container border border-primary/5 rounded-xl text-xs text-primary/70 focus:ring-2 focus:ring-[#1DB887]/30 focus:outline-none resize-none"
                placeholder="Type internal update notes here..."
              ></textarea>
              <div className="mt-4 flex justify-end gap-3">
                <button className="px-4 py-2 text-xs font-bold text-primary/40 hover:bg-surface-container rounded-xl transition-colors">Discard</button>
                <button className="px-6 py-2 bg-[#0F1A3D] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity">Apply Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
