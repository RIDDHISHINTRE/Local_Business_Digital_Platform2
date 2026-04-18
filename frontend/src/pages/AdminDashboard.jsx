import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  getServices,
  createService,
  deleteService,
} from "../api/serviceApi";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { tab } = useParams();

  const activeTab = tab || "overview";

  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    duration: "monthly",
    features: "",
    category: "",
    isActive: true,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    if (activeTab === "services") fetchServices();
  }, [activeTab]);

  const fetchServices = async () => {
    const data = await getServices();
    setServices(data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    await deleteService(id, token);
    fetchServices();
  };

  const handleCreate = async () => {
    const token = localStorage.getItem("token");

    await createService(
      {
        ...form,
        features: form.features.split(","),
      },
      token
    );

    setShowForm(false);
    fetchServices();
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "dashboard" },
    { id: "verification", label: "Verify Businesses", icon: "verified_user" },
    { id: "services", label: "Manage Services", icon: "list_alt" },
    { id: "users", label: "Users", icon: "group" },
    { id: "settings", label: "Settings", icon: "settings_accessibility" },
  ];

  const currentTabLabel = tabs.find(t => t.id === activeTab)?.label || "Dashboard";

  return (
    <div className="bg-surface font-body text-on-background antialiased min-h-screen">
      {/* SideNavBar (Admin Control) */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-[#0F1A3D] text-white shadow-2xl flex flex-col py-10 px-6 z-50">
        <div className="mb-12">
          <span className="font-['Syne'] font-black text-[#1DB887] text-2xl tracking-tighter">LocalBoost</span>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border border-white/10 overflow-hidden">
                 {user?.name ? (
                     <div className="font-bold text-lg text-white">{user.name.charAt(0).toUpperCase()}</div>
                 ) : (
                    <img 
                      alt="Admin Avatar" 
                      className="rounded-full w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1reNdQIg-JytzY4WUmSnOo7iGAjol5cODZ9Z_C5bGeIWCuB5C4m7Ptsr2taLwmK8go272DO0HvnZKRV9ZUB94CGrcwIJWnxTKeJsbXSwRJFAD0aZLmszU8OMpFUU_V5wYMEp0PZrriNCT46MVP38eMBthg4DX_8QMPDeW7LR4MtVIIa1WGxZDfZIY9IqKoOkop_xLb-OkL2t3BUNy09FLvDgpiffDMRpwJ9f_lGrIL6pbxzGcSUldA6CLANQ2C5564Q9ZNSK6Ak0"
                    />
                 )}
            </div>
            <div>
              <p className="font-['Syne'] text-sm font-bold tracking-widest uppercase">{user?.name || "Admin Control"}</p>
              <p className="text-xs text-slate-400">System Oversight</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => navigate(`/admin/${t.id}`)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === t.id
                  ? "text-white bg-[#1DB887]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined" data-icon={t.icon}>{t.icon}</span>
              <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">{t.label}</span>
            </button>
          ))}

          {/* COMMAND CENTRE LINK */}
          <button
              onClick={() => navigate("/admin/commandcentre")}
              className="mt-4 w-full flex items-center gap-3 px-4 py-3 rounded-xl text-yellow-500 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
            >
            <span className="material-symbols-outlined">rocket_launch</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Command Centre</span>
          </button>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <button onClick={handleLogout} className="flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 w-full hover:bg-white/5 transition-all duration-300">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="font-['DM_Sans'] text-sm uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 min-h-screen flex flex-col">
        {/* Top Header Panel */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 px-10 py-6 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-[11px] font-bold text-[#1DB887] uppercase tracking-[0.2em] mb-1">Administrative Terminal</p>
            <h1 className="font-['Syne'] text-3xl font-bold text-primary tracking-tight">{currentTabLabel}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-lg gap-2 border border-outline/5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-sm font-bold text-primary">4 Pending</span>
            </div>
            <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-lg gap-2 border border-outline/5">
              <span className="w-2 h-2 rounded-full bg-[#1DB887]"></span>
              <span className="text-sm font-bold text-primary">12 Approved</span>
            </div>
            <button className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition-all">
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
          </div>
        </header>

        {/* Content Canvas */}
        <section className="p-10 space-y-10 flex-1">
          {activeTab === "overview" && (
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-outline/10 text-center">
                <h2 className="font-bold text-primary uppercase text-sm tracking-widest">Total Users</h2>
                <p className="text-4xl mt-4 text-[#1DB887] font-black font-['Syne']">120</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-outline/10 text-center">
                <h2 className="font-bold text-primary uppercase text-sm tracking-widest">Services</h2>
                <p className="text-4xl mt-4 text-[#1DB887] font-black font-['Syne']">24</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-outline/10 text-center">
                <h2 className="font-bold text-primary uppercase text-sm tracking-widest">Pending Verifications</h2>
                <p className="text-4xl mt-4 text-amber-500 font-black font-['Syne']">4</p>
              </div>
            </div>
          )}

          {activeTab === "services" && (
             <div className="bg-surface-container-lowest rounded-[20px] shadow-[0_12px_40px_rgba(27,42,94,0.10)] overflow-hidden border border-primary/5">
               <div className="p-8 border-b border-surface-container flex justify-between items-center">
                 <h2 className="font-['Syne'] text-xl font-bold text-primary">Service Catalogue</h2>
                 <button
                   onClick={() => navigate('/admin/service/new')}
                   className="bg-[#1DB887] text-white px-6 py-2 rounded-lg text-sm font-bold shadow hover:scale-105 active:scale-95 transition-all"
                 >
                   + Add Service
                 </button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-surface-container-low">
                       <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Title</th>
                       <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Category</th>
                       <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Price</th>
                       <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Status</th>
                       <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest text-right">Actions</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-surface-container-low">
                     {services.map((s) => (
                       <tr key={s._id} className="hover:bg-surface transition-colors">
                         <td
                           className="px-8 py-6 font-bold text-primary cursor-pointer hover:text-[#1DB887] transition-colors"
                           onClick={() => navigate(`/admin/service/edit/${s._id}`)}
                         >
                           {s.title}
                         </td>
                         <td className="px-8 py-6 text-on-surface-variant font-medium">{s.category}</td>
                         <td className="px-8 py-6 text-primary font-bold">₹{s.price}</td>
                         <td className="px-8 py-6">
                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${s.isActive ? "bg-secondary-container text-secondary" : "bg-error-container text-error"}`}>
                             {s.isActive ? "Active" : "Inactive"}
                           </span>
                         </td>
                         <td className="px-8 py-6 text-right">
                           <div className="flex justify-end gap-2">
                             <button
                               onClick={() => navigate(`/admin/service/edit/${s._id}`)}
                               className="bg-primary-container text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-primary/10 transition-all"
                             >
                               Edit
                             </button>
                             <button
                               onClick={() => handleDelete(s._id)}
                               className="bg-white border border-error/20 text-error px-4 py-2 rounded-lg text-xs font-bold hover:bg-error-container/20 transition-all"
                             >
                               Delete
                             </button>
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
          )}

          {activeTab === "verification" && (
            <>
              {/* Table Container (Bento Style) */}
              <div className="bg-surface-container-lowest rounded-[20px] shadow-[0_12px_40px_rgba(27,42,94,0.10)] overflow-hidden border border-primary/5">
                <div className="p-8 border-b border-surface-container flex justify-between items-center">
                  <h2 className="font-['Syne'] text-xl font-bold text-primary">Verification Requests</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low">
                        <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Business Name</th>
                        <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Owner</th>
                        <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Service Selected</th>
                        <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest">Status</th>
                        <th className="px-8 py-5 text-[11px] font-black text-primary/50 uppercase tracking-widest text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low">
                      {/* Pending Row 1 */}
                      <tr className="hover:bg-surface transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                              <span className="material-symbols-outlined text-primary" data-icon="storefront">storefront</span>
                            </div>
                            <span className="font-bold text-primary">Green Leaf Cafe</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-on-surface-variant font-medium">Elena Rodriguez</td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">Premium Listing</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-wider">Pending Review</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="bg-[#1DB887] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-[#1DB887]/20 hover:scale-105 active:scale-95 transition-all">Approve</button>
                            <button className="bg-white border border-error/20 text-error px-4 py-2 rounded-lg text-xs font-bold hover:bg-error-container/20 transition-all">Reject</button>
                          </div>
                        </td>
                      </tr>
                      {/* Pending Row 2 */}
                      <tr className="hover:bg-surface transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                              <span className="material-symbols-outlined text-primary" data-icon="construction">construction</span>
                            </div>
                            <span className="font-bold text-primary">City Tech Solutions</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-on-surface-variant font-medium">Marcus Chen</td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">Standard Sync</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-wider">Pending Review</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="bg-[#1DB887] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-[#1DB887]/20 hover:scale-105 active:scale-95 transition-all">Approve</button>
                            <button className="bg-white border border-error/20 text-error px-4 py-2 rounded-lg text-xs font-bold hover:bg-error-container/20 transition-all">Reject</button>
                          </div>
                        </td>
                      </tr>
                      {/* Approved Row 1 */}
                      <tr className="hover:bg-surface transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                              <span className="material-symbols-outlined text-secondary" data-icon="pets">pets</span>
                            </div>
                            <span className="font-bold text-primary">Urban Paws Grooming</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-on-surface-variant font-medium">Sarah Jenkins</td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">Growth Bundle</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-secondary text-[10px] font-black uppercase tracking-wider">Approved</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-primary-container transition-all">View Profile</button>
                        </td>
                      </tr>
                      {/* Approved Row 2 */}
                      <tr className="hover:bg-surface transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                              <span className="material-symbols-outlined text-secondary" data-icon="restaurant">restaurant</span>
                            </div>
                            <span className="font-bold text-primary">The Bistro North</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-on-surface-variant font-medium">James Miller</td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold">Premium Listing</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-secondary text-[10px] font-black uppercase tracking-wider">Approved</span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="bg-primary text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-primary-container transition-all">View Profile</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Footer / Pagination */}
                <div className="p-6 bg-surface-container-low flex justify-between items-center px-8 border-t border-surface-container">
                  <span className="text-xs text-on-surface-variant font-medium tracking-tight">Showing 4 of 16 verification tasks</span>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-primary hover:bg-surface-container-high border border-outline/10"><span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span></button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">1</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-primary text-xs font-bold border border-outline/10">2</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-white text-primary hover:bg-surface-container-high border border-outline/10"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span></button>
                  </div>
                </div>
              </div>

              {/* Asymmetric Support Grid */}
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 bg-primary p-10 rounded-[20px] relative overflow-hidden text-white flex items-center shadow-[0_12px_40px_rgba(27,42,94,0.10)]">
                  <div className="relative z-10 space-y-4 max-w-lg">
                    <p className="text-[11px] font-black text-[#1DB887] uppercase tracking-[0.3em]">Quality Insight</p>
                    <h3 className="font-['Syne'] text-3xl font-bold leading-tight">Verification speed is up by 24% this week.</h3>
                    <p className="text-on-primary-container/80 text-sm font-medium">Your response time is critical for local merchant onboarding. Keep up the high efficiency to maintain platform trust.</p>
                    <button className="bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-secondary/20 active:scale-95 transition-transform">Run Analytics Report</button>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#1DB887]/10 rounded-full blur-3xl"></div>
                </div>
                <div className="bg-surface-container-high p-8 rounded-[20px] border border-primary/5 flex flex-col justify-between shadow-[0_12px_40px_rgba(27,42,94,0.10)]">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-amber-500" data-icon="priority_high">priority_high</span>
                      <span className="text-xs font-black uppercase tracking-widest text-primary/60">Alert</span>
                    </div>
                    <h4 className="font-['Syne'] text-lg font-bold text-primary mb-2">Flagged Entities</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">2 businesses have been flagged by the automated crawler for inconsistent license numbers.</p>
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg text-xs font-bold border border-outline/5">
                      <span>Silo Designs</span>
                      <span className="text-error">License Expired</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg text-xs font-bold border border-outline/5">
                      <span>Peak Builders</span>
                      <span className="text-error">Duplicate EIN</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </section>

        {/* Footer Shell */}
        <footer className="mt-auto py-12 px-10 border-t border-primary/5 bg-surface-container-low">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-full">
            <div className="mb-4 md:mb-0">
              <span className="font-['Syne'] text-lg font-bold text-primary">LocalBoost</span>
              <p className="font-['DM_Sans'] text-xs text-on-surface-variant mt-1">© 2024 LocalBoost. System Administration Dashboard.</p>
            </div>
            <div className="flex gap-8">
              <a className="font-['DM_Sans'] text-xs text-on-surface-variant hover:text-[#1DB887] transition-colors" href="#!">Privacy Policy</a>
              <a className="font-['DM_Sans'] text-xs text-on-surface-variant hover:text-[#1DB887] transition-colors" href="#!">Terms of Service</a>
              <a className="font-['DM_Sans'] text-xs text-on-surface-variant hover:text-[#1DB887] transition-colors" href="#!">System Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}