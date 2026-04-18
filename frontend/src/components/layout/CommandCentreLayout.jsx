import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function CommandCentreLayout() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-background antialiased">
      <Sidebar />
      <div className="ml-72 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
