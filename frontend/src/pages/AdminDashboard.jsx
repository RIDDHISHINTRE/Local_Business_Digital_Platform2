// pages/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinesses = async () => {
    const res = await axios.get("http://localhost:5000/admin/businesses");
    setBusinesses(res.data);
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const handleApprove = async (id) => {
    await axios.put(`http://localhost:5000/admin/business/${id}/approve`);
    fetchBusinesses();
  };

  const handleReject = async (id) => {
    await axios.put(`http://localhost:5000/admin/business/${id}/reject`, {
      reason: "Invalid details",
    });
    fetchBusinesses();
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl mb-6">Admin Panel</h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {businesses.map((b) => (
            <tr key={b._id}>
              <td>{b.businessName}</td>
              <td>{b.city}</td>
              <td>{b.verificationStatus}</td>
              <td>
                <button onClick={() => handleApprove(b._id)}>Approve</button>
                <button onClick={() => handleReject(b._id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}