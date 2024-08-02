// src/components/admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link to="/admin-dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link to="/admin-dashboard/manage-users" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin-dashboard/manage-content" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Manage Content
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Admin</h2>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </header>

        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/manage-users" element={<UserManagement />} />
          <Route path="/manage-content" element={<ContentManagement />} />
        </Routes>
      </main>
    </div>
  );
};

const DashboardHome = () => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Dashboard Overview</h3>
    {/* Add dashboard statistics or quick actions here */}
  </div>
);

export default AdminDashboard;