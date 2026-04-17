import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  const tabs = ["overview", "verification", "services", "users", "settings"];

  return (
    <div className="bg-surface font-body text-on-background antialiased">
      
      {/* SIDEBAR */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-[#0F1A3D] text-white flex flex-col justify-between py-10 px-6">
        
        <div>
          {user && (
            <div className="mb-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1DB887] flex items-center justify-center font-bold text-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-md text-slate-300">Hello,</p>
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>
          )}

          <span className="font-black text-[#1DB887] text-2xl mb-6 block">
            LocalBoost
          </span>

          <nav className="space-y-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => navigate(`/admin/${t}`)}
                className={`w-full text-left px-4 py-3 rounded-lg ${
                  activeTab === t
                    ? "bg-[#1DB887] text-white"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}

            {/* 🚀 LINK TO COMMAND CENTRE */}
            <button
              onClick={() => navigate("/admin/commandcentre")}
              className="w-full text-left px-4 py-3 rounded-lg text-yellow-400 hover:bg-white/5"
            >
              COMMAND CENTRE 🚀
            </button>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="ml-72 p-10 space-y-10">

        {activeTab === "overview" && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold">Total Users</h2>
              <p className="text-2xl mt-2">120</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold">Services</h2>
              <p className="text-2xl mt-2">24</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold">Pending Verifications</h2>
              <p className="text-2xl mt-2">4</p>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Manage Services</h1>

              <button
                onClick={() => setShowForm(true)}
                className="bg-[#1DB887] text-white px-4 py-2 rounded"
              >
                + Add
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {services.map((s) => (
                    <tr key={s._id} className="border-b">
                      <td
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigate(`/service/${s._id}`)}
                      >
                        {s.title}
                      </td>
                      <td>{s.category}</td>
                      <td>₹{s.price}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            s.isActive
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {s.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td>
                        <button
                          onClick={() => handleDelete(s._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}