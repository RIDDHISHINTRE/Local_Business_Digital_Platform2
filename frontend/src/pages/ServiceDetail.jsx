import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { getServiceById, updateService } from "../api/serviceApi";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    const data = await getServiceById(id);
    setService(data);
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    await updateService(id, service, token);
    alert("Updated successfully");
    navigate("/admin/services");
  };

  if (!service) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-surface p-10">

      {/* HEADER */}
      <div className="mb-10 flex justify-between items-center">
        <div>
          <p className="text-xs text-[#1DB887] uppercase tracking-widest">
            Service Management
          </p>
          <h1 className="text-3xl font-bold">{service.title}</h1>
        </div>

        <button
          onClick={handleUpdate}
          className="bg-[#1DB887] text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="col-span-2 space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold mb-3">Basic Info</h2>

            <input
              className="w-full border p-3 mb-3"
              value={service.title}
              onChange={(e) =>
                setService({ ...service, title: e.target.value })
              }
            />

            <textarea
              className="w-full border p-3"
              value={service.shortDescription || ""}
              onChange={(e) =>
                setService({ ...service, shortDescription: e.target.value })
              }
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold mb-3">Description</h2>

            <textarea
              className="w-full border p-3"
              value={service.longDescription || ""}
              onChange={(e) =>
                setService({ ...service, longDescription: e.target.value })
              }
            />
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold mb-3">Pricing</h2>

            <input
              type="number"
              className="w-full border p-2 mb-2"
              value={service.price}
              onChange={(e) =>
                setService({ ...service, price: e.target.value })
              }
            />

            <select
              className="w-full border p-2"
              value={service.duration}
              onChange={(e) =>
                setService({ ...service, duration: e.target.value })
              }
            >
              <option>hourly</option>
              <option>daily</option>
              <option>weekly</option>
              <option>monthly</option>
              <option>one-time</option>
            </select>
          </div>

          {/* ✅ STATUS EDIT */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold mb-3">Status</h2>

            <div className="flex justify-between items-center">
              <span>{service.isActive ? "Active" : "Inactive"}</span>

              <input
                type="checkbox"
                checked={service.isActive}
                onChange={(e) =>
                  setService({ ...service, isActive: e.target.checked })
                }
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-sm">
            <p><strong>ID:</strong> {service._id}</p>
            <p>
              <strong>Status:</strong>{" "}
              {service.isActive ? "Active" : "Inactive"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}